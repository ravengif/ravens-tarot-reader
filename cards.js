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
    }
  }
}
