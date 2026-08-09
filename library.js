"use strict";

function libraryEscape(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function libraryNaturalList(items) {
  return (items || []).filter(Boolean).join(", ");
}

function getLibrarySearchText(name, card) {
  const fields = [
    name,
    card.suit,
    card.rank,
    card.element,
    libraryNaturalList(card.astrology),
    libraryNaturalList(card.keywords),
    libraryNaturalList(card.upright),
    libraryNaturalList(card.reversed),
    card.description,
    card.uprightMeaning,
    card.reversedMeaning,
    card.imagery,
    card.clarifierQuestion,
    card.notes
  ];

  return fields.join(" ").toLowerCase();
}

function getLibraryCards() {
  return Object.entries(window.tarotCards || tarotCards || {}).map(function ([name, data]) {
    return { name: name, data: data };
  });
}

function cardPreviewHtml(name, card) {
  const keywords = (card.keywords || card.upright || []).slice(0, 5);
  const image = card.image
    ? `<img src="${libraryEscape(card.image)}" alt="${libraryEscape(name)} tarot card" loading="lazy">`
    : `<div class="library-image-placeholder">No image</div>`;

  return `
    <article class="library-card" data-card-name="${libraryEscape(name)}">
      <button class="library-card-open" type="button" data-open-card="${libraryEscape(name)}" aria-label="Open ${libraryEscape(name)}">
        <div class="library-card-image-wrap">${image}</div>
        <div class="library-card-copy">
          <p class="library-card-suit">${libraryEscape(card.suit || "")}${card.element ? ` · ${libraryEscape(card.element)}` : ""}</p>
          <h2>${libraryEscape(name)}</h2>
          <p class="library-card-keywords">${libraryEscape(keywords.join(" · "))}</p>
          <p class="library-card-summary">${libraryEscape(card.description || card.uprightMeaning || "")}</p>
          <span class="library-card-view">View full card →</span>
        </div>
      </button>
    </article>
  `;
}

function renderLibrary() {
  const grid = document.getElementById("cardLibraryGrid");
  const count = document.getElementById("libraryCount");
  const search = document.getElementById("librarySearch").value.trim().toLowerCase();
  const suit = document.getElementById("librarySuit").value;
  const element = document.getElementById("libraryElement").value;

  const cards = getLibraryCards().filter(function (entry) {
    const card = entry.data;
    const matchesSearch = !search || getLibrarySearchText(entry.name, card).includes(search);
    const matchesSuit = suit === "all" || card.suit === suit;
    const matchesElement = element === "all" || card.element === element;
    return matchesSearch && matchesSuit && matchesElement;
  });

  count.textContent = `${cards.length} card${cards.length === 1 ? "" : "s"}`;

  if (!cards.length) {
    grid.innerHTML = `<div class="library-empty"><h2>No cards found</h2><p>Try a broader search or clear the filters.</p></div>`;
    return;
  }

  grid.innerHTML = cards.map(function (entry) {
    return cardPreviewHtml(entry.name, entry.data);
  }).join("");
}

function meaningBlock(label, content) {
  if (!content) return "";
  return `<section class="library-detail-section"><h3>${libraryEscape(label)}</h3><p>${libraryEscape(content)}</p></section>`;
}

function openLibraryCard(cardName) {
  const card = (window.tarotCards || tarotCards)[cardName];
  if (!card) return;

  const dialog = document.getElementById("cardLibraryDialog");
  const content = document.getElementById("libraryDialogContent");
  const uprightKeywords = card.keywords || card.upright || [];
  const reversedKeywords = card.reversed || [];
  const astrology = libraryNaturalList(card.astrology);

  content.innerHTML = `
    <article class="library-detail">
      <div class="library-detail-heading">
        ${card.image ? `<img src="${libraryEscape(card.image)}" alt="${libraryEscape(cardName)} tarot card">` : ""}
        <div>
          <p class="eyebrow">${libraryEscape(card.suit || "TAROT CARD")}</p>
          <h2>${libraryEscape(cardName)}</h2>
          ${card.rank ? `<p><strong>Rank:</strong> ${libraryEscape(card.rank)}</p>` : ""}
          ${card.element ? `<p><strong>Element:</strong> ${libraryEscape(card.element)}</p>` : ""}
          ${astrology ? `<p><strong>Astrology:</strong> ${libraryEscape(astrology)}</p>` : ""}
        </div>
      </div>

      <div class="library-detail-grid">
        <section class="library-detail-section">
          <h3>Upright</h3>
          ${uprightKeywords.length ? `<p class="library-detail-keywords">${libraryEscape(uprightKeywords.join(" · "))}</p>` : ""}
          <p>${libraryEscape(card.uprightMeaning || card.description || "")}</p>
        </section>

        <section class="library-detail-section">
          <h3>Reversed</h3>
          ${reversedKeywords.length ? `<p class="library-detail-keywords">${libraryEscape(reversedKeywords.join(" · "))}</p>` : ""}
          <p>${libraryEscape(card.reversedMeaning || "")}</p>
        </section>
      </div>

      ${meaningBlock("Rider-Waite-Smith imagery", card.imagery)}

      ${card.clarifierQuestion ? `
        <section class="library-food-for-thought">
          <p class="eyebrow">FOOD FOR THOUGHT</p>
          <h3>${libraryEscape(card.clarifierQuestion)}</h3>
          <p>Use this as a question starter when you return to the Reader.</p>
          <a class="library-reader-link" href="reader.html">Go to Reading Assistant →</a>
        </section>
      ` : ""}

      ${card.notes ? meaningBlock("Notes", card.notes) : ""}
    </article>
  `;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function closeLibraryCard() {
  const dialog = document.getElementById("cardLibraryDialog");
  if (typeof dialog.close === "function") dialog.close();
  else dialog.removeAttribute("open");
}

document.getElementById("librarySearch").addEventListener("input", renderLibrary);
document.getElementById("librarySuit").addEventListener("change", renderLibrary);
document.getElementById("libraryElement").addEventListener("change", renderLibrary);
document.getElementById("clearLibraryFilters").addEventListener("click", function () {
  document.getElementById("librarySearch").value = "";
  document.getElementById("librarySuit").value = "all";
  document.getElementById("libraryElement").value = "all";
  renderLibrary();
});

document.getElementById("cardLibraryGrid").addEventListener("click", function (event) {
  const button = event.target.closest("[data-open-card]");
  if (!button) return;
  openLibraryCard(button.dataset.openCard);
});

document.getElementById("closeLibraryDialog").addEventListener("click", closeLibraryCard);
document.getElementById("cardLibraryDialog").addEventListener("click", function (event) {
  if (event.target === event.currentTarget) closeLibraryCard();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") closeLibraryCard();
});

document.getElementById("librarySource").textContent =
  window.tarotDataSource === "Google Sheet"
    ? "Reference data: Google Sheet"
    : "Reference data: local fallback";

renderLibrary();
