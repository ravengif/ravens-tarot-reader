 function normalizeText(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
    }

      function createCardAliases() {
  const aliases = {};

  const numberWords = {
    "ace": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9",
    "ten": "10"
  };

  Object.keys(tarotCards).forEach(function(cardName) {
    const normalizedName = normalizeText(cardName);

    // Always include the exact normalized name.
    aliases[normalizedName] = cardName;

    // Major Arcana with "The" removed.
    if (normalizedName.startsWith("the ")) {
      const withoutThe = normalizedName.replace("the ", "");
      aliases[withoutThe] = cardName;
    }

    // Alternate spelling.
    if (normalizedName === "judgment") {
      aliases["judgement"] = cardName;
    }

    // Wheel of Fortune shortcuts.
    if (normalizedName === "wheel of fortune") {
      aliases["wheel fortune"] = cardName;
      aliases["the wheel"] = cardName;
      aliases["wheel"] = cardName;
    }

    // Hanged Man shortcuts.
    if (normalizedName === "the hanged man") {
      aliases["hanged man"] = cardName;
      aliases["the hanged one"] = cardName;
      aliases["hanged one"] = cardName;
    }

    // Minor Arcana number aliases.
    Object.keys(numberWords).forEach(function(wordNumber) {
      const digitNumber = numberWords[wordNumber];

      if (normalizedName.startsWith(wordNumber + " of ")) {
        const suit = normalizedName.replace(wordNumber + " of ", "");

        aliases[`${digitNumber} of ${suit}`] = cardName;
        aliases[`${wordNumber} ${suit}`] = cardName;
        aliases[`${digitNumber} ${suit}`] = cardName;
        aliases[`${suit} ${wordNumber}`] = cardName;
        aliases[`${suit} ${digitNumber}`] = cardName;

        // Singular suit versions.
        if (suit.endsWith("s")) {
          const singularSuit = suit.slice(0, -1);

          aliases[`${wordNumber} of ${singularSuit}`] = cardName;
          aliases[`${digitNumber} of ${singularSuit}`] = cardName;
          aliases[`${wordNumber} ${singularSuit}`] = cardName;
          aliases[`${digitNumber} ${singularSuit}`] = cardName;
          aliases[`${singularSuit} ${wordNumber}`] = cardName;
          aliases[`${singularSuit} ${digitNumber}`] = cardName;
        }
      }
    });

    // Court card shortcuts.
    const courtTitles = ["page", "knight", "queen", "king"];

    courtTitles.forEach(function(courtTitle) {
      if (normalizedName.startsWith(courtTitle + " of ")) {
        const suit = normalizedName.replace(courtTitle + " of ", "");

        aliases[`${courtTitle} ${suit}`] = cardName;
        aliases[`${suit} ${courtTitle}`] = cardName;

        if (suit.endsWith("s")) {
          const singularSuit = suit.slice(0, -1);

          aliases[`${courtTitle} of ${singularSuit}`] = cardName;
          aliases[`${courtTitle} ${singularSuit}`] = cardName;
          aliases[`${singularSuit} ${courtTitle}`] = cardName;
        }
      }
    });

    // Ace shortcuts.
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
const currentReading = [];

   function addCard() {
      const cardName = document.getElementById("cardName").value;
      const orientation = document.getElementById("orientation").value;
      const reading = document.getElementById("reading");

     const normalizedInput = normalizeText(cardName);
     const matchingCardName = cardAliases[normalizedInput];
     const card = tarotCards[matchingCardName];

      if (!card) {
  alert("Oh shit, I don't know that one. Try again?");
  return;
}

const orientationKeywords = orientation === "upright" ? card.upright : card.reversed;
const imageClass = orientation === "reversed" ? "card-image reversed-card-image" : "card-image";

reading.innerHTML += `
  <div class="card-entry">
    <div class="card-image-wrap">
      <img class="${imageClass}" src="${card.image}" alt="${matchingCardName}">
    </div>

    <div class="card-text">
      <h2>${matchingCardName} (${orientation})</h2>
      <p><strong>Description:</strong> ${card.description}</p>
      <p><strong>Suit:</strong> ${card.suit}</p>
      <p><strong>Element:</strong> ${card.element}</p>
      <p><strong>Astrology:</strong> ${card.astrology.join(", ")}</p>
      <p><strong>General keywords:</strong> ${card.keywords.join(", ")}</p>
      <p><strong>${orientation} keywords:</strong> ${orientationKeywords.join(", ")}</p>
    </div>
  </div>
`;

currentReading.push({
  name: matchingCardName,
  orientation: orientation,
  suit: card.suit,
  element: card.element,
  astrology: card.astrology
});

updateCardList();
updatePatterns();

      document.getElementById("cardName").value = "";
    }

  function updateCardList() {
  const cardList = document.getElementById("cardList");

  cardList.innerHTML = currentReading
    .map(function(card, index) {
      return `<li>${index + 1}. ${card.name} (${card.orientation})</li>`;
    })
    .join("");
}

function getPatternLevel(count) {
  if (count >= 5) {
    return {
      level: "red",
      score: 3,
      label: "Dominant pattern"
    };
  }

  if (count >= 3) {
    return {
      level: "yellow",
      score: 2,
      label: "Clear pattern"
    };
  }

  if (count >= 2) {
    return {
      level: "green",
      score: 1,
      label: "Possible pattern"
    };
  }

  return null;
}

function getCardNumber(cardName) {
  const numberWords = [
    "Ace",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten"
  ];

  for (let i = 0; i < numberWords.length; i++) {
    if (cardName.startsWith(numberWords[i] + " of ")) {
      return numberWords[i];
    }
  }

  return null;
}

function updatePatterns() {
  const patterns = document.getElementById("patterns");
  const totalCards = currentReading.length;

  if (totalCards === 0) {
    patterns.innerHTML = `<p>No cards entered yet.</p>`;
    return;
  }

  const reversedCount = currentReading.filter(function(card) {
    return card.orientation === "reversed";
  }).length;

  const majorCount = currentReading.filter(function(card) {
    return card.suit === "Major Arcana";
  }).length;

  const suitCounts = {};
  const elementCounts = {};
  const numberCounts = {};

  currentReading.forEach(function(card) {
    suitCounts[card.suit] = (suitCounts[card.suit] || 0) + 1;
    elementCounts[card.element] = (elementCounts[card.element] || 0) + 1;

    const cardNumber = getCardNumber(card.name);

    if (cardNumber) {
      numberCounts[cardNumber] = (numberCounts[cardNumber] || 0) + 1;
    }
  });

  const patternMessages = [];

  const majorLevel = getPatternLevel(majorCount);

  if (majorLevel) {
    patternMessages.push({
      level: majorLevel.level,
      score: majorLevel.score,
      count: majorCount,
      label: majorLevel.label,
      title: `${majorCount} Major Arcana cards`,
      message: "Lots of Major Arcana here. Something important may be trying to come through. This could point to a major lesson, turning point, identity shift, or a situation that feels bigger than ordinary day-to-day choices."
    });
  }

  const reversalLevel = getPatternLevel(reversedCount);

  if (reversalLevel) {
    patternMessages.push({
      level: reversalLevel.level,
      score: reversalLevel.score,
      count: reversedCount,
      label: reversalLevel.label,
      title: `${reversedCount} reversed cards`,
      message: "Lots of reversals here. The energy may be blocked, internalized, delayed, resisted, or happening beneath the surface."
    });
  }

  Object.keys(suitCounts).forEach(function(suit) {
  if (suit === "Major Arcana") {
    return;
  }

  const count = suitCounts[suit];
  const patternLevel = getPatternLevel(count);

  if (!patternLevel) {
    return;
  }

  let message = "";

    if (suit === "Wands") {
      message = "Lots of Wands points to fire, desire, action, creativity, ambition, momentum, confidence, conflict, or instinct. The reading may be asking what someone wants and what they are willing to do about it.";
    }

    if (suit === "Cups") {
      message = "Lots of Cups points to emotion, relationships, intuition, memory, grief, longing, or attachment. The reading may be centered on what is felt rather than what is objectively clear.";
    }

    if (suit === "Swords") {
      message = "Lots of Swords points to thoughts, communication, fear, truth, decisions, anxiety, or conflict. The reading may be asking what story the mind is telling and whether it is true.";
    }

    if (suit === "Pentacles") {
      message = "Lots of Pentacles points to practical reality: money, work, health, home, resources, consistency, or long-term stability. The reading may be asking what is actually sustainable.";
    }

    if (suit === "Major Arcana") {
      message = "Lots of Major Arcana suggests this reading may be pointing to something larger than a daily mood. There may be a major lesson, turning point, identity shift, or deeper spiritual pattern at play.";
    }

    patternMessages.push({
      level: patternLevel.level,
      score: patternLevel.score,
      count: count,
      label: patternLevel.label,
      title: `${count} ${suit} cards`,
      message: message
    });
  });

  Object.keys(elementCounts).forEach(function(element) {
    const count = elementCounts[element];
    const patternLevel = getPatternLevel(count);

    if (!patternLevel) {
      return;
    }

    let message = "";

    if (element === "Fire") {
      message = "Lots of Fire energy can point to passion, urgency, confidence, ambition, action, anger, or conflict. It can be motivating, but too much Fire can become impulsive, reactive, or burned out. Astrologically, Fire can echo 1st house identity, 5th house creativity or romance, and 9th house belief, travel, risk, or expansion themes.";
    }

    if (element === "Water") {
      message = "Lots of Water energy can point to feelings, memory, relationships, dreams, grief, attachment, or intuition. It can be emotionally honest, but too much Water can blur boundaries or make it hard to separate intuition from fear. Astrologically, Water can echo 4th house home and family, 8th house intimacy or shadow work, and 12th house subconscious or spiritual themes.";
    }

    if (element === "Air") {
      message = "Lots of Air energy can point to thoughts, communication, decisions, mental pressure, analysis, or truth. It can bring insight, but too much Air can become overthinking or detachment. Astrologically, Air can echo 3rd house communication, 7th house relationships or contracts, and 11th house friendships, networks, or community themes.";
    }

    if (element === "Earth") {
      message = "Lots of Earth energy can point to money, work, the body, home, resources, routine, and long-term security. It can be grounding, but too much Earth can become stagnation or fear of change. Astrologically, Earth can echo 2nd house money and values, 6th house work or health routines, and 10th house career, status, or responsibility themes.";
    }

    patternMessages.push({
      level: patternLevel.level,
      score: patternLevel.score,
      count: count,
      label: patternLevel.label,
      title: `${count} ${element} cards`,
      message: message
    });
  });

  Object.keys(numberCounts).forEach(function(number) {
    const count = numberCounts[number];
    const patternLevel = getPatternLevel(count);

    if (!patternLevel) {
      return;
    }

    const numberMeanings = {
      "Ace": "Ooh! Aces point to beginnings, raw potential, and something new trying to emerge. Something isn't here yet, BUT it's on the horizon",
      "Two": "Twos point to choice, duality, balance, partnership, inner conflict, or the need to weigh two sides of something. A fork in a road, or a shaking of hands.",
      "Three": "Threes suggest growth, expression, collaboration, or initial results. Whatever it is, it isn't just about you.",
      "Four": "Fours point to structure, stability, foundation, and containment. This can be grounding, but it can also show where something has become too stagnant.",
      "Five": "Fives often show conflict, instability, disruption, challenge, or growing pains. Something may be unstable, but the disruption can reveal what needs to change.",
      "Six": "Sixes often talk about to healing, support, exchange, repair, memory, recognition, movement toward harmony... or the lack of these concepts.",
      "Seven": "Sevens suggest complexity, assessment, defense, mystery, strategy, uncertainty, or the need to pause and evaluate to get PAST the unknown.",
      "Eight": "Eights point to movement, effort, restriction, momentum, pressure, or a process already in motion. Let's GOOOOOOOO (or not, if reversed).",
      "Nine": "Nines often show culmination, intensity, solitude, near-completion, or a situation reaching emotional, mental, or material weight. We are almost there...",
      "Ten": "Tens show a cycle reaching its limit. This can be fulfillment, overload, collapse, legacy, or the point where something must transform. The end of a cycle."
    };

    patternMessages.push({
      level: patternLevel.level,
      score: patternLevel.score,
      count: count,
      label: patternLevel.label,
      title: `${count} ${number}s`,
      message: numberMeanings[number]
    });
  });

  patternMessages.sort(function(a, b) {
    if (b.score !== a.score) {
      return b.score - a.score;
    }

    return b.count - a.count;
  });

  let patternHTML = `
    <p><strong>Total cards:</strong> ${totalCards}</p>
    <p><strong>Reversals:</strong> ${reversedCount}</p>
    <p><strong>Major Arcana:</strong> ${majorCount}</p>
  `;

  if (patternMessages.length === 0) {
    patternHTML += `<p>No major patterns detected yet. Add more cards to build the reading.</p>`;
  }

  patternMessages.forEach(function(pattern) {
    patternHTML += `
      <div class="pattern-message pattern-${pattern.level}">
        <span class="pattern-label">${pattern.label}</span>
        <h3>${pattern.title}</h3>
        <p>${pattern.message}</p>
      </div>
    `;
  });

  patterns.innerHTML = patternHTML;
}
      document.getElementById("cardName").addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        addCard();
      }
    });