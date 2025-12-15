// Comprehensive exercise data covering all grammar topics

export interface ExerciseSet {
  topicId: string;
  topicTitle: string;
  category: string;
  fillInBlank?: {
    sentence: string;
    correctAnswer: string;
    hint: string;
    explanation: string;
  }[];
  reordering?: {
    scrambledWords: string[];
    correctOrder: string;
    hint: string;
  }[];
  errorCorrection?: {
    incorrectSentence: string;
    correctSentence: string;
    errorExplanation: string;
    hint: string;
  }[];
  matching?: {
    leftLabel: string;
    rightLabel: string;
    pairs: {
      left: string;
      right: string;
      explanation: string;
    }[];
  };
}

export const EXERCISE_DATA: ExerciseSet[] = [
  // Present & Past Tenses
  {
    topicId: 'present-simple',
    topicTitle: 'Present Simple Tense',
    category: 'Present & Past Tenses',
    fillInBlank: [
      {
        sentence: "She {{blank}} to school every day.",
        correctAnswer: "goes",
        hint: "Third person singular",
        explanation: "With 'she', add -es to 'go'."
      },
      {
        sentence: "They {{blank}} coffee in the morning.",
        correctAnswer: "drink",
        hint: "Plural subject",
        explanation: "Plural subjects use the base form."
      },
      {
        sentence: "The sun {{blank}} in the east.",
        correctAnswer: "rises",
        hint: "General truth",
        explanation: "General truths with singular subjects add -s/-es."
      }
    ],
    errorCorrection: [
      {
        incorrectSentence: "She don't like pizza.",
        correctSentence: "She doesn't like pizza.",
        errorExplanation: "Use 'doesn't' with third person singular.",
        hint: "Check auxiliary verb"
      },
      {
        incorrectSentence: "He go to work by bus.",
        correctSentence: "He goes to work by bus.",
        errorExplanation: "Add -es to 'go' with third person singular.",
        hint: "Check verb ending"
      }
    ]
  },
  {
    topicId: 'present-progressive',
    topicTitle: 'Present Progressive Tense',
    category: 'Present & Past Tenses',
    fillInBlank: [
      {
        sentence: "I {{blank}} studying right now.",
        correctAnswer: "am",
        hint: "Use am/is/are",
        explanation: "Present Progressive uses am/is/are + verb-ing."
      },
      {
        sentence: "They {{blank}} playing soccer.",
        correctAnswer: "are",
        hint: "Plural subject",
        explanation: "Use 'are' with plural subjects."
      }
    ],
    reordering: [
      {
        scrambledWords: ["watching", "is", "She", "TV"],
        correctOrder: "She is watching TV",
        hint: "Subject + is + verb-ing"
      }
    ]
  },
  {
    topicId: 'past-simple',
    topicTitle: 'Past Simple Tense',
    category: 'Present & Past Tenses',
    fillInBlank: [
      {
        sentence: "I {{blank}} to London last year.",
        correctAnswer: "went",
        hint: "Irregular verb 'go'",
        explanation: "The past form of 'go' is 'went'."
      },
      {
        sentence: "She {{blank}} the book yesterday.",
        correctAnswer: "read",
        hint: "Past form sounds like 'red'",
        explanation: "Past form of 'read' is also 'read' but pronounced differently."
      }
    ],
    errorCorrection: [
      {
        incorrectSentence: "I goed to the store.",
        correctSentence: "I went to the store.",
        errorExplanation: "'Go' is irregular; past form is 'went', not 'goed'.",
        hint: "Check irregular verb"
      }
    ]
  },
  {
    topicId: 'past-progressive',
    topicTitle: 'Past Progressive Tense',
    category: 'Present & Past Tenses',
    fillInBlank: [
      {
        sentence: "I {{blank}} sleeping when you called.",
        correctAnswer: "was",
        hint: "Past form of 'am'",
        explanation: "Use was/were + verb-ing for past progressive."
      },
      {
        sentence: "They {{blank}} playing when it started raining.",
        correctAnswer: "were",
        hint: "Plural subject in past",
        explanation: "Use 'were' with plural subjects in past progressive."
      }
    ]
  },
  {
    topicId: 'present-perfect',
    topicTitle: 'Present Perfect Tense',
    category: 'Present & Past Tenses',
    fillInBlank: [
      {
        sentence: "I {{blank}} never been to Paris.",
        correctAnswer: "have",
        hint: "Have/has + past participle",
        explanation: "Use 'have' with I/you/we/they in present perfect."
      },
      {
        sentence: "She {{blank}} already finished her homework.",
        correctAnswer: "has",
        hint: "Third person singular",
        explanation: "Use 'has' with he/she/it in present perfect."
      }
    ],
    errorCorrection: [
      {
        incorrectSentence: "I have went there.",
        correctSentence: "I have been there.",
        errorExplanation: "Use past participle 'been' or 'gone', not 'went'.",
        hint: "Check past participle"
      }
    ],
    matching: {
      leftLabel: "Time Expression",
      rightLabel: "Usage",
      pairs: [
        { left: "just", right: "recently completed", explanation: "Used for very recent actions" },
        { left: "already", right: "sooner than expected", explanation: "Action completed before expected" },
        { left: "yet", right: "in questions/negatives", explanation: "Used to ask if something has happened" },
        { left: "since", right: "starting point", explanation: "Marks when action began" },
        { left: "for", right: "duration", explanation: "Shows how long" }
      ]
    }
  },
  {
    topicId: 'present-perfect-progressive',
    topicTitle: 'Present Perfect Progressive',
    category: 'Present & Past Tenses',
    fillInBlank: [
      {
        sentence: "I {{blank}} been studying for three hours.",
        correctAnswer: "have",
        hint: "Have/has + been + verb-ing",
        explanation: "Present Perfect Progressive emphasizes duration."
      }
    ]
  },
  {
    topicId: 'past-perfect',
    topicTitle: 'Past Perfect Tense',
    category: 'Present & Past Tenses',
    fillInBlank: [
      {
        sentence: "I {{blank}} already eaten when he arrived.",
        correctAnswer: "had",
        hint: "Action before another past action",
        explanation: "Past Perfect shows an action completed before another past action."
      }
    ]
  },
  {
    topicId: 'past-perfect-progressive',
    topicTitle: 'Past Perfect Progressive',
    category: 'Present & Past Tenses',
    fillInBlank: [
      {
        sentence: "They {{blank}} been waiting for hours before the bus came.",
        correctAnswer: "had",
        hint: "Had + been + verb-ing",
        explanation: "Shows duration of action before another past event."
      }
    ]
  },

  // Future Tenses
  {
    topicId: 'future-simple',
    topicTitle: 'Future Simple Tense',
    category: 'Future Tenses',
    fillInBlank: [
      {
        sentence: "I {{blank}} call you tomorrow.",
        correctAnswer: "will",
        hint: "Will/shall + base verb",
        explanation: "Use 'will' for future predictions and decisions."
      },
      {
        sentence: "They {{blank}} going to visit us next week.",
        correctAnswer: "are",
        hint: "Be + going to",
        explanation: "'Going to' is used for planned future actions."
      }
    ],
    matching: {
      leftLabel: "Form",
      rightLabel: "Usage",
      pairs: [
        { left: "will", right: "spontaneous decision", explanation: "Decisions made at moment of speaking" },
        { left: "going to", right: "planned action", explanation: "Actions already decided" },
        { left: "will", right: "prediction", explanation: "Future forecasts" },
        { left: "going to", right: "evidence-based prediction", explanation: "Predictions based on current evidence" }
      ]
    }
  },
  {
    topicId: 'future-progressive',
    topicTitle: 'Future Progressive Tense',
    category: 'Future Tenses',
    fillInBlank: [
      {
        sentence: "I {{blank}} be working at 8 PM tonight.",
        correctAnswer: "will",
        hint: "Will + be + verb-ing",
        explanation: "Future Progressive describes ongoing future actions."
      }
    ]
  },
  {
    topicId: 'future-perfect',
    topicTitle: 'Future Perfect Tense',
    category: 'Future Tenses',
    fillInBlank: [
      {
        sentence: "By next year, I {{blank}} have graduated.",
        correctAnswer: "will",
        hint: "Will + have + past participle",
        explanation: "Future Perfect describes completion before future time."
      }
    ]
  },

  // Nouns & Determiners
  {
    topicId: 'articles',
    topicTitle: 'Articles: A, An, The',
    category: 'Nouns & Determiners',
    fillInBlank: [
      {
        sentence: "I saw {{blank}} elephant at the zoo.",
        correctAnswer: "an",
        hint: "Vowel sound",
        explanation: "Use 'an' before vowel sounds."
      },
      {
        sentence: "{{blank}} sun rises in the east.",
        correctAnswer: "The",
        hint: "Unique thing",
        explanation: "Use 'the' for unique objects."
      },
      {
        sentence: "She is {{blank}} teacher.",
        correctAnswer: "a",
        hint: "Consonant sound",
        explanation: "Use 'a' before consonant sounds."
      }
    ],
    errorCorrection: [
      {
        incorrectSentence: "I need a advice.",
        correctSentence: "I need advice.",
        errorExplanation: "'Advice' is uncountable; don't use 'a/an'.",
        hint: "Check if noun is countable"
      },
      {
        incorrectSentence: "She is a honest person.",
        correctSentence: "She is an honest person.",
        errorExplanation: "Use 'an' before words starting with vowel sounds ('h' is silent).",
        hint: "Listen to the sound"
      }
    ],
    matching: {
      leftLabel: "Usage",
      rightLabel: "Article",
      pairs: [
        { left: "first mention", right: "a/an", explanation: "Indefinite for new information" },
        { left: "specific/known", right: "the", explanation: "Definite for known items" },
        { left: "unique things", right: "the", explanation: "Sun, moon, earth" },
        { left: "general plural", right: "no article", explanation: "Cats are animals" },
        { left: "uncountable nouns", right: "no article (usually)", explanation: "I like music" }
      ]
    }
  },
  {
    topicId: 'countable-uncountable-nouns',
    topicTitle: 'Countable & Uncountable Nouns',
    category: 'Nouns & Determiners',
    errorCorrection: [
      {
        incorrectSentence: "I need some informations.",
        correctSentence: "I need some information.",
        errorExplanation: "'Information' is uncountable; no plural form.",
        hint: "Check if noun is countable"
      },
      {
        incorrectSentence: "There are many furnitures.",
        correctSentence: "There is much furniture.",
        errorExplanation: "'Furniture' is uncountable; use 'much' not 'many'.",
        hint: "Use much/little for uncountable"
      }
    ],
    matching: {
      leftLabel: "Noun",
      rightLabel: "Type",
      pairs: [
        { left: "water", right: "uncountable", explanation: "Cannot count water directly" },
        { left: "chair", right: "countable", explanation: "Can count chairs" },
        { left: "advice", right: "uncountable", explanation: "Cannot say 'an advice'" },
        { left: "book", right: "countable", explanation: "Can say 'a book'" },
        { left: "money", right: "uncountable", explanation: "Use 'much money' not 'many money'" }
      ]
    }
  },
  {
    topicId: 'pronouns',
    topicTitle: 'Pronouns',
    category: 'Nouns & Determiners',
    fillInBlank: [
      {
        sentence: "{{blank}} is my book.",
        correctAnswer: "This",
        hint: "Demonstrative pronoun for near object",
        explanation: "Use 'this' for objects close to you."
      },
      {
        sentence: "The book is {{blank}}.",
        correctAnswer: "mine",
        hint: "Possessive pronoun",
        explanation: "'Mine' shows ownership without repeating the noun."
      }
    ],
    errorCorrection: [
      {
        incorrectSentence: "Me and John went shopping.",
        correctSentence: "John and I went shopping.",
        errorExplanation: "Use 'I' as subject, not 'me'. Put the other person first.",
        hint: "Subject pronouns: I, you, he, she"
      }
    ]
  },

  // Adjectives & Adverbs
  {
    topicId: 'adjectives-adverbs',
    topicTitle: 'Adjectives & Adverbs',
    category: 'Adjectives & Adverbs',
    fillInBlank: [
      {
        sentence: "She speaks English {{blank}}.",
        correctAnswer: "fluently",
        hint: "Adverb form",
        explanation: "Use adverbs to modify verbs; add -ly to adjectives."
      },
      {
        sentence: "He is a {{blank}} student.",
        correctAnswer: "good",
        hint: "Adjective before noun",
        explanation: "Adjectives modify nouns; 'good' not 'well'."
      }
    ],
    errorCorrection: [
      {
        incorrectSentence: "She sings beautiful.",
        correctSentence: "She sings beautifully.",
        errorExplanation: "Use adverb 'beautifully' to modify the verb 'sings'.",
        hint: "Adverbs modify verbs"
      },
      {
        incorrectSentence: "He drives very fastly.",
        correctSentence: "He drives very fast.",
        errorExplanation: "'Fast' is both adjective and adverb; no 'fastly'.",
        hint: "Some adverbs don't end in -ly"
      }
    ]
  },
  {
    topicId: 'comparative-superlative',
    topicTitle: 'Comparatives & Superlatives',
    category: 'Adjectives & Adverbs',
    fillInBlank: [
      {
        sentence: "She is {{blank}} than her sister.",
        correctAnswer: "taller",
        hint: "Add -er for short adjectives",
        explanation: "For one-syllable adjectives, add -er for comparative."
      },
      {
        sentence: "This is the {{blank}} book I've ever read.",
        correctAnswer: "best",
        hint: "Irregular superlative",
        explanation: "'Good' → 'better' → 'best' (irregular)."
      },
      {
        sentence: "She is {{blank}} more intelligent than me.",
        correctAnswer: "much",
        hint: "Intensifier for comparatives",
        explanation: "Use 'much', 'far', 'a lot' to intensify comparatives with 'more'."
      }
    ],
    errorCorrection: [
      {
        incorrectSentence: "He is more taller than me.",
        correctSentence: "He is taller than me.",
        errorExplanation: "Don't use 'more' with -er. Choose one form only.",
        hint: "Don't double comparatives"
      },
      {
        incorrectSentence: "She is the most prettiest girl.",
        correctSentence: "She is the prettiest girl.",
        errorExplanation: "Don't use 'most' with -est. Choose one form only.",
        hint: "Don't double superlatives"
      }
    ]
  },

  // Verbs
  {
    topicId: 'modal-verbs',
    topicTitle: 'Modal Verbs',
    category: 'Verbs',
    fillInBlank: [
      {
        sentence: "You {{blank}} drive on the right side in the US.",
        correctAnswer: "must",
        hint: "Obligation/necessity",
        explanation: "'Must' expresses strong obligation or necessity."
      },
      {
        sentence: "{{blank}} you help me, please?",
        correctAnswer: "Could",
        hint: "Polite request",
        explanation: "'Could' is used for polite requests."
      }
    ],
    matching: {
      leftLabel: "Modal",
      rightLabel: "Meaning",
      pairs: [
        { left: "must", right: "strong obligation", explanation: "You must wear a seatbelt" },
        { left: "should", right: "advice", explanation: "You should exercise" },
        { left: "can", right: "ability/permission", explanation: "I can swim" },
        { left: "may", right: "possibility/permission", explanation: "It may rain" },
        { left: "would", right: "polite request/habit", explanation: "Would you like tea?" }
      ]
    }
  },
  {
    topicId: 'gerunds-infinitives',
    topicTitle: 'Gerunds & Infinitives',
    category: 'Verbs',
    fillInBlank: [
      {
        sentence: "I enjoy {{blank}} books.",
        correctAnswer: "reading",
        hint: "Gerund after 'enjoy'",
        explanation: "'Enjoy' is followed by gerund (-ing form)."
      },
      {
        sentence: "I want {{blank}} go home.",
        correctAnswer: "to",
        hint: "Infinitive after 'want'",
        explanation: "'Want' is followed by infinitive (to + verb)."
      }
    ],
    errorCorrection: [
      {
        incorrectSentence: "I decided going there.",
        correctSentence: "I decided to go there.",
        errorExplanation: "'Decide' takes infinitive, not gerund.",
        hint: "Check verb pattern"
      }
    ],
    matching: {
      leftLabel: "Verb",
      rightLabel: "Follows with",
      pairs: [
        { left: "enjoy", right: "gerund", explanation: "enjoy + -ing" },
        { left: "want", right: "infinitive", explanation: "want + to + verb" },
        { left: "finish", right: "gerund", explanation: "finish + -ing" },
        { left: "decide", right: "infinitive", explanation: "decide + to + verb" },
        { left: "avoid", right: "gerund", explanation: "avoid + -ing" }
      ]
    }
  },

  // Prepositions & Conjunctions
  {
    topicId: 'prepositions',
    topicTitle: 'Prepositions',
    category: 'Prepositions & Conjunctions',
    fillInBlank: [
      {
        sentence: "The book is {{blank}} the table.",
        correctAnswer: "on",
        hint: "Surface contact",
        explanation: "Use 'on' for surfaces."
      },
      {
        sentence: "She arrived {{blank}} 5 PM.",
        correctAnswer: "at",
        hint: "Specific time",
        explanation: "Use 'at' for specific times."
      },
      {
        sentence: "I was born {{blank}} 1990.",
        correctAnswer: "in",
        hint: "Year/month/season",
        explanation: "Use 'in' for years, months, and seasons."
      }
    ],
    errorCorrection: [
      {
        incorrectSentence: "I'm good in math.",
        correctSentence: "I'm good at math.",
        errorExplanation: "Use 'good at' for skills and subjects.",
        hint: "Check preposition collocation"
      }
    ]
  },
  {
    topicId: 'conjunctions',
    topicTitle: 'Conjunctions',
    category: 'Prepositions & Conjunctions',
    fillInBlank: [
      {
        sentence: "I like tea {{blank}} coffee.",
        correctAnswer: "and",
        hint: "Addition",
        explanation: "'And' connects two similar ideas."
      },
      {
        sentence: "I'm tired {{blank}} I will continue working.",
        correctAnswer: "but",
        hint: "Contrast",
        explanation: "'But' shows contrast between ideas."
      }
    ],
    matching: {
      leftLabel: "Conjunction",
      rightLabel: "Function",
      pairs: [
        { left: "and", right: "addition", explanation: "Adds information" },
        { left: "but", right: "contrast", explanation: "Shows opposition" },
        { left: "because", right: "reason", explanation: "Explains why" },
        { left: "although", right: "concession", explanation: "Despite something" },
        { left: "if", right: "condition", explanation: "Shows possibility" }
      ]
    }
  },

  // Sentence Structure
  {
    topicId: 'passive-voice',
    topicTitle: 'Passive Voice',
    category: 'Sentence Structure',
    fillInBlank: [
      {
        sentence: "The cake {{blank}} baked by Mary.",
        correctAnswer: "was",
        hint: "Be + past participle",
        explanation: "Passive voice uses be + past participle."
      },
      {
        sentence: "The letters {{blank}} delivered every morning.",
        correctAnswer: "are",
        hint: "Present tense, plural",
        explanation: "Use 'are' for plural subjects in present passive."
      }
    ],
    reordering: [
      {
        scrambledWords: ["was", "The", "by", "written", "book", "Shakespeare"],
        correctOrder: "The book was written by Shakespeare",
        hint: "Subject + was + past participle + by + agent"
      }
    ],
    errorCorrection: [
      {
        incorrectSentence: "The house was build in 1920.",
        correctSentence: "The house was built in 1920.",
        errorExplanation: "Use past participle 'built', not base form 'build'.",
        hint: "Check past participle"
      }
    ]
  },
  {
    topicId: 'subject-verb-agreement',
    topicTitle: 'Subject-Verb Agreement',
    category: 'Sentence Structure',
    errorCorrection: [
      {
        incorrectSentence: "The team are winning.",
        correctSentence: "The team is winning.",
        errorExplanation: "Collective nouns usually take singular verbs.",
        hint: "Check collective noun agreement"
      },
      {
        incorrectSentence: "Each student have a book.",
        correctSentence: "Each student has a book.",
        errorExplanation: "'Each' takes a singular verb.",
        hint: "Each, every, everyone = singular"
      }
    ]
  },
  {
    topicId: 'question-formation',
    topicTitle: 'Question Formation',
    category: 'Sentence Structure',
    reordering: [
      {
        scrambledWords: ["you", "Where", "do", "live"],
        correctOrder: "Where do you live",
        hint: "Wh-word + do/does + subject + verb"
      },
      {
        scrambledWords: ["she", "Is", "coming"],
        correctOrder: "Is she coming",
        hint: "Be + subject + verb-ing"
      },
      {
        scrambledWords: ["have", "you", "ever", "Have", "been", "to", "Japan"],
        correctOrder: "Have you ever been to Japan",
        hint: "Have/has + subject + ever + past participle"
      }
    ],
    errorCorrection: [
      {
        incorrectSentence: "Where you live?",
        correctSentence: "Where do you live?",
        errorExplanation: "Use auxiliary 'do/does' in present simple questions.",
        hint: "Add auxiliary verb"
      }
    ]
  },
  {
    topicId: 'reported-speech',
    topicTitle: 'Reported Speech',
    category: 'Sentence Structure',
    fillInBlank: [
      {
        sentence: "She said she {{blank}} tired.",
        correctAnswer: "was",
        hint: "Backshift tense",
        explanation: "Change present 'am/is' to past 'was' in reported speech."
      }
    ],
    errorCorrection: [
      {
        incorrectSentence: "He said he will come tomorrow.",
        correctSentence: "He said he would come tomorrow.",
        errorExplanation: "Change 'will' to 'would' in reported speech.",
        hint: "Backshift modal verbs"
      }
    ]
  },

  // Clauses
  {
    topicId: 'conditionals',
    topicTitle: 'Conditionals (If Clauses)',
    category: 'Clauses',
    fillInBlank: [
      {
        sentence: "If it {{blank}}, we will stay home.",
        correctAnswer: "rains",
        hint: "First conditional: present simple in if-clause",
        explanation: "Use present simple in if-clause, will in main clause."
      },
      {
        sentence: "If I {{blank}} rich, I would travel the world.",
        correctAnswer: "were",
        hint: "Second conditional: past simple in if-clause",
        explanation: "Use past simple (were for all persons) in unreal conditionals."
      },
      {
        sentence: "If I had known, I {{blank}} have told you.",
        correctAnswer: "would",
        hint: "Third conditional: would have + past participle",
        explanation: "Third conditional expresses unreal past situations."
      }
    ],
    matching: {
      leftLabel: "Conditional Type",
      rightLabel: "Use",
      pairs: [
        { left: "Zero", right: "general truths", explanation: "If you heat water, it boils" },
        { left: "First", right: "real future possibility", explanation: "If it rains, I'll stay home" },
        { left: "Second", right: "unreal present", explanation: "If I were rich..." },
        { left: "Third", right: "unreal past", explanation: "If I had known..." },
        { left: "Mixed", right: "unreal past + present result", explanation: "If I had studied, I would know" }
      ]
    }
  },
  {
    topicId: 'relative-clauses',
    topicTitle: 'Relative Clauses',
    category: 'Clauses',
    fillInBlank: [
      {
        sentence: "The man {{blank}} is talking is my teacher.",
        correctAnswer: "who",
        hint: "For people",
        explanation: "Use 'who' for people in defining relative clauses."
      },
      {
        sentence: "The book {{blank}} I bought is interesting.",
        correctAnswer: "that",
        hint: "For things (or omit)",
        explanation: "Use 'that' or 'which' for things, or omit in object clauses."
      }
    ],
    errorCorrection: [
      {
        incorrectSentence: "The person which helped me was kind.",
        correctSentence: "The person who helped me was kind.",
        errorExplanation: "Use 'who' for people, not 'which'.",
        hint: "Who = people, which = things"
      }
    ]
  },

  // Punctuation
  {
    topicId: 'commas',
    topicTitle: 'Commas',
    category: 'Punctuation',
    errorCorrection: [
      {
        incorrectSentence: "I bought apples oranges and bananas.",
        correctSentence: "I bought apples, oranges, and bananas.",
        errorExplanation: "Use commas to separate items in a list.",
        hint: "Add commas in lists"
      },
      {
        incorrectSentence: "Although I was tired I continued working.",
        correctSentence: "Although I was tired, I continued working.",
        errorExplanation: "Use comma after introductory clause.",
        hint: "Comma after introductory element"
      }
    ]
  },
  {
    topicId: 'apostrophes',
    topicTitle: 'Apostrophes',
    category: 'Punctuation',
    fillInBlank: [
      {
        sentence: "{{blank}} my book.",
        correctAnswer: "It's",
        hint: "It is = It's",
        explanation: "Use apostrophe in contractions."
      },
      {
        sentence: "The {{blank}} toy is red.",
        correctAnswer: "dog's",
        hint: "Possession",
        explanation: "Use apostrophe + s for singular possession."
      }
    ],
    errorCorrection: [
      {
        incorrectSentence: "Its a beautiful day.",
        correctSentence: "It's a beautiful day.",
        errorExplanation: "It's = it is. Its = possessive (no apostrophe).",
        hint: "It's vs its"
      },
      {
        incorrectSentence: "The dogs's are barking.",
        correctSentence: "The dogs are barking.",
        errorExplanation: "Don't use apostrophes for plural nouns.",
        hint: "Plural ≠ apostrophe"
      }
    ]
  }
];
