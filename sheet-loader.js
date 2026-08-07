/*
  Raven's Tarot Reader - Google Sheet data loader

  Primary data source:
  Raven's Tarot Reference Sheet
  https://docs.google.com/spreadsheets/d/1LVeMTExpQG5HGH1eSiQnL8IYHUIOqPCBE1bp-61JO_g/

  cards.js is loaded first and remains the local fallback. This loader overlays
  spreadsheet values onto that fallback when Google Sheets can be reached.
*/

(function () {
  "use strict";

  const SPREADSHEET_ID = "1LVeMTExpQG5HGH1eSiQnL8IYHUIOqPCBE1bp-61JO_g";
  const LOAD_TIMEOUT_MS = 6500;

  window.tarotClarifierPairs = window.tarotClarifierPairs || {};
  window.tarotCombinationPairs = window.tarotCombinationPairs || {};
  window.tarotModifiers = window.tarotModifiers || [];
  window.tarotDataSource = "cards.js fallback";

  function normalizeHeader(value) {
    return String(value || "").trim();
  }

  function cellValue(cell) {
    if (!cell) return "";
    if (cell.v === null || cell.v === undefined) return "";
    return String(cell.v).trim();
  }

  function rowToObject(headers, cells) {
    const result = {};

    headers.forEach(function (header, index) {
      if (!header) return;
      result[header] = cellValue(cells[index]);
    });

    return result;
  }

  function splitList(value) {
    return String(value || "")
      .split(/[,;]\s*/)
      .map(function (item) { return item.trim(); })
      .filter(Boolean);
  }

  function cleanAstrology(row) {
    const values = [];
    const sign = row["Astrology / Sign"];
    const planet = row["Planet"];

    if (sign && !/planetary attribution/i.test(sign)) values.push(sign);
    if (planet) values.push(planet);

    return Array.from(new Set(values));
  }

  function loadGvizSheet(sheetName) {
    return new Promise(function (resolve, reject) {
      const callbackName = "__ravenSheetCallback_" + Math.random().toString(36).slice(2);
      const script = document.createElement("script");
      let settled = false;

      const cleanup = function () {
        if (script.parentNode) script.parentNode.removeChild(script);
        try { delete window[callbackName]; } catch (error) { window[callbackName] = undefined; }
      };

      const timeout = setTimeout(function () {
        if (settled) return;
        settled = true;
        cleanup();
        reject(new Error("Timed out loading " + sheetName));
      }, LOAD_TIMEOUT_MS);

      window[callbackName] = function (response) {
        if (settled) return;
        settled = true;
        clearTimeout(timeout);
        cleanup();

        if (!response || response.status === "error" || !response.table) {
          reject(new Error("Google Sheets returned an error for " + sheetName));
          return;
        }

        const headers = response.table.cols.map(function (column) {
          return normalizeHeader(column.label || column.id || "");
        });

        const rows = response.table.rows.map(function (row) {
          return rowToObject(headers, row.c || []);
        });

        resolve(rows);
      };

      script.onerror = function () {
        if (settled) return;
        settled = true;
        clearTimeout(timeout);
        cleanup();
        reject(new Error("Could not load " + sheetName));
      };

      const tqx = "out:json;responseHandler:" + callbackName;
      script.src =
        "https://docs.google.com/spreadsheets/d/" +
        encodeURIComponent(SPREADSHEET_ID) +
        "/gviz/tq?sheet=" + encodeURIComponent(sheetName) +
        "&headers=1&tqx=" + encodeURIComponent(tqx) +
        "&t=" + Date.now();

      document.head.appendChild(script);
    });
  }

  function overlayCards(rows) {
    let updated = 0;

    rows.forEach(function (row) {
      const cardName = row["Card"];
      if (!cardName) return;

      const fallback = tarotCards[cardName] || {};
      const uprightKeywords = splitList(row["Keywords"]);
      const reversedKeywords = splitList(row["Reversed Keywords"]);
      const astrology = cleanAstrology(row);

      tarotCards[cardName] = {
        ...fallback,
        suit: row["Arcana / Suit"] || fallback.suit || "",
        rank: row["Rank / Number"] || fallback.rank || "",
        keywords: uprightKeywords.length ? uprightKeywords : (fallback.keywords || []),
        upright: uprightKeywords.length ? uprightKeywords : (fallback.upright || []),
        reversed: reversedKeywords.length ? reversedKeywords : (fallback.reversed || []),
        description: row["Simple meaning"] || fallback.description || "",
        uprightMeaning: row["Simple meaning"] || fallback.uprightMeaning || "",
        reversedMeaning: row["Reversed meaning"] || fallback.reversedMeaning || "",
        imagery: row["RWS imagery note"] || fallback.imagery || "",
        astrology: astrology.length ? astrology : (fallback.astrology || []),
        element: row["Element"] || fallback.element || "",
        clarifierQuestion: row["Question Starters"] || row["Possible clarifier question"] || fallback.clarifierQuestion || "",
        notes: row["Notes"] || fallback.notes || ""
      };

      updated += 1;
    });

    return updated;
  }

  function loadClarifiers(rows) {
    const pairs = {};

    rows.forEach(function (row) {
      const clarifier = row["Clarifier"];
      const clarifiedCard = row["Clarified Card"];
      if (!clarifier || !clarifiedCard) return;

      const key = clarifier + "|||" + clarifiedCard;
      pairs[key] = {
        upright: row["Upright Clarifier Reading"] || "",
        reversed: row["Reversed Clarifier Reading"] || "",
        question: row["Follow-up Question"] || ""
      };
    });

    window.tarotClarifierPairs = pairs;
    return Object.keys(pairs).length;
  }

  function loadCombinations(rows) {
    const pairs = {};

    rows.forEach(function (row) {
      const card1 = row["Card 1"];
      const card2 = row["Card 2"];
      if (!card1 || !card2) return;

      const data = {
        card1: card1,
        card2: card2,
        category: row["Category"] || "",
        meaning: row["Simple combo reading"] || "",
        strength: row["Strength / Confidence"] || "",
        question: row["Possible question"] || "",
        orientationNotes: row["Orientation Notes"] || "",
        notes: row["Source / Notes"] || ""
      };

      pairs[card1 + "|||" + card2] = data;
      pairs[card2 + "|||" + card1] = data;
    });

    window.tarotCombinationPairs = pairs;
    return Object.keys(pairs).length / 2;
  }

  function loadModifiers(rows) {
    window.tarotModifiers = rows
      .filter(function (row) { return row["Modifier"]; })
      .map(function (row) {
        return {
          modifier: row["Modifier"],
          meaning: row["How it changes the reading"] || "",
          question: row["Possible question"] || ""
        };
      });

    return window.tarotModifiers.length;
  }

  async function loadTarotData() {
    try {
      const results = await Promise.all([
        loadGvizSheet("Cards"),
        loadGvizSheet("Clarifiers"),
        loadGvizSheet("Combinations"),
        loadGvizSheet("Modifiers")
      ]);

      const cardCount = overlayCards(results[0]);
      const clarifierCount = loadClarifiers(results[1]);
      const comboCount = loadCombinations(results[2]);
      const modifierCount = loadModifiers(results[3]);

      if (!cardCount) throw new Error("No card rows were returned from Google Sheets");

      window.tarotDataSource = "Google Sheet";
      console.info(
        "Raven tarot data loaded from Google Sheets:",
        cardCount + " cards,",
        clarifierCount + " clarifier pairs,",
        comboCount + " combinations,",
        modifierCount + " modifiers"
      );

      return true;
    } catch (error) {
      window.tarotDataSource = "cards.js fallback";
      console.warn(
        "Google Sheet data unavailable. Raven's Tarot Reader is using cards.js instead.",
        error
      );
      return false;
    }
  }

  window.tarotDataReady = loadTarotData();
})();
