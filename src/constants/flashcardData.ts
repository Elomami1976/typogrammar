// Comprehensive flashcard data covering all grammar topics

export interface FlashcardData {
  front: string;
  back: string;
  category: string;
}

export const GRAMMAR_FLASHCARDS: FlashcardData[] = [
  // Present & Past Tenses
  {
    front: "When do we use Present Simple?",
    back: "For habits, routines, general truths, and permanent situations. Example: 'I work every day.'",
    category: "Present & Past Tenses"
  },
  {
    front: "How do we form Present Simple negative?",
    back: "Subject + do/does not + base verb. Example: 'She doesn't like coffee.'",
    category: "Present & Past Tenses"
  },
  {
    front: "When do we use Present Progressive?",
    back: "For actions happening now, temporary situations, and future arrangements. Example: 'I am studying right now.'",
    category: "Present & Past Tenses"
  },
  {
    front: "How do we form Present Progressive?",
    back: "Subject + am/is/are + verb-ing. Example: 'She is reading a book.'",
    category: "Present & Past Tenses"
  },
  {
    front: "When do we use Past Simple?",
    back: "For completed actions at a specific time in the past. Example: 'I went to London last year.'",
    category: "Present & Past Tenses"
  },
  {
    front: "What are common Past Simple time expressions?",
    back: "Yesterday, last week/month/year, ago, in 2020, when I was young.",
    category: "Present & Past Tenses"
  },
  {
    front: "When do we use Past Progressive?",
    back: "For actions in progress at a specific time in the past or interrupted actions. Example: 'I was sleeping when you called.'",
    category: "Present & Past Tenses"
  },
  {
    front: "How do we form Past Progressive?",
    back: "Subject + was/were + verb-ing. Example: 'They were playing soccer.'",
    category: "Present & Past Tenses"
  },
  {
    front: "When do we use Present Perfect?",
    back: "For past actions with present relevance, life experiences, and actions from past continuing to now. Example: 'I have visited Paris.'",
    category: "Present & Past Tenses"
  },
  {
    front: "What are key Present Perfect time expressions?",
    back: "Just, already, yet, ever, never, since, for, recently, so far.",
    category: "Present & Past Tenses"
  },
  {
    front: "When do we use Present Perfect Progressive?",
    back: "To emphasize the duration of an action that started in the past and continues to now. Example: 'I have been studying for three hours.'",
    category: "Present & Past Tenses"
  },
  {
    front: "When do we use Past Perfect?",
    back: "For an action completed before another past action. Example: 'I had eaten before he arrived.'",
    category: "Present & Past Tenses"
  },
  {
    front: "How do we form Past Perfect?",
    back: "Had + past participle. Example: 'She had already left.'",
    category: "Present & Past Tenses"
  },
  {
    front: "When do we use Past Perfect Progressive?",
    back: "To show the duration of an action before another past action. Example: 'I had been waiting for hours before the bus came.'",
    category: "Present & Past Tenses"
  },

  // Future Tenses
  {
    front: "What's the difference between 'will' and 'going to'?",
    back: "'Will' for spontaneous decisions and predictions. 'Going to' for planned actions and evidence-based predictions.",
    category: "Future Tenses"
  },
  {
    front: "How do we form Future Simple with 'will'?",
    back: "Will + base verb. Example: 'I will call you tomorrow.'",
    category: "Future Tenses"
  },
  {
    front: "When do we use Future Progressive?",
    back: "For actions that will be in progress at a specific time in the future. Example: 'I will be working at 8 PM.'",
    category: "Future Tenses"
  },
  {
    front: "How do we form Future Progressive?",
    back: "Will + be + verb-ing. Example: 'She will be studying tonight.'",
    category: "Future Tenses"
  },
  {
    front: "When do we use Future Perfect?",
    back: "For actions that will be completed before a specific time in the future. Example: 'By 2026, I will have graduated.'",
    category: "Future Tenses"
  },
  {
    front: "How do we form Future Perfect?",
    back: "Will + have + past participle. Example: 'They will have finished by noon.'",
    category: "Future Tenses"
  },
  {
    front: "When do we use Future Perfect Progressive?",
    back: "To show the duration of an action up to a point in the future. Example: 'By December, I will have been working here for 5 years.'",
    category: "Future Tenses"
  },

  // Articles
  {
    front: "When do we use 'a' vs 'an'?",
    back: "Use 'a' before consonant sounds (a dog, a university). Use 'an' before vowel sounds (an apple, an hour).",
    category: "Nouns & Determiners"
  },
  {
    front: "When do we use 'the'?",
    back: "For specific/known things, unique items (the sun), superlatives (the best), and when mentioned before.",
    category: "Nouns & Determiners"
  },
  {
    front: "When do we NOT use articles?",
    back: "With plural/uncountable nouns for general meaning, most countries, languages, meals, sports.",
    category: "Nouns & Determiners"
  },
  {
    front: "What's a countable noun?",
    back: "A noun you can count with numbers (one apple, two books). Can be singular or plural.",
    category: "Nouns & Determiners"
  },
  {
    front: "What's an uncountable noun?",
    back: "A noun you cannot count directly (water, information, advice). No plural form. Use 'much' not 'many'.",
    category: "Nouns & Determiners"
  },
  {
    front: "Give examples of always-uncountable nouns.",
    back: "Information, advice, furniture, luggage, bread, money, news, research, homework.",
    category: "Nouns & Determiners"
  },

  // Pronouns
  {
    front: "What are subject pronouns?",
    back: "I, you, he, she, it, we, they. Used as the subject of a sentence. Example: 'She likes pizza.'",
    category: "Nouns & Determiners"
  },
  {
    front: "What are object pronouns?",
    back: "Me, you, him, her, it, us, them. Used as the object. Example: 'John saw me.'",
    category: "Nouns & Determiners"
  },
  {
    front: "What are possessive pronouns?",
    back: "Mine, yours, his, hers, ours, theirs. Stand alone without a noun. Example: 'This book is mine.'",
    category: "Nouns & Determiners"
  },
  {
    front: "What are possessive adjectives?",
    back: "My, your, his, her, its, our, their. Must be followed by a noun. Example: 'This is my book.'",
    category: "Nouns & Determiners"
  },
  {
    front: "What are reflexive pronouns?",
    back: "Myself, yourself, himself, herself, itself, ourselves, themselves. Used when subject and object are the same. Example: 'I hurt myself.'",
    category: "Nouns & Determiners"
  },

  // Adjectives & Adverbs
  {
    front: "What's the difference between adjectives and adverbs?",
    back: "Adjectives describe nouns (good student). Adverbs describe verbs, adjectives, or other adverbs (speak fluently).",
    category: "Adjectives & Adverbs"
  },
  {
    front: "How do we form most adverbs?",
    back: "Add -ly to the adjective: quick → quickly, beautiful → beautifully. Exceptions: good → well, fast → fast.",
    category: "Adjectives & Adverbs"
  },
  {
    front: "Where do adverbs of frequency go?",
    back: "Before the main verb: 'I always eat breakfast.' After 'be': 'She is usually late.'",
    category: "Adjectives & Adverbs"
  },
  {
    front: "How do we form comparatives for short adjectives?",
    back: "Add -er: tall → taller, big → bigger. Use 'than' for comparison: 'He is taller than me.'",
    category: "Adjectives & Adverbs"
  },
  {
    front: "How do we form comparatives for long adjectives?",
    back: "Use 'more': beautiful → more beautiful, interesting → more interesting.",
    category: "Adjectives & Adverbs"
  },
  {
    front: "How do we form superlatives for short adjectives?",
    back: "Add -est with 'the': tall → the tallest, big → the biggest.",
    category: "Adjectives & Adverbs"
  },
  {
    front: "How do we form superlatives for long adjectives?",
    back: "Use 'the most': the most beautiful, the most interesting.",
    category: "Adjectives & Adverbs"
  },
  {
    front: "What are irregular comparatives and superlatives?",
    back: "Good → better → best, bad → worse → worst, far → farther/further → farthest/furthest.",
    category: "Adjectives & Adverbs"
  },

  // Modal Verbs
  {
    front: "What does 'must' express?",
    back: "Strong obligation or necessity (You must wear a seatbelt) or logical conclusion (She must be tired).",
    category: "Verbs"
  },
  {
    front: "What does 'should' express?",
    back: "Advice or recommendation. Example: 'You should exercise regularly.'",
    category: "Verbs"
  },
  {
    front: "What does 'can' express?",
    back: "Ability (I can swim) or permission (Can I go?). Negative: cannot/can't.",
    category: "Verbs"
  },
  {
    front: "What does 'could' express?",
    back: "Past ability (I could swim when I was 5), polite request (Could you help?), or possibility (It could rain).",
    category: "Verbs"
  },
  {
    front: "What does 'may' and 'might' express?",
    back: "Possibility (It may/might rain) or formal permission (You may enter).",
    category: "Verbs"
  },
  {
    front: "What does 'would' express?",
    back: "Polite request (Would you like tea?), past habit (I would visit daily), or conditional (I would go if...).",
    category: "Verbs"
  },
  {
    front: "What's the difference between 'must' and 'have to'?",
    back: "'Must' is personal/internal obligation. 'Have to' is external obligation or rule. Negative: mustn't = prohibited, don't have to = not necessary.",
    category: "Verbs"
  },

  // Gerunds & Infinitives
  {
    front: "What's a gerund?",
    back: "Verb + -ing used as a noun. Example: 'Swimming is fun.' 'I enjoy reading.'",
    category: "Verbs"
  },
  {
    front: "What's an infinitive?",
    back: "'To + base verb' form. Example: 'I want to go.' 'It's important to study.'",
    category: "Verbs"
  },
  {
    front: "Which verbs take gerunds?",
    back: "Enjoy, finish, avoid, consider, mind, practice, suggest, keep. Example: 'I enjoy swimming.'",
    category: "Verbs"
  },
  {
    front: "Which verbs take infinitives?",
    back: "Want, need, decide, plan, hope, expect, agree, refuse, promise. Example: 'I want to go.'",
    category: "Verbs"
  },
  {
    front: "Which verbs take both gerund and infinitive with same meaning?",
    back: "Start, begin, continue, like, love, hate. Example: 'I like swimming/to swim.'",
    category: "Verbs"
  },
  {
    front: "Which verbs change meaning with gerund vs infinitive?",
    back: "Remember, forget, stop, try. 'I stopped smoking' (quit) vs 'I stopped to smoke' (paused for a cigarette).",
    category: "Verbs"
  },

  // Prepositions
  {
    front: "When do we use 'in', 'on', 'at' for time?",
    back: "IN: months, years, seasons (in May, in 2024). ON: days, dates (on Monday, on May 5th). AT: specific times (at 3pm, at night).",
    category: "Prepositions & Conjunctions"
  },
  {
    front: "When do we use 'in', 'on', 'at' for place?",
    back: "IN: enclosed spaces (in the room, in London). ON: surfaces (on the table, on the wall). AT: specific points (at home, at the door).",
    category: "Prepositions & Conjunctions"
  },
  {
    front: "What preposition with 'arrive'?",
    back: "Arrive IN (cities/countries): arrive in Paris. Arrive AT (buildings/events): arrive at the airport.",
    category: "Prepositions & Conjunctions"
  },
  {
    front: "What preposition with 'interested'?",
    back: "Interested IN: 'I'm interested in music.'",
    category: "Prepositions & Conjunctions"
  },
  {
    front: "What preposition with 'good/bad'?",
    back: "Good/bad AT (skills): 'I'm good at math.' Good/bad FOR (health/benefit): 'Vegetables are good for you.'",
    category: "Prepositions & Conjunctions"
  },

  // Conjunctions
  {
    front: "What are coordinating conjunctions?",
    back: "And, but, or, so, yet, for, nor. Connect equal elements. Example: 'I like tea and coffee.'",
    category: "Prepositions & Conjunctions"
  },
  {
    front: "What are subordinating conjunctions?",
    back: "Because, although, if, when, while, since, unless, until. Connect dependent clause to independent. Example: 'I stayed home because it rained.'",
    category: "Prepositions & Conjunctions"
  },
  {
    front: "What's the difference between 'because' and 'because of'?",
    back: "'Because' + clause (subject + verb): 'I stayed home because it rained.' 'Because of' + noun: 'I stayed home because of the rain.'",
    category: "Prepositions & Conjunctions"
  },
  {
    front: "What's the difference between 'although' and 'despite'?",
    back: "'Although' + clause: 'Although it rained, I went out.' 'Despite' + noun: 'Despite the rain, I went out.'",
    category: "Prepositions & Conjunctions"
  },

  // Passive Voice
  {
    front: "How do we form Passive Voice?",
    back: "Be (conjugated) + past participle. Example: 'The book was written by Shakespeare.'",
    category: "Sentence Structure"
  },
  {
    front: "When do we use Passive Voice?",
    back: "When the action is more important than the doer, or when the doer is unknown/obvious. Example: 'English is spoken here.'",
    category: "Sentence Structure"
  },
  {
    front: "How do we form Present Simple Passive?",
    back: "Am/is/are + past participle. Example: 'The letters are delivered daily.'",
    category: "Sentence Structure"
  },
  {
    front: "How do we form Past Simple Passive?",
    back: "Was/were + past participle. Example: 'The house was built in 1920.'",
    category: "Sentence Structure"
  },
  {
    front: "How do we form Present Perfect Passive?",
    back: "Have/has been + past participle. Example: 'The work has been completed.'",
    category: "Sentence Structure"
  },

  // Subject-Verb Agreement
  {
    front: "Do collective nouns take singular or plural verbs?",
    back: "Usually singular: 'The team is winning.' But can be plural when referring to members: 'The team are arguing.'",
    category: "Sentence Structure"
  },
  {
    front: "Does 'each', 'every', 'everyone' take singular or plural?",
    back: "Always singular: 'Each student has a book.' 'Everyone is here.'",
    category: "Sentence Structure"
  },
  {
    front: "What verb form with 'either...or', 'neither...nor'?",
    back: "Verb agrees with the closest subject: 'Either John or his friends are coming.' 'Either his friends or John is coming.'",
    category: "Sentence Structure"
  },

  // Question Formation
  {
    front: "How do we form Yes/No questions in Present Simple?",
    back: "Do/Does + subject + base verb? Example: 'Do you like pizza?' 'Does she work here?'",
    category: "Sentence Structure"
  },
  {
    front: "How do we form Wh- questions in Present Simple?",
    back: "Wh-word + do/does + subject + base verb? Example: 'Where do you live?' 'What does she do?'",
    category: "Sentence Structure"
  },
  {
    front: "How do we form questions with 'be' verb?",
    back: "Invert subject and 'be': 'Are you ready?' 'Is she coming?' 'Were they there?'",
    category: "Sentence Structure"
  },
  {
    front: "How do we form Present Perfect questions?",
    back: "Have/Has + subject + past participle? Example: 'Have you been to Paris?' 'Has she finished?'",
    category: "Sentence Structure"
  },

  // Reported Speech
  {
    front: "What changes in Reported Speech?",
    back: "Pronouns, tense (backshift), time expressions. 'He said, \"I am tired\"' → 'He said he was tired.'",
    category: "Sentence Structure"
  },
  {
    front: "How do tenses backshift in Reported Speech?",
    back: "Present Simple → Past Simple, Present Progressive → Past Progressive, Present Perfect → Past Perfect, Will → Would.",
    category: "Sentence Structure"
  },
  {
    front: "How do time expressions change in Reported Speech?",
    back: "Today → that day, yesterday → the day before, tomorrow → the next day, ago → before, now → then.",
    category: "Sentence Structure"
  },
  {
    front: "How do we report questions?",
    back: "Use 'asked' + if/whether (yes/no) or wh-word. Change to statement word order. 'He asked, \"Are you OK?\"' → 'He asked if I was OK.'",
    category: "Sentence Structure"
  },

  // Conditionals
  {
    front: "What's the Zero Conditional structure?",
    back: "If + present simple, present simple. For general truths. Example: 'If you heat water, it boils.'",
    category: "Clauses"
  },
  {
    front: "What's the First Conditional structure?",
    back: "If + present simple, will + base verb. For real future possibility. Example: 'If it rains, I will stay home.'",
    category: "Clauses"
  },
  {
    front: "What's the Second Conditional structure?",
    back: "If + past simple, would + base verb. For unreal present/future. Example: 'If I were rich, I would travel.'",
    category: "Clauses"
  },
  {
    front: "What's the Third Conditional structure?",
    back: "If + past perfect, would have + past participle. For unreal past. Example: 'If I had known, I would have told you.'",
    category: "Clauses"
  },
  {
    front: "Why do we use 'were' for all persons in Second Conditional?",
    back: "In formal English, use 'were' for all persons in hypothetical situations: 'If I were you...' (not 'was').",
    category: "Clauses"
  },

  // Relative Clauses
  {
    front: "What's a defining relative clause?",
    back: "Essential information about the noun. No commas. Example: 'The man who lives next door is a doctor.'",
    category: "Clauses"
  },
  {
    front: "What's a non-defining relative clause?",
    back: "Extra information. Uses commas. Example: 'My brother, who lives in Paris, is visiting.'",
    category: "Clauses"
  },
  {
    front: "When do we use 'who', 'which', 'that'?",
    back: "WHO: people. WHICH: things. THAT: people or things (in defining clauses). 'The person who/that called' 'The book which/that I read'",
    category: "Clauses"
  },
  {
    front: "When can we omit the relative pronoun?",
    back: "When it's the object of the clause: 'The book (that) I read' ✓. Not when it's the subject: 'The man who called' ✗ (can't omit).",
    category: "Clauses"
  },
  {
    front: "What does 'whose' express?",
    back: "Possession. Replaces his/her/their. 'The woman whose car was stolen' = 'The woman - her car was stolen.'",
    category: "Clauses"
  },

  // Punctuation
  {
    front: "When do we use commas in lists?",
    back: "Separate three or more items: 'I bought apples, oranges, and bananas.' (Oxford comma is optional).",
    category: "Punctuation"
  },
  {
    front: "When do we use commas with introductory phrases?",
    back: "After introductory words/phrases: 'However, I disagree.' 'After dinner, we went home.'",
    category: "Punctuation"
  },
  {
    front: "What's the difference between 'its' and 'it's'?",
    back: "IT'S = it is/it has (apostrophe for contraction). ITS = possessive (no apostrophe). 'It's a dog. Its tail is long.'",
    category: "Punctuation"
  },
  {
    front: "How do we use apostrophes for possession?",
    back: "Singular: add 's (dog's toy). Plural ending in s: add ' only (dogs' toys). Irregular plural: add 's (children's toys).",
    category: "Punctuation"
  },
  {
    front: "When do we use semicolons?",
    back: "Connect closely related independent clauses: 'I love tea; she loves coffee.' Or separate complex list items.",
    category: "Punctuation"
  },
  {
    front: "When do we use colons?",
    back: "Introduce list/explanation/quote: 'Bring: pen, paper, ruler.' 'One reason: it's raining.' Before quotations in formal writing.",
    category: "Punctuation"
  },

  // Advanced Grammar
  {
    front: "What is the Subjunctive Mood?",
    back: "Used after certain verbs (suggest, recommend, insist, demand) + that. Uses base form: 'I suggest that he go' (not 'goes').",
    category: "Advanced Grammar"
  },
  {
    front: "What are Cleft Sentences?",
    back: "Emphasize specific information using 'It is/was...that/who' or 'What...is'. 'It was John who called.' 'What I need is a coffee.'",
    category: "Advanced Grammar"
  },
  {
    front: "What is Inversion?",
    back: "Placing verb before subject for emphasis or after negative adverbs. 'Never have I seen such beauty.' 'Rarely does he complain.'",
    category: "Advanced Grammar"
  },
  {
    front: "What is Ellipsis in grammar?",
    back: "Omitting words that are understood from context. 'Are you coming?' 'Yes, I am [coming].' 'I can speak French and [I can speak] Spanish.'",
    category: "Advanced Grammar"
  },

  // Common Confusions
  {
    front: "What's the difference between 'used to' and 'would'?",
    back: "'Used to': past habits and states (I used to smoke). 'Would': only past habits, not states (I would visit daily, NOT: I would live there).",
    category: "Common Confusions"
  },
  {
    front: "What's the difference between 'wish' and 'hope'?",
    back: "'Hope': possible/likely (I hope it doesn't rain). 'Wish': unlikely/impossible (I wish I were rich). Wish + past for present, past perfect for past.",
    category: "Common Confusions"
  }
];
