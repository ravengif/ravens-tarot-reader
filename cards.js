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
    clarifier: {
      upright: "Expands the original card by adding a fresh-start, open-ended, or experimental quality. It narrows the clarification toward risk, innocence, spontaneity, or a situation that has not matured enough to be pinned down. As a clarifier, it often redirects a heavy reading away from finality and toward possibility.",
      reversed: "Complicates the original card by showing na\u00efvet\u00e9, avoidance of responsibility, reckless timing, or fear of beginning. It narrows the issue to poor planning or hesitation around a leap. Reversed, it can say the original card is not wrong, but the approach is immature or underprepared."
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
    clarifier: {
      upright: "Confirms and expands the original card by showing agency, skill, communication, and available tools. It narrows the message toward what can be intentionally shaped through action. As a clarifier, it says the situation is not only happening to you; someone has influence over how it unfolds.",
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
    clarifier: {
      upright: "Confirms stability, provider energy, material success, commitment, leadership, and long-term reliability. It narrows the original card toward security and practical authority.",
      reversed: "Complicates through greed, stubbornness, control through resources, materialism, or emotional distance hidden behind provision. Reversed, it narrows the issue to unstable security or misuse of practical power."
    }
  }
}
