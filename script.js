/*
  Raven's Tarot Reader
  Multi-spread reading sessions, card clarifiers, spread clarifiers,
  editable questions, generated summaries, and TXT export.

  This file expects:
  - cards.js to load first and define `tarotCards`
  - Existing HTML IDs:
      cardName, orientation, readingTheme, reading,
      cardList, patterns, cardDetailsList
  - Optional HTML ID:
      selectedCardDetails
*/

"use strict";

/* -------------------------------------------------------------------------- */
/* Utilities                                                                  */
/* -------------------------------------------------------------------------- */

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function createId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function formatNaturalList(items) {
  const cleanItems = items.filter(Boolean);

  if (cleanItems.length === 0) return "";
  if (cleanItems.length === 1) return cleanItems[0];
  if (cleanItems.length === 2) return `${cleanItems[0]} and ${cleanItems[1]}`;

  return `${cleanItems.slice(0, -1).join(", ")}, and ${cleanItems.at(-1)}`;
}

function capitalize(text) {
  const value = String(text || "");
  return value.charAt(0).toUpperCase() + value.slice(1);
}

/* -------------------------------------------------------------------------- */
/* Card aliases                                                               */
/* -------------------------------------------------------------------------- */

function createCardAliases() {
  const aliases = {};

  const numberWords = {
    ace: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    ten: "10"
  };

  Object.keys(tarotCards).forEach(function(cardName) {
    const normalizedName = normalizeText(cardName);

    aliases[normalizedName] = cardName;

    if (normalizedName.startsWith("the ")) {
      aliases[normalizedName.replace("the ", "")] = cardName;
    }

    if (normalizedName === "judgment") {
      aliases.judgement = cardName;
    }

    if (normalizedName === "wheel of fortune") {
      aliases["wheel fortune"] = cardName;
      aliases["the wheel"] = cardName;
      aliases.wheel = cardName;
    }

    if (normalizedName === "the hanged man") {
      aliases["hanged man"] = cardName;
      aliases["the hanged one"] = cardName;
      aliases["hanged one"] = cardName;
    }

    Object.keys(numberWords).forEach(function(wordNumber) {
      const digitNumber = numberWords[wordNumber];

      if (!normalizedName.startsWith(wordNumber + " of ")) return;

      const suit = normalizedName.replace(wordNumber + " of ", "");

      aliases[`${digitNumber} of ${suit}`] = cardName;
      aliases[`${wordNumber} ${suit}`] = cardName;
      aliases[`${digitNumber} ${suit}`] = cardName;
      aliases[`${suit} ${wordNumber}`] = cardName;
      aliases[`${suit} ${digitNumber}`] = cardName;

      if (suit.endsWith("s")) {
        const singularSuit = suit.slice(0, -1);

        aliases[`${wordNumber} of ${singularSuit}`] = cardName;
        aliases[`${digitNumber} of ${singularSuit}`] = cardName;
        aliases[`${wordNumber} ${singularSuit}`] = cardName;
        aliases[`${digitNumber} ${singularSuit}`] = cardName;
        aliases[`${singularSuit} ${wordNumber}`] = cardName;
        aliases[`${singularSuit} ${digitNumber}`] = cardName;
      }
    });

    ["page", "knight", "queen", "king"].forEach(function(courtTitle) {
      if (!normalizedName.startsWith(courtTitle + " of ")) return;

      const suit = normalizedName.replace(courtTitle + " of ", "");

      aliases[`${courtTitle} ${suit}`] = cardName;
      aliases[`${suit} ${courtTitle}`] = cardName;

      if (suit.endsWith("s")) {
        const singularSuit = suit.slice(0, -1);

        aliases[`${courtTitle} of ${singularSuit}`] = cardName;
        aliases[`${courtTitle} ${singularSuit}`] = cardName;
        aliases[`${singularSuit} ${courtTitle}`] = cardName;
      }
    });

    if (normalizedName.startsWith("ace of ")) {
      const suit = normalizedName.replace("ace of ", "");

      aliases[`1 of ${suit}`] = cardName;
      aliases[`1 ${suit}`] = cardName;
      aliases[`ace ${suit}`] = cardName;
      aliases[`${suit} ace`] = cardName;

      if (suit.endsWith("s")) {
        const singularSuit = suit.slice(0, -1);

        aliases[`ace of ${singularSuit}`] = cardName;
        aliases[`1 of ${singularSuit}`] = cardName;
        aliases[`1 ${singularSuit}`] = cardName;
        aliases[`ace ${singularSuit}`] = cardName;
        aliases[`${singularSuit} ace`] = cardName;
      }
    }
  });

  return aliases;
}

const cardAliases = createCardAliases();

/* -------------------------------------------------------------------------- */
/* Reading session state                                                      */
/* -------------------------------------------------------------------------- */

function createSpread(options = {}) {
  return {
    id: createId("spread"),
    number: options.number || 1,
    type: options.type || "primary",
    parentSpreadId: options.parentSpreadId || null,
    question: options.question || "",
    theme: options.theme || "general",
    cards: [],
    summary: "",
    createdAt: new Date().toISOString()
  };
}

const firstSpread = createSpread({ number: 1 });

const readingSession = {
  id: createId("session"),
  title: "",
  createdAt: new Date().toISOString(),
  spreads: [firstSpread]
};

let activeSpreadId = firstSpread.id;
let activeClarifierTargetId = null;
let selectedCardId = null;

function toggleQuestionEditor(summaryElement) {
  const details = summaryElement && summaryElement.parentElement;

  if (!details) return;

  details.classList.toggle("question-editor-open", details.open);
}

function getActiveSpread() {
  return readingSession.spreads.find(function(spread) {
    return spread.id === activeSpreadId;
  });
}

function getSpreadById(spreadId) {
  return readingSession.spreads.find(function(spread) {
    return spread.id === spreadId;
  });
}

function getActiveCards() {
  const spread = getActiveSpread();
  return spread ? spread.cards : [];
}

function setActiveSpread(spreadId) {
  const spread = getSpreadById(spreadId);

  if (!spread) return;

  activeSpreadId = spreadId;
  activeClarifierTargetId = null;
  selectedCardId = null;

  const themeSelect = document.getElementById("readingTheme");

  if (themeSelect) {
    themeSelect.value = spread.theme || "general";
  }

  renderAll();
}

/* -------------------------------------------------------------------------- */
/* Themes and meanings                                                        */
/* -------------------------------------------------------------------------- */

function getActiveTheme() {
  const spread = getActiveSpread();
  return spread ? spread.theme || "general" : "general";
}

function getMeaningSet(cardData, orientation, themeOverride) {
  const theme = themeOverride || getActiveTheme();

  if (
    theme !== "general" &&
    cardData.themeMeanings &&
    cardData.themeMeanings[theme] &&
    cardData.themeMeanings[theme][orientation]
  ) {
    return {
      label: `${capitalize(theme)} ${orientation} meaning`,
      meaning: cardData.themeMeanings[theme][orientation],
      keywords: []
    };
  }

  const spreadsheetMeaning = orientation === "upright"
    ? cardData.uprightMeaning || cardData.description || ""
    : cardData.reversedMeaning || "";

  return {
    label: `${capitalize(orientation)} meaning`,
    meaning: spreadsheetMeaning,
    keywords: orientation === "upright" ? cardData.upright : cardData.reversed
  };
}

function updateTheme() {
  const spread = getActiveSpread();
  const themeSelect = document.getElementById("readingTheme");

  if (!spread || !themeSelect) return;

  spread.theme = themeSelect.value;
  spread.summary = generateSpreadSummary(spread);

  renderAll();
}

function getClarifierMeaning(cardData, orientation, clarifierCardName, clarifiedCardName) {
  if (clarifierCardName && clarifiedCardName && window.tarotClarifierPairs) {
    const pair = window.tarotClarifierPairs[
      `${clarifierCardName}|||${clarifiedCardName}`
    ];

    if (pair) {
      return orientation === "upright"
        ? pair.upright || ""
        : pair.reversed || "";
    }
  }

  if (!cardData.clarifier) return "";

  return orientation === "upright"
    ? cardData.clarifier.upright || ""
    : cardData.clarifier.reversed || "";
}

function getClarifierQuestion(cardData, clarifierCardName, clarifiedCardName) {
  if (clarifierCardName && clarifiedCardName && window.tarotClarifierPairs) {
    const pair = window.tarotClarifierPairs[
      `${clarifierCardName}|||${clarifiedCardName}`
    ];

    if (pair && pair.question) return pair.question;
  }

  return cardData.clarifierQuestion || "";
}

function getFollowUpQuestion(readingCard, spread = getActiveSpread()) {
  if (!readingCard || !spread) return "";

  const cardData = tarotCards[readingCard.name];
  if (!cardData) return "";

  if (readingCard.clarifiesCardId !== null) {
    const clarifiedCard = spread.cards.find(function(card) {
      return card.id === readingCard.clarifiesCardId;
    });

    return getClarifierQuestion(
      cardData,
      readingCard.name,
      clarifiedCard ? clarifiedCard.name : null
    ) || `What does ${readingCard.name} add to ${clarifiedCard ? clarifiedCard.name : "this card"}, and what should you look at more closely?`;
  }

  return cardData.clarifierQuestion ||
    `What does ${readingCard.name} want you to look at more closely in this situation?`;
}

function renderFollowUpPromptBox(readingCard, spread = getActiveSpread()) {
  const question = getFollowUpQuestion(readingCard, spread);

  if (!spread) return "";

  return `
    <section class="follow-up-prompt-box food-for-thought-box">
      <p class="follow-up-prompt-label">Food for Thought</p>
      <p class="follow-up-prompt-text">${escapeHtml(question)}</p>
      <button
        type="button"
        class="follow-up-prompt-open-button"
        onclick="openFollowUpPromptModal('${encodeURIComponent(question).replace(/'/g, "%27")}', '${encodeURIComponent(readingCard.name).replace(/'/g, "%27")}', '${spread.id}')"
      >
        Clarify Spread with This Question
      </button>
    </section>
  `;
}

function ensureFollowUpPromptModal() {
  let modal = document.getElementById("followUpPromptModal");

  if (modal) return modal;

  modal = document.createElement("div");
  modal.id = "followUpPromptModal";
  modal.className = "follow-up-modal";
  modal.setAttribute("aria-hidden", "true");

  modal.innerHTML = `
    <div class="follow-up-modal-backdrop" onclick="closeFollowUpPromptModal()"></div>
    <section class="follow-up-modal-panel" role="dialog" aria-modal="true" aria-labelledby="followUpPromptTitle">
      <button
        type="button"
        class="follow-up-modal-close"
        aria-label="Close prompt"
        onclick="closeFollowUpPromptModal()"
      >×</button>

      <h2 id="followUpPromptTitle">Use this prompt as a template for your next question</h2>
      <p class="follow-up-modal-subtitle">Rewrite what you need to; alter the question to fit all of the ones you have! This will show up in your txt file for easy reference later.</p>

      <label for="followUpQuestionInput">Question</label>
      <textarea id="followUpQuestionInput" rows="5"></textarea>

      <p class="follow-up-modal-note">This will create a new clarifying spread linked to your current reading. Your current spread will stay exactly where it is.</p>

      <p id="followUpPromptSource" class="follow-up-prompt-source"></p>

      <button
        id="followUpEnterButton"
        class="pixel-enter-button follow-up-enter-button"
        type="button"
        aria-label="Start reading with this question"
        onclick="submitFollowUpPrompt()"
      >
        <img
          id="followUpEnterButtonImage"
          src="assets/buttons/enter-unpressed.gif"
          alt=""
          draggable="false"
        >
      </button>
    </section>
  `;

  document.body.appendChild(modal);

  modal.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closeFollowUpPromptModal();
    }
  });

  return modal;
}

function openFollowUpPromptModal(encodedQuestion, encodedCardName, sourceSpreadId) {
  const modal = ensureFollowUpPromptModal();
  const input = document.getElementById("followUpQuestionInput");
  const source = document.getElementById("followUpPromptSource");
  const question = decodeURIComponent(encodedQuestion || "");
  const cardName = decodeURIComponent(encodedCardName || "");
  const sourceSpread = getSpreadById(sourceSpreadId) || getActiveSpread();

  modal.dataset.sourceSpreadId = sourceSpread ? sourceSpread.id : "";

  if (input) input.value = question;
  if (source) {
    source.textContent = sourceSpread
      ? `Prompt from ${cardName} in Reading #${sourceSpread.number}`
      : `Prompt from ${cardName}`;
  }

  modal.classList.add("follow-up-modal-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("follow-up-modal-active");

  requestAnimationFrame(function() {
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  });
}

function closeFollowUpPromptModal() {
  const modal = document.getElementById("followUpPromptModal");

  if (!modal) return;

  modal.classList.remove("follow-up-modal-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("follow-up-modal-active");
}

function submitFollowUpPrompt() {
  const modal = ensureFollowUpPromptModal();
  const input = document.getElementById("followUpQuestionInput");
  const question = input ? input.value.trim() : "";
  const sourceSpread =
    getSpreadById(modal.dataset.sourceSpreadId) || getActiveSpread();

  if (!question) {
    alert("Edit or enter a question first.");
    if (input) input.focus();
    return;
  }

  if (!sourceSpread) {
    alert("The reading this prompt came from could not be found.");
    return;
  }

  const submitButton = document.getElementById("followUpEnterButton");
  const spreadType = "clarifying";

  if (submitButton) submitButton.disabled = true;
  animateEnterButton("followUpEnterButtonImage");

  setTimeout(function() {
    const newSpread = createSpread({
      number: readingSession.spreads.length + 1,
      type: spreadType,
      parentSpreadId: spreadType === "clarifying" ? sourceSpread.id : null,
      question: question,
      theme: sourceSpread.theme || "general"
    });

    readingSession.spreads.push(newSpread);
    closeFollowUpPromptModal();
    if (submitButton) submitButton.disabled = false;
    setActiveSpread(newSpread.id);
  }, 480);
}

/* -------------------------------------------------------------------------- */
/* Card actions                                                               */
/* -------------------------------------------------------------------------- */

function getClarifiersForCard(cardId, spread = getActiveSpread()) {
  if (!spread) return [];

  return spread.cards.filter(function(card) {
    return card.clarifiesCardId === cardId;
  });
}

function addCard() {
  const cardInput = document.getElementById("cardName");
  const orientationSelect = document.getElementById("orientation");
  const spread = getActiveSpread();

  if (!cardInput || !orientationSelect || !spread) {
    alert("The reading controls could not be found.");
    return;
  }

  const normalizedInput = normalizeText(cardInput.value);
  const matchingCardName = cardAliases[normalizedInput];
  const cardData = tarotCards[matchingCardName];

  if (!normalizedInput) {
    alert("Type a card name first.");
    return;
  }

  if (!cardData) {
    alert("Oh shit, I don't know that one. Try again?");
    return;
  }

  spread.cards.push({
    id: createId("card"),
    name: matchingCardName,
    orientation: orientationSelect.value,
    clarifiesCardId: activeClarifierTargetId
  });

  spread.summary = generateSpreadSummary(spread);

  cardInput.value = "";
  renderAll();
  cardInput.focus();
}

function toggleClarifierTarget(cardId) {
  const spread = getActiveSpread();

  if (!spread) return;

  const clickedCard = spread.cards.find(function(card) {
    return card.id === cardId;
  });

  if (!clickedCard) return;

  if (clickedCard.clarifiesCardId !== null) {
    alert("A card clarifier cannot receive another card clarifier yet.");
    return;
  }

  activeClarifierTargetId =
    activeClarifierTargetId === cardId ? null : cardId;

  renderAll();
}

function showCardDetails(cardId) {
  selectedCardId = cardId;
  renderSelectedCardDetails();
}

function removeCard(cardId) {
  const spread = getActiveSpread();

  if (!spread) return;

  const dependentClarifierIds = spread.cards
    .filter(function(card) {
      return card.clarifiesCardId === cardId;
    })
    .map(function(card) {
      return card.id;
    });

  spread.cards = spread.cards.filter(function(card) {
    return card.id !== cardId && !dependentClarifierIds.includes(card.id);
  });

  if (activeClarifierTargetId === cardId) activeClarifierTargetId = null;
  if (selectedCardId === cardId) selectedCardId = null;

  spread.summary = generateSpreadSummary(spread);
  renderAll();
}

/* -------------------------------------------------------------------------- */
/* Spread actions                                                             */
/* -------------------------------------------------------------------------- */

function updateSpreadQuestion(spreadId, question) {
  const spread = getSpreadById(spreadId);

  if (!spread) return;

  spread.question = question;
  renderSpreadNavigation();
}

function createClarifyingSpread(parentSpreadId) {
  const parentSpread = getSpreadById(parentSpreadId);

  if (!parentSpread) {
    alert("The spread you wanted to clarify could not be found.");
    return;
  }

  const newSpread = createSpread({
    number: readingSession.spreads.length + 1,
    type: "clarifying",
    parentSpreadId: parentSpreadId,
    theme: parentSpread.theme || "general"
  });

  readingSession.spreads.push(newSpread);
  setActiveSpread(newSpread.id);

  requestAnimationFrame(function() {
    const questionInput = document.querySelector(
      `[data-question-for="${newSpread.id}"]`
    );

    if (questionInput) questionInput.focus();
  });
}

function deleteSpread(spreadId) {
  if (readingSession.spreads.length === 1) {
    alert("A reading session must keep at least one spread.");
    return;
  }

  const childSpreads = readingSession.spreads.filter(function(spread) {
    return spread.parentSpreadId === spreadId;
  });

  if (childSpreads.length > 0) {
    alert("Delete or reconnect this spread's clarifying spreads first.");
    return;
  }

  readingSession.spreads = readingSession.spreads.filter(function(spread) {
    return spread.id !== spreadId;
  });

  readingSession.spreads.forEach(function(spread, index) {
    spread.number = index + 1;
  });

  if (activeSpreadId === spreadId) {
    activeSpreadId = readingSession.spreads[0].id;
  }

  renderAll();
}

/* -------------------------------------------------------------------------- */
/* Pattern analysis                                                           */
/* -------------------------------------------------------------------------- */

function getPatternLevel(count) {
  if (count >= 5) {
    return { level: "red", score: 3, label: "Dominant pattern" };
  }

  if (count >= 3) {
    return { level: "yellow", score: 2, label: "Clear pattern" };
  }

  if (count >= 2) {
    return { level: "green", score: 1, label: "Possible pattern" };
  }

  return null;
}

function getCardNumber(cardName) {
  const numbers = [
    "Ace", "Two", "Three", "Four", "Five",
    "Six", "Seven", "Eight", "Nine", "Ten"
  ];

  return numbers.find(function(number) {
    return cardName.startsWith(number + " of ");
  }) || null;
}

const suitPatternMessages = {
  Wands:
    "Lots of Wands points to fire, desire, action, creativity, ambition, momentum, confidence, conflict, or instinct. The reading may be asking what someone wants and what they are willing to do about it.",
  Cups:
    "Lots of Cups points to emotion, relationships, intuition, memory, grief, longing, or attachment. The reading may be centered on what is felt rather than what is objectively clear.",
  Swords:
    "Lots of Swords points to thoughts, communication, fear, truth, decisions, anxiety, or conflict. The reading may be asking what story the mind is telling and whether it is true.",
  Pentacles:
    "Lots of Pentacles points to practical reality: money, work, health, home, resources, consistency, or long-term stability. The reading may be asking what is actually sustainable.",
  "Major Arcana":
    "Lots of Major Arcana suggests this reading may be pointing to something larger than a daily mood. There may be a major lesson, turning point, identity shift, or deeper spiritual pattern at play."
};

const elementPatternMessages = {
  Fire:
    "Lots of Fire energy can point to passion, urgency, confidence, ambition, action, anger, or conflict. It can be motivating, but too much Fire can become impulsive, reactive, or burned out.",
  Water:
    "Lots of Water energy can point to feelings, memory, relationships, dreams, grief, attachment, or intuition. It can be emotionally honest, but too much Water can blur boundaries or make it hard to separate intuition from fear.",
  Air:
    "Lots of Air energy can point to thoughts, communication, decisions, mental pressure, analysis, or truth. It can bring insight, but too much Air can become overthinking or detachment.",
  Earth:
    "Lots of Earth energy can point to money, work, the body, home, resources, routine, and long-term security. It can be grounding, but too much Earth can become stagnation or fear of change."
};

const numberMeanings = {
  Ace:
    "Aces point to beginnings, raw potential, and something new trying to emerge.",
  Two:
    "Twos point to choice, duality, balance, partnership, inner conflict, or weighing two sides.",
  Three:
    "Threes suggest growth, expression, collaboration, or initial results.",
  Four:
    "Fours point to structure, stability, foundation, and containment.",
  Five:
    "Fives often show conflict, instability, disruption, challenge, or growing pains.",
  Six:
    "Sixes often concern healing, support, exchange, repair, memory, recognition, or movement toward harmony.",
  Seven:
    "Sevens suggest complexity, assessment, defense, mystery, strategy, or uncertainty.",
  Eight:
    "Eights point to movement, effort, restriction, momentum, pressure, or a process already underway.",
  Nine:
    "Nines often show culmination, intensity, solitude, near-completion, or mounting weight.",
  Ten:
    "Tens show a cycle reaching its limit through fulfillment, overload, collapse, legacy, or transformation."
};

function analyzeSpread(spread) {
  const cards = spread ? spread.cards : [];
  const totalCards = cards.length;

  const reversedCount = cards.filter(function(card) {
    return card.orientation === "reversed";
  }).length;

  const suitCounts = {};
  const elementCounts = {};
  const numberCounts = {};

  cards.forEach(function(readingCard) {
    const cardData = tarotCards[readingCard.name];

    if (!cardData) return;

    suitCounts[cardData.suit] = (suitCounts[cardData.suit] || 0) + 1;
    elementCounts[cardData.element] =
      (elementCounts[cardData.element] || 0) + 1;

    const cardNumber = getCardNumber(readingCard.name);

    if (cardNumber) {
      numberCounts[cardNumber] = (numberCounts[cardNumber] || 0) + 1;
    }
  });

  const majorCount = suitCounts["Major Arcana"] || 0;
  const messages = [];

  const majorLevel = getPatternLevel(majorCount);

  if (majorLevel) {
    messages.push({
      ...majorLevel,
      count: majorCount,
      category: "major",
      key: "Major Arcana",
      title: `${majorCount} Major Arcana cards`,
      message: suitPatternMessages["Major Arcana"]
    });
  }

  const reversalLevel = getPatternLevel(reversedCount);

  if (reversalLevel) {
    messages.push({
      ...reversalLevel,
      count: reversedCount,
      category: "reversal",
      key: "reversals",
      title: `${reversedCount} reversed cards`,
      message:
        "Lots of reversals here. The energy may be blocked, internalized, delayed, resisted, distorted, or happening beneath the surface."
    });
  }

  Object.entries(suitCounts).forEach(function([suit, count]) {
    if (suit === "Major Arcana") return;

    const patternLevel = getPatternLevel(count);

    if (!patternLevel) return;

    messages.push({
      ...patternLevel,
      count,
      category: "suit",
      key: suit,
      title: `${count} ${suit} cards`,
      message: suitPatternMessages[suit] || ""
    });
  });

  Object.entries(elementCounts).forEach(function([element, count]) {
    const patternLevel = getPatternLevel(count);

    if (!patternLevel) return;

    messages.push({
      ...patternLevel,
      count,
      category: "element",
      key: element,
      title: `${count} ${element} cards`,
      message: elementPatternMessages[element] || ""
    });
  });

  Object.entries(numberCounts).forEach(function([number, count]) {
    const patternLevel = getPatternLevel(count);

    if (!patternLevel) return;

    messages.push({
      ...patternLevel,
      count,
      category: "number",
      key: number,
      title: `${count} ${number}s`,
      message: numberMeanings[number] || ""
    });
  });

  messages.sort(function(a, b) {
    if (b.score !== a.score) return b.score - a.score;
    return b.count - a.count;
  });

  return {
    totalCards,
    reversedCount,
    majorCount,
    suitCounts,
    elementCounts,
    numberCounts,
    messages
  };
}

/* -------------------------------------------------------------------------- */
/* Summary generation                                                         */
/* -------------------------------------------------------------------------- */

const keywordThemeGroups = {
  "emotion and attachment": [
    "emotion", "emotional", "feelings", "love", "relationship", "attachment",
    "longing", "affection", "compassion", "heart", "intimacy", "connection"
  ],
  "grief and disappointment": [
    "grief", "loss", "heartbreak", "regret", "sadness", "mourning",
    "disappointment", "sorrow", "pain"
  ],
  "uncertainty and confusion": [
    "uncertainty", "confusion", "illusion", "indecision", "hidden",
    "mixed signals", "lack of clarity", "fear", "anxiety", "doubt"
  ],
  "avoidance and withdrawal": [
    "avoidance", "withdrawal", "resistance", "denial", "hesitation",
    "distance", "blocked", "delay", "isolation", "retreat", "stagnation"
  ],
  "communication and truth": [
    "communication", "message", "truth", "conversation", "clarity",
    "directness", "honesty", "conflict", "decision", "thought"
  ],
  "stability and practical security": [
    "stability", "security", "commitment", "foundation", "reliability",
    "long-term", "money", "work", "home", "resources", "health"
  ],
  "action and momentum": [
    "action", "movement", "momentum", "pursuit", "initiative",
    "motivation", "ambition", "energy", "passion", "creativity"
  ],
  "control and boundaries": [
    "control", "authority", "structure", "boundary", "discipline",
    "leadership", "power", "responsibility", "restraint"
  ],
  "change and transformation": [
    "change", "transformation", "ending", "beginning", "cycle",
    "transition", "release", "rebirth", "turning point"
  ],
  "intuition and the unknown": [
    "intuition", "subconscious", "mystery", "dream", "spiritual",
    "unknown", "secret", "inner knowing"
  ]
};

function getCardSearchText(readingCard, spread) {
  const cardData = tarotCards[readingCard.name];

  if (!cardData) return "";

  const meaningSet = getMeaningSet(
    cardData,
    readingCard.orientation,
    spread.theme
  );

  const parts = [
    cardData.description || "",
    ...(cardData.keywords || []),
    ...(readingCard.orientation === "upright"
      ? cardData.upright || []
      : cardData.reversed || []),
    meaningSet.meaning || "",
    ...(meaningSet.keywords || [])
  ];

  if (readingCard.clarifiesCardId !== null) {
    const clarifiedCard = spread.cards.find(function(card) {
      return card.id === readingCard.clarifiesCardId;
    });

    parts.push(
      getClarifierMeaning(
        cardData,
        readingCard.orientation,
        readingCard.name,
        clarifiedCard ? clarifiedCard.name : null
      )
    );
  }

  return normalizeText(parts.join(" "));
}

function getDominantKeywordThemes(spread) {
  const themeScores = {};

  Object.keys(keywordThemeGroups).forEach(function(theme) {
    themeScores[theme] = 0;
  });

  spread.cards.forEach(function(readingCard) {
    const searchText = getCardSearchText(readingCard, spread);

    Object.entries(keywordThemeGroups).forEach(function([theme, terms]) {
      const matchedTerms = terms.filter(function(term) {
        return searchText.includes(normalizeText(term));
      });

      if (matchedTerms.length > 0) {
        themeScores[theme] += Math.min(matchedTerms.length, 3);
      }
    });
  });

  return Object.entries(themeScores)
    .filter(function([, score]) {
      return score > 0;
    })
    .sort(function(a, b) {
      return b[1] - a[1];
    })
    .slice(0, 3)
    .map(function([theme]) {
      return theme;
    });
}

function getSpreadRelationshipSummary(spread) {
  if (!spread.parentSpreadId) return "";

  const parentSpread = getSpreadById(spread.parentSpreadId);

  if (!parentSpread || parentSpread.cards.length === 0) return "";

  const parentThemes = getDominantKeywordThemes(parentSpread);
  const clarifierThemes = getDominantKeywordThemes(spread);

  const sharedThemes = clarifierThemes.filter(function(theme) {
    return parentThemes.includes(theme);
  });

  const newThemes = clarifierThemes.filter(function(theme) {
    return !parentThemes.includes(theme);
  });

  if (sharedThemes.length > 0 && newThemes.length > 0) {
    return `This clarifying spread reinforces ${formatNaturalList(
      sharedThemes
    )}, then narrows or redirects the topic toward ${formatNaturalList(
      newThemes
    )}.`;
  }

  if (sharedThemes.length > 0) {
    return `This clarifying spread confirms and strengthens the earlier themes of ${formatNaturalList(
      sharedThemes
    )}.`;
  }

  if (newThemes.length > 0) {
    return `This clarifying spread redirects the reading toward ${formatNaturalList(
      newThemes
    )}.`;
  }

  return "This spread adds detail to the earlier reading, though no strong repeated keyword cluster is detected yet.";
}

function generateSpreadSummary(spread) {
  if (!spread || spread.cards.length === 0) {
    return "Add cards to generate a summary.";
  }

  const analysis = analyzeSpread(spread);
  const themes = getDominantKeywordThemes(spread);
  const parts = [];

  if (themes.length > 0) {
    parts.push(
      `The strongest card language points toward ${formatNaturalList(themes)}.`
    );
  }

  const topPatterns = analysis.messages.slice(0, 3);

  if (topPatterns.length > 0) {
    const patternNames = topPatterns.map(function(pattern) {
      if (pattern.category === "suit") return `${pattern.key} energy`;
      if (pattern.category === "element") return `${pattern.key} energy`;
      if (pattern.category === "number") return `repeated ${pattern.key}s`;
      if (pattern.category === "major") return "Major Arcana emphasis";
      return "reversed energy";
    });

    parts.push(
      `The clearest structural patterns are ${formatNaturalList(patternNames)}.`
    );
  } else {
    parts.push(
      "No repeated suit, element, number, reversal, or Major Arcana pattern is strong enough to dominate the spread yet."
    );
  }

  if (analysis.reversedCount >= 2) {
    parts.push(
      "The reversals suggest that part of the situation may be blocked, internalized, delayed, resisted, or unfolding beneath the surface."
    );
  }

  const relationshipSummary = getSpreadRelationshipSummary(spread);

  if (relationshipSummary) parts.push(relationshipSummary);

  return parts.join(" ");
}

function generateFullReadingSummary() {
  const spreadsWithCards = readingSession.spreads.filter(function(spread) {
    return spread.cards.length > 0;
  });

  if (spreadsWithCards.length === 0) {
    return "No cards have been added to this reading yet.";
  }

  const combinedThemes = {};

  spreadsWithCards.forEach(function(spread) {
    getDominantKeywordThemes(spread).forEach(function(theme) {
      combinedThemes[theme] = (combinedThemes[theme] || 0) + 1;
    });
  });

  const repeatedThemes = Object.entries(combinedThemes)
    .sort(function(a, b) {
      return b[1] - a[1];
    })
    .slice(0, 4)
    .map(function([theme]) {
      return theme;
    });

  const totalCards = spreadsWithCards.reduce(function(total, spread) {
    return total + spread.cards.length;
  }, 0);

  const parts = [
    `This reading contains ${spreadsWithCards.length} spread${
      spreadsWithCards.length === 1 ? "" : "s"
    } and ${totalCards} card${totalCards === 1 ? "" : "s"}.`
  ];

  if (repeatedThemes.length > 0) {
    parts.push(
      `Across the connected spreads, the most consistent themes are ${formatNaturalList(
        repeatedThemes
      )}.`
    );
  }

  if (spreadsWithCards.length > 1) {
    parts.push(
      "The later spreads should be read as clarification and development of the earlier questions, rather than as unrelated messages."
    );
  }

  return parts.join(" ");
}

/* -------------------------------------------------------------------------- */
/* Rendering                                                                  */
/* -------------------------------------------------------------------------- */

function getSpreadDisplayTitle(spread) {
  const question = spread.question.trim();

  return question
    ? `Reading #${spread.number}: ${question}`
    : `Reading #${spread.number}`;
}

function renderSpreadNavigation() {
  let navigation = document.getElementById("spreadNavigation");

  if (!navigation) {
    const reading = document.getElementById("reading");

    if (!reading || !reading.parentElement) return;

    navigation = document.createElement("nav");
    navigation.id = "spreadNavigation";
    navigation.className = "spread-navigation";

    reading.parentElement.insertBefore(navigation, reading);
  }

  navigation.innerHTML = readingSession.spreads
    .map(function(spread) {
      const activeClass = spread.id === activeSpreadId ? "active-spread-tab" : "";
      const parentSpread = spread.parentSpreadId
        ? getSpreadById(spread.parentSpreadId)
        : null;

      const spreadTypeLabel = parentSpread
        ? `Clarifying spread · clarifies #${parentSpread.number}`
        : spread.type === "followup"
          ? "Follow-up spread"
          : "Original spread";
      const questionText = spread.question.trim() || "Question not entered yet";

      return `
        <button
          type="button"
          class="spread-tab ${activeClass}"
          onclick="setActiveSpread('${spread.id}')"
          title="${escapeHtml(questionText)}"
        >
          <span class="spread-tab-number">Reading #${spread.number}</span>
          <span class="spread-tab-tag">${escapeHtml(spreadTypeLabel)}</span>
        </button>
      `;
    })
    .join("");
}

function renderReading() {
  const reading = document.getElementById("reading");
  const spread = getActiveSpread();

  if (!reading || !spread) return;

  const parentSpread = spread.parentSpreadId
    ? getSpreadById(spread.parentSpreadId)
    : null;

  const parentReference = parentSpread
    ? `
      <div class="parent-spread-reference">
        <strong>Clarifying Reading #${parentSpread.number}</strong>
        <span>
          Original question:
          ${escapeHtml(parentSpread.question || "No question entered")}
        </span>
      </div>
    `
    : "";

  const mainCards = spread.cards.filter(function(card) {
    return card.clarifiesCardId === null;
  });

  const cardsHTML =
    mainCards.length === 0
      ? `<p class="empty-spread-message">Add cards to this spread.</p>`
      : mainCards
          .map(function(mainCard) {
            const cardData = tarotCards[mainCard.name];
            const clarifiers = getClarifiersForCard(mainCard.id, spread);

            const mainCardHTML = createSpreadCardHTML(
              mainCard,
              cardData,
              false
            );

            const clarifierHTML = clarifiers.length
              ? `
                <div class="clarifier-tree ${
                  clarifiers.length > 1 ? "multiple-clarifiers" : "single-clarifier"
                }">
                  <div class="clarifier-row">
                    ${clarifiers
                      .map(function(clarifierCard) {
                        return `
                          <div class="clarifier-node">
                            ${createSpreadCardHTML(
                              clarifierCard,
                              tarotCards[clarifierCard.name],
                              true
                            )}
                          </div>
                        `;
                      })
                      .join("")}
                  </div>
                </div>
              `
              : "";

            return `
              <div class="card-stack ${clarifiers.length ? "card-stack-with-clarifiers" : ""}">
                ${mainCardHTML}
                ${clarifierHTML}
              </div>
            `;
          })
          .join("");

  spread.summary = generateSpreadSummary(spread);

  reading.innerHTML = `
    <section class="reading-spread ${
      spread.type === "clarifying"
        ? "clarifying-spread"
        : spread.type === "followup"
          ? "followup-spread"
          : "primary-spread"
    }">
      <header class="spread-heading">
        <p class="spread-number">Reading #${spread.number}</p>
        <h2 class="spread-question-display">
          “${escapeHtml(spread.question.trim() || "Question not entered yet")}”
        </h2>
        <span class="spread-tag ${
          spread.type === "clarifying"
            ? "clarifying-spread-tag"
            : spread.type === "followup"
              ? "followup-spread-tag"
              : "original-spread-tag"
        }">
          ${
            spread.type === "clarifying"
              ? "Clarifying Spread"
              : spread.type === "followup"
                ? "Follow-up Spread"
                : "Original Spread"
          }
        </span>
        ${parentReference}

        <details class="question-editor" ontoggle="toggleQuestionEditor(this.querySelector('summary'))">
          <summary>Edit question</summary>
          <label for="question-${spread.id}" class="question-editor-label">Question</label>
          <textarea
            id="question-${spread.id}"
            class="spread-question-input"
            data-question-for="${spread.id}"
            placeholder="${
              spread.type === "clarifying"
                ? "Type the clarifying question..."
                : "Type the main question for this reading..."
            }"
            rows="3"
            oninput="updateSpreadQuestion('${spread.id}', this.value)"
          >${escapeHtml(spread.question)}</textarea>
        </details>
      </header>

      <div class="spread-table">
        ${cardsHTML}
      </div>

      <section class="generated-summary">
        <h3>Generated Summary</h3>
        <p>${escapeHtml(spread.summary)}</p>

        <div class="spread-action-buttons">
          <button
            type="button"
            onclick="createClarifyingSpread('${spread.id}')"
          >
            Add Clarifying Spread
          </button>

          ${
            readingSession.spreads.length > 1
              ? `
                <button
                  type="button"
                  onclick="deleteSpread('${spread.id}')"
                >
                  Delete This Spread
                </button>
              `
              : ""
          }

          <button type="button" onclick="downloadReadingSummary()">
            Download Summary as TXT File
          </button>
        </div>
      </section>
    </section>
  `;
}

function createSpreadCardHTML(readingCard, cardData, isClarifier) {
  if (!cardData) return "";

  const imageClass =
    readingCard.orientation === "reversed"
      ? "reversed-card-image"
      : "";

  const clarifierClass = isClarifier ? "clarifier-card" : "";
  const activeTargetClass =
    activeClarifierTargetId === readingCard.id
      ? "active-clarifier-target"
      : "";

  const clickAction = isClarifier
    ? `showCardDetails('${readingCard.id}')`
    : `toggleClarifierTarget('${readingCard.id}'); showCardDetails('${readingCard.id}')`;

  return `
    <div class="spread-card ${clarifierClass} ${activeTargetClass}">
      ${
        isClarifier
          ? `<span class="clarifier-badge">Clarifier</span>`
          : ""
      }

      <button
        type="button"
        class="spread-card-main-button"
        onclick="${clickAction}"
      >
        <img
          class="${imageClass}"
          src="${escapeHtml(cardData.image)}"
          alt="${escapeHtml(readingCard.name)}"
        >

        <h3 class="spread-card-title">${escapeHtml(readingCard.name)}</h3>
        <p class="spread-card-orientation">
          ${escapeHtml(readingCard.orientation)}
        </p>
      </button>

      <button
        type="button"
        class="remove-card-button"
        onclick="event.stopPropagation(); removeCard('${readingCard.id}')"
        aria-label="Remove ${escapeHtml(readingCard.name)}"
      >
        Remove
      </button>
    </div>
  `;
}

function renderSelectedCardDetails() {
  const details = document.getElementById("selectedCardDetails");
  const spread = getActiveSpread();

  if (!details || !spread) return;

  const readingCard = spread.cards.find(function(card) {
    return card.id === selectedCardId;
  });

  if (!readingCard) {
    details.innerHTML = "";
    return;
  }

  const cardData = tarotCards[readingCard.name];
  const meaningSet = getMeaningSet(
    cardData,
    readingCard.orientation,
    spread.theme
  );

  const meaningHTML = meaningSet.meaning
    ? `<p><strong>${escapeHtml(meaningSet.label)}:</strong> ${escapeHtml(
        meaningSet.meaning
      )}</p>`
    : `<p><strong>${escapeHtml(meaningSet.label)}:</strong> ${escapeHtml(
        meaningSet.keywords.join(", ")
      )}</p>`;

  details.innerHTML = `
    <h3>
      ${escapeHtml(readingCard.name)}
      (${escapeHtml(readingCard.orientation)})
    </h3>
    <p><strong>Suit:</strong> ${escapeHtml(cardData.suit)}</p>
    <p><strong>Element:</strong> ${escapeHtml(cardData.element)}</p>
    <p><strong>Astrology:</strong> ${escapeHtml(
      (cardData.astrology || []).join(", ")
    )}</p>
    <p><strong>General keywords:</strong> ${escapeHtml(
      (cardData.keywords || []).join(", ")
    )}</p>
    ${meaningHTML}
    ${cardData.imagery ? `<p><strong>RWS imagery:</strong> ${escapeHtml(cardData.imagery)}</p>` : ""}
    ${renderFollowUpPromptBox(readingCard, spread)}
  `;
}

function renderCardDetailsList() {
  const detailsList = document.getElementById("cardDetailsList");
  const spread = getActiveSpread();

  if (!detailsList || !spread) return;

  if (spread.cards.length === 0) {
    detailsList.innerHTML =
      `<p>Add cards to see their meanings here.</p>`;
    return;
  }

  detailsList.innerHTML = spread.cards
    .map(function(readingCard, index) {
      const cardData = tarotCards[readingCard.name];
      const meaningSet = getMeaningSet(
        cardData,
        readingCard.orientation,
        spread.theme
      );

      const meaningHTML = meaningSet.meaning
        ? `<p><strong>${escapeHtml(meaningSet.label)}:</strong> ${escapeHtml(
            meaningSet.meaning
          )}</p>`
        : `<p><strong>${escapeHtml(meaningSet.label)}:</strong> ${escapeHtml(
            meaningSet.keywords.join(", ")
          )}</p>`;

      let clarifierNote = "";
      let clarifiedByNote = "";
      let detailClass = "";

      if (readingCard.clarifiesCardId !== null) {
        const clarifiedCard = spread.cards.find(function(card) {
          return card.id === readingCard.clarifiesCardId;
        });

        const clarifiedName = clarifiedCard
          ? clarifiedCard.name
          : "another card";

        detailClass = "card-detail-clarifier";

        const clarifierQuestion = getClarifierQuestion(
          cardData,
          readingCard.name,
          clarifiedName
        );

        clarifierNote = `
          <p><strong>Clarifies:</strong> ${escapeHtml(clarifiedName)}</p>
          <p><strong>As a clarifier:</strong> ${escapeHtml(
            getClarifierMeaning(
              cardData,
              readingCard.orientation,
              readingCard.name,
              clarifiedName
            ) ||
              "No separate clarifier description has been added for this card yet."
          )}</p>
        `;
      } else {
        const clarifyingCards = getClarifiersForCard(
          readingCard.id,
          spread
        );

        if (clarifyingCards.length > 0) {
          clarifiedByNote = `
            <p class="clarified-by-note">
              <strong>Clarified by:</strong>
              ${escapeHtml(
                clarifyingCards
                  .map(function(card) {
                    return `${card.name} (${card.orientation})`;
                  })
                  .join(", ")
              )}
            </p>
          `;
        }
      }

      return `
        <article class="card-detail-entry ${detailClass}">
          <h3>
            ${index + 1}. ${escapeHtml(readingCard.name)}
            (${escapeHtml(readingCard.orientation)})
          </h3>
          ${clarifiedByNote}
          ${clarifierNote}
          <p><strong>Suit:</strong> ${escapeHtml(cardData.suit)}</p>
          <p><strong>Element:</strong> ${escapeHtml(cardData.element)}</p>
          <p><strong>Astrology:</strong> ${escapeHtml(
            (cardData.astrology || []).join(", ")
          )}</p>
          <p><strong>General keywords:</strong> ${escapeHtml(
            (cardData.keywords || []).join(", ")
          )}</p>
          ${meaningHTML}
          ${cardData.imagery ? `<p><strong>RWS imagery:</strong> ${escapeHtml(cardData.imagery)}</p>` : ""}
          ${renderFollowUpPromptBox(readingCard, spread)}
        </article>
      `;
    })
    .join("");
}

function updateCardList() {
  const cardList = document.getElementById("cardList");
  const spread = getActiveSpread();

  if (!cardList || !spread) return;

  if (spread.cards.length === 0) {
    cardList.innerHTML = `<li>No cards entered yet.</li>`;
    return;
  }

  cardList.innerHTML = spread.cards
    .map(function(card, index) {
      const clarifierLabel =
        card.clarifiesCardId !== null ? " — clarifier" : "";

      return `
        <li>
          ${index + 1}. ${escapeHtml(card.name)}
          (${escapeHtml(card.orientation)})${clarifierLabel}
        </li>
      `;
    })
    .join("");
}

function updatePatterns() {
  const patterns = document.getElementById("patterns");
  const spread = getActiveSpread();

  if (!patterns || !spread) return;

  const analysis = analyzeSpread(spread);

  if (analysis.totalCards === 0) {
    patterns.innerHTML = `<p>No cards entered yet.</p>`;
    return;
  }

  let patternHTML = `
    <p><strong>Total cards:</strong> ${analysis.totalCards}</p>
    <p><strong>Reversals:</strong> ${analysis.reversedCount}</p>
    <p><strong>Major Arcana:</strong> ${analysis.majorCount}</p>
  `;

  if (analysis.messages.length === 0) {
    patternHTML += `
      <p>
        No major patterns detected yet. Add more cards to build the reading.
      </p>
    `;
  }

  analysis.messages.forEach(function(pattern) {
    patternHTML += `
      <div class="pattern-message pattern-${pattern.level}">
        <span class="pattern-label">${escapeHtml(pattern.label)}</span>
        <h3>${escapeHtml(pattern.title)}</h3>
        <p>${escapeHtml(pattern.message)}</p>
      </div>
    `;
  });

  patterns.innerHTML = patternHTML;
}

function renderAll() {
  renderSpreadNavigation();
  renderReading();
  updateCardList();
  updatePatterns();
  renderCardDetailsList();
  renderSelectedCardDetails();
}

/* -------------------------------------------------------------------------- */
/* TXT export                                                                 */
/* -------------------------------------------------------------------------- */

function getCardExportText(readingCard, index, spread) {
  const cardData = tarotCards[readingCard.name];
  const meaningSet = getMeaningSet(
    cardData,
    readingCard.orientation,
    spread.theme
  );

  const lines = [
    `${index + 1}. ${readingCard.name} — ${capitalize(
      readingCard.orientation
    )}`,
    `   Suit: ${cardData.suit}`,
    `   Element: ${cardData.element}`,
    `   Astrology: ${(cardData.astrology || []).join(", ")}`,
    `   General keywords: ${(cardData.keywords || []).join(", ")}`
  ];

  if (meaningSet.meaning) {
    lines.push(`   ${meaningSet.label}: ${meaningSet.meaning}`);
  } else {
    lines.push(
      `   ${meaningSet.label}: ${meaningSet.keywords.join(", ")}`
    );
  }

  if (cardData.imagery) {
    lines.push(`   RWS imagery: ${cardData.imagery}`);
  }

  if (readingCard.clarifiesCardId !== null) {
    const clarifiedCard = spread.cards.find(function(card) {
      return card.id === readingCard.clarifiesCardId;
    });

    lines.push(
      `   Clarifies: ${
        clarifiedCard ? clarifiedCard.name : "another card"
      }`
    );

    const clarifierMeaning = getClarifierMeaning(
      cardData,
      readingCard.orientation,
      readingCard.name,
      clarifiedCard ? clarifiedCard.name : null
    );

    if (clarifierMeaning) {
      lines.push(`   As a clarifier: ${clarifierMeaning}`);
    }

    const clarifierQuestion = getClarifierQuestion(
      cardData,
      readingCard.name,
      clarifiedCard ? clarifiedCard.name : null
    );

    if (clarifierQuestion) {
      lines.push(`   Question to ask: ${clarifierQuestion}`);
    }
  } else if (cardData.clarifierQuestion) {
    lines.push(`   Question to ask: ${cardData.clarifierQuestion}`);
  }

  return lines.join("\n");
}

function buildSpreadText(spread) {
  const parentSpread = spread.parentSpreadId
    ? getSpreadById(spread.parentSpreadId)
    : null;

  const analysis = analyzeSpread(spread);
  const lines = [
    "=".repeat(60),
    `READING #${spread.number}`
  ];

  if (parentSpread) {
    lines.push(`CLARIFYING READING #${parentSpread.number}`);
  } else if (spread.type === "followup") {
    lines.push("FOLLOW-UP READING");
  }

  lines.push("=".repeat(60), "");

  if (parentSpread) {
    lines.push(
      "ORIGINAL QUESTION:",
      parentSpread.question.trim() || "No original question entered.",
      "",
      "CLARIFYING QUESTION:",
      spread.question.trim() || "No clarifying question entered."
    );
  } else {
    lines.push(
      "QUESTION:",
      spread.question.trim() || "No question entered."
    );
  }

  lines.push("", `THEME: ${capitalize(spread.theme)}`, "", "CARDS:");

  if (spread.cards.length === 0) {
    lines.push("No cards entered.");
  } else {
    spread.cards.forEach(function(card, index) {
      lines.push(getCardExportText(card, index, spread), "");
    });
  }

  lines.push("PATTERNS:");

  if (analysis.messages.length === 0) {
    lines.push("No major repeated patterns detected.");
  } else {
    analysis.messages.forEach(function(pattern) {
      lines.push(`- ${pattern.title}: ${pattern.message}`);
    });
  }

  lines.push(
    "",
    "SUMMARY:",
    generateSpreadSummary(spread),
    ""
  );

  return lines.join("\n");
}

function buildReadingTextFile() {
  const date = new Date(readingSession.createdAt);

  const lines = [
    "RAVEN'S TAROT READING",
    `Created: ${date.toLocaleString()}`,
    ""
  ];

  readingSession.spreads.forEach(function(spread) {
    lines.push(buildSpreadText(spread));
  });

  lines.push(
    "=".repeat(60),
    "FULL READING SUMMARY",
    "=".repeat(60),
    "",
    generateFullReadingSummary(),
    ""
  );

  return lines.join("\n");
}

function downloadReadingSummary() {
  const hasCards = readingSession.spreads.some(function(spread) {
    return spread.cards.length > 0;
  });

  if (!hasCards) {
    alert("Add at least one card before downloading the summary.");
    return;
  }

  const textContent = buildReadingTextFile();
  const fileBlob = new Blob([textContent], {
    type: "text/plain;charset=utf-8"
  });

  const fileUrl = URL.createObjectURL(fileBlob);
  const downloadLink = document.createElement("a");

  const firstQuestion =
    readingSession.spreads[0]?.question?.trim() || "tarot-reading";

  const safeTitle = firstQuestion
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase()
    .slice(0, 60) || "tarot-reading";

  downloadLink.href = fileUrl;
  downloadLink.download = `${safeTitle}.txt`;

  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();

  URL.revokeObjectURL(fileUrl);
}

/* -------------------------------------------------------------------------- */
/* Animated Enter button                                                      */
/* -------------------------------------------------------------------------- */

const enterButtonFrames = {
  idle: "assets/buttons/enter-unpressed.gif",
  pressedOne: "assets/buttons/enter-pressed-1.gif",
  pressedTwo: "assets/buttons/enter-pressed-2.gif"
};

let enterButtonAnimationTimeouts = [];

function preloadEnterButtonFrames() {
  Object.values(enterButtonFrames).forEach(function(imagePath) {
    const image = new Image();
    image.src = imagePath;
  });
}

function animateEnterButton(imageId = "enterButtonImage") {
  const enterButtonImage = document.getElementById(imageId);

  if (!enterButtonImage) return;

  enterButtonAnimationTimeouts.forEach(function(timeoutId) {
    clearTimeout(timeoutId);
  });

  enterButtonAnimationTimeouts = [];
  enterButtonImage.src = enterButtonFrames.pressedOne;

  enterButtonAnimationTimeouts.push(
    setTimeout(function() {
      enterButtonImage.src = enterButtonFrames.pressedTwo;
    }, 240)
  );

  enterButtonAnimationTimeouts.push(
    setTimeout(function() {
      enterButtonImage.src = enterButtonFrames.idle;
    }, 480)
  );
}

function submitCardWithAnimation() {
  animateEnterButton();
  addCard();
}

/* -------------------------------------------------------------------------- */
/* Event listeners and initial render                                         */
/* -------------------------------------------------------------------------- */

function initializeTarotReader() {
  const cardInput = document.getElementById("cardName");
  const themeSelect = document.getElementById("readingTheme");
  const enterButton = document.getElementById("addCardButton");

  preloadEnterButtonFrames();

  if (enterButton) {
    enterButton.addEventListener("click", submitCardWithAnimation);
  }

  if (cardInput) {
    cardInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        submitCardWithAnimation();
      }
    });
  }

  if (themeSelect) {
    themeSelect.addEventListener("change", updateTheme);
    themeSelect.value = getActiveTheme();
  }

  renderAll();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeTarotReader);
} else {
  initializeTarotReader();
}
