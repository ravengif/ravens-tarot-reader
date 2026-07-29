//note
const tarotCards = {
  "The Fool": {
    suit: "Major Arcana",
    element: "Air",
    astrology: ["Uranus"],
    image: "images/the-fool.jpg",
    keywords: ["beginnings", "risk", "freedom", "unknown"],
    upright: ["fresh start", "innocence", "spontaneity", "leap of faith"],
    reversed: ["recklessness", "naivety", "poor planning", "hesitation"],
    themeKeywords: {
      love: ["new connection", "uncertainty", "casual energy", "emotional openness"],
      career: ["fresh start", "new role", "leap of faith", "lack of experience"],
      feelings: ["curiosity", "interest", "playfulness", "not fully serious yet"],
      advice: ["explore", "but do not abandon common sense"],
      outcome: ["open-ended path", "not a finalized result"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this usually signifies a new connection, uncertainty, casual energy, emotional openness. It's just getting started, so there isn't a ton of info to pull on yet; keep this in mind as you go on in the reading. ",
        reversed: "In love, since it's reversed, the potential or new beginning may be blocked, delayed, avoided, or something in this situatuon is affected by or distorted through recklessness, naivety, poor planning, hesitation."
      },
      career: {
        upright: "In career, this points to fresh start, new role, leap of faith, lack of experience. This is a GREAT card to pull if you're job hunting, especially if paired with positive pentacle cards.",
        reversed: "In career, this can still point to fresh start, new role, leap of faith, lack of experience, but reversed it may show friction, delay, misalignment, or a practical block around recklessness, naivety, poor planning, hesitation."
      },
      feelings: {
        upright: "For feelings, this points to curiosity, interest, playfulness, not fully serious yet. Pretty common to pull with new crushes and connections, but it doesn't confirm anything romantic.",
        reversed: "For feelings, this more likely means the subject is not fully serious yet, resisting a new start, or the subject is tangled with recklessness, naivety, poor planning, and/or hesitation."
      },
      advice: {
        upright: "As advice, go forth and explore, but do not abandon common sense.",
        reversed: "As advice, the warning is to check where recklessness, naivety, poor planning, hesitation may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to open-ended path, not a finalized result. Nothing is set in stone yet, and the world is yours to explore. ",
        reversed: "As an outcome, the potential outcome is tainted or currently prevented through delay, blockage, avoidance, or the unresolved pattern of recklessness, naivety, poor planning, hesitation."
      }
    },
    clarifier: {
      upright: "Expands the original card by adding a fresh-start, open-ended, or experimental quality. It narrows the clarification toward risk, innocence, spontaneity, or a situation that has not matured enough to be pinned down. As a clarifier, it often redirects a heavy reading away from finality and toward possibility.",
      reversed: "Complicates the original card by showing  avoidance of responsibility, reckless timing, or fear of beginning as it relates to the attatched card's meaning. It narrows the issue to poor planning or hesitation around a leap. Reversed, it doesn't mean the original card is not wrong, but the approach is immature or underprepared."
    }
  },

  "The Magician": {
    suit: "Major Arcana",
    element: "Air",
    astrology: ["Mercury"],
    image: "images/the-magician.jpg",
    keywords: ["willpower", "skill", "manifestation", "tools"],
    upright: ["focused action", "resourcefulness", "creation", "personal power"],
    reversed: ["manipulation", "scattered energy", "unused potential", "trickery"],
    themeKeywords: {
      love: ["attraction through charm", "communication", "intentional pursuit"],
      career: ["competence", "visibility", "using resources well"],
      feelings: ["focused interest", "desire to act", "persuasive energy"],
      advice: ["use what you have and be direct"],
      outcome: ["progress through effort", "not luck"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to attraction through charm, communication, intentional pursuit. It can also mean you or the subject have the willpower to shape the situation at this time. ",
        reversed: "In love, when reversed, this could say feelings may be blocked, delayed, avoided, or the perception of feelings are being distorted through manipulation, scattered energy, unused potential, trickery."
      },
      career: {
        upright: "In career, this points to competence, visibility, using resources well.",
        reversed: "In career this can point to a tangible block around manipulation, scattered energy, unused potential, trickery."
      },
      feelings: {
        upright: "For feelings, this points to focused interest, desire to act, persuasive energy.",
        reversed: "For feelings, this can still point to focused interest, desire to act, persuasive energy, but reversed it may be internalized, resisted, hidden, or tangled with manipulation, scattered energy, unused potential, trickery. "
      },
      advice: {
        upright: "As advice, use what you have and be direct, OR you have the willpower to shape the outcome at this point in time. ",
        reversed: "As advice, the warning is to check where manipulation, scattered energy, unused potential, trickery may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to progress through effort, not luck.",
        reversed: "As an outcome, this can still point to progress through effort, but it may arrive or be prevented through delay, blockage, avoidance, or the unresolved pattern of manipulation, scattered energy, unused potential, trickery."
      }
    },
    clarifier: {
      upright: "Confirms and expands the original card by showing agency, skill, communication, and available tools. The subject has the power here. It narrows the message toward what can be intentionally shaped through action. As a clarifier, it says the situation is not only happening to you; someone, whether that is you or the subject of this read, has influence over how it unfolds.",
      reversed: "Complicates the original card by pointing to scattered will, unused tools, mixed signals, manipulation, or performance without substance. It narrows the issue to whether someone is using their power clearly and ethically. Reversed, it may soften blame by showing insecurity or lack of confidence instead of malice."
    }
  },

  "The High Priestess": {
    suit: "Major Arcana",
    element: "Water",
    astrology: ["Moon"],
    image: "images/the-high-priestess.jpg",
    keywords: ["intuition", "mystery", "inner knowing", "hidden truth"],
    upright: ["inner wisdom", "subconscious insight", "spiritual awareness", "stillness"],
    reversed: ["blocked intuition", "secrets", "confusion", "disconnection from self"],
    themeKeywords: {
      love: ["unspoken feelings", "mystery", "emotional distance", "intuition needed"],
      career: ["wait", "research", "observe politics"],
      feelings: ["private emotions", "guardedness", "quiet attachment"],
      advice: ["listen and watch before acting"],
      outcome: ["unclear for now; more will be revealed"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to unspoken feelings, mystery, emotional distance, intuition needed.",
        reversed: "In love, this can still point to unspoken feelings, mystery, emotional distance, intuition needed, but reversed it may be blocked, delayed, avoided, or distorted through blocked intuition, secrets, confusion, disconnection from self."
      },
      career: {
        upright: "In career, this points to wait, research, observe politics.",
        reversed: "In career, this can still point to wait, research, observe politics, but reversed it may show friction, delay, misalignment, or a practical block around blocked intuition, secrets, confusion, disconnection from self."
      },
      feelings: {
        upright: "For feelings, this points to private emotions, guardedness, quiet attachment.",
        reversed: "For feelings, this can still point to private emotions, guardedness, quiet attachment, but reversed it may be internalized, resisted, hidden, or tangled with blocked intuition, secrets, confusion, disconnection from self."
      },
      advice: {
        upright: "As advice, listen and watch before acting.",
        reversed: "As advice, listen and watch before acting; reversed, the warning is to check where blocked intuition, secrets, confusion, disconnection from self may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to unclear for now; more will be revealed.",
        reversed: "As an outcome, this can still point to unclear for now; more will be revealed, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of blocked intuition, secrets, confusion, disconnection from self."
      }
    },
    clarifier: {
      upright: "Deepens the original card by adding intuition, silence, mystery, or hidden layers. It narrows the message toward what is sensed but not yet proven. As a clarifier, it usually says to stop forcing a visible answer and pay attention to timing, patterns, and inner knowing.",
      reversed: "Complicates the original card by showing blocked intuition, secrecy, emotional withholding, or confusion between fear and instinct. It narrows the issue to what is being ignored, hidden, or misread. Reversed, it can redirect the reading from mystical certainty back to checking facts and grounding intuition."
    }
  },

  "The Empress": {
    suit: "Major Arcana",
    element: "Earth",
    astrology: ["Venus"],
    image: "images/the-empress.jpg",
    keywords: ["growth", "nurture", "creation", "abundance"],
    upright: ["fertility", "creativity", "comfort", "receiving"],
    reversed: ["dependence", "creative block", "neglect", "overgiving"],
    themeKeywords: {
      love: ["affection", "sensuality", "emotional warmth", "growth"],
      career: ["creativity", "abundance", "supportive environment"],
      feelings: ["admiration", "attraction", "tenderness"],
      advice: ["nurture without overextending"],
      outcome: ["gradual growth", "comfort", "or creation"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to affection, sensuality, emotional warmth, growth.",
        reversed: "In love, this can still point to affection, sensuality, emotional warmth, growth, but reversed it may be blocked, delayed, avoided, or distorted through dependence, creative block, neglect, overgiving."
      },
      career: {
        upright: "In career, this points to creativity, abundance, supportive environment.",
        reversed: "In career, this can still point to creativity, abundance, supportive environment, but reversed it may show friction, delay, misalignment, or a practical block around dependence, creative block, neglect, overgiving."
      },
      feelings: {
        upright: "For feelings, this points to admiration, attraction, tenderness.",
        reversed: "For feelings, this can still point to admiration, attraction, tenderness, but reversed it may be internalized, resisted, hidden, or tangled with dependence, creative block, neglect, overgiving."
      },
      advice: {
        upright: "As advice, nurture without overextending.",
        reversed: "As advice, nurture without overextending; reversed, the warning is to check where dependence, creative block, neglect, overgiving may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to gradual growth, comfort, or creation.",
        reversed: "As an outcome, this can still point to gradual growth, comfort, or creation, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of dependence, creative block, neglect, overgiving."
      }
    },
    clarifier: {
      upright: "Softens and expands the original card by adding growth, care, attraction, embodiment, or creative fertility. It narrows the message toward what needs nurturing instead of forcing. As a clarifier, it often confirms that something has potential if it is cared for consistently.",
      reversed: "Complicates the original card through overgiving, smothering, neglect, insecurity, creative blockage, or dependence on validation. It narrows the issue to whether care is balanced and healthy. Reversed, it may redirect attention toward self-worth and the body rather than the external situation."
    }
  },

  "The Emperor": {
    suit: "Major Arcana",
    element: "Fire",
    astrology: ["Aries"],
    image: "images/the-emperor.jpg",
    keywords: ["structure", "authority", "stability", "leadership"],
    upright: ["discipline", "protection", "boundaries", "order"],
    reversed: ["control issues", "rigidity", "domination", "lack of structure"],
    themeKeywords: {
      love: ["commitment", "protection", "control", "emotional guardedness"],
      career: ["leadership", "hierarchy", "rules", "discipline"],
      feelings: ["serious but contained"],
      advice: ["set boundaries and make a plan"],
      outcome: ["structure", "decision", "or firm stance"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to commitment, protection, control, emotional guardedness.",
        reversed: "In love, this can still point to commitment, protection, control, emotional guardedness, but reversed it may be blocked, delayed, avoided, or distorted through control issues, rigidity, domination, lack of structure."
      },
      career: {
        upright: "In career, this points to leadership, hierarchy, rules, discipline.",
        reversed: "In career, this can still point to leadership, hierarchy, rules, discipline, but reversed it may show friction, delay, misalignment, or a practical block around control issues, rigidity, domination, lack of structure."
      },
      feelings: {
        upright: "For feelings, this points to serious but contained.",
        reversed: "For feelings, this can still point to serious but contained, but reversed it may be internalized, resisted, hidden, or tangled with control issues, rigidity, domination, lack of structure."
      },
      advice: {
        upright: "As advice, set boundaries and make a plan.",
        reversed: "As advice, set boundaries and make a plan; reversed, the warning is to check where control issues, rigidity, domination, lack of structure may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to structure, decision, or firm stance.",
        reversed: "As an outcome, this can still point to structure, decision, or firm stance, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of control issues, rigidity, domination, lack of structure."
      }
    },
    clarifier: {
      upright: "Narrows the original card toward structure, boundaries, control, authority, discipline, or a firm decision. It can stabilize chaotic cards by adding order. As a clarifier, it usually asks where stronger containment, leadership, or responsibility is needed.",
      reversed: "Complicates the original card through rigidity, control issues, emotional shutdown, stubbornness, or misuse of authority. It narrows the issue to fear of vulnerability or overdependence on rules. Reversed, it may show weak boundaries just as easily as excessive control."
    }
  },

  "The Hierophant": {
    suit: "Major Arcana",
    element: "Earth",
    astrology: ["Taurus"],
    image: "images/the-hierophant.jpg",
    keywords: ["tradition", "belief", "teaching", "institutions"],
    upright: ["guidance", "spiritual structure", "conformity", "mentorship"],
    reversed: ["rebellion", "personal belief", "dogma", "questioning tradition"],
    themeKeywords: {
      love: ["commitment", "marriage themes", "traditional expectations"],
      career: ["institutions", "mentors", "formal learning"],
      feelings: ["serious", "respectful", "possibly conventional"],
      advice: ["seek guidance but keep discernment"],
      outcome: ["formalization", "lesson", "or value test"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to commitment, marriage themes, traditional expectations.",
        reversed: "In love, this can still point to commitment, marriage themes, traditional expectations, but reversed it may be blocked, delayed, avoided, or distorted through rebellion, personal belief, dogma, questioning tradition."
      },
      career: {
        upright: "In career, this points to institutions, mentors, formal learning.",
        reversed: "In career, this can still point to institutions, mentors, formal learning, but reversed it may show friction, delay, misalignment, or a practical block around rebellion, personal belief, dogma, questioning tradition."
      },
      feelings: {
        upright: "For feelings, this points to serious, respectful, possibly conventional.",
        reversed: "For feelings, this can still point to serious, respectful, possibly conventional, but reversed it may be internalized, resisted, hidden, or tangled with rebellion, personal belief, dogma, questioning tradition."
      },
      advice: {
        upright: "As advice, seek guidance but keep discernment.",
        reversed: "As advice, seek guidance but keep discernment; reversed, the warning is to check where rebellion, personal belief, dogma, questioning tradition may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to formalization, lesson, or value test.",
        reversed: "As an outcome, this can still point to formalization, lesson, or value test, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of rebellion, personal belief, dogma, questioning tradition."
      }
    },
    clarifier: {
      upright: "Confirms tradition, commitment, teaching, institutions, values, and doing things in a recognized way. It narrows the original card toward shared beliefs, rules, vows, or formal guidance. As a clarifier, it can turn a personal issue into a lesson about integrity or commitment.",
      reversed: "Complicates the original card by showing dogma, pressure to conform, spiritual bypassing, outdated expectations, or rebellion against rules. It narrows the issue to whether tradition is supportive or restrictive. Reversed, it may redirect the reading toward personal truth over inherited rules."
    }
  },

  "The Lovers": {
    suit: "Major Arcana",
    element: "Air",
    astrology: ["Gemini"],
    image: "images/the-lovers.jpg",
    keywords: ["choice", "union", "values", "connection"],
    upright: ["alignment", "partnership", "love", "meaningful decision"],
    reversed: ["misalignment", "disharmony", "avoidance", "conflicted values"],
    themeKeywords: {
      love: ["attraction", "choice", "values compatibility"],
      career: ["choosing the aligned path"],
      feelings: ["strong pull", "emotional recognition"],
      advice: ["choose consciously", "not from pressure"],
      outcome: ["a choice defines the path"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to attraction, choice, values compatibility.",
        reversed: "In love, this can still point to attraction, choice, values compatibility, but reversed it may be blocked, delayed, avoided, or distorted through misalignment, disharmony, avoidance, conflicted values."
      },
      career: {
        upright: "In career, this points to choosing the aligned path.",
        reversed: "In career, this can still point to choosing the aligned path, but reversed it may show friction, delay, misalignment, or a practical block around misalignment, disharmony, avoidance, conflicted values."
      },
      feelings: {
        upright: "For feelings, this points to strong pull, emotional recognition.",
        reversed: "For feelings, this can still point to strong pull, emotional recognition, but reversed it may be internalized, resisted, hidden, or tangled with misalignment, disharmony, avoidance, conflicted values."
      },
      advice: {
        upright: "As advice, choose consciously, not from pressure.",
        reversed: "As advice, choose consciously, not from pressure; reversed, the warning is to check where misalignment, disharmony, avoidance, conflicted values may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to a choice defines the path.",
        reversed: "As an outcome, this can still point to a choice defines the path, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of misalignment, disharmony, avoidance, conflicted values."
      }
    },
    clarifier: {
      upright: "Deepens the original card around choice, alignment, attraction, values, and mirroring. It narrows the clarification to what is truly compatible with the heart and principles. As a clarifier, it does not automatically mean romance; it often reveals a meaningful choice.",
      reversed: "Complicates the original card through misalignment, temptation, avoidance of choice, divided loyalties, or choosing chemistry over values. It narrows the issue to whether the connection or decision is integrated and honest. Reversed, it redirects from fantasy to values-based clarity."
    }
  },

  "The Chariot": {
    suit: "Major Arcana",
    element: "Water",
    astrology: ["Cancer"],
    image: "images/the-chariot.jpg",
    keywords: ["drive", "control", "direction", "victory"],
    upright: ["determination", "momentum", "discipline", "success through focus"],
    reversed: ["lack of direction", "forcefulness", "blocked progress", "loss of control"],
    themeKeywords: {
      love: ["pursuit", "determination", "possible emotional control"],
      career: ["ambition", "promotion", "progress through focus"],
      feelings: ["wanting to move forward but staying controlled"],
      advice: ["choose direction and commit"],
      outcome: ["progress if discipline is maintained"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to pursuit, determination, possible emotional control.",
        reversed: "In love, this can still point to pursuit, determination, possible emotional control, but reversed it may be blocked, delayed, avoided, or distorted through lack of direction, forcefulness, blocked progress, loss of control."
      },
      career: {
        upright: "In career, this points to ambition, promotion, progress through focus.",
        reversed: "In career, this can still point to ambition, promotion, progress through focus, but reversed it may show friction, delay, misalignment, or a practical block around lack of direction, forcefulness, blocked progress, loss of control."
      },
      feelings: {
        upright: "For feelings, this points to wanting to move forward but staying controlled.",
        reversed: "For feelings, this can still point to wanting to move forward but staying controlled, but reversed it may be internalized, resisted, hidden, or tangled with lack of direction, forcefulness, blocked progress, loss of control."
      },
      advice: {
        upright: "As advice, choose direction and commit.",
        reversed: "As advice, choose direction and commit; reversed, the warning is to check where lack of direction, forcefulness, blocked progress, loss of control may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to progress if discipline is maintained.",
        reversed: "As an outcome, this can still point to progress if discipline is maintained, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of lack of direction, forcefulness, blocked progress, loss of control."
      }
    },
    clarifier: {
      upright: "Confirms movement, willpower, control, and forward momentum. It narrows the original card toward direction, discipline, and the need to manage competing forces. As a clarifier, it says progress is possible, but only with focus.",
      reversed: "Complicates the original card through forcefulness, lack of direction, emotional control, impatience, or trying to win at all costs. It narrows the issue to whether movement is aligned or just reactive. Reversed, it may show delays caused by scattered will."
    }
  },

  "Strength": {
    suit: "Major Arcana",
    element: "Fire",
    astrology: ["Leo"],
    image: "images/strength.jpg",
    keywords: ["courage", "patience", "gentleness", "inner power"],
    upright: ["compassion", "self-control", "resilience", "quiet confidence"],
    reversed: ["self-doubt", "insecurity", "impatience", "reactivity"],
    themeKeywords: {
      love: ["patience", "forgiveness", "gentle persistence"],
      career: ["quiet confidence", "endurance"],
      feelings: ["strong feelings held back respectfully"],
      advice: ["respond with calm", "not force"],
      outcome: ["slow but steady emotional mastery"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to patience, forgiveness, gentle persistence.",
        reversed: "In love, this can still point to patience, forgiveness, gentle persistence, but reversed it may be blocked, delayed, avoided, or distorted through self-doubt, insecurity, impatience, reactivity."
      },
      career: {
        upright: "In career, this points to quiet confidence, endurance.",
        reversed: "In career, this can still point to quiet confidence, endurance, but reversed it may show friction, delay, misalignment, or a practical block around self-doubt, insecurity, impatience, reactivity."
      },
      feelings: {
        upright: "For feelings, this points to strong feelings held back respectfully.",
        reversed: "For feelings, this can still point to strong feelings held back respectfully, but reversed it may be internalized, resisted, hidden, or tangled with self-doubt, insecurity, impatience, reactivity."
      },
      advice: {
        upright: "As advice, respond with calm, not force.",
        reversed: "As advice, respond with calm, not force; reversed, the warning is to check where self-doubt, insecurity, impatience, reactivity may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to slow but steady emotional mastery.",
        reversed: "As an outcome, this can still point to slow but steady emotional mastery, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of self-doubt, insecurity, impatience, reactivity."
      }
    },
    clarifier: {
      upright: "Softens the original card with patience, emotional maturity, restraint, compassion, and inner control. It narrows the message toward gentle influence instead of force. As a clarifier, it often says the strongest response is calm self-command.",
      reversed: "Complicates the original card through insecurity, suppressed anger, exhaustion, loss of confidence, or trying too hard to appear composed. It narrows the issue to where strength has become strain. Reversed, it redirects attention to self-soothing and honest vulnerability."
    }
  },

  "The Hermit": {
    suit: "Major Arcana",
    element: "Earth",
    astrology: ["Virgo"],
    image: "images/the-hermit.jpg",
    keywords: ["solitude", "reflection", "wisdom", "searching"],
    upright: ["inner guidance", "withdrawal", "study", "self-discovery"],
    reversed: ["isolation", "avoidance", "loneliness", "refusing guidance"],
    themeKeywords: {
      love: ["withdrawal", "introspection", "emotional space"],
      career: ["research", "solo work", "mentorship", "reassessment"],
      feelings: ["private", "reflective", "not ready to engage"],
      advice: ["step back and listen to yourself"],
      outcome: ["clarity through solitude", "not immediate action"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to withdrawal, introspection, emotional space.",
        reversed: "In love, this can still point to withdrawal, introspection, emotional space, but reversed it may be blocked, delayed, avoided, or distorted through isolation, avoidance, loneliness, refusing guidance."
      },
      career: {
        upright: "In career, this points to research, solo work, mentorship, reassessment.",
        reversed: "In career, this can still point to research, solo work, mentorship, reassessment, but reversed it may show friction, delay, misalignment, or a practical block around isolation, avoidance, loneliness, refusing guidance."
      },
      feelings: {
        upright: "For feelings, this points to private, reflective, not ready to engage.",
        reversed: "For feelings, this can still point to private, reflective, not ready to engage, but reversed it may be internalized, resisted, hidden, or tangled with isolation, avoidance, loneliness, refusing guidance."
      },
      advice: {
        upright: "As advice, step back and listen to yourself.",
        reversed: "As advice, step back and listen to yourself; reversed, the warning is to check where isolation, avoidance, loneliness, refusing guidance may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to clarity through solitude, not immediate action.",
        reversed: "As an outcome, this can still point to clarity through solitude, not immediate action, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of isolation, avoidance, loneliness, refusing guidance."
      }
    },
    clarifier: {
      upright: "Redirects the original card inward toward solitude, reflection, wisdom, distance, or the need for time. It narrows the reading away from external action and toward inner clarity. As a clarifier, it often says the answer comes through withdrawal, not pursuit.",
      reversed: "Complicates the original card through isolation, avoidance, loneliness, overthinking, or refusing support. It narrows the issue to whether space is healing or becoming a wall. Reversed, it may redirect the reading toward reconnecting or sharing what has been learned."
    }
  },

  "Wheel of Fortune": {
    suit: "Major Arcana",
    element: "Fire",
    astrology: ["Jupiter"],
    image: "images/wheel-of-fortune.jpg",
    keywords: ["cycles", "change", "fate", "turning point"],
    upright: ["movement", "luck", "timing", "life shift"],
    reversed: ["resistance", "setback", "repeating cycle", "bad timing"],
    themeKeywords: {
      love: ["changing dynamics", "timing", "repeating cycles"],
      career: ["opportunity", "shift", "luck", "unstable conditions"],
      feelings: ["fluctuating feelings or changing perspective"],
      advice: ["adapt; do not cling to one outcome"],
      outcome: ["change", "movement", "turning point"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to changing dynamics, timing, repeating cycles.",
        reversed: "In love, this can still point to changing dynamics, timing, repeating cycles, but reversed it may be blocked, delayed, avoided, or distorted through resistance, setback, repeating cycle, bad timing."
      },
      career: {
        upright: "In career, this points to opportunity, shift, luck, unstable conditions.",
        reversed: "In career, this can still point to opportunity, shift, luck, unstable conditions, but reversed it may show friction, delay, misalignment, or a practical block around resistance, setback, repeating cycle, bad timing."
      },
      feelings: {
        upright: "For feelings, this points to fluctuating feelings or changing perspective.",
        reversed: "For feelings, this can still point to fluctuating feelings or changing perspective, but reversed it may be internalized, resisted, hidden, or tangled with resistance, setback, repeating cycle, bad timing."
      },
      advice: {
        upright: "As advice, adapt; do not cling to one outcome.",
        reversed: "As advice, adapt; do not cling to one outcome; reversed, the warning is to check where resistance, setback, repeating cycle, bad timing may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to change, movement, turning point.",
        reversed: "As an outcome, this can still point to change, movement, turning point, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of resistance, setback, repeating cycle, bad timing."
      }
    },
    clarifier: {
      upright: "Expands the original card by adding timing, cycles, change, and circumstances bigger than one person\u2019s control. It narrows the message toward patterns, repetition, and turning points. As a clarifier, it says the situation is moving and may not be stable yet.",
      reversed: "Complicates the original card through resistance to change, bad timing, repeating cycles, or feeling tossed around by circumstances. It narrows the issue to what keeps recurring. Reversed, it often redirects from fate to pattern recognition and adaptive choices."
    }
  },

  "Justice": {
    suit: "Major Arcana",
    element: "Air",
    astrology: ["Libra"],
    image: "images/justice.jpg",
    keywords: ["truth", "fairness", "accountability", "cause and effect"],
    upright: ["clarity", "balance", "ethics", "consequences"],
    reversed: ["dishonesty", "bias", "avoidance", "unfairness"],
    themeKeywords: {
      love: ["fairness", "honesty", "decision", "relationship accountability"],
      career: ["contracts", "reviews", "legal matters", "ethics"],
      feelings: ["weighing things logically"],
      advice: ["be honest and fair"],
      outcome: ["consequences based on choices"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to fairness, honesty, decision, relationship accountability.",
        reversed: "In love, this can still point to fairness, honesty, decision, relationship accountability, but reversed it may be blocked, delayed, avoided, or distorted through dishonesty, bias, avoidance, unfairness."
      },
      career: {
        upright: "In career, this points to contracts, reviews, legal matters, ethics.",
        reversed: "In career, this can still point to contracts, reviews, legal matters, ethics, but reversed it may show friction, delay, misalignment, or a practical block around dishonesty, bias, avoidance, unfairness."
      },
      feelings: {
        upright: "For feelings, this points to weighing things logically.",
        reversed: "For feelings, this can still point to weighing things logically, but reversed it may be internalized, resisted, hidden, or tangled with dishonesty, bias, avoidance, unfairness."
      },
      advice: {
        upright: "As advice, be honest and fair.",
        reversed: "As advice, be honest and fair; reversed, the warning is to check where dishonesty, bias, avoidance, unfairness may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to consequences based on choices.",
        reversed: "As an outcome, this can still point to consequences based on choices, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of dishonesty, bias, avoidance, unfairness."
      }
    },
    clarifier: {
      upright: "Narrows the original card toward truth, consequences, fairness, evidence, decisions, contracts, or accountability. It clarifies by asking what is objectively supported. As a clarifier, it often confirms that choices now have real consequences.",
      reversed: "Complicates the original card through avoidance of accountability, bias, unfairness, legal delays, or refusing to face facts. It narrows the issue to imbalance or a distorted version of the truth. Reversed, it redirects toward correction and repair."
    }
  },

  "The Hanged Man": {
    suit: "Major Arcana",
    element: "Water",
    astrology: ["Neptune"],
    image: "images/the-hanged-man.jpg",
    keywords: ["pause", "surrender", "perspective", "suspension"],
    upright: ["letting go", "new viewpoint", "waiting", "sacrifice"],
    reversed: ["stalling", "resistance", "martyrdom", "refusing perspective"],
    themeKeywords: {
      love: ["pause", "uncertainty", "someone not acting"],
      career: ["delays", "waiting for clarity", "changed perspective"],
      feelings: ["suspended", "unsure", "emotionally stuck"],
      advice: ["stop forcing and look differently"],
      outcome: ["delay before movement"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to pause, uncertainty, someone not acting.",
        reversed: "In love, this can still point to pause, uncertainty, someone not acting, but reversed it may be blocked, delayed, avoided, or distorted through stalling, resistance, martyrdom, refusing perspective."
      },
      career: {
        upright: "In career, this points to delays, waiting for clarity, changed perspective.",
        reversed: "In career, this can still point to delays, waiting for clarity, changed perspective, but reversed it may show friction, delay, misalignment, or a practical block around stalling, resistance, martyrdom, refusing perspective."
      },
      feelings: {
        upright: "For feelings, this points to suspended, unsure, emotionally stuck.",
        reversed: "For feelings, this can still point to suspended, unsure, emotionally stuck, but reversed it may be internalized, resisted, hidden, or tangled with stalling, resistance, martyrdom, refusing perspective."
      },
      advice: {
        upright: "As advice, stop forcing and look differently.",
        reversed: "As advice, stop forcing and look differently; reversed, the warning is to check where stalling, resistance, martyrdom, refusing perspective may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to delay before movement.",
        reversed: "As an outcome, this can still point to delay before movement, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of stalling, resistance, martyrdom, refusing perspective."
      }
    },
    clarifier: {
      upright: "Redirects the original card toward surrender, waiting, perspective, sacrifice, and suspended action. It narrows the message away from pushing and toward seeing differently. As a clarifier, it often says nothing moves until perception changes.",
      reversed: "Complicates the original card through stagnation, martyrdom, avoidance, needless sacrifice, or refusal to release control. It narrows the issue to where waiting has stopped being wise. Reversed, it may show impatience or finally coming unstuck."
    }
  },

  "Death": {
    suit: "Major Arcana",
    element: "Water",
    astrology: ["Scorpio"],
    image: "images/death.jpg",
    keywords: ["ending", "transformation", "release", "transition"],
    upright: ["closure", "rebirth", "change", "letting go"],
    reversed: ["resistance", "stagnation", "fear of change", "unfinished ending"],
    themeKeywords: {
      love: ["relationship transformation", "ending a pattern", "sometimes breakup"],
      career: ["leaving a role", "major transition"],
      feelings: ["feelings changing", "detachment", "release"],
      advice: ["let the old version die"],
      outcome: ["closure or major change"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to relationship transformation, ending a pattern, sometimes breakup.",
        reversed: "In love, this can still point to relationship transformation, ending a pattern, sometimes breakup, but reversed it may be blocked, delayed, avoided, or distorted through resistance, stagnation, fear of change, unfinished ending."
      },
      career: {
        upright: "In career, this points to leaving a role, major transition.",
        reversed: "In career, this can still point to leaving a role, major transition, but reversed it may show friction, delay, misalignment, or a practical block around resistance, stagnation, fear of change, unfinished ending."
      },
      feelings: {
        upright: "For feelings, this points to feelings changing, detachment, release.",
        reversed: "For feelings, this can still point to feelings changing, detachment, release, but reversed it may be internalized, resisted, hidden, or tangled with resistance, stagnation, fear of change, unfinished ending."
      },
      advice: {
        upright: "As advice, let the old version die.",
        reversed: "As advice, let the old version die; reversed, the warning is to check where resistance, stagnation, fear of change, unfinished ending may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to closure or major change.",
        reversed: "As an outcome, this can still point to closure or major change, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of resistance, stagnation, fear of change, unfinished ending."
      }
    },
    clarifier: {
      upright: "Confirms transformation, ending, release, and irreversible change. It narrows the original card toward what must be shed for renewal to occur. As a clarifier, it often says the old version of the situation cannot continue unchanged.",
      reversed: "Complicates the original card through resistance to endings, fear of change, lingering attachments, or a transition that is being delayed. It narrows the issue to what someone refuses to release. Reversed, it redirects toward allowing gradual transformation instead of clinging."
    }
  },

  "Temperance": {
    suit: "Major Arcana",
    element: "Fire",
    astrology: ["Sagittarius"],
    image: "images/temperance.jpg",
    keywords: ["balance", "healing", "moderation", "integration"],
    upright: ["patience", "harmony", "blending", "emotional regulation"],
    reversed: ["imbalance", "excess", "impatience", "disharmony"],
    themeKeywords: {
      love: ["reconciliation", "patience", "emotional balance"],
      career: ["collaboration", "slow progress", "adjustment"],
      feelings: ["calm affection", "measured emotions"],
      advice: ["do not rush extremes"],
      outcome: ["gradual harmony"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to reconciliation, patience, emotional balance.",
        reversed: "In love, this can still point to reconciliation, patience, emotional balance, but reversed it may be blocked, delayed, avoided, or distorted through imbalance, excess, impatience, disharmony."
      },
      career: {
        upright: "In career, this points to collaboration, slow progress, adjustment.",
        reversed: "In career, this can still point to collaboration, slow progress, adjustment, but reversed it may show friction, delay, misalignment, or a practical block around imbalance, excess, impatience, disharmony."
      },
      feelings: {
        upright: "For feelings, this points to calm affection, measured emotions.",
        reversed: "For feelings, this can still point to calm affection, measured emotions, but reversed it may be internalized, resisted, hidden, or tangled with imbalance, excess, impatience, disharmony."
      },
      advice: {
        upright: "As advice, do not rush extremes.",
        reversed: "As advice, do not rush extremes; reversed, the warning is to check where imbalance, excess, impatience, disharmony may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to gradual harmony.",
        reversed: "As an outcome, this can still point to gradual harmony, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of imbalance, excess, impatience, disharmony."
      }
    },
    clarifier: {
      upright: "Softens and balances the original card through healing, moderation, patience, integration, and gradual improvement. It narrows the message toward blending extremes rather than choosing one side. As a clarifier, it says time and adjustment matter.",
      reversed: "Complicates the original card through imbalance, impatience, extremes, lack of moderation, or failed integration. It narrows the issue to where the situation is out of proportion. Reversed, it redirects toward restoring rhythm before seeking results."
    }
  },

  "The Devil": {
    suit: "Major Arcana",
    element: "Earth",
    astrology: ["Capricorn"],
    image: "images/the-devil.jpg",
    keywords: ["attachment", "temptation", "shadow", "restriction"],
    upright: ["bondage", "obsession", "materialism", "unhealthy pattern"],
    reversed: ["release", "detachment", "breaking patterns", "reclaiming power"],
    themeKeywords: {
      love: ["attachment", "lust", "dependency", "unhealthy bond"],
      career: ["toxic workplace", "overwork", "ambition traps"],
      feelings: ["obsession", "fear", "possessiveness", "desire"],
      advice: ["name the pattern honestly"],
      outcome: ["stuckness unless the pattern is broken"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to attachment, lust, dependency, unhealthy bond.",
        reversed: "In love, this can still point to attachment, lust, dependency, unhealthy bond, but reversed it may be blocked, delayed, avoided, or distorted through release, detachment, breaking patterns, reclaiming power."
      },
      career: {
        upright: "In career, this points to toxic workplace, overwork, ambition traps.",
        reversed: "In career, this can still point to toxic workplace, overwork, ambition traps, but reversed it may show friction, delay, misalignment, or a practical block around release, detachment, breaking patterns, reclaiming power."
      },
      feelings: {
        upright: "For feelings, this points to obsession, fear, possessiveness, desire.",
        reversed: "For feelings, this can still point to obsession, fear, possessiveness, desire, but reversed it may be internalized, resisted, hidden, or tangled with release, detachment, breaking patterns, reclaiming power."
      },
      advice: {
        upright: "As advice, name the pattern honestly.",
        reversed: "As advice, name the pattern honestly; reversed, the warning is to check where release, detachment, breaking patterns, reclaiming power may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to stuckness unless the pattern is broken.",
        reversed: "As an outcome, this can still point to stuckness unless the pattern is broken, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of release, detachment, breaking patterns, reclaiming power."
      }
    },
    clarifier: {
      upright: "Complicates the original card by adding attachment, fear, temptation, obsession, shame, control, or unhealthy patterns. It narrows the message to what has power because it is being denied or repeated. As a clarifier, read it honestly but not fearfully.",
      reversed: "Redirects the original card toward breaking chains, naming the pattern, reducing obsession, or loosening control. It can also complicate by showing denial of the problem. Reversed, it narrows the issue to liberation, relapse risk, or the first step out of an unhealthy loop."
    }
  },

  "The Tower": {
    suit: "Major Arcana",
    element: "Fire",
    astrology: ["Mars"],
    image: "images/the-tower.jpg",
    keywords: ["upheaval", "revelation", "collapse", "shock"],
    upright: ["sudden change", "truth exposed", "breakdown", "liberation through disruption"],
    reversed: ["avoided disaster", "delayed change", "internal upheaval", "fear of collapse"],
    themeKeywords: {
      love: ["shocking truth", "breakup", "destabilizing conflict"],
      career: ["sudden change", "restructuring", "job disruption"],
      feelings: ["overwhelmed", "shaken", "reactive"],
      advice: ["stop protecting what is already unstable"],
      outcome: ["breakthrough through disruption"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to shocking truth, breakup, destabilizing conflict.",
        reversed: "In love, this can still point to shocking truth, breakup, destabilizing conflict, but reversed it may be blocked, delayed, avoided, or distorted through avoided disaster, delayed change, internal upheaval, fear of collapse."
      },
      career: {
        upright: "In career, this points to sudden change, restructuring, job disruption.",
        reversed: "In career, this can still point to sudden change, restructuring, job disruption, but reversed it may show friction, delay, misalignment, or a practical block around avoided disaster, delayed change, internal upheaval, fear of collapse."
      },
      feelings: {
        upright: "For feelings, this points to overwhelmed, shaken, reactive.",
        reversed: "For feelings, this can still point to overwhelmed, shaken, reactive, but reversed it may be internalized, resisted, hidden, or tangled with avoided disaster, delayed change, internal upheaval, fear of collapse."
      },
      advice: {
        upright: "As advice, stop protecting what is already unstable.",
        reversed: "As advice, stop protecting what is already unstable; reversed, the warning is to check where avoided disaster, delayed change, internal upheaval, fear of collapse may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to breakthrough through disruption.",
        reversed: "As an outcome, this can still point to breakthrough through disruption, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of avoided disaster, delayed change, internal upheaval, fear of collapse."
      }
    },
    clarifier: {
      upright: "Redirects the original card toward disruption, revelation, collapse of illusion, or sudden change. It narrows the message to what is unstable and can no longer be protected. As a clarifier, it often confirms that a false structure is breaking open.",
      reversed: "Complicates the original card through fear of upheaval, delayed collapse, denial, or avoiding a necessary truth. It narrows the issue to instability that has not been dealt with. Reversed, it can show inner shock, a near-miss, or slow dismantling instead of one dramatic event."
    }
  },

  "The Star": {
    suit: "Major Arcana",
    element: "Air",
    astrology: ["Aquarius"],
    image: "images/the-star.jpg",
    keywords: ["hope", "healing", "renewal", "faith"],
    upright: ["inspiration", "peace", "spiritual support", "recovery"],
    reversed: ["discouragement", "loss of faith", "disconnection", "healing delayed"],
    themeKeywords: {
      love: ["healing", "hope", "emotional openness"],
      career: ["inspiration", "visibility", "future potential"],
      feelings: ["hope", "admiration", "gentle longing"],
      advice: ["restore faith and think long-term"],
      outcome: ["healing and renewed direction"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to healing, hope, emotional openness.",
        reversed: "In love, this can still point to healing, hope, emotional openness, but reversed it may be blocked, delayed, avoided, or distorted through discouragement, loss of faith, disconnection, healing delayed."
      },
      career: {
        upright: "In career, this points to inspiration, visibility, future potential.",
        reversed: "In career, this can still point to inspiration, visibility, future potential, but reversed it may show friction, delay, misalignment, or a practical block around discouragement, loss of faith, disconnection, healing delayed."
      },
      feelings: {
        upright: "For feelings, this points to hope, admiration, gentle longing.",
        reversed: "For feelings, this can still point to hope, admiration, gentle longing, but reversed it may be internalized, resisted, hidden, or tangled with discouragement, loss of faith, disconnection, healing delayed."
      },
      advice: {
        upright: "As advice, restore faith and think long-term.",
        reversed: "As advice, restore faith and think long-term; reversed, the warning is to check where discouragement, loss of faith, disconnection, healing delayed may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to healing and renewed direction.",
        reversed: "As an outcome, this can still point to healing and renewed direction, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of discouragement, loss of faith, disconnection, healing delayed."
      }
    },
    clarifier: {
      upright: "Softens the original card with hope, healing, renewal, spiritual guidance, and long-term faith. It expands the reading toward future recovery rather than immediate proof. As a clarifier, it often says the situation is healing, but gently and over time.",
      reversed: "Complicates the original card through discouragement, loss of faith, delayed healing, emotional depletion, or hope that is not yet grounded. It narrows the issue to where trust has been damaged. Reversed, it redirects toward small acts of restoration rather than grand signs."
    }
  },

  "The Moon": {
    suit: "Major Arcana",
    element: "Water",
    astrology: ["Pisces"],
    image: "images/the-moon.jpg",
    keywords: ["illusion", "fear", "dreams", "subconscious"],
    upright: ["uncertainty", "intuition", "confusion", "hidden emotions"],
    reversed: ["clarity emerging", "truth revealed", "released fear", "less confusion"],
    themeKeywords: {
      love: ["confusion", "mixed signals", "insecurity"],
      career: ["unclear information", "hidden factors"],
      feelings: ["fear", "longing", "uncertainty", "emotional fog"],
      advice: ["do not act from anxiety"],
      outcome: ["unclear until facts emerge"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to confusion, mixed signals, insecurity.",
        reversed: "In love, this can still point to confusion, mixed signals, insecurity, but reversed it may be blocked, delayed, avoided, or distorted through clarity emerging, truth revealed, released fear, less confusion."
      },
      career: {
        upright: "In career, this points to unclear information, hidden factors.",
        reversed: "In career, this can still point to unclear information, hidden factors, but reversed it may show friction, delay, misalignment, or a practical block around clarity emerging, truth revealed, released fear, less confusion."
      },
      feelings: {
        upright: "For feelings, this points to fear, longing, uncertainty, emotional fog.",
        reversed: "For feelings, this can still point to fear, longing, uncertainty, emotional fog, but reversed it may be internalized, resisted, hidden, or tangled with clarity emerging, truth revealed, released fear, less confusion."
      },
      advice: {
        upright: "As advice, do not act from anxiety.",
        reversed: "As advice, do not act from anxiety; reversed, the warning is to check where clarity emerging, truth revealed, released fear, less confusion may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to unclear until facts emerge.",
        reversed: "As an outcome, this can still point to unclear until facts emerge, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of clarity emerging, truth revealed, released fear, less confusion."
      }
    },
    clarifier: {
      upright: "Complicates the original card through fear, confusion, projection, dreams, secrecy, or emotional uncertainty. It narrows the message to what is unclear or emotionally distorted. As a clarifier, it usually warns against treating anxiety as fact.",
      reversed: "Redirects the original card toward confusion lifting, secrets surfacing, or fear becoming easier to name. It can still complicate by showing denial of the fog. Reversed, it narrows the issue to sorting intuition from projection and waiting for clearer evidence."
    }
  },

  "The Sun": {
    suit: "Major Arcana",
    element: "Fire",
    astrology: ["Sun"],
    image: "images/the-sun.jpg",
    keywords: ["joy", "clarity", "success", "vitality"],
    upright: ["happiness", "confidence", "warmth", "visibility"],
    reversed: ["blocked joy", "low confidence", "temporary delay", "forced positivity"],
    themeKeywords: {
      love: ["happiness", "openness", "warmth"],
      career: ["success", "recognition", "confidence"],
      feelings: ["joy", "admiration", "genuine warmth"],
      advice: ["be honest and visible"],
      outcome: ["clarity", "success", "positive result"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to happiness, openness, warmth.",
        reversed: "In love, this can still point to happiness, openness, warmth, but reversed it may be blocked, delayed, avoided, or distorted through blocked joy, low confidence, temporary delay, forced positivity."
      },
      career: {
        upright: "In career, this points to success, recognition, confidence.",
        reversed: "In career, this can still point to success, recognition, confidence, but reversed it may show friction, delay, misalignment, or a practical block around blocked joy, low confidence, temporary delay, forced positivity."
      },
      feelings: {
        upright: "For feelings, this points to joy, admiration, genuine warmth.",
        reversed: "For feelings, this can still point to joy, admiration, genuine warmth, but reversed it may be internalized, resisted, hidden, or tangled with blocked joy, low confidence, temporary delay, forced positivity."
      },
      advice: {
        upright: "As advice, be honest and visible.",
        reversed: "As advice, be honest and visible; reversed, the warning is to check where blocked joy, low confidence, temporary delay, forced positivity may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to clarity, success, positive result.",
        reversed: "As an outcome, this can still point to clarity, success, positive result, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of blocked joy, low confidence, temporary delay, forced positivity."
      }
    },
    clarifier: {
      upright: "Confirms clarity, joy, success, openness, warmth, and positive movement. It expands the original card by making the message more visible and straightforward. As a clarifier, it often softens difficult cards by showing eventual understanding or relief.",
      reversed: "Complicates the original card through delayed clarity, forced positivity, ego, overexposure, or difficulty accessing joy. It narrows the issue to where something is almost clear but not fully integrated. Reversed, it can still be positive, just muted or postponed."
    }
  },

  "Judgment": {
    suit: "Major Arcana",
    element: "Fire",
    astrology: ["Pluto"],
    image: "images/judgment.jpg",
    keywords: ["awakening", "reckoning", "calling", "review"],
    upright: ["accountability", "rebirth", "decision", "self-evaluation"],
    reversed: ["self-doubt", "avoidance", "fear of judgment", "delayed decision"],
    themeKeywords: {
      love: ["second chance", "honest conversation", "relationship reckoning"],
      career: ["calling", "major decision", "evaluation"],
      feelings: ["realization", "regret", "awakening"],
      advice: ["answer the call and be honest"],
      outcome: ["decision", "revival", "or major clarity"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to second chance, honest conversation, relationship reckoning.",
        reversed: "In love, this can still point to second chance, honest conversation, relationship reckoning, but reversed it may be blocked, delayed, avoided, or distorted through self-doubt, avoidance, fear of judgment, delayed decision."
      },
      career: {
        upright: "In career, this points to calling, major decision, evaluation.",
        reversed: "In career, this can still point to calling, major decision, evaluation, but reversed it may show friction, delay, misalignment, or a practical block around self-doubt, avoidance, fear of judgment, delayed decision."
      },
      feelings: {
        upright: "For feelings, this points to realization, regret, awakening.",
        reversed: "For feelings, this can still point to realization, regret, awakening, but reversed it may be internalized, resisted, hidden, or tangled with self-doubt, avoidance, fear of judgment, delayed decision."
      },
      advice: {
        upright: "As advice, answer the call and be honest.",
        reversed: "As advice, answer the call and be honest; reversed, the warning is to check where self-doubt, avoidance, fear of judgment, delayed decision may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to decision, revival, or major clarity.",
        reversed: "As an outcome, this can still point to decision, revival, or major clarity, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of self-doubt, avoidance, fear of judgment, delayed decision."
      }
    },
    clarifier: {
      upright: "Deepens the original card into awakening, reckoning, second chances, self-evaluation, or a life-changing realization. It narrows the message toward the moment when avoidance ends and a call must be answered.",
      reversed: "Complicates the original card through avoiding accountability, resisting a wake-up call, fear of being judged, or repeating the past without learning. It narrows the issue to what has not been fully faced. Reversed, it redirects toward self-forgiveness and honest review."
    }
  },

  "The World": {
    suit: "Major Arcana",
    element: "Earth",
    astrology: ["Saturn"],
    image: "images/the-world.jpg",
    keywords: ["completion", "wholeness", "integration", "achievement"],
    upright: ["closure", "success", "fulfillment", "cycle complete"],
    reversed: ["unfinished business", "delay", "lack of closure", "incompletion"],
    themeKeywords: {
      love: ["closure", "mature connection", "long-distance themes"],
      career: ["achievement", "graduation", "completion"],
      feelings: ["fulfillment", "acceptance", "seeing the bigger picture"],
      advice: ["complete the cycle"],
      outcome: ["resolution", "closure", "accomplishment"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to closure, mature connection, long-distance themes.",
        reversed: "In love, this can still point to closure, mature connection, long-distance themes, but reversed it may be blocked, delayed, avoided, or distorted through unfinished business, delay, lack of closure, incompletion."
      },
      career: {
        upright: "In career, this points to achievement, graduation, completion.",
        reversed: "In career, this can still point to achievement, graduation, completion, but reversed it may show friction, delay, misalignment, or a practical block around unfinished business, delay, lack of closure, incompletion."
      },
      feelings: {
        upright: "For feelings, this points to fulfillment, acceptance, seeing the bigger picture.",
        reversed: "For feelings, this can still point to fulfillment, acceptance, seeing the bigger picture, but reversed it may be internalized, resisted, hidden, or tangled with unfinished business, delay, lack of closure, incompletion."
      },
      advice: {
        upright: "As advice, complete the cycle.",
        reversed: "As advice, complete the cycle; reversed, the warning is to check where unfinished business, delay, lack of closure, incompletion may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to resolution, closure, accomplishment.",
        reversed: "As an outcome, this can still point to resolution, closure, accomplishment, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of unfinished business, delay, lack of closure, incompletion."
      }
    },
    clarifier: {
      upright: "Confirms completion, integration, success, closure, or reaching a major milestone. It narrows the original card toward the full cycle rather than one isolated moment. As a clarifier, it often says the lesson is being completed.",
      reversed: "Complicates the original card through unfinished business, lack of closure, delays in completion, or feeling unable to integrate the lesson. It narrows the issue to what remains unresolved. Reversed, it redirects toward tying up loose ends before beginning again."
    }
  },

  "Ace of Wands": {
    suit: "Wands",
    element: "Fire",
    astrology: ["Fire"],
    image: "images/ace-of-wands.jpg",
    keywords: ["spark", "desire", "inspiration", "potential"],
    upright: ["new passion", "creative beginning", "motivation", "opportunity"],
    reversed: ["delay", "blocked inspiration", "lack of direction", "false start"],
    themeKeywords: {
      love: ["attraction", "chemistry", "new passion"],
      career: ["idea", "opportunity", "creative start"],
      feelings: ["excitement", "desire", "motivation"],
      advice: ["act on inspiration"],
      outcome: ["passionate beginning"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to attraction, chemistry, new passion.",
        reversed: "In love, this can still point to attraction, chemistry, new passion, but reversed it may be blocked, delayed, avoided, or distorted through delay, blocked inspiration, lack of direction, false start."
      },
      career: {
        upright: "In career, this points to idea, opportunity, creative start.",
        reversed: "In career, this can still point to idea, opportunity, creative start, but reversed it may show friction, delay, misalignment, or a practical block around delay, blocked inspiration, lack of direction, false start."
      },
      feelings: {
        upright: "For feelings, this points to excitement, desire, motivation.",
        reversed: "For feelings, this can still point to excitement, desire, motivation, but reversed it may be internalized, resisted, hidden, or tangled with delay, blocked inspiration, lack of direction, false start."
      },
      advice: {
        upright: "As advice, act on inspiration.",
        reversed: "As advice, act on inspiration; reversed, the warning is to check where delay, blocked inspiration, lack of direction, false start may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to passionate beginning.",
        reversed: "As an outcome, this can still point to passionate beginning, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of delay, blocked inspiration, lack of direction, false start."
      }
    },
    clarifier: {
      upright: "Confirms and expands the original card with spark, desire, inspiration, attraction, or creative potential. It narrows the message toward the first ignition rather than the final result.",
      reversed: "Complicates through blocked desire, weak follow-through, creative frustration, or a spark that cannot yet become action. Reversed, it narrows the issue to timing, confidence, or whether the energy has enough fuel."
    }
  },

  "Two of Wands": {
    suit: "Wands",
    element: "Fire",
    astrology: ["Mars in Aries"],
    image: "images/two-of-wands.jpg",
    keywords: ["planning", "future", "choice", "expansion"],
    upright: ["long-term vision", "strategy", "decision point", "preparation"],
    reversed: ["fear of change", "small thinking", "poor planning", "indecision"],
    themeKeywords: {
      love: ["considering the future", "emotional distance"],
      career: ["planning next move"],
      feelings: ["interested but assessing"],
      advice: ["plan before acting"],
      outcome: ["choice about direction"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to considering the future, emotional distance.",
        reversed: "In love, this can still point to considering the future, emotional distance, but reversed it may be blocked, delayed, avoided, or distorted through fear of change, small thinking, poor planning, indecision."
      },
      career: {
        upright: "In career, this points to planning next move.",
        reversed: "In career, this can still point to planning next move, but reversed it may show friction, delay, misalignment, or a practical block around fear of change, small thinking, poor planning, indecision."
      },
      feelings: {
        upright: "For feelings, this points to interested but assessing.",
        reversed: "For feelings, this can still point to interested but assessing, but reversed it may be internalized, resisted, hidden, or tangled with fear of change, small thinking, poor planning, indecision."
      },
      advice: {
        upright: "As advice, plan before acting.",
        reversed: "As advice, plan before acting; reversed, the warning is to check where fear of change, small thinking, poor planning, indecision may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to choice about direction.",
        reversed: "As an outcome, this can still point to choice about direction, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of fear of change, small thinking, poor planning, indecision."
      }
    },
    clarifier: {
      upright: "Narrows the original card toward planning, future vision, distance, and deciding whether to expand. It adds strategy rather than immediate movement.",
      reversed: "Complicates through hesitation, fear of expansion, poor planning, or staying in the comfort zone. Reversed, it narrows the issue to indecision or a plan that needs revision."
    }
  },

  "Three of Wands": {
    suit: "Wands",
    element: "Fire",
    astrology: ["Sun in Aries"],
    image: "images/three-of-wands.jpg",
    keywords: ["expansion", "foresight", "progress", "waiting"],
    upright: ["growth", "opportunity", "long-range planning", "momentum"],
    reversed: ["delays", "limited vision", "frustrated expansion", "lack of progress"],
    themeKeywords: {
      love: ["waiting to see where things go"],
      career: ["growth", "expansion", "delayed reward"],
      feelings: ["hopeful anticipation"],
      advice: ["think bigger and be patient"],
      outcome: ["progress approaching"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to waiting to see where things go.",
        reversed: "In love, this can still point to waiting to see where things go, but reversed it may be blocked, delayed, avoided, or distorted through delays, limited vision, frustrated expansion, lack of progress."
      },
      career: {
        upright: "In career, this points to growth, expansion, delayed reward.",
        reversed: "In career, this can still point to growth, expansion, delayed reward, but reversed it may show friction, delay, misalignment, or a practical block around delays, limited vision, frustrated expansion, lack of progress."
      },
      feelings: {
        upright: "For feelings, this points to hopeful anticipation.",
        reversed: "For feelings, this can still point to hopeful anticipation, but reversed it may be internalized, resisted, hidden, or tangled with delays, limited vision, frustrated expansion, lack of progress."
      },
      advice: {
        upright: "As advice, think bigger and be patient.",
        reversed: "As advice, think bigger and be patient; reversed, the warning is to check where delays, limited vision, frustrated expansion, lack of progress may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to progress approaching.",
        reversed: "As an outcome, this can still point to progress approaching, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of delays, limited vision, frustrated expansion, lack of progress."
      }
    },
    clarifier: {
      upright: "Expands the original card toward waiting for results, growth, distance, and momentum already set in motion. It narrows the message to what is developing beyond the immediate moment.",
      reversed: "Complicates through delays, limited vision, impatience, or disappointment when results are slower than expected. Reversed, it narrows the issue to blocked expansion or expectations needing adjustment."
    }
  },

  "Four of Wands": {
    suit: "Wands",
    element: "Fire",
    astrology: ["Venus in Aries"],
    image: "images/four-of-wands.jpg",
    keywords: ["home", "celebration", "stability", "community"],
    upright: ["harmony", "milestone", "belonging", "shared joy"],
    reversed: ["instability", "private celebration", "home tension", "lack of support"],
    themeKeywords: {
      love: ["commitment", "reunion", "feeling at home"],
      career: ["workplace harmony", "milestone"],
      feelings: ["comfort", "happiness", "security"],
      advice: ["celebrate progress"],
      outcome: ["stability or joyful event"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to commitment, reunion, feeling at home.",
        reversed: "In love, this can still point to commitment, reunion, feeling at home, but reversed it may be blocked, delayed, avoided, or distorted through instability, private celebration, home tension, lack of support."
      },
      career: {
        upright: "In career, this points to workplace harmony, milestone.",
        reversed: "In career, this can still point to workplace harmony, milestone, but reversed it may show friction, delay, misalignment, or a practical block around instability, private celebration, home tension, lack of support."
      },
      feelings: {
        upright: "For feelings, this points to comfort, happiness, security.",
        reversed: "For feelings, this can still point to comfort, happiness, security, but reversed it may be internalized, resisted, hidden, or tangled with instability, private celebration, home tension, lack of support."
      },
      advice: {
        upright: "As advice, celebrate progress.",
        reversed: "As advice, celebrate progress; reversed, the warning is to check where instability, private celebration, home tension, lack of support may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to stability or joyful event.",
        reversed: "As an outcome, this can still point to stability or joyful event, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of instability, private celebration, home tension, lack of support."
      }
    },
    clarifier: {
      upright: "Softens and confirms stability, celebration, belonging, home, reunion, or a milestone. It narrows the original card toward foundation and shared joy.",
      reversed: "Complicates through instability at home, delayed celebration, shaky foundations, or feeling excluded from belonging. Reversed, it narrows the issue to what needs repair before harmony can hold."
    }
  },

  "Five of Wands": {
    suit: "Wands",
    element: "Fire",
    astrology: ["Saturn in Leo"],
    image: "images/five-of-wands.jpg",
    keywords: ["conflict", "competition", "tension", "friction"],
    upright: ["disagreement", "rivalry", "creative clash", "competing priorities"],
    reversed: ["conflict avoidance", "resolution", "inner tension", "exhaustion from fighting"],
    themeKeywords: {
      love: ["arguments", "ego clashes", "competition"],
      career: ["workplace tension", "rivalry"],
      feelings: ["conflicted", "irritated", "challenged"],
      advice: ["do not escalate"],
      outcome: ["conflict before clarity"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to arguments, ego clashes, competition.",
        reversed: "In love, this can still point to arguments, ego clashes, competition, but reversed it may be blocked, delayed, avoided, or distorted through conflict avoidance, resolution, inner tension, exhaustion from fighting."
      },
      career: {
        upright: "In career, this points to workplace tension, rivalry.",
        reversed: "In career, this can still point to workplace tension, rivalry, but reversed it may show friction, delay, misalignment, or a practical block around conflict avoidance, resolution, inner tension, exhaustion from fighting."
      },
      feelings: {
        upright: "For feelings, this points to conflicted, irritated, challenged.",
        reversed: "For feelings, this can still point to conflicted, irritated, challenged, but reversed it may be internalized, resisted, hidden, or tangled with conflict avoidance, resolution, inner tension, exhaustion from fighting."
      },
      advice: {
        upright: "As advice, do not escalate.",
        reversed: "As advice, do not escalate; reversed, the warning is to check where conflict avoidance, resolution, inner tension, exhaustion from fighting may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to conflict before clarity.",
        reversed: "As an outcome, this can still point to conflict before clarity, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of conflict avoidance, resolution, inner tension, exhaustion from fighting."
      }
    },
    clarifier: {
      upright: "Complicates the original card with conflict, competition, friction, mixed agendas, or ego clashes. It narrows the clarification to tension that needs management.",
      reversed: "Can soften conflict by showing it is losing force, but it may also show avoidance, suppressed anger, or fear of confrontation. Reversed, it narrows the issue to whether peace is real or merely conflict being buried."
    }
  },

  "Six of Wands": {
    suit: "Wands",
    element: "Fire",
    astrology: ["Jupiter in Leo"],
    image: "images/six-of-wands.jpg",
    keywords: ["recognition", "victory", "confidence", "public success"],
    upright: ["achievement", "being seen", "praise", "progress acknowledged"],
    reversed: ["self-doubt", "private win", "fall from grace", "lack of recognition"],
    themeKeywords: {
      love: ["wanting attention", "public pride", "validation"],
      career: ["success", "promotion", "praise"],
      feelings: ["admiration", "pride", "wanting approval"],
      advice: ["own your success without ego"],
      outcome: ["recognition"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to wanting attention, public pride, validation.",
        reversed: "In love, this can still point to wanting attention, public pride, validation, but reversed it may be blocked, delayed, avoided, or distorted through self-doubt, private win, fall from grace, lack of recognition."
      },
      career: {
        upright: "In career, this points to success, promotion, praise.",
        reversed: "In career, this can still point to success, promotion, praise, but reversed it may show friction, delay, misalignment, or a practical block around self-doubt, private win, fall from grace, lack of recognition."
      },
      feelings: {
        upright: "For feelings, this points to admiration, pride, wanting approval.",
        reversed: "For feelings, this can still point to admiration, pride, wanting approval, but reversed it may be internalized, resisted, hidden, or tangled with self-doubt, private win, fall from grace, lack of recognition."
      },
      advice: {
        upright: "As advice, own your success without ego.",
        reversed: "As advice, own your success without ego; reversed, the warning is to check where self-doubt, private win, fall from grace, lack of recognition may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to recognition.",
        reversed: "As an outcome, this can still point to recognition, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of self-doubt, private win, fall from grace, lack of recognition."
      }
    },
    clarifier: {
      upright: "Confirms recognition, victory, visibility, confidence, or being seen. It narrows the original card toward public validation or successful progress.",
      reversed: "Complicates through ego, insecurity, lack of recognition, performative confidence, or private doubt despite outward success. Reversed, it narrows the issue to validation and whether the win feels meaningful."
    }
  },

  "Seven of Wands": {
    suit: "Wands",
    element: "Fire",
    astrology: ["Mars in Leo"],
    image: "images/seven-of-wands.jpg",
    keywords: ["defense", "challenge", "boundaries", "standing ground"],
    upright: ["perseverance", "protecting position", "pressure", "resistance"],
    reversed: ["overwhelm", "giving up", "lowered defenses", "burnout"],
    themeKeywords: {
      love: ["defensiveness", "protecting the connection or oneself"],
      career: ["defending position", "competition"],
      feelings: ["guarded but invested"],
      advice: ["hold your boundary"],
      outcome: ["challenge", "but not defeat"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to defensiveness, protecting the connection or oneself.",
        reversed: "In love, this can still point to defensiveness, protecting the connection or oneself, but reversed it may be blocked, delayed, avoided, or distorted through overwhelm, giving up, lowered defenses, burnout."
      },
      career: {
        upright: "In career, this points to defending position, competition.",
        reversed: "In career, this can still point to defending position, competition, but reversed it may show friction, delay, misalignment, or a practical block around overwhelm, giving up, lowered defenses, burnout."
      },
      feelings: {
        upright: "For feelings, this points to guarded but invested.",
        reversed: "For feelings, this can still point to guarded but invested, but reversed it may be internalized, resisted, hidden, or tangled with overwhelm, giving up, lowered defenses, burnout."
      },
      advice: {
        upright: "As advice, hold your boundary.",
        reversed: "As advice, hold your boundary; reversed, the warning is to check where overwhelm, giving up, lowered defenses, burnout may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to challenge, but not defeat.",
        reversed: "As an outcome, this can still point to challenge, but not defeat, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of overwhelm, giving up, lowered defenses, burnout."
      }
    },
    clarifier: {
      upright: "Narrows the original card toward defense, boundaries, resistance, and standing your ground. It confirms that pressure exists, but defeat is not assumed.",
      reversed: "Complicates through defensiveness, burnout from constant resistance, weak boundaries, or choosing the wrong battle. Reversed, it narrows the issue to where protection has become exhaustion or surrender."
    }
  },

  "Eight of Wands": {
    suit: "Wands",
    element: "Fire",
    astrology: ["Mercury in Sagittarius"],
    image: "images/eight-of-wands.jpg",
    keywords: ["speed", "movement", "messages", "momentum"],
    upright: ["fast progress", "communication", "alignment", "travel"],
    reversed: ["delays", "blocked momentum", "miscommunication", "scattered energy"],
    themeKeywords: {
      love: ["fast communication", "sudden progress"],
      career: ["quick developments", "emails", "momentum"],
      feelings: ["urgency", "excitement"],
      advice: ["respond quickly but clearly"],
      outcome: ["swift movement"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to fast communication, sudden progress.",
        reversed: "In love, this can still point to fast communication, sudden progress, but reversed it may be blocked, delayed, avoided, or distorted through delays, blocked momentum, miscommunication, scattered energy."
      },
      career: {
        upright: "In career, this points to quick developments, emails, momentum.",
        reversed: "In career, this can still point to quick developments, emails, momentum, but reversed it may show friction, delay, misalignment, or a practical block around delays, blocked momentum, miscommunication, scattered energy."
      },
      feelings: {
        upright: "For feelings, this points to urgency, excitement.",
        reversed: "For feelings, this can still point to urgency, excitement, but reversed it may be internalized, resisted, hidden, or tangled with delays, blocked momentum, miscommunication, scattered energy."
      },
      advice: {
        upright: "As advice, respond quickly but clearly.",
        reversed: "As advice, respond quickly but clearly; reversed, the warning is to check where delays, blocked momentum, miscommunication, scattered energy may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to swift movement.",
        reversed: "As an outcome, this can still point to swift movement, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of delays, blocked momentum, miscommunication, scattered energy."
      }
    },
    clarifier: {
      upright: "Confirms speed, movement, messages, travel, or rapid development. It expands the original card by adding acceleration and narrows it toward communication or momentum.",
      reversed: "Complicates through delays, miscommunication, scattered urgency, or things moving too fast to process. Reversed, it narrows the issue to blocked messages, timing problems, or chaotic momentum."
    }
  },

  "Nine of Wands": {
    suit: "Wands",
    element: "Fire",
    astrology: ["Moon in Sagittarius"],
    image: "images/nine-of-wands.jpg",
    keywords: ["resilience", "defense", "persistence", "fatigue"],
    upright: ["endurance", "caution", "boundaries", "last push"],
    reversed: ["exhaustion", "paranoia", "giving up", "defensiveness"],
    themeKeywords: {
      love: ["walls up", "wounded but not done"],
      career: ["burnout", "perseverance"],
      feelings: ["cautious", "tired", "protective"],
      advice: ["protect yourself without closing completely"],
      outcome: ["progress", "but guarded"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to walls up, wounded but not done.",
        reversed: "In love, this can still point to walls up, wounded but not done, but reversed it may be blocked, delayed, avoided, or distorted through exhaustion, paranoia, giving up, defensiveness."
      },
      career: {
        upright: "In career, this points to burnout, perseverance.",
        reversed: "In career, this can still point to burnout, perseverance, but reversed it may show friction, delay, misalignment, or a practical block around exhaustion, paranoia, giving up, defensiveness."
      },
      feelings: {
        upright: "For feelings, this points to cautious, tired, protective.",
        reversed: "For feelings, this can still point to cautious, tired, protective, but reversed it may be internalized, resisted, hidden, or tangled with exhaustion, paranoia, giving up, defensiveness."
      },
      advice: {
        upright: "As advice, protect yourself without closing completely.",
        reversed: "As advice, protect yourself without closing completely; reversed, the warning is to check where exhaustion, paranoia, giving up, defensiveness may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to progress, but guarded.",
        reversed: "As an outcome, this can still point to progress, but guarded, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of exhaustion, paranoia, giving up, defensiveness."
      }
    },
    clarifier: {
      upright: "Complicates with guardedness, exhaustion, resilience, and defensive survival mode. It narrows the original card toward wounds that make someone cautious but not necessarily finished.",
      reversed: "Can soften by showing a wall coming down, but may also indicate giving up, depleted strength, or paranoia. Reversed, it narrows the issue to whether caution is protection or fear repeating itself."
    }
  },

  "Ten of Wands": {
    suit: "Wands",
    element: "Fire",
    astrology: ["Saturn in Sagittarius"],
    image: "images/ten-of-wands.jpg",
    keywords: ["burden", "pressure", "responsibility", "overload"],
    upright: ["heavy load", "duty", "stress", "carrying too much"],
    reversed: ["release", "delegation", "burnout recovery", "dropping burdens"],
    themeKeywords: {
      love: ["relationship feels heavy"],
      career: ["overwork", "burnout", "too many duties"],
      feelings: ["overwhelmed", "responsible", "tired"],
      advice: ["delegate or release"],
      outcome: ["completion after strain"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to relationship feels heavy.",
        reversed: "In love, this can still point to relationship feels heavy, but reversed it may be blocked, delayed, avoided, or distorted through release, delegation, burnout recovery, dropping burdens."
      },
      career: {
        upright: "In career, this points to overwork, burnout, too many duties.",
        reversed: "In career, this can still point to overwork, burnout, too many duties, but reversed it may show friction, delay, misalignment, or a practical block around release, delegation, burnout recovery, dropping burdens."
      },
      feelings: {
        upright: "For feelings, this points to overwhelmed, responsible, tired.",
        reversed: "For feelings, this can still point to overwhelmed, responsible, tired, but reversed it may be internalized, resisted, hidden, or tangled with release, delegation, burnout recovery, dropping burdens."
      },
      advice: {
        upright: "As advice, delegate or release.",
        reversed: "As advice, delegate or release; reversed, the warning is to check where release, delegation, burnout recovery, dropping burdens may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to completion after strain.",
        reversed: "As an outcome, this can still point to completion after strain, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of release, delegation, burnout recovery, dropping burdens."
      }
    },
    clarifier: {
      upright: "Narrows the original card toward burden, pressure, responsibility, and carrying too much. It confirms effort, but also shows the cost of sustaining it.",
      reversed: "Complicates through refusing help, burnout, dropping responsibilities, or reaching the point where something must be released. Reversed, it narrows the issue to unloading, delegating, or collapse from overextension."
    }
  },

  "Page of Wands": {
    suit: "Wands",
    element: "Fire",
    astrology: ["Earth of Fire"],
    image: "images/page-of-wands.jpg",
    keywords: ["curiosity", "spark", "exploration", "message"],
    upright: ["enthusiasm", "new idea", "adventure", "creative discovery"],
    reversed: ["immaturity", "lack of direction", "impatience", "delayed message"],
    themeKeywords: {
      love: ["playful message", "flirtation"],
      career: ["new idea", "beginner energy"],
      feelings: ["curiosity", "attraction", "excitement"],
      advice: ["explore", "but stay grounded"],
      outcome: ["message or new interest"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to playful message, flirtation.",
        reversed: "In love, this can still point to playful message, flirtation, but reversed it may be blocked, delayed, avoided, or distorted through immaturity, lack of direction, impatience, delayed message."
      },
      career: {
        upright: "In career, this points to new idea, beginner energy.",
        reversed: "In career, this can still point to new idea, beginner energy, but reversed it may show friction, delay, misalignment, or a practical block around immaturity, lack of direction, impatience, delayed message."
      },
      feelings: {
        upright: "For feelings, this points to curiosity, attraction, excitement.",
        reversed: "For feelings, this can still point to curiosity, attraction, excitement, but reversed it may be internalized, resisted, hidden, or tangled with immaturity, lack of direction, impatience, delayed message."
      },
      advice: {
        upright: "As advice, explore, but stay grounded.",
        reversed: "As advice, explore, but stay grounded; reversed, the warning is to check where immaturity, lack of direction, impatience, delayed message may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to message or new interest.",
        reversed: "As an outcome, this can still point to message or new interest, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of immaturity, lack of direction, impatience, delayed message."
      }
    },
    clarifier: {
      upright: "Confirms curiosity, flirtation, exploration, messages, and creative excitement. It narrows the original card toward beginner energy and the desire to try.",
      reversed: "Complicates through immaturity, lack of follow-through, scattered interest, or messages that excite but do not stabilize. Reversed, it narrows the issue to hesitation, impatience, or unreliable enthusiasm."
    }
  },

  "Knight of Wands": {
    suit: "Wands",
    element: "Fire",
    astrology: ["Fire of Fire"],
    image: "images/knight-of-wands.jpg",
    keywords: ["action", "passion", "impulse", "adventure"],
    upright: ["bold movement", "confidence", "energy", "pursuit"],
    reversed: ["recklessness", "inconsistency", "haste", "scattered passion"],
    themeKeywords: {
      love: ["chemistry", "pursuit", "hot-and-cold energy"],
      career: ["ambition", "travel", "risk"],
      feelings: ["desire", "excitement", "impatience"],
      advice: ["act", "but avoid recklessness"],
      outcome: ["fast movement", "possibly unstable"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to chemistry, pursuit, hot-and-cold energy.",
        reversed: "In love, this can still point to chemistry, pursuit, hot-and-cold energy, but reversed it may be blocked, delayed, avoided, or distorted through recklessness, inconsistency, haste, scattered passion."
      },
      career: {
        upright: "In career, this points to ambition, travel, risk.",
        reversed: "In career, this can still point to ambition, travel, risk, but reversed it may show friction, delay, misalignment, or a practical block around recklessness, inconsistency, haste, scattered passion."
      },
      feelings: {
        upright: "For feelings, this points to desire, excitement, impatience.",
        reversed: "For feelings, this can still point to desire, excitement, impatience, but reversed it may be internalized, resisted, hidden, or tangled with recklessness, inconsistency, haste, scattered passion."
      },
      advice: {
        upright: "As advice, act, but avoid recklessness.",
        reversed: "As advice, act, but avoid recklessness; reversed, the warning is to check where recklessness, inconsistency, haste, scattered passion may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to fast movement, possibly unstable.",
        reversed: "As an outcome, this can still point to fast movement, possibly unstable, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of recklessness, inconsistency, haste, scattered passion."
      }
    },
    clarifier: {
      upright: "Expands the original card with passion, speed, bold pursuit, risk, and movement. It narrows the message toward impulse and action rather than stability.",
      reversed: "Complicates through inconsistency, recklessness, hot-and-cold behavior, or passion without commitment. Reversed, it narrows the issue to impatience, scattered desire, or energy that burns out quickly."
    }
  },

  "Queen of Wands": {
    suit: "Wands",
    element: "Fire",
    astrology: ["Water of Fire"],
    image: "images/queen-of-wands.jpg",
    keywords: ["confidence", "magnetism", "creativity", "warmth"],
    upright: ["charisma", "independence", "courage", "social power"],
    reversed: ["insecurity", "jealousy", "demanding energy", "dimmed confidence"],
    themeKeywords: {
      love: ["attraction", "confidence", "charismatic presence"],
      career: ["leadership", "visibility", "creativity"],
      feelings: ["admiration", "desire", "respect"],
      advice: ["be confident and direct"],
      outcome: ["empowered movement"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to attraction, confidence, charismatic presence.",
        reversed: "In love, this can still point to attraction, confidence, charismatic presence, but reversed it may be blocked, delayed, avoided, or distorted through insecurity, jealousy, demanding energy, dimmed confidence."
      },
      career: {
        upright: "In career, this points to leadership, visibility, creativity.",
        reversed: "In career, this can still point to leadership, visibility, creativity, but reversed it may show friction, delay, misalignment, or a practical block around insecurity, jealousy, demanding energy, dimmed confidence."
      },
      feelings: {
        upright: "For feelings, this points to admiration, desire, respect.",
        reversed: "For feelings, this can still point to admiration, desire, respect, but reversed it may be internalized, resisted, hidden, or tangled with insecurity, jealousy, demanding energy, dimmed confidence."
      },
      advice: {
        upright: "As advice, be confident and direct.",
        reversed: "As advice, be confident and direct; reversed, the warning is to check where insecurity, jealousy, demanding energy, dimmed confidence may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to empowered movement.",
        reversed: "As an outcome, this can still point to empowered movement, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of insecurity, jealousy, demanding energy, dimmed confidence."
      }
    },
    clarifier: {
      upright: "Confirms confidence, magnetism, independence, warmth, and self-assurance. It expands the original card by adding charisma and personal power.",
      reversed: "Complicates through jealousy, insecurity, attention-seeking, self-doubt, or dimmed confidence. Reversed, it narrows the issue to reclaiming power without becoming reactive."
    }
  },

  "King of Wands": {
    suit: "Wands",
    element: "Fire",
    astrology: ["Air of Fire"],
    image: "images/king-of-wands.jpg",
    keywords: ["leadership", "vision", "confidence", "boldness"],
    upright: ["big-picture action", "entrepreneurship", "command", "inspiration"],
    reversed: ["arrogance", "domination", "impulsiveness", "unrealistic vision"],
    themeKeywords: {
      love: ["confident pursuit", "passion", "pride"],
      career: ["leadership", "authority", "big vision"],
      feelings: ["desire plus control"],
      advice: ["lead with courage"],
      outcome: ["decisive action"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to confident pursuit, passion, pride.",
        reversed: "In love, this can still point to confident pursuit, passion, pride, but reversed it may be blocked, delayed, avoided, or distorted through arrogance, domination, impulsiveness, unrealistic vision."
      },
      career: {
        upright: "In career, this points to leadership, authority, big vision.",
        reversed: "In career, this can still point to leadership, authority, big vision, but reversed it may show friction, delay, misalignment, or a practical block around arrogance, domination, impulsiveness, unrealistic vision."
      },
      feelings: {
        upright: "For feelings, this points to desire plus control.",
        reversed: "For feelings, this can still point to desire plus control, but reversed it may be internalized, resisted, hidden, or tangled with arrogance, domination, impulsiveness, unrealistic vision."
      },
      advice: {
        upright: "As advice, lead with courage.",
        reversed: "As advice, lead with courage; reversed, the warning is to check where arrogance, domination, impulsiveness, unrealistic vision may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to decisive action.",
        reversed: "As an outcome, this can still point to decisive action, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of arrogance, domination, impulsiveness, unrealistic vision."
      }
    },
    clarifier: {
      upright: "Narrows toward leadership, vision, bold action, charisma, and entrepreneurial drive. It confirms the need for confident direction.",
      reversed: "Complicates through arrogance, control, impatience, impulsive leadership, or vision without sensitivity. Reversed, it narrows the issue to how power is being directed or misdirected."
    }
  },

  "Ace of Cups": {
    suit: "Cups",
    element: "Water",
    astrology: ["Water"],
    image: "images/ace-of-cups.jpg",
    keywords: ["emotion", "love", "opening", "intuition"],
    upright: ["new feelings", "compassion", "emotional renewal", "creative flow"],
    reversed: ["blocked emotion", "emotional depletion", "repressed feelings", "self-love needed"],
    themeKeywords: {
      love: ["new love", "apology", "emotional opening"],
      career: ["creative fulfillment", "emotional renewal"],
      feelings: ["tenderness", "affection", "care"],
      advice: ["open your heart carefully"],
      outcome: ["emotional renewal"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to new love, apology, emotional opening.",
        reversed: "In love, this can still point to new love, apology, emotional opening, but reversed it may be blocked, delayed, avoided, or distorted through blocked emotion, emotional depletion, repressed feelings, self-love needed."
      },
      career: {
        upright: "In career, this points to creative fulfillment, emotional renewal.",
        reversed: "In career, this can still point to creative fulfillment, emotional renewal, but reversed it may show friction, delay, misalignment, or a practical block around blocked emotion, emotional depletion, repressed feelings, self-love needed."
      },
      feelings: {
        upright: "For feelings, this points to tenderness, affection, care.",
        reversed: "For feelings, this can still point to tenderness, affection, care, but reversed it may be internalized, resisted, hidden, or tangled with blocked emotion, emotional depletion, repressed feelings, self-love needed."
      },
      advice: {
        upright: "As advice, open your heart carefully.",
        reversed: "As advice, open your heart carefully; reversed, the warning is to check where blocked emotion, emotional depletion, repressed feelings, self-love needed may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to emotional renewal.",
        reversed: "As an outcome, this can still point to emotional renewal, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of blocked emotion, emotional depletion, repressed feelings, self-love needed."
      }
    },
    clarifier: {
      upright: "Softens and expands the original card with emotional openness, healing, love, compassion, or a new emotional beginning. It narrows the message toward the heart opening.",
      reversed: "Complicates through emotional blockage, unexpressed feelings, overwhelm, or love that is present but not flowing cleanly. Reversed, it narrows the issue to self-love, emotional release, or a delayed offer."
    }
  },

  "Two of Cups": {
    suit: "Cups",
    element: "Water",
    astrology: ["Venus in Cancer"],
    image: "images/two-of-cups.jpg",
    keywords: ["connection", "partnership", "mutuality", "bond"],
    upright: ["harmony", "attraction", "agreement", "emotional exchange"],
    reversed: ["imbalance", "disconnection", "miscommunication", "one-sided bond"],
    themeKeywords: {
      love: ["mutual feelings", "connection", "agreement"],
      career: ["partnership", "collaboration"],
      feelings: ["fondness", "attraction", "emotional reciprocity"],
      advice: ["meet halfway"],
      outcome: ["connection or agreement"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to mutual feelings, connection, agreement.",
        reversed: "In love, this can still point to mutual feelings, connection, agreement, but reversed it may be blocked, delayed, avoided, or distorted through imbalance, disconnection, miscommunication, one-sided bond."
      },
      career: {
        upright: "In career, this points to partnership, collaboration.",
        reversed: "In career, this can still point to partnership, collaboration, but reversed it may show friction, delay, misalignment, or a practical block around imbalance, disconnection, miscommunication, one-sided bond."
      },
      feelings: {
        upright: "For feelings, this points to fondness, attraction, emotional reciprocity.",
        reversed: "For feelings, this can still point to fondness, attraction, emotional reciprocity, but reversed it may be internalized, resisted, hidden, or tangled with imbalance, disconnection, miscommunication, one-sided bond."
      },
      advice: {
        upright: "As advice, meet halfway.",
        reversed: "As advice, meet halfway; reversed, the warning is to check where imbalance, disconnection, miscommunication, one-sided bond may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to connection or agreement.",
        reversed: "As an outcome, this can still point to connection or agreement, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of imbalance, disconnection, miscommunication, one-sided bond."
      }
    },
    clarifier: {
      upright: "Confirms mutuality, emotional exchange, partnership, reconciliation, or shared care. It narrows the original card toward reciprocity and relational balance.",
      reversed: "Complicates through imbalance, disconnection, miscommunication, or feelings not being met equally. Reversed, it narrows the issue to repair, honest exchange, or whether mutuality is actually present."
    }
  },

  "Three of Cups": {
    suit: "Cups",
    element: "Water",
    astrology: ["Mercury in Cancer"],
    image: "images/three-of-cups.jpg",
    keywords: ["friendship", "celebration", "community", "support"],
    upright: ["joy", "social connection", "reunion", "shared happiness"],
    reversed: ["gossip", "exclusion", "social tension", "overindulgence"],
    themeKeywords: {
      love: ["dating", "friendship", "reunion", "social connection"],
      career: ["teamwork", "celebration"],
      feelings: ["joy", "friendliness", "lightness"],
      advice: ["lean on support"],
      outcome: ["gathering", "reunion", "or celebration"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to dating, friendship, reunion, social connection.",
        reversed: "In love, this can still point to dating, friendship, reunion, social connection, but reversed it may be blocked, delayed, avoided, or distorted through gossip, exclusion, social tension, overindulgence."
      },
      career: {
        upright: "In career, this points to teamwork, celebration.",
        reversed: "In career, this can still point to teamwork, celebration, but reversed it may show friction, delay, misalignment, or a practical block around gossip, exclusion, social tension, overindulgence."
      },
      feelings: {
        upright: "For feelings, this points to joy, friendliness, lightness.",
        reversed: "For feelings, this can still point to joy, friendliness, lightness, but reversed it may be internalized, resisted, hidden, or tangled with gossip, exclusion, social tension, overindulgence."
      },
      advice: {
        upright: "As advice, lean on support.",
        reversed: "As advice, lean on support; reversed, the warning is to check where gossip, exclusion, social tension, overindulgence may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to gathering, reunion, or celebration.",
        reversed: "As an outcome, this can still point to gathering, reunion, or celebration, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of gossip, exclusion, social tension, overindulgence."
      }
    },
    clarifier: {
      upright: "Softens with friendship, celebration, community, reunion, and support. It expands the original card by adding social context and shared joy.",
      reversed: "Complicates through gossip, group drama, overindulgence, isolation from support, or third-party context only if other cards support it. Reversed, it narrows the issue to social imbalance or private celebration."
    }
  },

  "Four of Cups": {
    suit: "Cups",
    element: "Water",
    astrology: ["Moon in Cancer"],
    image: "images/four-of-cups.jpg",
    keywords: ["apathy", "reflection", "discontent", "withdrawal"],
    upright: ["boredom", "emotional pause", "reevaluation", "missed offer"],
    reversed: ["renewed interest", "acceptance", "emotional reawakening", "new outlook"],
    themeKeywords: {
      love: ["emotional distance", "apathy", "missed opportunity"],
      career: ["dissatisfaction", "lack of motivation"],
      feelings: ["unsure", "numb", "closed off"],
      advice: ["reassess before rejecting"],
      outcome: ["stagnation unless perspective shifts"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to emotional distance, apathy, missed opportunity.",
        reversed: "In love, this can still point to emotional distance, apathy, missed opportunity, but reversed it may be blocked, delayed, avoided, or distorted through renewed interest, acceptance, emotional reawakening, new outlook."
      },
      career: {
        upright: "In career, this points to dissatisfaction, lack of motivation.",
        reversed: "In career, this can still point to dissatisfaction, lack of motivation, but reversed it may show friction, delay, misalignment, or a practical block around renewed interest, acceptance, emotional reawakening, new outlook."
      },
      feelings: {
        upright: "For feelings, this points to unsure, numb, closed off.",
        reversed: "For feelings, this can still point to unsure, numb, closed off, but reversed it may be internalized, resisted, hidden, or tangled with renewed interest, acceptance, emotional reawakening, new outlook."
      },
      advice: {
        upright: "As advice, reassess before rejecting.",
        reversed: "As advice, reassess before rejecting; reversed, the warning is to check where renewed interest, acceptance, emotional reawakening, new outlook may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to stagnation unless perspective shifts.",
        reversed: "As an outcome, this can still point to stagnation unless perspective shifts, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of renewed interest, acceptance, emotional reawakening, new outlook."
      }
    },
    clarifier: {
      upright: "Complicates with emotional withdrawal, boredom, dissatisfaction, apathy, or missing what is being offered. It narrows the message toward inner disengagement.",
      reversed: "Can redirect toward re-engagement, but may also show deeper emotional shutdown or refusal to examine dissatisfaction. Reversed, it narrows the issue to whether someone is ready to accept an offer or come out of numbness."
    }
  },

  "Five of Cups": {
    suit: "Cups",
    element: "Water",
    astrology: ["Mars in Scorpio"],
    image: "images/five-of-cups.jpg",
    keywords: ["loss", "grief", "regret", "disappointment"],
    upright: ["mourning", "sadness", "focus on what went wrong", "emotional pain"],
    reversed: ["acceptance", "healing", "moving on", "forgiveness"],
    themeKeywords: {
      love: ["sadness", "regret", "emotional loss"],
      career: ["disappointment", "missed chance"],
      feelings: ["remorse", "grief", "guilt"],
      advice: ["grieve", "but notice what remains"],
      outcome: ["sadness before recovery"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to sadness, regret, emotional loss.",
        reversed: "In love, this can still point to sadness, regret, emotional loss, but reversed it may be blocked, delayed, avoided, or distorted through acceptance, healing, moving on, forgiveness."
      },
      career: {
        upright: "In career, this points to disappointment, missed chance.",
        reversed: "In career, this can still point to disappointment, missed chance, but reversed it may show friction, delay, misalignment, or a practical block around acceptance, healing, moving on, forgiveness."
      },
      feelings: {
        upright: "For feelings, this points to remorse, grief, guilt.",
        reversed: "For feelings, this can still point to remorse, grief, guilt, but reversed it may be internalized, resisted, hidden, or tangled with acceptance, healing, moving on, forgiveness."
      },
      advice: {
        upright: "As advice, grieve, but notice what remains.",
        reversed: "As advice, grieve, but notice what remains; reversed, the warning is to check where acceptance, healing, moving on, forgiveness may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to sadness before recovery.",
        reversed: "As an outcome, this can still point to sadness before recovery, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of acceptance, healing, moving on, forgiveness."
      }
    },
    clarifier: {
      upright: "Deepens the original card into grief, regret, disappointment, remorse, or focus on loss. It narrows the message toward emotional processing rather than immediate repair.",
      reversed: "Softens by showing recovery from grief, but can complicate through denial, self-pity, or refusing to see what remains. Reversed, it narrows the issue to forgiveness, acceptance, and turning toward what can still be saved."
    }
  },

  "Six of Cups": {
    suit: "Cups",
    element: "Water",
    astrology: ["Sun in Scorpio"],
    image: "images/six-of-cups.jpg",
    keywords: ["memory", "nostalgia", "childhood", "return"],
    upright: ["innocence", "past connection", "comfort", "sentimentality"],
    reversed: ["stuck in past", "old wounds", "leaving nostalgia behind", "growing up"],
    themeKeywords: {
      love: ["past person", "nostalgia", "familiar bond"],
      career: ["old opportunity", "childhood passion"],
      feelings: ["fond memories", "sentimentality"],
      advice: ["learn from the past without living there"],
      outcome: ["return of a memory", "person", "or old pattern"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to past person, nostalgia, familiar bond.",
        reversed: "In love, this can still point to past person, nostalgia, familiar bond, but reversed it may be blocked, delayed, avoided, or distorted through stuck in past, old wounds, leaving nostalgia behind, growing up."
      },
      career: {
        upright: "In career, this points to old opportunity, childhood passion.",
        reversed: "In career, this can still point to old opportunity, childhood passion, but reversed it may show friction, delay, misalignment, or a practical block around stuck in past, old wounds, leaving nostalgia behind, growing up."
      },
      feelings: {
        upright: "For feelings, this points to fond memories, sentimentality.",
        reversed: "For feelings, this can still point to fond memories, sentimentality, but reversed it may be internalized, resisted, hidden, or tangled with stuck in past, old wounds, leaving nostalgia behind, growing up."
      },
      advice: {
        upright: "As advice, learn from the past without living there.",
        reversed: "As advice, learn from the past without living there; reversed, the warning is to check where stuck in past, old wounds, leaving nostalgia behind, growing up may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to return of a memory, person, or old pattern.",
        reversed: "As an outcome, this can still point to return of a memory, person, or old pattern, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of stuck in past, old wounds, leaving nostalgia behind, growing up."
      }
    },
    clarifier: {
      upright: "Redirects toward the past, nostalgia, innocence, old memories, or a previous connection. It narrows the original card toward emotional history and familiar patterns.",
      reversed: "Complicates through being stuck in the past, idealizing memory, immature attachment, or repeating old dynamics. Reversed, it narrows the issue to releasing nostalgia or seeing the past more honestly."
    }
  },

  "Seven of Cups": {
    suit: "Cups",
    element: "Water",
    astrology: ["Venus in Scorpio"],
    image: "images/seven-of-cups.jpg",
    keywords: ["choices", "fantasy", "illusion", "possibility"],
    upright: ["many options", "wishful thinking", "dreams", "confusion"],
    reversed: ["clarity", "decision", "reality check", "narrowing options"],
    themeKeywords: {
      love: ["mixed signals", "fantasy", "many options"],
      career: ["choices but lack of clarity"],
      feelings: ["overwhelmed", "idealizing", "unsure"],
      advice: ["choose based on reality"],
      outcome: ["unclear until options narrow"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to mixed signals, fantasy, many options.",
        reversed: "In love, this can still point to mixed signals, fantasy, many options, but reversed it may be blocked, delayed, avoided, or distorted through clarity, decision, reality check, narrowing options."
      },
      career: {
        upright: "In career, this points to choices but lack of clarity.",
        reversed: "In career, this can still point to choices but lack of clarity, but reversed it may show friction, delay, misalignment, or a practical block around clarity, decision, reality check, narrowing options."
      },
      feelings: {
        upright: "For feelings, this points to overwhelmed, idealizing, unsure.",
        reversed: "For feelings, this can still point to overwhelmed, idealizing, unsure, but reversed it may be internalized, resisted, hidden, or tangled with clarity, decision, reality check, narrowing options."
      },
      advice: {
        upright: "As advice, choose based on reality.",
        reversed: "As advice, choose based on reality; reversed, the warning is to check where clarity, decision, reality check, narrowing options may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to unclear until options narrow.",
        reversed: "As an outcome, this can still point to unclear until options narrow, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of clarity, decision, reality check, narrowing options."
      }
    },
    clarifier: {
      upright: "Complicates with options, fantasy, confusion, wishful thinking, and scattered desire. It narrows the message toward the need to separate possibility from reality.",
      reversed: "Can soften confusion by showing choices narrowing, but may also reveal avoidance of making a choice. Reversed, it narrows the issue to clarity emerging or a fantasy being punctured."
    }
  },

  "Eight of Cups": {
    suit: "Cups",
    element: "Water",
    astrology: ["Saturn in Pisces"],
    image: "images/eight-of-cups.jpg",
    keywords: ["leaving", "searching", "detachment", "disappointment"],
    upright: ["walking away", "seeking meaning", "emotional departure", "letting go"],
    reversed: ["fear of leaving", "returning", "avoidance", "staying too long"],
    themeKeywords: {
      love: ["walking away", "emotional distance"],
      career: ["leaving unfulfilling work"],
      feelings: ["disappointed", "detached", "searching"],
      advice: ["leave what is emotionally empty"],
      outcome: ["departure or inner withdrawal"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to walking away, emotional distance.",
        reversed: "In love, this can still point to walking away, emotional distance, but reversed it may be blocked, delayed, avoided, or distorted through fear of leaving, returning, avoidance, staying too long."
      },
      career: {
        upright: "In career, this points to leaving unfulfilling work.",
        reversed: "In career, this can still point to leaving unfulfilling work, but reversed it may show friction, delay, misalignment, or a practical block around fear of leaving, returning, avoidance, staying too long."
      },
      feelings: {
        upright: "For feelings, this points to disappointed, detached, searching.",
        reversed: "For feelings, this can still point to disappointed, detached, searching, but reversed it may be internalized, resisted, hidden, or tangled with fear of leaving, returning, avoidance, staying too long."
      },
      advice: {
        upright: "As advice, leave what is emotionally empty.",
        reversed: "As advice, leave what is emotionally empty; reversed, the warning is to check where fear of leaving, returning, avoidance, staying too long may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to departure or inner withdrawal.",
        reversed: "As an outcome, this can still point to departure or inner withdrawal, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of fear of leaving, returning, avoidance, staying too long."
      }
    },
    clarifier: {
      upright: "Confirms emotional withdrawal, leaving, seeking deeper meaning, or outgrowing something. It narrows the original card toward what no longer satisfies the soul.",
      reversed: "Complicates through fear of leaving, returning to what is unfulfilling, avoidance dressed as departure, or unfinished emotional business. Reversed, it narrows the issue to whether someone is truly done or still attached."
    }
  },

  "Nine of Cups": {
    suit: "Cups",
    element: "Water",
    astrology: ["Jupiter in Pisces"],
    image: "images/nine-of-cups.jpg",
    keywords: ["satisfaction", "wish", "pleasure", "contentment"],
    upright: ["fulfillment", "gratitude", "comfort", "emotional reward"],
    reversed: ["dissatisfaction", "surface happiness", "overindulgence", "empty wish"],
    themeKeywords: {
      love: ["emotional satisfaction", "desire fulfilled"],
      career: ["success", "personal reward"],
      feelings: ["pleased", "content", "attracted"],
      advice: ["know what you actually want"],
      outcome: ["wish granted or emotional satisfaction"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to emotional satisfaction, desire fulfilled.",
        reversed: "In love, this can still point to emotional satisfaction, desire fulfilled, but reversed it may be blocked, delayed, avoided, or distorted through dissatisfaction, surface happiness, overindulgence, empty wish."
      },
      career: {
        upright: "In career, this points to success, personal reward.",
        reversed: "In career, this can still point to success, personal reward, but reversed it may show friction, delay, misalignment, or a practical block around dissatisfaction, surface happiness, overindulgence, empty wish."
      },
      feelings: {
        upright: "For feelings, this points to pleased, content, attracted.",
        reversed: "For feelings, this can still point to pleased, content, attracted, but reversed it may be internalized, resisted, hidden, or tangled with dissatisfaction, surface happiness, overindulgence, empty wish."
      },
      advice: {
        upright: "As advice, know what you actually want.",
        reversed: "As advice, know what you actually want; reversed, the warning is to check where dissatisfaction, surface happiness, overindulgence, empty wish may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to wish granted or emotional satisfaction.",
        reversed: "As an outcome, this can still point to wish granted or emotional satisfaction, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of dissatisfaction, surface happiness, overindulgence, empty wish."
      }
    },
    clarifier: {
      upright: "Confirms satisfaction, wish fulfillment, pleasure, emotional gratification, and getting what one wants. It narrows the original card toward personal desire.",
      reversed: "Complicates through overindulgence, smugness, emotional self-focus, or a wish that satisfies the ego but not the heart. Reversed, it narrows the issue to whether fulfillment is genuine or superficial."
    }
  },

  "Ten of Cups": {
    suit: "Cups",
    element: "Water",
    astrology: ["Mars in Pisces"],
    image: "images/ten-of-cups.jpg",
    keywords: ["harmony", "family", "joy", "emotional completion"],
    upright: ["contentment", "belonging", "shared happiness", "peace"],
    reversed: ["family tension", "misaligned ideals", "emotional disharmony", "private sadness"],
    themeKeywords: {
      love: ["long-term happiness", "emotional alignment"],
      career: ["fulfilling environment", "supportive team"],
      feelings: ["deep happiness", "emotional safety"],
      advice: ["choose what supports long-term peace"],
      outcome: ["emotional fulfillment"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to long-term happiness, emotional alignment.",
        reversed: "In love, this can still point to long-term happiness, emotional alignment, but reversed it may be blocked, delayed, avoided, or distorted through family tension, misaligned ideals, emotional disharmony, private sadness."
      },
      career: {
        upright: "In career, this points to fulfilling environment, supportive team.",
        reversed: "In career, this can still point to fulfilling environment, supportive team, but reversed it may show friction, delay, misalignment, or a practical block around family tension, misaligned ideals, emotional disharmony, private sadness."
      },
      feelings: {
        upright: "For feelings, this points to deep happiness, emotional safety.",
        reversed: "For feelings, this can still point to deep happiness, emotional safety, but reversed it may be internalized, resisted, hidden, or tangled with family tension, misaligned ideals, emotional disharmony, private sadness."
      },
      advice: {
        upright: "As advice, choose what supports long-term peace.",
        reversed: "As advice, choose what supports long-term peace; reversed, the warning is to check where family tension, misaligned ideals, emotional disharmony, private sadness may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to emotional fulfillment.",
        reversed: "As an outcome, this can still point to emotional fulfillment, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of family tension, misaligned ideals, emotional disharmony, private sadness."
      }
    },
    clarifier: {
      upright: "Softens with emotional fulfillment, family, harmony, belonging, and long-term happiness. It expands the original card toward shared emotional peace.",
      reversed: "Complicates through idealization, family tension, emotional disappointment, or chasing an image of happiness. Reversed, it narrows the issue to whether the outer picture matches the inner reality."
    }
  },

  "Page of Cups": {
    suit: "Cups",
    element: "Water",
    astrology: ["Earth of Water"],
    image: "images/page-of-cups.jpg",
    keywords: ["sensitivity", "message", "creativity", "openness"],
    upright: ["emotional curiosity", "sweetness", "intuition", "gentle offer"],
    reversed: ["immaturity", "emotional avoidance", "blocked creativity", "insecurity"],
    themeKeywords: {
      love: ["sweet message", "apology", "shy feelings"],
      career: ["creative idea", "emotional learning"],
      feelings: ["affection", "vulnerability", "curiosity"],
      advice: ["express gently"],
      outcome: ["message or emotional opening"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to sweet message, apology, shy feelings.",
        reversed: "In love, this can still point to sweet message, apology, shy feelings, but reversed it may be blocked, delayed, avoided, or distorted through immaturity, emotional avoidance, blocked creativity, insecurity."
      },
      career: {
        upright: "In career, this points to creative idea, emotional learning.",
        reversed: "In career, this can still point to creative idea, emotional learning, but reversed it may show friction, delay, misalignment, or a practical block around immaturity, emotional avoidance, blocked creativity, insecurity."
      },
      feelings: {
        upright: "For feelings, this points to affection, vulnerability, curiosity.",
        reversed: "For feelings, this can still point to affection, vulnerability, curiosity, but reversed it may be internalized, resisted, hidden, or tangled with immaturity, emotional avoidance, blocked creativity, insecurity."
      },
      advice: {
        upright: "As advice, express gently.",
        reversed: "As advice, express gently; reversed, the warning is to check where immaturity, emotional avoidance, blocked creativity, insecurity may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to message or emotional opening.",
        reversed: "As an outcome, this can still point to message or emotional opening, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of immaturity, emotional avoidance, blocked creativity, insecurity."
      }
    },
    clarifier: {
      upright: "Confirms emotional message, apology, crush, tenderness, creativity, or sensitive openness. It narrows the original card toward a small but sincere emotional gesture.",
      reversed: "Complicates through emotional immaturity, shyness, unrealistic hopes, or an apology that lacks follow-through. Reversed, it narrows the issue to feelings that are present but awkward, delayed, or poorly expressed."
    }
  },

  "Knight of Cups": {
    suit: "Cups",
    element: "Water",
    astrology: ["Fire of Water"],
    image: "images/knight-of-cups.jpg",
    keywords: ["romance", "idealism", "invitation", "pursuit"],
    upright: ["charm", "emotional expression", "proposal", "following the heart"],
    reversed: ["moodiness", "unrealistic fantasy", "emotional inconsistency", "empty charm"],
    themeKeywords: {
      love: ["romantic offer", "pursuit", "emotional expression"],
      career: ["creative proposal", "dream opportunity"],
      feelings: ["romantic", "inspired", "idealizing"],
      advice: ["lead with heart", "but stay realistic"],
      outcome: ["emotional offer"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to romantic offer, pursuit, emotional expression.",
        reversed: "In love, this can still point to romantic offer, pursuit, emotional expression, but reversed it may be blocked, delayed, avoided, or distorted through moodiness, unrealistic fantasy, emotional inconsistency, empty charm."
      },
      career: {
        upright: "In career, this points to creative proposal, dream opportunity.",
        reversed: "In career, this can still point to creative proposal, dream opportunity, but reversed it may show friction, delay, misalignment, or a practical block around moodiness, unrealistic fantasy, emotional inconsistency, empty charm."
      },
      feelings: {
        upright: "For feelings, this points to romantic, inspired, idealizing.",
        reversed: "For feelings, this can still point to romantic, inspired, idealizing, but reversed it may be internalized, resisted, hidden, or tangled with moodiness, unrealistic fantasy, emotional inconsistency, empty charm."
      },
      advice: {
        upright: "As advice, lead with heart, but stay realistic.",
        reversed: "As advice, lead with heart, but stay realistic; reversed, the warning is to check where moodiness, unrealistic fantasy, emotional inconsistency, empty charm may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to emotional offer.",
        reversed: "As an outcome, this can still point to emotional offer, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of moodiness, unrealistic fantasy, emotional inconsistency, empty charm."
      }
    },
    clarifier: {
      upright: "Deepens romantic, creative, emotional, or idealistic movement. It expands the original card through pursuit from the heart and narrows it toward an offer or expression.",
      reversed: "Complicates through idealization, charm without practicality, emotional inconsistency, or fantasy-led pursuit. Reversed, it narrows the issue to whether the offer is sincere, sustainable, or emotionally mature."
    }
  },

  "Queen of Cups": {
    suit: "Cups",
    element: "Water",
    astrology: ["Water of Water"],
    image: "images/queen-of-cups.jpg",
    keywords: ["compassion", "intuition", "emotional depth", "care"],
    upright: ["empathy", "nurturing", "inner wisdom", "emotional maturity"],
    reversed: ["emotional overwhelm", "poor boundaries", "codependency", "self-neglect"],
    themeKeywords: {
      love: ["deep care", "emotional receptivity"],
      career: ["healing work", "emotional intelligence"],
      feelings: ["tenderness", "compassion", "vulnerability"],
      advice: ["listen emotionally", "but keep boundaries"],
      outcome: ["emotional understanding"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to deep care, emotional receptivity.",
        reversed: "In love, this can still point to deep care, emotional receptivity, but reversed it may be blocked, delayed, avoided, or distorted through emotional overwhelm, poor boundaries, codependency, self-neglect."
      },
      career: {
        upright: "In career, this points to healing work, emotional intelligence.",
        reversed: "In career, this can still point to healing work, emotional intelligence, but reversed it may show friction, delay, misalignment, or a practical block around emotional overwhelm, poor boundaries, codependency, self-neglect."
      },
      feelings: {
        upright: "For feelings, this points to tenderness, compassion, vulnerability.",
        reversed: "For feelings, this can still point to tenderness, compassion, vulnerability, but reversed it may be internalized, resisted, hidden, or tangled with emotional overwhelm, poor boundaries, codependency, self-neglect."
      },
      advice: {
        upright: "As advice, listen emotionally, but keep boundaries.",
        reversed: "As advice, listen emotionally, but keep boundaries; reversed, the warning is to check where emotional overwhelm, poor boundaries, codependency, self-neglect may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to emotional understanding.",
        reversed: "As an outcome, this can still point to emotional understanding, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of emotional overwhelm, poor boundaries, codependency, self-neglect."
      }
    },
    clarifier: {
      upright: "Softens with empathy, intuition, emotional depth, compassion, and sensitivity. It narrows the original card toward emotional understanding and receptivity.",
      reversed: "Complicates through emotional overwhelm, blurred boundaries, dependency, moodiness, or absorbing too much. Reversed, it narrows the issue to self-care, emotional boundaries, and distinguishing intuition from anxiety."
    }
  },

  "King of Cups": {
    suit: "Cups",
    element: "Water",
    astrology: ["Air of Water"],
    image: "images/king-of-cups.jpg",
    keywords: ["emotional control", "wisdom", "compassion", "maturity"],
    upright: ["calm leadership", "balanced emotion", "patience", "support"],
    reversed: ["emotional repression", "manipulation", "moodiness", "avoidance"],
    themeKeywords: {
      love: ["mature affection", "controlled emotions"],
      career: ["calm leadership", "counseling", "diplomacy"],
      feelings: ["deep but composed"],
      advice: ["stay emotionally steady"],
      outcome: ["emotional balance"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to mature affection, controlled emotions.",
        reversed: "In love, this can still point to mature affection, controlled emotions, but reversed it may be blocked, delayed, avoided, or distorted through emotional repression, manipulation, moodiness, avoidance."
      },
      career: {
        upright: "In career, this points to calm leadership, counseling, diplomacy.",
        reversed: "In career, this can still point to calm leadership, counseling, diplomacy, but reversed it may show friction, delay, misalignment, or a practical block around emotional repression, manipulation, moodiness, avoidance."
      },
      feelings: {
        upright: "For feelings, this points to deep but composed.",
        reversed: "For feelings, this can still point to deep but composed, but reversed it may be internalized, resisted, hidden, or tangled with emotional repression, manipulation, moodiness, avoidance."
      },
      advice: {
        upright: "As advice, stay emotionally steady.",
        reversed: "As advice, stay emotionally steady; reversed, the warning is to check where emotional repression, manipulation, moodiness, avoidance may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to emotional balance.",
        reversed: "As an outcome, this can still point to emotional balance, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of emotional repression, manipulation, moodiness, avoidance."
      }
    },
    clarifier: {
      upright: "Narrows toward emotional maturity, self-control, compassion, diplomacy, and contained feelings. It confirms depth without dramatic display.",
      reversed: "Complicates through emotional suppression, manipulation through calmness, avoidance, or feelings controlled so tightly they become inaccessible. Reversed, it narrows the issue to emotional regulation and honesty."
    }
  },

  "Ace of Swords": {
    suit: "Swords",
    element: "Air",
    astrology: ["Air"],
    image: "images/ace-of-swords.jpg",
    keywords: ["truth", "clarity", "breakthrough", "idea"],
    upright: ["mental clarity", "new insight", "honesty", "decision"],
    reversed: ["confusion", "miscommunication", "distorted truth", "mental block"],
    themeKeywords: {
      love: ["honest conversation", "clarity", "truth"],
      career: ["decision", "contract", "strategy"],
      feelings: ["mental clarity", "realization"],
      advice: ["speak clearly"],
      outcome: ["truth revealed or decision made"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to honest conversation, clarity, truth.",
        reversed: "In love, this can still point to honest conversation, clarity, truth, but reversed it may be blocked, delayed, avoided, or distorted through confusion, miscommunication, distorted truth, mental block."
      },
      career: {
        upright: "In career, this points to decision, contract, strategy.",
        reversed: "In career, this can still point to decision, contract, strategy, but reversed it may show friction, delay, misalignment, or a practical block around confusion, miscommunication, distorted truth, mental block."
      },
      feelings: {
        upright: "For feelings, this points to mental clarity, realization.",
        reversed: "For feelings, this can still point to mental clarity, realization, but reversed it may be internalized, resisted, hidden, or tangled with confusion, miscommunication, distorted truth, mental block."
      },
      advice: {
        upright: "As advice, speak clearly.",
        reversed: "As advice, speak clearly; reversed, the warning is to check where confusion, miscommunication, distorted truth, mental block may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to truth revealed or decision made.",
        reversed: "As an outcome, this can still point to truth revealed or decision made, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of confusion, miscommunication, distorted truth, mental block."
      }
    },
    clarifier: {
      upright: "Confirms truth, clarity, communication, decision, and mental breakthrough. It narrows the original card toward what can be named, said, proven, or decided.",
      reversed: "Complicates through confusion, harsh words, miscommunication, delayed truth, or clarity used without compassion. Reversed, it narrows the issue to what remains unsaid or mentally tangled."
    }
  },

  "Two of Swords": {
    suit: "Swords",
    element: "Air",
    astrology: ["Moon in Libra"],
    image: "images/two-of-swords.jpg",
    keywords: ["choice", "stalemate", "avoidance", "indecision"],
    upright: ["blocked decision", "weighing options", "emotional detachment", "pause"],
    reversed: ["confusion lifting", "forced choice", "overwhelm", "delayed decision"],
    themeKeywords: {
      love: ["emotional stalemate", "silence"],
      career: ["decision delayed"],
      feelings: ["conflicted", "guarded", "blocked"],
      advice: ["remove the blindfold"],
      outcome: ["pause until a choice is made"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to emotional stalemate, silence.",
        reversed: "In love, this can still point to emotional stalemate, silence, but reversed it may be blocked, delayed, avoided, or distorted through confusion lifting, forced choice, overwhelm, delayed decision."
      },
      career: {
        upright: "In career, this points to decision delayed.",
        reversed: "In career, this can still point to decision delayed, but reversed it may show friction, delay, misalignment, or a practical block around confusion lifting, forced choice, overwhelm, delayed decision."
      },
      feelings: {
        upright: "For feelings, this points to conflicted, guarded, blocked.",
        reversed: "For feelings, this can still point to conflicted, guarded, blocked, but reversed it may be internalized, resisted, hidden, or tangled with confusion lifting, forced choice, overwhelm, delayed decision."
      },
      advice: {
        upright: "As advice, remove the blindfold.",
        reversed: "As advice, remove the blindfold; reversed, the warning is to check where confusion lifting, forced choice, overwhelm, delayed decision may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to pause until a choice is made.",
        reversed: "As an outcome, this can still point to pause until a choice is made, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of confusion lifting, forced choice, overwhelm, delayed decision."
      }
    },
    clarifier: {
      upright: "Complicates with avoidance, blocked emotions, indecision, and unwillingness to see. It narrows the original card toward a choice being postponed.",
      reversed: "Can redirect toward a decision finally being made, but may also show deeper denial. Reversed, it narrows the issue to overload, forced choice, or the blindfold starting to slip."
    }
  },

  "Three of Swords": {
    suit: "Swords",
    element: "Air",
    astrology: ["Saturn in Libra"],
    image: "images/three-of-swords.jpg",
    keywords: ["heartbreak", "pain", "grief", "truth"],
    upright: ["emotional wound", "sorrow", "separation", "painful clarity"],
    reversed: ["healing", "release", "forgiveness", "recovering from pain"],
    themeKeywords: {
      love: ["hurt", "breakup", "emotional pain"],
      career: ["disappointment", "rejection"],
      feelings: ["wounded", "sad", "betrayed-feeling"],
      advice: ["acknowledge the pain honestly"],
      outcome: ["painful clarity before healing"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to hurt, breakup, emotional pain.",
        reversed: "In love, this can still point to hurt, breakup, emotional pain, but reversed it may be blocked, delayed, avoided, or distorted through healing, release, forgiveness, recovering from pain."
      },
      career: {
        upright: "In career, this points to disappointment, rejection.",
        reversed: "In career, this can still point to disappointment, rejection, but reversed it may show friction, delay, misalignment, or a practical block around healing, release, forgiveness, recovering from pain."
      },
      feelings: {
        upright: "For feelings, this points to wounded, sad, betrayed-feeling.",
        reversed: "For feelings, this can still point to wounded, sad, betrayed-feeling, but reversed it may be internalized, resisted, hidden, or tangled with healing, release, forgiveness, recovering from pain."
      },
      advice: {
        upright: "As advice, acknowledge the pain honestly.",
        reversed: "As advice, acknowledge the pain honestly; reversed, the warning is to check where healing, release, forgiveness, recovering from pain may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to painful clarity before healing.",
        reversed: "As an outcome, this can still point to painful clarity before healing, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of healing, release, forgiveness, recovering from pain."
      }
    },
    clarifier: {
      upright: "Deepens the original card into heartbreak, disappointment, grief, painful truth, or separation. It narrows the message toward the wound that needs to be acknowledged.",
      reversed: "Softens by showing healing after pain, but can complicate through denial, old wounds reopening, or pain not being processed. Reversed, it narrows the issue to recovery, forgiveness, or lingering hurt."
    }
  },

  "Four of Swords": {
    suit: "Swords",
    element: "Air",
    astrology: ["Jupiter in Libra"],
    image: "images/four-of-swords.jpg",
    keywords: ["rest", "recovery", "pause", "contemplation"],
    upright: ["mental rest", "stillness", "retreat", "recuperation"],
    reversed: ["restlessness", "burnout", "returning to action", "forced pause"],
    themeKeywords: {
      love: ["no-contact", "pause", "healing space"],
      career: ["rest", "burnout recovery"],
      feelings: ["mentally exhausted", "withdrawn"],
      advice: ["rest before deciding"],
      outcome: ["delay for healing"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to no-contact, pause, healing space.",
        reversed: "In love, this can still point to no-contact, pause, healing space, but reversed it may be blocked, delayed, avoided, or distorted through restlessness, burnout, returning to action, forced pause."
      },
      career: {
        upright: "In career, this points to rest, burnout recovery.",
        reversed: "In career, this can still point to rest, burnout recovery, but reversed it may show friction, delay, misalignment, or a practical block around restlessness, burnout, returning to action, forced pause."
      },
      feelings: {
        upright: "For feelings, this points to mentally exhausted, withdrawn.",
        reversed: "For feelings, this can still point to mentally exhausted, withdrawn, but reversed it may be internalized, resisted, hidden, or tangled with restlessness, burnout, returning to action, forced pause."
      },
      advice: {
        upright: "As advice, rest before deciding.",
        reversed: "As advice, rest before deciding; reversed, the warning is to check where restlessness, burnout, returning to action, forced pause may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to delay for healing.",
        reversed: "As an outcome, this can still point to delay for healing, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of restlessness, burnout, returning to action, forced pause."
      }
    },
    clarifier: {
      upright: "Softens through rest, pause, recovery, silence, and time to process. It narrows the original card away from action and toward nervous-system repair.",
      reversed: "Complicates through restlessness, burnout, refusal to rest, or silence becoming avoidance. Reversed, it narrows the issue to whether the pause is ending or whether recovery has been skipped."
    }
  },

  "Five of Swords": {
    suit: "Swords",
    element: "Air",
    astrology: ["Venus in Aquarius"],
    image: "images/five-of-swords.jpg",
    keywords: ["conflict", "defeat", "ego", "tension"],
    upright: ["win at a cost", "argument", "self-interest", "hostility"],
    reversed: ["reconciliation", "walking away", "regret", "ending conflict"],
    themeKeywords: {
      love: ["arguments", "pride", "emotional damage"],
      career: ["office politics", "competition"],
      feelings: ["resentment", "defensiveness"],
      advice: ["do not fight dirty"],
      outcome: ["hollow victory or unresolved tension"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to arguments, pride, emotional damage.",
        reversed: "In love, this can still point to arguments, pride, emotional damage, but reversed it may be blocked, delayed, avoided, or distorted through reconciliation, walking away, regret, ending conflict."
      },
      career: {
        upright: "In career, this points to office politics, competition.",
        reversed: "In career, this can still point to office politics, competition, but reversed it may show friction, delay, misalignment, or a practical block around reconciliation, walking away, regret, ending conflict."
      },
      feelings: {
        upright: "For feelings, this points to resentment, defensiveness.",
        reversed: "For feelings, this can still point to resentment, defensiveness, but reversed it may be internalized, resisted, hidden, or tangled with reconciliation, walking away, regret, ending conflict."
      },
      advice: {
        upright: "As advice, do not fight dirty.",
        reversed: "As advice, do not fight dirty; reversed, the warning is to check where reconciliation, walking away, regret, ending conflict may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to hollow victory or unresolved tension.",
        reversed: "As an outcome, this can still point to hollow victory or unresolved tension, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of reconciliation, walking away, regret, ending conflict."
      }
    },
    clarifier: {
      upright: "Complicates with conflict, ego, resentment, harsh words, and winning at a cost. It narrows the original card toward damage caused by pride or strategy.",
      reversed: "Can soften by showing a conflict winding down, but may also reveal avoidance of accountability after harm. Reversed, it narrows the issue to repair, apology, or choosing not to keep fighting."
    }
  },

  "Six of Swords": {
    suit: "Swords",
    element: "Air",
    astrology: ["Mercury in Aquarius"],
    image: "images/six-of-swords.jpg",
    keywords: ["transition", "movement", "recovery", "leaving"],
    upright: ["moving on", "mental shift", "healing journey", "distance"],
    reversed: ["stuckness", "resisting transition", "unfinished movement", "returning difficulty"],
    themeKeywords: {
      love: ["moving past conflict", "sometimes distancing"],
      career: ["transition", "relocation", "calmer environment"],
      feelings: ["trying to detach or find peace"],
      advice: ["move toward calm"],
      outcome: ["gradual transition"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to moving past conflict, sometimes distancing.",
        reversed: "In love, this can still point to moving past conflict, sometimes distancing, but reversed it may be blocked, delayed, avoided, or distorted through stuckness, resisting transition, unfinished movement, returning difficulty."
      },
      career: {
        upright: "In career, this points to transition, relocation, calmer environment.",
        reversed: "In career, this can still point to transition, relocation, calmer environment, but reversed it may show friction, delay, misalignment, or a practical block around stuckness, resisting transition, unfinished movement, returning difficulty."
      },
      feelings: {
        upright: "For feelings, this points to trying to detach or find peace.",
        reversed: "For feelings, this can still point to trying to detach or find peace, but reversed it may be internalized, resisted, hidden, or tangled with stuckness, resisting transition, unfinished movement, returning difficulty."
      },
      advice: {
        upright: "As advice, move toward calm.",
        reversed: "As advice, move toward calm; reversed, the warning is to check where stuckness, resisting transition, unfinished movement, returning difficulty may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to gradual transition.",
        reversed: "As an outcome, this can still point to gradual transition, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of stuckness, resisting transition, unfinished movement, returning difficulty."
      }
    },
    clarifier: {
      upright: "Confirms moving on, transition, emotional distance, and leaving conflict behind. It narrows the original card toward a calmer next phase.",
      reversed: "Complicates through difficulty moving on, baggage, delayed transition, or physically leaving while mentally staying stuck. Reversed, it narrows the issue to unfinished processing or resistance to peace."
    }
  },

  "Seven of Swords": {
    suit: "Swords",
    element: "Air",
    astrology: ["Moon in Aquarius"],
    image: "images/seven-of-swords.jpg",
    keywords: ["strategy", "secrecy", "avoidance", "deception"],
    upright: ["acting alone", "withholding", "cunning", "escape"],
    reversed: ["truth exposed", "confession", "self-deception", "changing tactics"],
    themeKeywords: {
      love: ["avoidance", "secrecy", "not saying everything"],
      career: ["strategy", "hidden plans", "politics"],
      feelings: ["guarded", "indirect", "evasive"],
      advice: ["be strategic but honest"],
      outcome: ["hidden factors remain"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to avoidance, secrecy, not saying everything.",
        reversed: "In love, this can still point to avoidance, secrecy, not saying everything, but reversed it may be blocked, delayed, avoided, or distorted through truth exposed, confession, self-deception, changing tactics."
      },
      career: {
        upright: "In career, this points to strategy, hidden plans, politics.",
        reversed: "In career, this can still point to strategy, hidden plans, politics, but reversed it may show friction, delay, misalignment, or a practical block around truth exposed, confession, self-deception, changing tactics."
      },
      feelings: {
        upright: "For feelings, this points to guarded, indirect, evasive.",
        reversed: "For feelings, this can still point to guarded, indirect, evasive, but reversed it may be internalized, resisted, hidden, or tangled with truth exposed, confession, self-deception, changing tactics."
      },
      advice: {
        upright: "As advice, be strategic but honest.",
        reversed: "As advice, be strategic but honest; reversed, the warning is to check where truth exposed, confession, self-deception, changing tactics may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to hidden factors remain.",
        reversed: "As an outcome, this can still point to hidden factors remain, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of truth exposed, confession, self-deception, changing tactics."
      }
    },
    clarifier: {
      upright: "Complicates with secrecy, strategy, avoidance, self-protection, or dishonesty if supported by surrounding cards. It narrows the original card toward what is indirect or withheld.",
      reversed: "Can redirect toward coming clean, failed secrecy, or dropping a strategy that is not working. Reversed, it narrows the issue to confession, exposure, self-sabotage, or the cost of avoidance."
    }
  },

  "Eight of Swords": {
    suit: "Swords",
    element: "Air",
    astrology: ["Jupiter in Gemini"],
    image: "images/eight-of-swords.jpg",
    keywords: ["restriction", "fear", "trapped", "limitation"],
    upright: ["mental prison", "self-limiting belief", "anxiety", "feeling stuck"],
    reversed: ["release", "new perspective", "freedom", "escaping fear"],
    themeKeywords: {
      love: ["anxiety", "feeling trapped"],
      career: ["limiting beliefs", "fear of action"],
      feelings: ["stuck", "scared", "overthinking"],
      advice: ["question the mental cage"],
      outcome: ["stuckness unless perspective changes"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to anxiety, feeling trapped.",
        reversed: "In love, this can still point to anxiety, feeling trapped, but reversed it may be blocked, delayed, avoided, or distorted through release, new perspective, freedom, escaping fear."
      },
      career: {
        upright: "In career, this points to limiting beliefs, fear of action.",
        reversed: "In career, this can still point to limiting beliefs, fear of action, but reversed it may show friction, delay, misalignment, or a practical block around release, new perspective, freedom, escaping fear."
      },
      feelings: {
        upright: "For feelings, this points to stuck, scared, overthinking.",
        reversed: "For feelings, this can still point to stuck, scared, overthinking, but reversed it may be internalized, resisted, hidden, or tangled with release, new perspective, freedom, escaping fear."
      },
      advice: {
        upright: "As advice, question the mental cage.",
        reversed: "As advice, question the mental cage; reversed, the warning is to check where release, new perspective, freedom, escaping fear may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to stuckness unless perspective changes.",
        reversed: "As an outcome, this can still point to stuckness unless perspective changes, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of release, new perspective, freedom, escaping fear."
      }
    },
    clarifier: {
      upright: "Narrows toward mental restriction, fear, overthinking, helplessness, and perceived lack of options. It clarifies that the block may be psychological rather than absolute.",
      reversed: "Redirects toward release from fear, but can also show deeper entrapment if someone refuses to challenge the story. Reversed, it narrows the issue to mental freedom, perspective shift, or fear losing control."
    }
  },

  "Nine of Swords": {
    suit: "Swords",
    element: "Air",
    astrology: ["Mars in Gemini"],
    image: "images/nine-of-swords.jpg",
    keywords: ["anxiety", "worry", "nightmares", "guilt"],
    upright: ["mental anguish", "fear spiral", "stress", "sleeplessness"],
    reversed: ["recovery", "seeking help", "released fear", "inner healing"],
    themeKeywords: {
      love: ["anxiety", "regret", "fear of rejection"],
      career: ["stress", "dread", "pressure"],
      feelings: ["guilt", "worry", "mental distress"],
      advice: ["separate fear from evidence"],
      outcome: ["anxiety must be addressed first"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to anxiety, regret, fear of rejection.",
        reversed: "In love, this can still point to anxiety, regret, fear of rejection, but reversed it may be blocked, delayed, avoided, or distorted through recovery, seeking help, released fear, inner healing."
      },
      career: {
        upright: "In career, this points to stress, dread, pressure.",
        reversed: "In career, this can still point to stress, dread, pressure, but reversed it may show friction, delay, misalignment, or a practical block around recovery, seeking help, released fear, inner healing."
      },
      feelings: {
        upright: "For feelings, this points to guilt, worry, mental distress.",
        reversed: "For feelings, this can still point to guilt, worry, mental distress, but reversed it may be internalized, resisted, hidden, or tangled with recovery, seeking help, released fear, inner healing."
      },
      advice: {
        upright: "As advice, separate fear from evidence.",
        reversed: "As advice, separate fear from evidence; reversed, the warning is to check where recovery, seeking help, released fear, inner healing may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to anxiety must be addressed first.",
        reversed: "As an outcome, this can still point to anxiety must be addressed first, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of recovery, seeking help, released fear, inner healing."
      }
    },
    clarifier: {
      upright: "Deepens anxiety, guilt, insomnia, mental anguish, and fear spirals. It narrows the reading toward the mind\u2019s distress and may show worry more than objective fact.",
      reversed: "Can soften by showing anxiety easing, but may also indicate suppressed fear or refusing help. Reversed, it narrows the issue to recovery from panic, confession, or the need to stop feeding the spiral."
    }
  },

  "Ten of Swords": {
    suit: "Swords",
    element: "Air",
    astrology: ["Sun in Gemini"],
    image: "images/ten-of-swords.jpg",
    keywords: ["ending", "betrayal", "collapse", "finality"],
    upright: ["painful ending", "rock bottom", "defeat", "closure through exhaustion"],
    reversed: ["recovery", "survival", "regeneration", "resisting an ending"],
    themeKeywords: {
      love: ["painful ending", "emotional defeat"],
      career: ["burnout", "job ending", "mental collapse"],
      feelings: ["devastated", "done", "exhausted"],
      advice: ["accept what is over"],
      outcome: ["ending", "then recovery"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to painful ending, emotional defeat.",
        reversed: "In love, this can still point to painful ending, emotional defeat, but reversed it may be blocked, delayed, avoided, or distorted through recovery, survival, regeneration, resisting an ending."
      },
      career: {
        upright: "In career, this points to burnout, job ending, mental collapse.",
        reversed: "In career, this can still point to burnout, job ending, mental collapse, but reversed it may show friction, delay, misalignment, or a practical block around recovery, survival, regeneration, resisting an ending."
      },
      feelings: {
        upright: "For feelings, this points to devastated, done, exhausted.",
        reversed: "For feelings, this can still point to devastated, done, exhausted, but reversed it may be internalized, resisted, hidden, or tangled with recovery, survival, regeneration, resisting an ending."
      },
      advice: {
        upright: "As advice, accept what is over.",
        reversed: "As advice, accept what is over; reversed, the warning is to check where recovery, survival, regeneration, resisting an ending may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to ending, then recovery.",
        reversed: "As an outcome, this can still point to ending, then recovery, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of recovery, survival, regeneration, resisting an ending."
      }
    },
    clarifier: {
      upright: "Confirms an ending, mental exhaustion, defeat, betrayal-feeling, or the lowest point before release. It narrows the original card toward finality and the need to stop reopening the wound.",
      reversed: "Can soften by showing recovery after the worst has passed, but may also show refusal to accept an ending. Reversed, it narrows the issue to rebuilding, survival, or pain that is lingering longer than needed."
    }
  },

  "Page of Swords": {
    suit: "Swords",
    element: "Air",
    astrology: ["Earth of Air"],
    image: "images/page-of-swords.jpg",
    keywords: ["curiosity", "truth-seeking", "message", "observation"],
    upright: ["learning", "watchfulness", "new ideas", "direct communication"],
    reversed: ["gossip", "spying", "harsh words", "mental immaturity"],
    themeKeywords: {
      love: ["watching", "curiosity", "cautious message"],
      career: ["research", "learning", "investigation"],
      feelings: ["curious but guarded"],
      advice: ["ask questions and verify facts"],
      outcome: ["message or observation"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to watching, curiosity, cautious message.",
        reversed: "In love, this can still point to watching, curiosity, cautious message, but reversed it may be blocked, delayed, avoided, or distorted through gossip, spying, harsh words, mental immaturity."
      },
      career: {
        upright: "In career, this points to research, learning, investigation.",
        reversed: "In career, this can still point to research, learning, investigation, but reversed it may show friction, delay, misalignment, or a practical block around gossip, spying, harsh words, mental immaturity."
      },
      feelings: {
        upright: "For feelings, this points to curious but guarded.",
        reversed: "For feelings, this can still point to curious but guarded, but reversed it may be internalized, resisted, hidden, or tangled with gossip, spying, harsh words, mental immaturity."
      },
      advice: {
        upright: "As advice, ask questions and verify facts.",
        reversed: "As advice, ask questions and verify facts; reversed, the warning is to check where gossip, spying, harsh words, mental immaturity may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to message or observation.",
        reversed: "As an outcome, this can still point to message or observation, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of gossip, spying, harsh words, mental immaturity."
      }
    },
    clarifier: {
      upright: "Confirms watching, curiosity, messages, questions, learning, and nervous communication. It narrows the original card toward observation and information-gathering.",
      reversed: "Complicates through gossip, spying, defensiveness, immature words, or overanalysis. Reversed, it narrows the issue to misinformation, silence, or curiosity becoming suspicion."
    }
  },

  "Knight of Swords": {
    suit: "Swords",
    element: "Air",
    astrology: ["Fire of Air"],
    image: "images/knight-of-swords.jpg",
    keywords: ["speed", "ambition", "directness", "pursuit"],
    upright: ["decisive action", "assertiveness", "focus", "charging forward"],
    reversed: ["recklessness", "aggression", "impatience", "poor timing"],
    themeKeywords: {
      love: ["sudden confrontation", "direct message"],
      career: ["urgent decision", "aggressive pursuit"],
      feelings: ["intense thoughts", "impatience"],
      advice: ["slow your words down"],
      outcome: ["fast but potentially messy action"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to sudden confrontation, direct message.",
        reversed: "In love, this can still point to sudden confrontation, direct message, but reversed it may be blocked, delayed, avoided, or distorted through recklessness, aggression, impatience, poor timing."
      },
      career: {
        upright: "In career, this points to urgent decision, aggressive pursuit.",
        reversed: "In career, this can still point to urgent decision, aggressive pursuit, but reversed it may show friction, delay, misalignment, or a practical block around recklessness, aggression, impatience, poor timing."
      },
      feelings: {
        upright: "For feelings, this points to intense thoughts, impatience.",
        reversed: "For feelings, this can still point to intense thoughts, impatience, but reversed it may be internalized, resisted, hidden, or tangled with recklessness, aggression, impatience, poor timing."
      },
      advice: {
        upright: "As advice, slow your words down.",
        reversed: "As advice, slow your words down; reversed, the warning is to check where recklessness, aggression, impatience, poor timing may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to fast but potentially messy action.",
        reversed: "As an outcome, this can still point to fast but potentially messy action, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of recklessness, aggression, impatience, poor timing."
      }
    },
    clarifier: {
      upright: "Complicates with speed, blunt communication, impatience, conflict, and decisive action. It narrows the original card toward urgency and words that may cut.",
      reversed: "Can redirect toward slowing down, but may also show blocked action, scattered thoughts, or aggression turned inward. Reversed, it narrows the issue to reckless speech, delays, or the need for restraint."
    }
  },

  "Queen of Swords": {
    suit: "Swords",
    element: "Air",
    astrology: ["Water of Air"],
    image: "images/queen-of-swords.jpg",
    keywords: ["truth", "discernment", "boundaries", "clarity"],
    upright: ["honesty", "independence", "clear judgment", "direct speech"],
    reversed: ["coldness", "bitterness", "harsh judgment", "poor boundaries"],
    themeKeywords: {
      love: ["clear boundaries", "direct communication"],
      career: ["strategy", "professionalism", "analysis"],
      feelings: ["guarded", "discerning", "honest"],
      advice: ["be clear and do not over-explain"],
      outcome: ["truth and boundaries"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to clear boundaries, direct communication.",
        reversed: "In love, this can still point to clear boundaries, direct communication, but reversed it may be blocked, delayed, avoided, or distorted through coldness, bitterness, harsh judgment, poor boundaries."
      },
      career: {
        upright: "In career, this points to strategy, professionalism, analysis.",
        reversed: "In career, this can still point to strategy, professionalism, analysis, but reversed it may show friction, delay, misalignment, or a practical block around coldness, bitterness, harsh judgment, poor boundaries."
      },
      feelings: {
        upright: "For feelings, this points to guarded, discerning, honest.",
        reversed: "For feelings, this can still point to guarded, discerning, honest, but reversed it may be internalized, resisted, hidden, or tangled with coldness, bitterness, harsh judgment, poor boundaries."
      },
      advice: {
        upright: "As advice, be clear and do not over-explain.",
        reversed: "As advice, be clear and do not over-explain; reversed, the warning is to check where coldness, bitterness, harsh judgment, poor boundaries may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to truth and boundaries.",
        reversed: "As an outcome, this can still point to truth and boundaries, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of coldness, bitterness, harsh judgment, poor boundaries."
      }
    },
    clarifier: {
      upright: "Narrows toward boundaries, truth, discernment, independence, and emotional clarity after pain. It confirms the need to be clear rather than overly accommodating.",
      reversed: "Complicates through coldness, bitterness, guardedness, harsh judgment, or cutting off before understanding. Reversed, it narrows the issue to whether the boundary is wise or reactive."
    }
  },

  "King of Swords": {
    suit: "Swords",
    element: "Air",
    astrology: ["Air of Air"],
    image: "images/king-of-swords.jpg",
    keywords: ["authority", "logic", "truth", "discipline"],
    upright: ["mental mastery", "fair judgment", "strategy", "principled leadership"],
    reversed: ["manipulation", "cruelty", "rigidity", "misuse of intellect"],
    themeKeywords: {
      love: ["emotionally controlled", "logical", "distant"],
      career: ["authority", "expertise", "legal/professional matter"],
      feelings: ["rationalized emotions"],
      advice: ["think clearly and decide fairly"],
      outcome: ["logical decision"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to emotionally controlled, logical, distant.",
        reversed: "In love, this can still point to emotionally controlled, logical, distant, but reversed it may be blocked, delayed, avoided, or distorted through manipulation, cruelty, rigidity, misuse of intellect."
      },
      career: {
        upright: "In career, this points to authority, expertise, legal/professional matter.",
        reversed: "In career, this can still point to authority, expertise, legal/professional matter, but reversed it may show friction, delay, misalignment, or a practical block around manipulation, cruelty, rigidity, misuse of intellect."
      },
      feelings: {
        upright: "For feelings, this points to rationalized emotions.",
        reversed: "For feelings, this can still point to rationalized emotions, but reversed it may be internalized, resisted, hidden, or tangled with manipulation, cruelty, rigidity, misuse of intellect."
      },
      advice: {
        upright: "As advice, think clearly and decide fairly.",
        reversed: "As advice, think clearly and decide fairly; reversed, the warning is to check where manipulation, cruelty, rigidity, misuse of intellect may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to logical decision.",
        reversed: "As an outcome, this can still point to logical decision, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of manipulation, cruelty, rigidity, misuse of intellect."
      }
    },
    clarifier: {
      upright: "Confirms logic, authority, detachment, strategy, truth, and formal decision-making. It narrows the original card toward reason, rules, and clear judgment.",
      reversed: "Complicates through emotional coldness, control through intellect, rigid thinking, or words used as power. Reversed, it narrows the issue to unfair judgment, manipulation, or lack of mental clarity."
    }
  },

  "Ace of Pentacles": {
    suit: "Pentacles",
    element: "Earth",
    astrology: ["Earth"],
    image: "images/ace-of-pentacles.jpg",
    keywords: ["opportunity", "material start", "seed", "prosperity"],
    upright: ["new resource", "career opportunity", "financial beginning", "manifestation"],
    reversed: ["missed opportunity", "delay", "unstable start", "poor planning"],
    themeKeywords: {
      love: ["stable new potential", "practical offer"],
      career: ["job offer", "money", "new project"],
      feelings: ["wanting something real"],
      advice: ["ground it in action"],
      outcome: ["tangible opportunity"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to stable new potential, practical offer.",
        reversed: "In love, this can still point to stable new potential, practical offer, but reversed it may be blocked, delayed, avoided, or distorted through missed opportunity, delay, unstable start, poor planning."
      },
      career: {
        upright: "In career, this points to job offer, money, new project.",
        reversed: "In career, this can still point to job offer, money, new project, but reversed it may show friction, delay, misalignment, or a practical block around missed opportunity, delay, unstable start, poor planning."
      },
      feelings: {
        upright: "For feelings, this points to wanting something real.",
        reversed: "For feelings, this can still point to wanting something real, but reversed it may be internalized, resisted, hidden, or tangled with missed opportunity, delay, unstable start, poor planning."
      },
      advice: {
        upright: "As advice, ground it in action.",
        reversed: "As advice, ground it in action; reversed, the warning is to check where missed opportunity, delay, unstable start, poor planning may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to tangible opportunity.",
        reversed: "As an outcome, this can still point to tangible opportunity, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of missed opportunity, delay, unstable start, poor planning."
      }
    },
    clarifier: {
      upright: "Confirms a real-world opportunity, seed, offer, investment, or practical beginning. It narrows the original card toward something tangible that can be built.",
      reversed: "Complicates through missed opportunity, delay, lack of follow-through, financial caution, or potential that is not being grounded. Reversed, it narrows the issue to practicality, timing, and whether the offer is solid."
    }
  },

  "Two of Pentacles": {
    suit: "Pentacles",
    element: "Earth",
    astrology: ["Jupiter in Capricorn"],
    image: "images/two-of-pentacles.jpg",
    keywords: ["balance", "priorities", "adaptability", "juggling"],
    upright: ["time management", "flexibility", "multiple demands", "adjustment"],
    reversed: ["overwhelm", "disorganization", "dropped priorities", "imbalance"],
    themeKeywords: {
      love: ["mixed priorities", "inconsistency"],
      career: ["balancing tasks", "financial juggling"],
      feelings: ["unsure", "trying to manage emotions"],
      advice: ["prioritize clearly"],
      outcome: ["flexible but unstable balance"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to mixed priorities, inconsistency.",
        reversed: "In love, this can still point to mixed priorities, inconsistency, but reversed it may be blocked, delayed, avoided, or distorted through overwhelm, disorganization, dropped priorities, imbalance."
      },
      career: {
        upright: "In career, this points to balancing tasks, financial juggling.",
        reversed: "In career, this can still point to balancing tasks, financial juggling, but reversed it may show friction, delay, misalignment, or a practical block around overwhelm, disorganization, dropped priorities, imbalance."
      },
      feelings: {
        upright: "For feelings, this points to unsure, trying to manage emotions.",
        reversed: "For feelings, this can still point to unsure, trying to manage emotions, but reversed it may be internalized, resisted, hidden, or tangled with overwhelm, disorganization, dropped priorities, imbalance."
      },
      advice: {
        upright: "As advice, prioritize clearly.",
        reversed: "As advice, prioritize clearly; reversed, the warning is to check where overwhelm, disorganization, dropped priorities, imbalance may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to flexible but unstable balance.",
        reversed: "As an outcome, this can still point to flexible but unstable balance, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of overwhelm, disorganization, dropped priorities, imbalance."
      }
    },
    clarifier: {
      upright: "Complicates with juggling, uncertainty, time management, mixed priorities, and weighing options. It narrows the original card toward balance under pressure.",
      reversed: "Can redirect toward choosing one thing, but may also show overwhelm, instability, or dropping the ball. Reversed, it narrows the issue to what cannot keep being balanced."
    }
  },

  "Three of Pentacles": {
    suit: "Pentacles",
    element: "Earth",
    astrology: ["Mars in Capricorn"],
    image: "images/three-of-pentacles.jpg",
    keywords: ["teamwork", "skill", "collaboration", "building"],
    upright: ["learning", "craftsmanship", "shared effort", "recognition of skill"],
    reversed: ["misalignment", "poor teamwork", "lack of effort", "working alone"],
    themeKeywords: {
      love: ["working together", "effort", "counseling"],
      career: ["collaboration", "skill-building", "recognition"],
      feelings: ["willing to cooperate"],
      advice: ["build through teamwork"],
      outcome: ["progress through effort"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to working together, effort, counseling.",
        reversed: "In love, this can still point to working together, effort, counseling, but reversed it may be blocked, delayed, avoided, or distorted through misalignment, poor teamwork, lack of effort, working alone."
      },
      career: {
        upright: "In career, this points to collaboration, skill-building, recognition.",
        reversed: "In career, this can still point to collaboration, skill-building, recognition, but reversed it may show friction, delay, misalignment, or a practical block around misalignment, poor teamwork, lack of effort, working alone."
      },
      feelings: {
        upright: "For feelings, this points to willing to cooperate.",
        reversed: "For feelings, this can still point to willing to cooperate, but reversed it may be internalized, resisted, hidden, or tangled with misalignment, poor teamwork, lack of effort, working alone."
      },
      advice: {
        upright: "As advice, build through teamwork.",
        reversed: "As advice, build through teamwork; reversed, the warning is to check where misalignment, poor teamwork, lack of effort, working alone may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to progress through effort.",
        reversed: "As an outcome, this can still point to progress through effort, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of misalignment, poor teamwork, lack of effort, working alone."
      }
    },
    clarifier: {
      upright: "Confirms teamwork, collaboration, learning, planning, and building with others. It narrows the original card toward effort that requires cooperation.",
      reversed: "Complicates through lack of teamwork, poor planning, not being recognized, or mismatched skill levels. Reversed, it narrows the issue to whether people are actually working together."
    }
  },

  "Four of Pentacles": {
    suit: "Pentacles",
    element: "Earth",
    astrology: ["Sun in Capricorn"],
    image: "images/four-of-pentacles.jpg",
    keywords: ["security", "control", "holding on", "stability"],
    upright: ["saving", "protection", "scarcity mindset", "guarded resources"],
    reversed: ["release", "overspending", "letting go", "fear of loss"],
    themeKeywords: {
      love: ["guarded heart", "possessiveness", "fear of loss"],
      career: ["saving", "control", "financial caution"],
      feelings: ["holding back", "not opening up"],
      advice: ["protect what matters without clinging"],
      outcome: ["stability", "but limited movement"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to guarded heart, possessiveness, fear of loss.",
        reversed: "In love, this can still point to guarded heart, possessiveness, fear of loss, but reversed it may be blocked, delayed, avoided, or distorted through release, overspending, letting go, fear of loss."
      },
      career: {
        upright: "In career, this points to saving, control, financial caution.",
        reversed: "In career, this can still point to saving, control, financial caution, but reversed it may show friction, delay, misalignment, or a practical block around release, overspending, letting go, fear of loss."
      },
      feelings: {
        upright: "For feelings, this points to holding back, not opening up.",
        reversed: "For feelings, this can still point to holding back, not opening up, but reversed it may be internalized, resisted, hidden, or tangled with release, overspending, letting go, fear of loss."
      },
      advice: {
        upright: "As advice, protect what matters without clinging.",
        reversed: "As advice, protect what matters without clinging; reversed, the warning is to check where release, overspending, letting go, fear of loss may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to stability, but limited movement.",
        reversed: "As an outcome, this can still point to stability, but limited movement, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of release, overspending, letting go, fear of loss."
      }
    },
    clarifier: {
      upright: "Narrows toward holding on, control, possessiveness, scarcity, and guardedness. It clarifies that stability exists, but movement may be restricted.",
      reversed: "Complicates through fear of loss, financial insecurity, emotional withholding, or clinging so tightly that growth is blocked. Reversed, it narrows the issue to release, overspending, or loosening control."
    }
  },

  "Five of Pentacles": {
    suit: "Pentacles",
    element: "Earth",
    astrology: ["Mercury in Taurus"],
    image: "images/five-of-pentacles.jpg",
    keywords: ["loss", "hardship", "exclusion", "scarcity"],
    upright: ["financial stress", "isolation", "need", "feeling unsupported"],
    reversed: ["recovery", "support found", "improvement", "leaving hardship"],
    themeKeywords: {
      love: ["feeling left out", "rejection wound"],
      career: ["financial stress", "instability"],
      feelings: ["insecure", "lonely", "unsupported"],
      advice: ["seek support; do not isolate"],
      outcome: ["difficult period", "but help exists"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to feeling left out, rejection wound.",
        reversed: "In love, this can still point to feeling left out, rejection wound, but reversed it may be blocked, delayed, avoided, or distorted through recovery, support found, improvement, leaving hardship."
      },
      career: {
        upright: "In career, this points to financial stress, instability.",
        reversed: "In career, this can still point to financial stress, instability, but reversed it may show friction, delay, misalignment, or a practical block around recovery, support found, improvement, leaving hardship."
      },
      feelings: {
        upright: "For feelings, this points to insecure, lonely, unsupported.",
        reversed: "For feelings, this can still point to insecure, lonely, unsupported, but reversed it may be internalized, resisted, hidden, or tangled with recovery, support found, improvement, leaving hardship."
      },
      advice: {
        upright: "As advice, seek support; do not isolate.",
        reversed: "As advice, seek support; do not isolate; reversed, the warning is to check where recovery, support found, improvement, leaving hardship may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to difficult period, but help exists.",
        reversed: "As an outcome, this can still point to difficult period, but help exists, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of recovery, support found, improvement, leaving hardship."
      }
    },
    clarifier: {
      upright: "Deepens hardship, rejection, insecurity, lack, exclusion, or fear of abandonment. It narrows the original card toward where support feels absent.",
      reversed: "Can soften by showing help becoming available, but may also show pride, isolation, or refusal to seek support. Reversed, it narrows the issue to recovery from lack or learning to accept help."
    }
  },

  "Six of Pentacles": {
    suit: "Pentacles",
    element: "Earth",
    astrology: ["Moon in Taurus"],
    image: "images/six-of-pentacles.jpg",
    keywords: ["giving", "receiving", "generosity", "exchange"],
    upright: ["support", "charity", "fairness", "sharing resources"],
    reversed: ["power imbalance", "strings attached", "debt", "one-sided giving"],
    themeKeywords: {
      love: ["reciprocity", "unequal effort", "support"],
      career: ["payment", "assistance", "mentorship"],
      feelings: ["wanting fairness or to give"],
      advice: ["check the balance of exchange"],
      outcome: ["help", "gift", "or adjustment"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to reciprocity, unequal effort, support.",
        reversed: "In love, this can still point to reciprocity, unequal effort, support, but reversed it may be blocked, delayed, avoided, or distorted through power imbalance, strings attached, debt, one-sided giving."
      },
      career: {
        upright: "In career, this points to payment, assistance, mentorship.",
        reversed: "In career, this can still point to payment, assistance, mentorship, but reversed it may show friction, delay, misalignment, or a practical block around power imbalance, strings attached, debt, one-sided giving."
      },
      feelings: {
        upright: "For feelings, this points to wanting fairness or to give.",
        reversed: "For feelings, this can still point to wanting fairness or to give, but reversed it may be internalized, resisted, hidden, or tangled with power imbalance, strings attached, debt, one-sided giving."
      },
      advice: {
        upright: "As advice, check the balance of exchange.",
        reversed: "As advice, check the balance of exchange; reversed, the warning is to check where power imbalance, strings attached, debt, one-sided giving may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to help, gift, or adjustment.",
        reversed: "As an outcome, this can still point to help, gift, or adjustment, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of power imbalance, strings attached, debt, one-sided giving."
      }
    },
    clarifier: {
      upright: "Confirms giving, receiving, generosity, support, reciprocity, or power dynamics around resources. It narrows the original card toward the balance of exchange.",
      reversed: "Complicates through unequal giving, strings attached, debt, dependency, or generosity used as control. Reversed, it narrows the issue to imbalance and whether support is fair."
    }
  },

  "Seven of Pentacles": {
    suit: "Pentacles",
    element: "Earth",
    astrology: ["Saturn in Taurus"],
    image: "images/seven-of-pentacles.jpg",
    keywords: ["patience", "investment", "assessment", "growth"],
    upright: ["long-term effort", "waiting", "evaluation", "sustainable progress"],
    reversed: ["impatience", "limited reward", "wasted effort", "poor investment"],
    themeKeywords: {
      love: ["waiting to see if effort grows"],
      career: ["long-term investment", "delayed reward"],
      feelings: ["patient but unsure"],
      advice: ["evaluate results honestly"],
      outcome: ["slow growth"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to waiting to see if effort grows.",
        reversed: "In love, this can still point to waiting to see if effort grows, but reversed it may be blocked, delayed, avoided, or distorted through impatience, limited reward, wasted effort, poor investment."
      },
      career: {
        upright: "In career, this points to long-term investment, delayed reward.",
        reversed: "In career, this can still point to long-term investment, delayed reward, but reversed it may show friction, delay, misalignment, or a practical block around impatience, limited reward, wasted effort, poor investment."
      },
      feelings: {
        upright: "For feelings, this points to patient but unsure.",
        reversed: "For feelings, this can still point to patient but unsure, but reversed it may be internalized, resisted, hidden, or tangled with impatience, limited reward, wasted effort, poor investment."
      },
      advice: {
        upright: "As advice, evaluate results honestly.",
        reversed: "As advice, evaluate results honestly; reversed, the warning is to check where impatience, limited reward, wasted effort, poor investment may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to slow growth.",
        reversed: "As an outcome, this can still point to slow growth, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of impatience, limited reward, wasted effort, poor investment."
      }
    },
    clarifier: {
      upright: "Redirects toward patience, assessment, investment, waiting, and evaluating whether effort is paying off. It narrows the original card toward long-term results.",
      reversed: "Complicates through impatience, wasted effort, discouragement, or questioning whether the investment is worth it. Reversed, it narrows the issue to reevaluation, sunk cost, or needing a different strategy."
    }
  },

  "Eight of Pentacles": {
    suit: "Pentacles",
    element: "Earth",
    astrology: ["Sun in Virgo"],
    image: "images/eight-of-pentacles.jpg",
    keywords: ["work", "craft", "practice", "mastery"],
    upright: ["skill-building", "discipline", "attention to detail", "dedication"],
    reversed: ["perfectionism", "low effort", "burnout", "lack of focus"],
    themeKeywords: {
      love: ["working on the relationship"],
      career: ["study", "craft", "diligence"],
      feelings: ["willing to put in effort"],
      advice: ["focus on consistency"],
      outcome: ["improvement through work"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to working on the relationship.",
        reversed: "In love, this can still point to working on the relationship, but reversed it may be blocked, delayed, avoided, or distorted through perfectionism, low effort, burnout, lack of focus."
      },
      career: {
        upright: "In career, this points to study, craft, diligence.",
        reversed: "In career, this can still point to study, craft, diligence, but reversed it may show friction, delay, misalignment, or a practical block around perfectionism, low effort, burnout, lack of focus."
      },
      feelings: {
        upright: "For feelings, this points to willing to put in effort.",
        reversed: "For feelings, this can still point to willing to put in effort, but reversed it may be internalized, resisted, hidden, or tangled with perfectionism, low effort, burnout, lack of focus."
      },
      advice: {
        upright: "As advice, focus on consistency.",
        reversed: "As advice, focus on consistency; reversed, the warning is to check where perfectionism, low effort, burnout, lack of focus may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to improvement through work.",
        reversed: "As an outcome, this can still point to improvement through work, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of perfectionism, low effort, burnout, lack of focus."
      }
    },
    clarifier: {
      upright: "Confirms effort, practice, consistency, work, skill-building, and improvement through repetition. It narrows the original card toward what is being developed over time.",
      reversed: "Complicates through perfectionism, boredom, lack of effort, overwork, or doing the work without emotional presence. Reversed, it narrows the issue to whether the effort is sustainable or misdirected."
    }
  },

  "Nine of Pentacles": {
    suit: "Pentacles",
    element: "Earth",
    astrology: ["Venus in Virgo"],
    image: "images/nine-of-pentacles.jpg",
    keywords: ["independence", "luxury", "self-sufficiency", "reward"],
    upright: ["financial comfort", "confidence", "earned success", "personal stability"],
    reversed: ["dependence", "overwork", "insecurity", "false independence"],
    themeKeywords: {
      love: ["independence", "self-respect", "high standards"],
      career: ["financial success", "autonomy"],
      feelings: ["admiration", "self-contained energy"],
      advice: ["value yourself"],
      outcome: ["independence and stability"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to independence, self-respect, high standards.",
        reversed: "In love, this can still point to independence, self-respect, high standards, but reversed it may be blocked, delayed, avoided, or distorted through dependence, overwork, insecurity, false independence."
      },
      career: {
        upright: "In career, this points to financial success, autonomy.",
        reversed: "In career, this can still point to financial success, autonomy, but reversed it may show friction, delay, misalignment, or a practical block around dependence, overwork, insecurity, false independence."
      },
      feelings: {
        upright: "For feelings, this points to admiration, self-contained energy.",
        reversed: "For feelings, this can still point to admiration, self-contained energy, but reversed it may be internalized, resisted, hidden, or tangled with dependence, overwork, insecurity, false independence."
      },
      advice: {
        upright: "As advice, value yourself.",
        reversed: "As advice, value yourself; reversed, the warning is to check where dependence, overwork, insecurity, false independence may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to independence and stability.",
        reversed: "As an outcome, this can still point to independence and stability, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of dependence, overwork, insecurity, false independence."
      }
    },
    clarifier: {
      upright: "Confirms independence, self-worth, stability, personal success, and being okay alone. It narrows the original card toward autonomy and earned comfort.",
      reversed: "Complicates through dependence, insecurity, isolation masked as independence, financial pressure, or undervaluing oneself. Reversed, it narrows the issue to self-worth and whether independence is chosen or forced."
    }
  },

  "Ten of Pentacles": {
    suit: "Pentacles",
    element: "Earth",
    astrology: ["Mercury in Virgo"],
    image: "images/ten-of-pentacles.jpg",
    keywords: ["legacy", "family", "wealth", "long-term security"],
    upright: ["stability", "inheritance", "tradition", "lasting success"],
    reversed: ["instability", "family conflict", "financial strain", "broken legacy"],
    themeKeywords: {
      love: ["long-term potential", "family", "commitment"],
      career: ["stable company", "legacy", "financial success"],
      feelings: ["wanting something lasting"],
      advice: ["think long-term"],
      outcome: ["stability", "commitment", "or material success"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to long-term potential, family, commitment.",
        reversed: "In love, this can still point to long-term potential, family, commitment, but reversed it may be blocked, delayed, avoided, or distorted through instability, family conflict, financial strain, broken legacy."
      },
      career: {
        upright: "In career, this points to stable company, legacy, financial success.",
        reversed: "In career, this can still point to stable company, legacy, financial success, but reversed it may show friction, delay, misalignment, or a practical block around instability, family conflict, financial strain, broken legacy."
      },
      feelings: {
        upright: "For feelings, this points to wanting something lasting.",
        reversed: "For feelings, this can still point to wanting something lasting, but reversed it may be internalized, resisted, hidden, or tangled with instability, family conflict, financial strain, broken legacy."
      },
      advice: {
        upright: "As advice, think long-term.",
        reversed: "As advice, think long-term; reversed, the warning is to check where instability, family conflict, financial strain, broken legacy may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to stability, commitment, or material success.",
        reversed: "As an outcome, this can still point to stability, commitment, or material success, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of instability, family conflict, financial strain, broken legacy."
      }
    },
    clarifier: {
      upright: "Confirms long-term security, family, legacy, wealth, commitment, and established systems. It narrows the original card toward lasting structures.",
      reversed: "Complicates through family pressure, status traps, financial dependency, inheritance issues, or stability without emotional fulfillment. Reversed, it narrows the issue to instability within a system or redefining legacy."
    }
  },

  "Page of Pentacles": {
    suit: "Pentacles",
    element: "Earth",
    astrology: ["Earth of Earth"],
    image: "images/page-of-pentacles.jpg",
    keywords: ["study", "opportunity", "practice", "beginner"],
    upright: ["learning", "new goal", "practical message", "skill development"],
    reversed: ["procrastination", "lack of follow-through", "missed lesson", "immaturity"],
    themeKeywords: {
      love: ["small sincere offer", "slow development"],
      career: ["training", "application", "new skill"],
      feelings: ["cautious interest", "seriousness"],
      advice: ["start practically"],
      outcome: ["modest but real progress"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to small sincere offer, slow development.",
        reversed: "In love, this can still point to small sincere offer, slow development, but reversed it may be blocked, delayed, avoided, or distorted through procrastination, lack of follow-through, missed lesson, immaturity."
      },
      career: {
        upright: "In career, this points to training, application, new skill.",
        reversed: "In career, this can still point to training, application, new skill, but reversed it may show friction, delay, misalignment, or a practical block around procrastination, lack of follow-through, missed lesson, immaturity."
      },
      feelings: {
        upright: "For feelings, this points to cautious interest, seriousness.",
        reversed: "For feelings, this can still point to cautious interest, seriousness, but reversed it may be internalized, resisted, hidden, or tangled with procrastination, lack of follow-through, missed lesson, immaturity."
      },
      advice: {
        upright: "As advice, start practically.",
        reversed: "As advice, start practically; reversed, the warning is to check where procrastination, lack of follow-through, missed lesson, immaturity may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to modest but real progress.",
        reversed: "As an outcome, this can still point to modest but real progress, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of procrastination, lack of follow-through, missed lesson, immaturity."
      }
    },
    clarifier: {
      upright: "Confirms study, practical message, small offer, learning, and a grounded beginning. It narrows the original card toward early but real effort.",
      reversed: "Complicates through procrastination, lack of commitment, immaturity with money or work, or an offer that remains too small. Reversed, it narrows the issue to discipline and follow-through."
    }
  },

  "Knight of Pentacles": {
    suit: "Pentacles",
    element: "Earth",
    astrology: ["Fire of Earth"],
    image: "images/knight-of-pentacles.jpg",
    keywords: ["routine", "diligence", "patience", "reliability"],
    upright: ["steady progress", "responsibility", "hard work", "consistency"],
    reversed: ["stagnation", "stubbornness", "laziness", "monotony"],
    themeKeywords: {
      love: ["slow but steady interest"],
      career: ["dependable progress", "routine work"],
      feelings: ["serious but cautious"],
      advice: ["move slowly and consistently"],
      outcome: ["gradual progress"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to slow but steady interest.",
        reversed: "In love, this can still point to slow but steady interest, but reversed it may be blocked, delayed, avoided, or distorted through stagnation, stubbornness, laziness, monotony."
      },
      career: {
        upright: "In career, this points to dependable progress, routine work.",
        reversed: "In career, this can still point to dependable progress, routine work, but reversed it may show friction, delay, misalignment, or a practical block around stagnation, stubbornness, laziness, monotony."
      },
      feelings: {
        upright: "For feelings, this points to serious but cautious.",
        reversed: "For feelings, this can still point to serious but cautious, but reversed it may be internalized, resisted, hidden, or tangled with stagnation, stubbornness, laziness, monotony."
      },
      advice: {
        upright: "As advice, move slowly and consistently.",
        reversed: "As advice, move slowly and consistently; reversed, the warning is to check where stagnation, stubbornness, laziness, monotony may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to gradual progress.",
        reversed: "As an outcome, this can still point to gradual progress, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of stagnation, stubbornness, laziness, monotony."
      }
    },
    clarifier: {
      upright: "Narrows toward slow progress, reliability, caution, routine, and commitment through consistency. It confirms movement, but not speed.",
      reversed: "Complicates through stagnation, stubbornness, fear of risk, boredom, or overly slow progress. Reversed, it narrows the issue to whether consistency has become inertia."
    }
  },

  "Queen of Pentacles": {
    suit: "Pentacles",
    element: "Earth",
    astrology: ["Water of Earth"],
    image: "images/queen-of-pentacles.jpg",
    keywords: ["nurture", "stability", "resources", "practical care"],
    upright: ["comfort", "generosity", "grounded support", "home and work balance"],
    reversed: ["self-neglect", "smothering", "financial insecurity", "overgiving"],
    themeKeywords: {
      love: ["nurturing", "loyal", "grounded affection"],
      career: ["practical leadership", "resource care"],
      feelings: ["protective", "caring", "steady"],
      advice: ["care for body", "home", "money", "and emotional basics"],
      outcome: ["grounded support"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to nurturing, loyal, grounded affection.",
        reversed: "In love, this can still point to nurturing, loyal, grounded affection, but reversed it may be blocked, delayed, avoided, or distorted through self-neglect, smothering, financial insecurity, overgiving."
      },
      career: {
        upright: "In career, this points to practical leadership, resource care.",
        reversed: "In career, this can still point to practical leadership, resource care, but reversed it may show friction, delay, misalignment, or a practical block around self-neglect, smothering, financial insecurity, overgiving."
      },
      feelings: {
        upright: "For feelings, this points to protective, caring, steady.",
        reversed: "For feelings, this can still point to protective, caring, steady, but reversed it may be internalized, resisted, hidden, or tangled with self-neglect, smothering, financial insecurity, overgiving."
      },
      advice: {
        upright: "As advice, care for body, home, money, and emotional basics.",
        reversed: "As advice, care for body, home, money, and emotional basics; reversed, the warning is to check where self-neglect, smothering, financial insecurity, overgiving may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to grounded support.",
        reversed: "As an outcome, this can still point to grounded support, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of self-neglect, smothering, financial insecurity, overgiving."
      }
    },
    clarifier: {
      upright: "Softens with care, practicality, nurturing, stability, health, home, and self-worth. It narrows the original card toward grounded support.",
      reversed: "Complicates through overgiving, neglecting oneself, financial anxiety, smothering, or tying worth to usefulness. Reversed, it narrows the issue to self-care and restoring practical stability."
    }
  },

  "King of Pentacles": {
    suit: "Pentacles",
    element: "Earth",
    astrology: ["Air of Earth"],
    image: "images/king-of-pentacles.jpg",
    keywords: ["security", "success", "leadership", "wealth"],
    upright: ["stability", "discipline", "provider energy", "material mastery"],
    reversed: ["greed", "control", "instability", "status obsession"],
    themeKeywords: {
      love: ["serious", "stable", "loyal", "possibly traditional"],
      career: ["wealth", "authority", "business success"],
      feelings: ["protective", "invested", "practical"],
      advice: ["make the grounded choice"],
      outcome: ["security and stability"]
    },
    themeMeanings: {
      love: {
        upright: "In love, this points to serious, stable, loyal, possibly traditional.",
        reversed: "In love, this can still point to serious, stable, loyal, possibly traditional, but reversed it may be blocked, delayed, avoided, or distorted through greed, control, instability, status obsession."
      },
      career: {
        upright: "In career, this points to wealth, authority, business success.",
        reversed: "In career, this can still point to wealth, authority, business success, but reversed it may show friction, delay, misalignment, or a practical block around greed, control, instability, status obsession."
      },
      feelings: {
        upright: "For feelings, this points to protective, invested, practical.",
        reversed: "For feelings, this can still point to protective, invested, practical, but reversed it may be internalized, resisted, hidden, or tangled with greed, control, instability, status obsession."
      },
      advice: {
        upright: "As advice, make the grounded choice.",
        reversed: "As advice, make the grounded choice; reversed, the warning is to check where greed, control, instability, status obsession may be shaping the situation."
      },
      outcome: {
        upright: "As an outcome, this points to security and stability.",
        reversed: "As an outcome, this can still point to security and stability, but reversed it may arrive through delay, blockage, avoidance, or the unresolved pattern of greed, control, instability, status obsession."
      }
    },
    clarifier: {
      upright: "Confirms stability, provider energy, material success, commitment, leadership, and long-term reliability. It narrows the original card toward security and practical authority.",
      reversed: "Complicates through greed, stubbornness, control through resources, materialism, or emotional distance hidden behind provision. Reversed, it narrows the issue to unstable security or misuse of practical power."
    }
  }
}
