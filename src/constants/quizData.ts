
import { Quiz } from '../types';
import { ADDITIONAL_QUIZ_QUESTIONS } from './additionalQuizQuestions';

// Helper function to merge additional questions into existing quizzes
const mergeQuizQuestions = (): Quiz[] => {
  const baseQuizzes = BASE_QUIZZES;
  const mergedQuizzes = baseQuizzes.map(quiz => {
    const additionalQuestions = ADDITIONAL_QUIZ_QUESTIONS.find(aq => aq.topicId === quiz.topicId);
    if (additionalQuestions && additionalQuestions.questions) {
      return {
        ...quiz,
        questions: [...quiz.questions, ...additionalQuestions.questions]
      };
    }
    return quiz;
  });
  return mergedQuizzes;
};

const BASE_QUIZZES: Quiz[] = [
  // Tenses
  {
    topicId: 'present-simple',
    title: 'Present Simple Tense Quiz',
    questions: [
      {
        question: 'Which sentence correctly uses the Present Simple tense for a general truth?',
        options: ['The sun is rising now.', 'The sun rises in the east.', 'The sun has risen yesterday.'],
        correctAnswer: 1,
        explanation: 'The Present Simple is used for general truths or facts, like the sun rising in the east.',
      },
      {
        question: 'Choose the correct form of the verb for the sentence: "She ___ to the gym every day."',
        options: ['go', 'goes', 'is going'],
        correctAnswer: 1,
        explanation: 'For third-person singular subjects (like "She"), we add -s or -es to the verb in the Present Simple.',
      },
      {
        question: 'What is the correct negative form for "They like coffee"?',
        options: ["They don't like coffee.", "They doesn't like coffee.", "They not like coffee."],
        correctAnswer: 0,
        explanation: 'For "they", we use "do not" (don\'t) + the base verb to form the negative in Present Simple.'
      }
    ],
  },
  {
    topicId: 'present-progressive',
    title: 'Present Progressive Quiz',
    questions: [
      {
        question: 'Which sentence describes an action happening right now?',
        options: ['I am reading a book.', 'I read books.', 'I will read a book.'],
        correctAnswer: 0,
        explanation: 'The Present Progressive (am/is/are + verb-ing) is used for actions happening at the moment of speaking.',
      },
      {
        question: 'Which of these is a "stative verb" and is NOT usually used in the progressive tense?',
        options: ['run', 'eat', 'know'],
        correctAnswer: 2,
        explanation: 'Stative verbs like "know" describe states, not actions, and are generally not used in progressive tenses.',
      },
      {
        question: 'Choose the correct verb form: "He ___ for his exams this week."',
        options: ['studies', 'is studying', 'study'],
        correctAnswer: 1,
        explanation: 'Present Progressive can be used for temporary situations, like studying for exams over a week.'
      }
    ],
  },
    {
    topicId: 'past-simple',
    title: 'Past Simple Quiz',
    questions: [
      {
        question: 'Which sentence is in the Past Simple tense?',
        options: ['I have visited Paris.', 'I was visiting Paris.', 'I visited Paris last year.'],
        correctAnswer: 2,
        explanation: 'The Past Simple is used for completed actions at a specific time in the past ("last year").',
      },
      {
        question: 'What is the correct negative form of "He went to the party"?',
        options: ["He didn't went to the party.", "He didn't go to the party.", "He not went to the party."],
        correctAnswer: 1,
        explanation: 'The negative form is Subject + did + not + base form of the verb (go).',
      },
    ],
  },
  {
    topicId: 'past-progressive',
    title: 'Past Progressive Quiz',
    questions: [
      {
        question: 'Complete the sentence: "I was reading when the phone ___."',
        options: ['rang', 'was ringing', 'had rung'],
        correctAnswer: 0,
        explanation: 'The Past Simple ("rang") is used for a short action that interrupts a longer, ongoing action in the Past Progressive ("was reading").',
      },
      {
        question: 'Choose the correct verb form: "They ___ working at midnight."',
        options: ['was', 'were', 'are'],
        correctAnswer: 1,
        explanation: 'The subject "They" is plural, so it requires the plural past form of "to be," which is "were".',
      },
    ],
  },
  {
    topicId: 'present-perfect',
    title: 'Present Perfect Quiz',
    questions: [
      {
        question: 'Which sentence correctly uses the Present Perfect for a life experience?',
        options: ['I went to Japan last year.', 'I have been to Japan.', 'I was going to Japan.'],
        correctAnswer: 1,
        explanation: 'The Present Perfect ("have been") is used for actions or experiences that happened at an unspecified time in the past.',
      },
      {
        question: 'Choose the correct tense: "She ___ here since 2010."',
        options: ['has lived', 'lived', 'is living'],
        correctAnswer: 0,
        explanation: 'The Present Perfect is used for an action that started in the past and continues to the present, often with "for" or "since".',
      },
    ],
  },
  {
    topicId: 'present-perfect-progressive',
    title: 'Present Perfect Progressive Quiz',
    questions: [
      {
        question: 'Which sentence emphasizes the duration of a recent action with a present result?',
        options: ["It's raining.", "It has rained.", "It has been raining."],
        correctAnswer: 2,
        explanation: 'The Present Perfect Progressive emphasizes the duration of the action ("has been raining"), often explaining a present result (e.g., the ground is wet).',
      },
      {
        question: 'Which sentence is grammatically correct?',
        options: ['I have been knowing her for years.', 'I have known her for years.', 'I know her since years.'],
        correctAnswer: 1,
        explanation: 'The verb "know" is a stative verb, which describes a state, not an action. Stative verbs are not typically used in progressive tenses.',
      },
    ],
  },
  {
    topicId: 'past-perfect',
    title: 'Past Perfect Quiz',
    questions: [
      {
        question: 'Complete the sentence: "By the time I arrived at the station, the train ___."',
        options: ['left', 'has left', 'had left'],
        correctAnswer: 2,
        explanation: 'The Past Perfect ("had left") is used to describe an action that was completed before another action in the past ("I arrived").',
      },
      {
        question: 'Which sentence shows that one action happened before another in the past?',
        options: ['He was tired because he worked hard.', 'He was tired because he had worked hard.', 'He was tired because he has worked hard.'],
        correctAnswer: 1,
        explanation: 'The Past Perfect ("had worked") makes it clear that the hard work happened before the moment he felt tired.',
      },
    ],
  },
   {
    topicId: 'past-perfect-progressive',
    title: 'Past Perfect Progressive Quiz',
    questions: [
      {
        question: 'Choose the correct form: "She was tired because she ___ all day."',
        options: ['worked', 'was working', 'had been working'],
        correctAnswer: 2,
        explanation: 'The Past Perfect Progressive emphasizes the duration of an activity that was in progress before another event in the past.',
      },
      {
        question: 'Which option completes the sentence: "They ___ for hours before it started to rain."',
        options: ['had been playing', 'were playing', 'played'],
        correctAnswer: 0,
        explanation: 'Use the Past Perfect Progressive to show how long an action was happening before another past action interrupted it.',
      },
    ],
  },
  {
    topicId: 'future-simple',
    title: 'Future Simple Quiz',
    questions: [
      {
        question: 'In which situation would you use "will"?',
        options: ['A plan made last week.', 'A spontaneous decision.', 'An action happening now.'],
        correctAnswer: 1,
        explanation: 'The Future Simple with "will" is often used for spontaneous decisions made at the moment of speaking (e.g., "The phone is ringing, I\'ll get it!").',
      },
      {
        question: 'What is the correct negative form of "He will go"?',
        options: ["He won't go.", "He doesn't will go.", "He not will go."],
        correctAnswer: 0,
        explanation: 'The negative of "will" is "will not", which is commonly contracted to "won\'t".',
      },
    ],
  },
  {
    topicId: 'future-progressive',
    title: 'Future Progressive Quiz',
    questions: [
      {
        question: 'Which sentence describes an ongoing action at a specific time in the future?',
        options: ['This time next year, I will live in Spain.', 'This time next year, I will be living in Spain.', 'This time next year, I live in Spain.'],
        correctAnswer: 1,
        explanation: 'The Future Progressive ("will be living") is used to talk about an action that will be in progress at a particular moment in the future.',
      },
      {
        question: 'Complete the question: "What ___ you be doing at 9 PM tonight?"',
        options: ['will', 'are', 'do'],
        correctAnswer: 0,
        explanation: 'The correct structure for a question in the Future Progressive is: Will + subject + be + verb(-ing)?',
      },
    ],
  },
  {
    topicId: 'future-perfect',
    title: 'Future Perfect Quiz',
    questions: [
      {
        question: 'Choose the correct sentence to describe an action completed before a future point.',
        options: ['By next month, I will finish the course.', 'By next month, I will be finishing the course.', 'By next month, I will have finished the course.'],
        correctAnswer: 2,
        explanation: 'The Future Perfect ("will have finished") is used for an action that will be completed before a specified time in the future.',
      },
      {
        question: 'Complete the sentence: "By the time you arrive, we ___ dinner."',
        options: ['will eat', 'will have eaten', 'will be eating'],
        correctAnswer: 1,
        explanation: 'The Future Perfect ("will have eaten") indicates that the action of eating will be finished before the other future event (your arrival).',
      },
    ],
  },
  {
    topicId: 'future-perfect-progressive',
    title: 'Future Perfect Progressive Quiz',
    questions: [
      {
        question: 'Which sentence emphasizes the duration of an action up to a future point?',
        options: ['In May, she will have worked here for 10 years.', 'In May, she will work here for 10 years.', 'In May, she will have been working here for 10 years.'],
        correctAnswer: 2,
        explanation: 'The Future Perfect Progressive ("will have been working") emphasizes the continuous duration of an action up to a specific future time.',
      },
      {
        question: 'Which sentence is grammatically correct?',
        options: ['By 2025, they will have owned the house for a decade.', 'By 2025, they will have been owning the house for a decade.'],
        correctAnswer: 0,
        explanation: '"Own" is a stative verb and is not used in progressive tenses. The Future Perfect is the correct choice here.',
      },
    ],
  },
  // Nouns & Determiners
  {
    topicId: 'articles',
    title: 'Articles Quiz',
    questions: [
      {
        question: 'Choose the correct article: "She is ___ honest person."',
        options: ['a', 'an', 'the'],
        correctAnswer: 1,
        explanation: 'We use "an" before words that start with a vowel sound, and "honest" (h is silent) starts with a vowel sound.',
      },
      {
        question: 'Choose the correct article: "I saw ___ cat. ___ cat was black."',
        options: ['a, The', 'the, A', 'a, A'],
        correctAnswer: 0,
        explanation: 'We use "a" for the first mention of a non-specific noun, and "the" for subsequent mentions when it becomes specific.',
      },
      {
        question: 'Which sentence is correct?',
        options: ['He is studying at a university.', 'He is studying at an university.'],
        correctAnswer: 0,
        explanation: '"University" starts with a "y" sound (a consonant sound), so we use "a".',
      },
    ],
  },
  {
    topicId: 'countable-uncountable-nouns',
    title: 'Countable & Uncountable Nouns Quiz',
    questions: [
      {
        question: 'Which of these nouns is typically uncountable?',
        options: ['book', 'water', 'chair'],
        correctAnswer: 1,
        explanation: '"Water" is a mass noun and cannot be counted individually without a unit (like "bottles of water").',
      },
      {
        question: 'Choose the correct phrase: "She gave me ___."',
        options: ['an advice', 'some advice', 'advices'],
        correctAnswer: 1,
        explanation: '"Advice" is an uncountable noun. It doesn\'t have a plural form and cannot be used with "a/an". We use quantifiers like "some".',
      },
    ],
  },
    {
    topicId: 'pronouns',
    title: 'Pronouns Quiz',
    questions: [
      {
        question: 'Complete the sentence: "My sister and ___ are going to the cinema."',
        options: ['me', 'I'],
        correctAnswer: 1,
        explanation: '"I" is a subject pronoun. You can check this by removing "My sister and": "I am going to the cinema" is correct, whereas "Me am going..." is not.',
      },
      {
        question: 'Choose the correct possessive pronoun: "That bag is ___."',
        options: ['her', 'hers', 'she'],
        correctAnswer: 1,
        explanation: '"Hers" is a possessive pronoun that can stand alone and indicates ownership. "Her" is a possessive adjective that must be followed by a noun (e.g., "her bag").',
      },
    ],
  },
  // Adjectives & Adverbs
  {
    topicId: 'adjectives-adverbs',
    title: 'Adjectives & Adverbs Quiz',
    questions: [
      {
        question: 'In the sentence, "She sang a beautiful song," what is "beautiful"?',
        options: ['Adverb', 'Adjective', 'Noun'],
        correctAnswer: 1,
        explanation: '"Beautiful" is an adjective because it describes the noun "song".',
      },
      {
        question: 'Choose the correct word: "He runs very ___."',
        options: ['quick', 'quickly'],
        correctAnswer: 1,
        explanation: '"Quickly" is an adverb that modifies the verb "runs". "Quick" is an adjective.',
      },
      {
        question: 'Which word correctly completes the sentence: "You did a ___ job."?',
        options: ['good', 'well'],
        correctAnswer: 0,
        explanation: '"Good" is an adjective that modifies the noun "job". "Well" is an adverb.',
      }
    ],
  },
  {
    topicId: 'comparative-superlative',
    title: 'Comparatives & Superlatives Quiz',
    questions: [
      {
        question: 'Which is the correct comparative form of "happy"?',
        options: ['more happy', 'happier', 'happiest'],
        correctAnswer: 1,
        explanation: 'For two-syllable adjectives ending in -y, we change the y to i and add -er to form the comparative.',
      },
      {
        question: 'Complete the sentence: "This is the ___ movie I have ever seen."',
        options: ['more interesting', 'interestingest', 'most interesting'],
        correctAnswer: 2,
        explanation: 'For longer adjectives (like "interesting"), we use "most" to form the superlative.',
      },
      {
        question: 'What is the comparative form of "good"?',
        options: ['gooder', 'better', 'best'],
        correctAnswer: 1,
        explanation: '"Good" is an irregular adjective. Its comparative form is "better" and its superlative form is "best".',
      },
    ],
  },
  // Verbs
  {
    topicId: 'modal-verbs',
    title: 'Modal Verbs Quiz',
    questions: [
      {
        question: 'Which modal verb is used to express strong obligation?',
        options: ['may', 'might', 'must'],
        correctAnswer: 2,
        explanation: '"Must" is used to show that something is necessary or a strong obligation (e.g., "You must wear a seatbelt").',
      },
      {
        question: 'Choose the correct sentence to ask for permission.',
        options: ['Should I go to the party?', 'Can I go to the party?', 'Must I go to the party?'],
        correctAnswer: 1,
        explanation: '"Can" (or "May" in more formal situations) is used to ask for permission.',
      },
      {
        question: 'Which sentence is grammatically correct?',
        options: ['She can to swim well.', 'She can swims well.', 'She can swim well.'],
        correctAnswer: 2,
        explanation: 'Modal verbs are followed by the base form of the main verb, without "to".',
      }
    ],
  },
  {
    topicId: 'gerunds-infinitives',
    title: 'Gerunds & Infinitives Quiz',
    questions: [
      {
        question: 'Complete the sentence: "I enjoy ___ in the park."',
        options: ['to walk', 'walking', 'walk'],
        correctAnswer: 1,
        explanation: 'The verb "enjoy" is followed by a gerund (-ing form).',
      },
      {
        question: 'Choose the correct form: "She wants ___ a doctor."',
        options: ['to become', 'becoming', 'become'],
        correctAnswer: 0,
        explanation: 'The verb "want" is followed by an infinitive ("to" + verb).',
      },
      {
        question: 'Why did you go to the library? "I went there ___ a book."',
        options: ['for to borrow', 'borrowing', 'to borrow'],
        correctAnswer: 2,
        explanation: 'The infinitive of purpose ("to borrow") is used to explain why an action is done.',
      },
    ],
  },
  // Prepositions & Conjunctions
  {
    topicId: 'prepositions',
    title: 'Prepositions Quiz',
    questions: [
      {
        question: 'Fill in the blank: "My birthday is ___ July."',
        options: ['on', 'at', 'in'],
        correctAnswer: 2,
        explanation: 'We use the preposition "in" for months, years, and seasons.',
      },
      {
        question: 'Which preposition should be used here: "The keys are ___ the table."?',
        options: ['in', 'on', 'at'],
        correctAnswer: 1,
        explanation: 'We use "on" to indicate that something is on a surface.',
      },
      {
        question: 'Complete the sentence: "I will see you ___ 5 PM."',
        options: ['in', 'on', 'at'],
        correctAnswer: 2,
        explanation: 'We use "at" for specific times of the day.',
      },
    ],
  },
  {
    topicId: 'conjunctions',
    title: 'Conjunctions Quiz',
    questions: [
      {
        question: 'Which conjunction is used to show contrast?',
        options: ['and', 'so', 'but'],
        correctAnswer: 2,
        explanation: '"But" (and "yet") are used to connect two contrasting ideas.',
      },
      {
        question: 'Complete the sentence: "___ he was tired, he finished the project."',
        options: ['Because', 'Although', 'So'],
        correctAnswer: 1,
        explanation: '"Although" is a subordinating conjunction used to introduce a contrasting idea.',
      },
      {
        question: 'Which conjunction shows a result or consequence?',
        options: ['or', 'so', 'nor'],
        correctAnswer: 1,
        explanation: '"So" is used to show that the second clause is a result of the first.',
      },
    ],
  },
  // Sentence Structure
  {
    topicId: 'passive-voice',
    title: 'Passive Voice Quiz',
    questions: [
      {
        question: 'Which sentence is in the passive voice?',
        options: ['The chef cooked a delicious meal.', 'A delicious meal was cooked by the chef.', 'The chef is cooking a delicious meal.'],
        correctAnswer: 1,
        explanation: 'The passive voice is formed with "to be" + past participle. The subject ("A delicious meal") receives the action.',
      },
      {
        question: 'When is it best to use the passive voice?',
        options: ['When you want the sentence to be more direct.', 'When the person doing the action is unknown or unimportant.', 'Always, because it sounds more academic.'],
        correctAnswer: 1,
        explanation: 'The passive voice is useful when the agent is unknown (e.g., "My car was stolen") or less important than the action itself.',
      },
    ],
  },
  {
    topicId: 'subject-verb-agreement',
    title: 'Subject-Verb Agreement Quiz',
    questions: [
      {
        question: 'Choose the correct verb: "The dog ___ every morning."',
        options: ['bark', 'barks'],
        correctAnswer: 1,
        explanation: 'A singular subject ("The dog") takes a singular verb ("barks").',
      },
      {
        question: 'Complete the sentence: "Either the students or the teacher ___ the answer."',
        options: ['know', 'knows'],
        correctAnswer: 1,
        explanation: 'When subjects are joined by "or", the verb agrees with the subject closest to it ("the teacher" is singular, so "knows").',
      },
      {
        question: 'Which verb is correct? "Everyone on the team ___ excited for the game."',
        options: ['is', 'are'],
        correctAnswer: 0,
        explanation: 'Indefinite pronouns like "everyone" are singular and take a singular verb.',
      },
    ],
  },
  {
    topicId: 'question-formation',
    title: 'Question Formation Quiz',
    questions: [
      {
        question: 'Which is the correct question form for "She lives in London"?',
        options: ['Lives she in London?', 'Where she lives?', 'Does she live in London?'],
        correctAnswer: 2,
        explanation: 'For Present Simple questions (with no auxiliary verb), we add "Do" or "Does" at the beginning.',
      },
      {
        question: 'Choose the correct tag question: "It\'s a lovely day, ___?"',
        options: ['is it', 'is not it', 'isn\'t it'],
        correctAnswer: 2,
        explanation: 'A positive statement is followed by a negative tag question.',
      },
      {
        question: 'What is the correct structure for "Why ___ he leave early?"',
        options: ['did', 'does', 'is'],
        correctAnswer: 0,
        explanation: 'To form a question about a past action, we use the auxiliary "did" followed by the subject and the base form of the verb.',
      },
    ],
  },
  {
    topicId: 'reported-speech',
    title: 'Reported Speech Quiz',
    questions: [
      {
        question: 'Direct speech: "I am happy." What is the correct reported speech?',
        options: ['He said he is happy.', 'He said he was happy.', 'He said he has been happy.'],
        correctAnswer: 1,
        explanation: 'When reporting, the tense usually shifts one step back. Present Simple ("am") becomes Past Simple ("was").',
      },
      {
        question: 'Direct speech: "I will go tomorrow." What is the correct reported speech?',
        options: ['She said she will go the next day.', 'She said she would go tomorrow.', 'She said she would go the next day.'],
        correctAnswer: 2,
        explanation: 'In reported speech, "will" changes to "would" and time expressions like "tomorrow" change to "the next day".',
      },
    ],
  },
  // Clauses
  {
    topicId: 'conditionals',
    title: 'Conditionals Quiz',
    questions: [
      {
        question: 'Which conditional is used for hypothetical or unlikely situations in the present or future?',
        options: ['Zero Conditional', 'First Conditional', 'Second Conditional', 'Third Conditional'],
        correctAnswer: 2,
        explanation: 'The Second Conditional (If + past simple, ... would + base verb) is used for hypothetical situations, like "If I won the lottery...".',
      },
      {
        question: 'Which sentence correctly uses the First Conditional for a likely future situation?',
        options: ['If I see him, I would tell him.', 'If I saw him, I will tell him.', 'If I see him, I will tell him.'],
        correctAnswer: 2,
        explanation: 'The First Conditional (If + present simple, ... will + base verb) is used for possible or likely situations in the future.',
      },
      {
        question: 'Complete the sentence: "If you had studied harder, you ___ the exam."',
        options: ['would pass', 'will pass', 'would have passed'],
        correctAnswer: 2,
        explanation: 'This is a Third Conditional sentence, used for unreal past situations. The structure is If + past perfect, ... would have + past participle.',
      },
       {
        question: 'Which sentence is an example of the Zero Conditional?',
        options: ['If it rains, I will take an umbrella.', 'If you heat ice, it melts.', 'If I were you, I would go.'],
        correctAnswer: 1,
        explanation: 'The Zero Conditional (If + present simple, ... present simple) is used for general truths and scientific facts.',
      },
    ],
  },
  {
    topicId: 'relative-clauses',
    title: 'Relative Clauses Quiz',
    questions: [
      {
        question: 'Choose the correct relative pronoun: "The man ___ lives next door is a doctor."',
        options: ['which', 'who', 'whose'],
        correctAnswer: 1,
        explanation: '"Who" is the relative pronoun used for people (as the subject of the clause).',
      },
      {
        question: 'Which pronoun is used to show possession? "She is the artist ___ paintings are famous."',
        options: ['who', 'which', 'whose'],
        correctAnswer: 2,
        explanation: '"Whose" is the possessive relative pronoun used for people and things.',
      },
      {
        question: 'Which sentence correctly uses a non-defining relative clause?',
        options: ['The car that is red is mine.', 'My car, which is red, is parked outside.', 'My car which is red is parked outside.'],
        correctAnswer: 1,
        explanation: 'A non-defining clause gives extra information and is separated by commas.',
      },
    ],
  },
  // Punctuation
  {
    topicId: 'commas',
    title: 'Commas Quiz',
    questions: [
      {
        question: 'Where is the comma needed? "Although it was raining we went for a walk."',
        options: ['After "Although"', 'After "raining"', 'No comma needed'],
        correctAnswer: 1,
        explanation: 'A comma is used to separate an introductory clause ("Although it was raining") from the main clause.',
      },
      {
        question: 'Which sentence is punctuated correctly?',
        options: ['I want to go but I am tired.', 'I want to go, but I am tired.', 'I want to go but, I am tired.'],
        correctAnswer: 1,
        explanation: 'A comma should be used before a coordinating conjunction (like "but") that joins two independent clauses.',
      },
    ],
  },
  {
    topicId: 'apostrophes',
    title: 'Apostrophes Quiz',
    questions: [
      {
        question: 'Which sentence shows correct possession for a singular noun?',
        options: ["The dogs bone is lost.", "The dog's bone is lost.", "The dogs' bone is lost."],
        correctAnswer: 1,
        explanation: 'To show possession for a singular noun ("dog"), we add an apostrophe + s (\'s).',
      },
      {
        question: 'Choose the correct word: "___ a lovely day today!"',
        options: ['Its', 'It\'s'],
        correctAnswer: 1,
        explanation: '"It\'s" is the contraction of "it is". "Its" is the possessive form.',
      },
      {
        question: 'Which is correct for a plural noun ending in "s"?',
        options: ["The students' books", "The student's books", "The studentses books"],
        correctAnswer: 0,
        explanation: 'For a plural noun that already ends in "s", we add only an apostrophe to show possession.',
      },
    ],
  },
  {
    topicId: 'semicolons-colons',
    title: 'Semicolons & Colons Quiz',
    questions: [
      {
        question: 'Which punctuation mark should be used to join two closely related independent clauses?',
        options: ['Comma', 'Colon', 'Semicolon'],
        correctAnswer: 2,
        explanation: 'A semicolon (;) can be used instead of a period to connect two complete sentences that are closely related in meaning.',
      },
      {
        question: 'When should you use a colon?',
        options: ['To separate items in any list.', 'After an incomplete sentence to introduce a list.', 'After a complete sentence to introduce a list or explanation.'],
        correctAnswer: 2,
        explanation: 'A colon (:) is used after a full independent clause to introduce a list, a quote, or an explanation.',
      },
    ],
  },
  {
    topicId: 'quotation-marks',
    title: 'Quotation Marks Quiz',
    questions: [
      {
        question: 'How do you punctuate a direct quote? "I am hungry ___ she said."',
        options: ['"I am hungry", she said.', '"I am hungry," she said.', '"I am hungry" she said.'],
        correctAnswer: 1,
        explanation: 'In American English, a comma is placed inside the closing quotation mark when the quote is followed by a dialogue tag like "she said".',
      },
      {
        question: 'Quotation marks are used for the titles of which of the following?',
        options: ['Novels', 'Songs', 'Movies'],
        correctAnswer: 1,
        explanation: 'Quotation marks are used for titles of shorter works like poems, articles, and songs. Titles of longer works like novels and movies are typically italicized.',
      },
    ],
  },
  {
    topicId: 'hyphens',
    title: 'Hyphens Quiz',
    questions: [
      {
        question: 'Which sentence uses a hyphen correctly?',
        options: ['She is a well known actress.', 'Her acting is well-known.', 'She is a well-known actress.'],
        correctAnswer: 2,
        explanation: 'A compound adjective ("well-known") should be hyphenated when it comes before the noun it modifies ("actress").',
      },
      {
        question: 'Which number is written correctly?',
        options: ['Thirty five', 'Thirty-five', 'Thirtyfive'],
        correctAnswer: 1,
        explanation: 'Compound numbers from twenty-one to ninety-nine should be hyphenated when written out.',
      },
      {
        question: 'Which of the following is an example of a closed or "unhyphenated" compound word?',
        options: ['mother-in-law', 'ice cream', 'website'],
        correctAnswer: 2,
        explanation: '"Website" is a closed compound word, formed by joining "web" and "site" into a single unhyphenated word.',
      },
    ],
  },
  {
    topicId: 'direct-and-indirect-speech',
    title: 'Direct & Indirect Speech Quiz',
    questions: [
      {
        question: 'Which sentence uses direct speech correctly?',
        options: ['She said that she was happy.', 'She said, "I am happy."', 'She said "I am happy".'],
        correctAnswer: 1,
        explanation: 'Direct speech uses quotation marks to enclose the exact words, and a comma is typically used to separate the quote from the dialogue tag.',
      },
      {
        question: 'Convert this direct speech to indirect speech: He said, "I am studying."',
        options: ['He said he is studying.', 'He said I was studying.', 'He said he was studying.'],
        correctAnswer: 2,
        explanation: 'In indirect speech, the tense shifts back (am -> was) and the pronoun changes to reflect the new perspective (I -> he).',
      },
      {
        question: 'Which of the following is NOT used in indirect (reported) speech?',
        options: ['Tense backshift', 'Quotation marks', 'Pronoun changes'],
        correctAnswer: 1,
        explanation: 'Quotation marks are used for direct speech to show exact words. They are removed in indirect speech.',
      }
    ]
  },
  {
    topicId: 'sentence-fragments',
    title: 'Sentence Fragments Quiz',
    questions: [
      {
        question: 'Which of the following is a sentence fragment?',
        options: ['The cat slept.', 'Because the dog was barking loudly.', 'He went to the park.'],
        correctAnswer: 1,
        explanation: '"Because the dog was barking loudly." is a dependent clause. It has a subject and verb but cannot stand on its own as a complete thought.',
      },
      {
        question: 'How can you fix the fragment: "Running through the field."?',
        options: ['Add a subject and a helping verb (e.g., "He was running...").', 'Add a period at the end.', 'Change "Running" to "Ran".'],
        correctAnswer: 0,
        explanation: 'An "-ing" verb needs a helping verb (like "was", "is", "are") and a subject to form a complete sentence.',
      },
      {
        question: 'A complete sentence must have a subject, a verb, and what else?',
        options: ['An adjective', 'A prepositional phrase', 'Express a complete thought'],
        correctAnswer: 2,
        explanation: 'The three essential components of a complete sentence are a subject, a verb, and the ability to express a complete thought.',
      }
    ]
  },
  {
    topicId: 'simple-and-complex-sentences',
    title: 'Simple & Complex Sentences Quiz',
    questions: [
      {
        question: 'Which of the following is a simple sentence?',
        options: ['When the bell rings, the students leave.', 'The students leave.', 'The students, who were tired, left quickly.'],
        correctAnswer: 1,
        explanation: 'A simple sentence contains only one independent clause. "The students leave." has one subject and one verb and expresses a complete thought.',
      },
      {
        question: 'What makes a sentence "complex"?',
        options: ['It has many difficult words.', 'It has two independent clauses.', 'It has one independent clause and at least one dependent clause.'],
        correctAnswer: 2,
        explanation: 'A complex sentence is defined by its structure: one independent clause combined with one or more dependent clauses.',
      },
      {
        question: 'Which sentence is punctuated correctly?',
        options: ['Because he was late he missed the bus.', 'Because he was late, he missed the bus.', 'He missed the bus, because he was late.'],
        correctAnswer: 1,
        explanation: 'When a dependent clause (starting with "Because") comes before the independent clause, it must be followed by a comma.',
      }
    ]
  },

  // Advanced Topics
  {
    topicId: 'subjunctive-mood',
    title: 'Subjunctive Mood Quiz',
    questions: [
      {
        question: 'Which sentence correctly uses the present subjunctive?',
        options: ['I suggest that he goes to the doctor.', 'I suggest that he go to the doctor.', 'I suggest that he will go to the doctor.', 'I suggest that he is going to the doctor.'],
        correctAnswer: 1,
        explanation: 'After verbs like "suggest," the present subjunctive uses the base form without -s: "he go" not "he goes."'
      },
      {
        question: 'Complete the sentence: "If I ___ you, I would accept the offer."',
        options: ['was', 'were', 'am', 'will be'],
        correctAnswer: 1,
        explanation: 'In hypothetical conditionals, the past subjunctive always uses "were" for all persons, not "was."'
      },
      {
        question: 'Which expression correctly uses the subjunctive mood?',
        options: ['Long live the King!', 'Long lives the King!', 'The King lives long!', 'May the King lives long!'],
        correctAnswer: 0,
        explanation: '"Long live the King!" is a fixed expression using the subjunctive (base form "live" not "lives").'
      },
      {
        question: 'Choose the correct form: "It is essential that she ___ on time."',
        options: ['is', 'be', 'will be', 'was'],
        correctAnswer: 1,
        explanation: 'After expressions of necessity like "essential," use the subjunctive base form "be."'
      },
      {
        question: 'Which sentence uses the subjunctive correctly in a wish?',
        options: ['I wish it was Friday.', 'I wish it were Friday.', 'I wish it is Friday.', 'I wish it will be Friday.'],
        correctAnswer: 1,
        explanation: 'For present impossible wishes, use the past subjunctive "were" (not "was").'
      }
    ]
  },
  {
    topicId: 'cleft-sentences',
    title: 'Cleft Sentences Quiz',
    questions: [
      {
        question: 'Which is the correct it-cleft for: "John broke the window"?',
        options: ['It was John who broke the window.', 'It is John broke the window.', 'It was John breaks the window.', 'John it was who broke the window.'],
        correctAnswer: 0,
        explanation: 'It-clefts follow the pattern: It + be + focused element + who/that + clause.'
      },
      {
        question: 'Transform into a wh-cleft: "I need a vacation." Which is correct?',
        options: ['A vacation is what I need.', 'What I need is a vacation.', 'Both A and B are correct.', 'Neither is correct.'],
        correctAnswer: 2,
        explanation: 'Both forms are correct wh-clefts. "What I need is..." is more common, but "A vacation is what..." (reverse wh-cleft) is also valid.'
      },
      {
        question: 'Which cleft emphasizes "the music" in "I love the music"?',
        options: ['It is the music that I love.', 'What I love is the music.', 'The music is what I love.', 'All of the above'],
        correctAnswer: 3,
        explanation: 'All three forms correctly create cleft sentences emphasizing "the music."'
      },
      {
        question: 'Choose the grammatically correct all-cleft:',
        options: ['All I want is sleep.', 'All I want is to sleep.', 'All I want is sleeping.', 'Both A and B'],
        correctAnswer: 3,
        explanation: 'All-clefts can use either a noun ("sleep") or infinitive ("to sleep"): both are correct.'
      },
      {
        question: 'What does a cleft sentence do?',
        options: ['Makes a sentence negative', 'Emphasizes a particular part', 'Creates a question', 'Expresses a condition'],
        correctAnswer: 1,
        explanation: 'Cleft sentences restructure information to emphasize or focus on a particular element.'
      }
    ]
  },
  {
    topicId: 'inversion',
    title: 'Inversion Quiz',
    questions: [
      {
        question: 'Which sentence correctly uses inversion after a negative adverbial?',
        options: ['Never I have seen such a view.', 'Never have I seen such a view.', 'Never I saw such a view.', 'I never have seen such a view.'],
        correctAnswer: 1,
        explanation: 'After negative adverbials like "never," invert the auxiliary verb and subject: "Never have I..."'
      },
      {
        question: 'Complete: "Only after finishing the test ___ realize the mistake."',
        options: ['I did', 'did I', 'I', 'have I'],
        correctAnswer: 1,
        explanation: 'After "only + adverbial," use inversion: "did I realize" (auxiliary + subject).'
      },
      {
        question: 'Which conditional uses correct inversion without "if"?',
        options: ['Should you need help, call me.', 'You should need help, call me.', 'Should need you help, call me.', 'Need you should help, call me.'],
        correctAnswer: 0,
        explanation: 'In formal conditionals, invert "should" with the subject to replace "if": "Should you need..."'
      },
      {
        question: 'Transform using inversion: "I had rarely seen him so angry." Which is correct?',
        options: ['Rarely I had seen him so angry.', 'Rarely had I seen him so angry.', 'Rarely seen I had him so angry.', 'I rarely had seen him so angry.'],
        correctAnswer: 1,
        explanation: 'With "rarely" at the start, invert auxiliary and subject: "Rarely had I seen..."'
      },
      {
        question: 'Choose the sentence with correct inversion after "so":',
        options: ['I was tired, and so she was.', 'I was tired, and so was she.', 'I was tired, and she so was.', 'I was tired, and she was so.'],
        correctAnswer: 1,
        explanation: 'After "so" (meaning "also"), invert: "so + auxiliary + subject": "so was she."'
      },
      {
        question: 'Which sentence correctly uses inversion for emphasis?',
        options: ['On the hill stands a castle.', 'On the hill a castle stands.', 'Stands on the hill a castle.', 'A castle on the hill stands.'],
        correctAnswer: 0,
        explanation: 'Place adverbials can be fronted with inversion for emphasis: "On the hill stands a castle."'
      }
    ]
  },
  {
    topicId: 'ellipsis',
    title: 'Ellipsis Quiz',
    questions: [
      {
        question: 'Which sentence correctly uses ellipsis? "Do you like coffee?" Response:',
        options: ['Yes, I do like coffee.', 'Yes, I do.', 'Yes, I like.', 'Yes, like.'],
        correctAnswer: 1,
        explanation: 'In short answers, we can omit the main verb but keep the auxiliary: "Yes, I do."'
      },
      {
        question: 'Identify the type of ellipsis: "She can play piano and [can play] guitar too."',
        options: ['Nominal ellipsis', 'Verbal ellipsis', 'Clausal ellipsis', 'No ellipsis'],
        correctAnswer: 1,
        explanation: 'This is verbal ellipsis—the verb phrase "can play" is omitted in the second part.'
      },
      {
        question: 'Complete with ellipsis: "I have more books than you ___."',
        options: ['have books', 'have', 'do', 'have got books'],
        correctAnswer: 1,
        explanation: 'The auxiliary "have" is sufficient; we omit the repeated "books": "than you have."'
      },
      {
        question: 'Which uses nominal ellipsis correctly?',
        options: ['I need a red pen. Do you have?', 'I need a red pen. Do you have one?', 'I need a red pen. Do you have pen?', 'I need a red pen. You have?'],
        correctAnswer: 1,
        explanation: 'Use "one" as a pro-form to replace the omitted noun: "Do you have one?"'
      },
      {
        question: 'In "Would you like to come?" → "I\'d love to," what is omitted?',
        options: ['Nothing', 'come', 'like', 'would you'],
        correctAnswer: 1,
        explanation: 'The main verb "come" is omitted after "to" in this infinitive ellipsis: "I\'d love to [come]."'
      }
    ]
  },

  // Common Confusions
  {
    topicId: 'used-to-vs-would',
    title: 'Used To vs Would Quiz',
    questions: [
      {
        question: 'Which sentence is correct for describing a past state?',
        options: ['I would have long hair.', 'I used to have long hair.', 'I would to have long hair.', 'Both A and B'],
        correctAnswer: 1,
        explanation: 'Only "used to" can describe past states. "Would" is for repeated actions, not states.'
      },
      {
        question: 'Choose the correct form: "Every summer, we ___ go camping."',
        options: ['used to', 'would', 'Both A and B are correct', 'Neither'],
        correctAnswer: 2,
        explanation: 'Both work for past repeated actions. "Used to go" and "would go" are both correct.'
      },
      {
        question: 'Which is grammatically incorrect?',
        options: ['She used to be shy.', 'She would be shy.', 'She used to live here.', 'She would visit often.'],
        correctAnswer: 1,
        explanation: '"Would be shy" is incorrect because "would" cannot describe states, only actions.'
      },
      {
        question: 'Complete: "I ___ believe in ghosts when I was young."',
        options: ['would', 'used to', 'would to', 'use to'],
        correctAnswer: 1,
        explanation: '"Believe" is a state verb, so only "used to" works here.'
      },
      {
        question: 'What\'s the negative form of "I used to smoke"?',
        options: ["I didn't used to smoke.", "I didn't use to smoke.", "I used not to smoke.", "Both B and C"],
        correctAnswer: 3,
        explanation: 'Both "didn\'t use to" and "used not to" are acceptable, though "didn\'t use to" is more common.'
      }
    ]
  },
  {
    topicId: 'wish-vs-hope',
    title: 'Wish vs Hope Quiz',
    questions: [
      {
        question: 'Which expresses something possible?',
        options: ['I wish it would stop raining.', 'I hope it will stop raining.', 'Both', 'Neither'],
        correctAnswer: 1,
        explanation: '"Hope" is for possible future events. "Wish" typically expresses impossible/unlikely situations.'
      },
      {
        question: 'Complete: "I ___ I were taller." (impossible to change)',
        options: ['hope', 'wish', 'Both', 'Neither'],
        correctAnswer: 1,
        explanation: 'Use "wish" for impossible/contrary-to-fact situations: "I wish I were taller."'
      },
      {
        question: 'Which sentence is grammatically correct?',
        options: ['I hope I was rich.', 'I wish I were rich.', 'I wish I will be rich.', 'I hope I were rich.'],
        correctAnswer: 1,
        explanation: '"Wish" + past subjunctive (were) expresses an unreal present situation.'
      },
      {
        question: 'Choose the correct form: "I ___ you get the job!" (possible outcome)',
        options: ['wish', 'hope', 'Both work', 'Neither'],
        correctAnswer: 1,
        explanation: 'For possible future events, use "hope": "I hope you get the job!"'
      },
      {
        question: 'What follows "wish" for past regrets?',
        options: ['Simple past', 'Past perfect', 'Present perfect', 'Future'],
        correctAnswer: 1,
        explanation: 'For past regrets, use "wish + past perfect": "I wish I had studied harder."'
      },
      {
        question: 'Which is correct for a polite request?',
        options: ['I wish you would be quiet.', 'I hope you will be quiet.', 'Both are equally polite', 'Neither'],
        correctAnswer: 0,
        explanation: '"I wish you would..." can express polite (or frustrated) requests about someone\'s behavior.'
      }
    ]
  },
  {
    topicId: 'make-vs-do',
    title: 'Make vs Do Quiz',
    questions: [
      {
        question: 'Which is correct?',
        options: ['I need to make my homework.', 'I need to do my homework.', 'Both are correct', 'Neither is correct'],
        correctAnswer: 1,
        explanation: 'Use "do" with homework and most tasks: "do homework," "do work," "do exercise."'
      },
      {
        question: 'Complete: "Can you ___ me a favor?"',
        options: ['make', 'do', 'Both work', 'Neither'],
        correctAnswer: 1,
        explanation: 'The fixed expression is "do someone a favor."'
      },
      {
        question: 'Which is correct?',
        options: ['She made a delicious cake.', 'She did a delicious cake.', 'Both', 'Neither'],
        correctAnswer: 0,
        explanation: 'Use "make" for creating/producing things: "make a cake," "make dinner," "make coffee."'
      },
      {
        question: 'Choose: "I need to ___ the dishes."',
        options: ['make', 'do', 'Both', 'Neither'],
        correctAnswer: 1,
        explanation: 'Household chores use "do": "do the dishes," "do the laundry," "do the cleaning."'
      },
      {
        question: 'Which uses "make" correctly?',
        options: ['Make your bed', 'Make exercise', 'Make the homework', 'Make the dishes'],
        correctAnswer: 0,
        explanation: '"Make your bed" is correct. The others should use "do": do exercise, do homework, do the dishes.'
      },
      {
        question: 'Complete: "She ___ a lot of money in her job."',
        options: ['does', 'makes', 'Both', 'Neither'],
        correctAnswer: 1,
        explanation: 'Use "make" with money: "make money," "make a profit," "make a living."'
      }
    ]
  },
  {
    topicId: 'few-little-less-fewer',
    title: 'Few/Little/Less/Fewer Quiz',
    questions: [
      {
        question: 'Which is correct?',
        options: ['I have few time.', 'I have little time.', 'Both', 'Neither'],
        correctAnswer: 1,
        explanation: '"Time" is uncountable, so use "little": "I have little time."'
      },
      {
        question: 'Complete: "There are ___ students today than yesterday."',
        options: ['less', 'fewer', 'little', 'few'],
        correctAnswer: 1,
        explanation: '"Students" is countable, so use the comparative "fewer."'
      },
      {
        question: 'Which sentence is correct?',
        options: ['A few water, please.', 'A little water, please.', 'Few water, please.', 'Less waters, please.'],
        correctAnswer: 1,
        explanation: '"Water" is uncountable, so use "a little water."'
      },
      {
        question: 'Choose the correct form: "We need ___ information."',
        options: ['fewer', 'less', 'few', 'little'],
        correctAnswer: 1,
        explanation: '"Information" is uncountable, so use "less" (comparative of little).'
      },
      {
        question: 'What\'s the difference between "few friends" and "a few friends"?',
        options: ['No difference', '"Few" is more positive', '"A few" is more positive', 'They\'re both negative'],
        correctAnswer: 2,
        explanation: '"A few" is more positive (some friends), while "few" is negative (not many friends).'
      },
      {
        question: 'Which is technically correct in formal writing?',
        options: ['10 items or less', '10 items or fewer', 'Both are correct', 'Neither'],
        correctAnswer: 1,
        explanation: 'In formal writing, use "fewer" with countable items: "10 items or fewer."'
      }
    ]
  },
  {
    topicId: 'affect-vs-effect',
    title: 'Affect vs Effect Quiz',
    questions: [
      {
        question: 'Which is correct?',
        options: ['The weather affects my mood.', 'The weather effects my mood.', 'Both', 'Neither'],
        correctAnswer: 0,
        explanation: '"Affect" is the verb meaning "to influence": "The weather affects my mood."'
      },
      {
        question: 'Complete: "What is the ___ of this policy?"',
        options: ['affect', 'effect', 'Both', 'Neither'],
        correctAnswer: 1,
        explanation: '"Effect" is the noun meaning "result": "What is the effect of this policy?"'
      },
      {
        question: 'Which sentence uses "effect" as a verb (meaning "to bring about")?',
        options: ['The medicine will effect you.', 'The new law will effect change.', 'This will effect your grade.', 'All of the above'],
        correctAnswer: 1,
        explanation: '"Effect" as a verb means "to cause to happen": "effect change" = bring about change.'
      },
      {
        question: 'Choose: "How does stress ___ your health?"',
        options: ['affect', 'effect', 'Both', 'Neither'],
        correctAnswer: 0,
        explanation: 'Use the verb "affect" (to influence): "How does stress affect your health?"'
      },
      {
        question: 'Which is correct?',
        options: ['The side affects of the medicine', 'The side effects of the medicine', 'Both', 'Neither'],
        correctAnswer: 1,
        explanation: '"Side effects" (noun) is correct: the results/consequences of taking medicine.'
      },
      {
        question: 'Remember RAVEN: What does it stand for?',
        options: ['Remember Affect Verb, Effect Noun', 'Remember All Verbs End Nicely', 'Recall Affect Very Easily Now', 'None'],
        correctAnswer: 0,
        explanation: 'RAVEN: Remember Affect Verb, Effect Noun—a helpful memory trick.'
      }
    ]
  },
  {
    topicId: 'lay-vs-lie',
    title: 'Lay vs Lie Quiz',
    questions: [
      {
        question: 'Which is correct?',
        options: ["I'm going to lay down.", "I'm going to lie down.", 'Both', 'Neither'],
        correctAnswer: 1,
        explanation: '"Lie" (intransitive) means to recline: "I\'m going to lie down." No object needed.'
      },
      {
        question: 'Complete: "Please ___ the book on the table."',
        options: ['lay', 'lie', 'Both', 'Neither'],
        correctAnswer: 0,
        explanation: '"Lay" (transitive) means to place something: "lay the book on the table."'
      },
      {
        question: 'What is the past tense of "lie" (to recline)?',
        options: ['lied', 'lay', 'laid', 'lain'],
        correctAnswer: 1,
        explanation: 'The past tense of "lie" (recline) is "lay": "Yesterday I lay on the beach."'
      },
      {
        question: 'Which sentence is correct?',
        options: ['The dog laid on the rug.', 'The dog lay on the rug.', 'The dog lied on the rug.', 'The dog lain on the rug.'],
        correctAnswer: 1,
        explanation: 'Past tense of "lie" (recline): "The dog lay on the rug." No object.'
      },
      {
        question: 'What\'s the past participle of "lay" (to place)?',
        options: ['lay', 'lain', 'laid', 'lied'],
        correctAnswer: 2,
        explanation: '"Laid" is both past tense and past participle of "lay": "I have laid the papers out."'
      },
      {
        question: 'Which verb is transitive (needs an object)?',
        options: ['Lie (recline)', 'Lie (untruth)', 'Lay (place)', 'Both B and C'],
        correctAnswer: 3,
        explanation: 'Both "lie" (untruth) and "lay" (place) are transitive and need objects.'
      }
    ]
  },
  {
    topicId: 'its-vs-its',
    title: "It's vs Its Quiz",
    questions: [
      {
        question: 'Which is correct?',
        options: ["Its raining outside.", "It's raining outside.", 'Both', 'Neither'],
        correctAnswer: 1,
        explanation: '"It\'s" with apostrophe = "it is": "It\'s raining" = "It is raining."'
      },
      {
        question: 'Complete: "The dog wagged ___ tail."',
        options: ["it's", 'its', 'Both', 'Neither'],
        correctAnswer: 1,
        explanation: '"Its" without apostrophe is possessive: "its tail" (the tail belonging to it).'
      },
      {
        question: 'Which sentence is correct?',
        options: ['I think its broken.', "I think it's broken.", 'Both', 'Neither'],
        correctAnswer: 1,
        explanation: '"It\'s" = "it is": "I think it\'s broken" = "I think it is broken."'
      },
      {
        question: 'Choose the correct form: "The company announced ___ new policy."',
        options: ["it's", 'its', 'Both', 'Neither'],
        correctAnswer: 1,
        explanation: 'Possessive form (no apostrophe): "its new policy" (the policy of the company).'
      },
      {
        question: 'Which possessive pronoun uses an apostrophe?',
        options: ['his', 'hers', 'its', 'None of them'],
        correctAnswer: 3,
        explanation: 'NO possessive pronouns use apostrophes: his, hers, yours, theirs, its.'
      },
      {
        question: 'What does "it\'s" stand for?',
        options: ['It is or it has', 'Possessive of it', 'Plural of it', 'Past tense of it'],
        correctAnswer: 0,
        explanation: '"It\'s" is always a contraction of "it is" or "it has," never possessive.'
      }
    ]
  }
];

// Export merged quizzes with additional questions
export const QUIZZES = mergeQuizQuestions();
