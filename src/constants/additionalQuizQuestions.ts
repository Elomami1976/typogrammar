import { Quiz } from '../types';

// Additional quiz questions to expand coverage - import and merge with main QUIZZES array
export const ADDITIONAL_QUIZ_QUESTIONS: Partial<Quiz>[] = [
  {
    topicId: 'present-simple',
    questions: [
      {
        question: 'Which adverb of frequency correctly completes: "She ___ visits her grandparents on Sundays."',
        options: ['always', 'yesterday', 'now', 'tomorrow'],
        correctAnswer: 0,
        explanation: 'Present Simple is often used with adverbs of frequency like "always" for habitual actions.'
      },
      {
        question: 'What is the correct question form in Present Simple?',
        options: ['Does she likes coffee?', 'Do she like coffee?', 'Does she like coffee?', 'Is she like coffee?'],
        correctAnswer: 2,
        explanation: 'Use "does" with third person singular, followed by base verb: "Does she like...?"'
      }
    ]
  },
  {
    topicId: 'present-progressive',
    questions: [
      {
        question: 'Which sentence shows a future arrangement?',
        options: ['I am meeting John tomorrow.', 'I meet John every day.', 'I met John yesterday.', 'I have met John.'],
        correctAnswer: 0,
        explanation: 'Present Progressive can express future arrangements: "I am meeting John tomorrow."'
      },
      {
        question: 'Choose the correct negative form: "They ___ TV right now."',
        options: ["aren't watching", "isn't watching", "don't watch", "doesn't watch"],
        correctAnswer: 0,
        explanation: 'For "they," use "aren\'t" + verb-ing in Present Progressive negative.'
      }
    ]
  },
  {
    topicId: 'past-simple',
    questions: [
      {
        question: 'What is the past simple of "go"?',
        options: ['goed', 'went', 'gone', 'going'],
        correctAnswer: 1,
        explanation: '"Went" is the irregular past simple form of "go."'
      },
      {
        question: 'Choose the correct time expression for Past Simple:',
        options: ['since 2020', 'for three years', 'last week', 'yet'],
        correctAnswer: 2,
        explanation: 'Past Simple uses specific past time expressions like "last week," "yesterday," "ago."'
      },
      {
        question: 'What is the correct question: "When ___ you arrive?"',
        options: ['do', 'did', 'does', 'have'],
        correctAnswer: 1,
        explanation: 'Use "did" for Past Simple questions: "When did you arrive?"'
      }
    ]
  },
  {
    topicId: 'present-perfect',
    questions: [
      {
        question: 'Which sentence is correct?',
        options: ['I have seen that movie yesterday.', 'I saw that movie yesterday.', 'I have saw that movie yesterday.', 'I seen that movie yesterday.'],
        correctAnswer: 1,
        explanation: 'Use Past Simple (not Present Perfect) with specific past time: "yesterday."'
      },
      {
        question: 'Complete: "She has ___ to Paris three times."',
        options: ['went', 'go', 'been', 'going'],
        correctAnswer: 2,
        explanation: 'Use "been" (past participle of "be/go") in Present Perfect for life experiences.'
      },
      {
        question: 'Which time expression works with Present Perfect?',
        options: ['last year', 'in 2020', 'already', 'ago'],
        correctAnswer: 2,
        explanation: 'Present Perfect uses expressions like "already," "yet," "ever," "never," "just."'
      },
      {
        question: 'Choose the correct form: "They ___ their homework."',
        options: ['have finished', 'has finished', 'finished already', 'have finish'],
        correctAnswer: 0,
        explanation: 'For plural subjects, use "have" + past participle: "have finished."'
      }
    ]
  },
  {
    topicId: 'passive-voice',
    questions: [
      {
        question: 'Transform to passive: "Shakespeare wrote Hamlet."',
        options: ['Hamlet is written by Shakespeare.', 'Hamlet was written by Shakespeare.', 'Hamlet has been written by Shakespeare.', 'Hamlet writes by Shakespeare.'],
        correctAnswer: 1,
        explanation: 'Past Simple passive: "was/were + past participle": "Hamlet was written..."'
      },
      {
        question: 'Which sentence is passive?',
        options: ['The chef cooks the meal.', 'The meal is cooked by the chef.', 'The chef is cooking.', 'They cook meals.'],
        correctAnswer: 1,
        explanation: 'Passive voice: subject receives the action: "The meal is cooked (by the chef)."'
      },
      {
        question: 'When can we omit "by" in passive voice?',
        options: ['Always', 'Never', 'When the agent is unknown or obvious', 'Only in present tense'],
        correctAnswer: 2,
        explanation: 'Omit "by + agent" when the doer is unknown, obvious, or unimportant.'
      }
    ]
  },
  {
    topicId: 'conditionals',
    questions: [
      {
        question: 'Which is a Zero Conditional?',
        options: ['If it rains, I will stay home.', 'If it rains, I stay home.', 'If it rained, I would stay home.', 'If it had rained, I would have stayed home.'],
        correctAnswer: 1,
        explanation: 'Zero Conditional (general truths): If + present simple, present simple.'
      },
      {
        question: 'Complete the First Conditional: "If she ___ hard, she will pass."',
        options: ['studies', 'studied', 'will study', 'would study'],
        correctAnswer: 0,
        explanation: 'First Conditional: If + present simple, will + infinitive.'
      },
      {
        question: 'Which expresses an unreal past situation?',
        options: ['First Conditional', 'Second Conditional', 'Third Conditional', 'Zero Conditional'],
        correctAnswer: 2,
        explanation: 'Third Conditional: If + past perfect, would have + past participle (unreal past).'
      },
      {
        question: 'Complete the Second Conditional: "If I ___ rich, I would travel."',
        options: ['am', 'was', 'were', 'will be'],
        correctAnswer: 2,
        explanation: 'Second Conditional uses "were" for all persons (subjunctive): "If I were rich..."'
      }
    ]
  },
  {
    topicId: 'articles',
    questions: [
      {
        question: 'Choose the correct article: "___ sun rises in the east."',
        options: ['A', 'An', 'The', 'No article'],
        correctAnswer: 2,
        explanation: 'Use "the" with unique objects: "the sun," "the moon," "the earth."'
      },
      {
        question: 'When do we use "a" instead of "an"?',
        options: ['Before vowels', 'Before consonant sounds', 'Before plural nouns', 'Never'],
        correctAnswer: 1,
        explanation: 'Use "a" before consonant sounds: "a cat," "a university" (starts with /j/ sound).'
      },
      {
        question: 'Which sentence is correct?',
        options: ['I play the tennis.', 'I play tennis.', 'I play a tennis.', 'I play an tennis.'],
        correctAnswer: 1,
        explanation: 'Sports and games take no article: "play tennis," "play football."'
      },
      {
        question: 'Complete: "___ love is important."',
        options: ['A', 'An', 'The', 'No article'],
        correctAnswer: 3,
        explanation: 'Abstract nouns in general statements take no article: "Love is important."'
      }
    ]
  },
  {
    topicId: 'modal-verbs',
    questions: [
      {
        question: 'Which modal expresses strong obligation?',
        options: ['should', 'might', 'must', 'could'],
        correctAnswer: 2,
        explanation: '"Must" expresses strong obligation or certainty: "You must wear a seatbelt."'
      },
      {
        question: 'Complete: "You ___ study harder if you want good grades." (advice)',
        options: ['must', 'should', 'might', 'will'],
        correctAnswer: 1,
        explanation: '"Should" gives advice or recommendations: "You should study harder."'
      },
      {
        question: 'Which modal expresses possibility?',
        options: ['must', 'might', 'will', 'shall'],
        correctAnswer: 1,
        explanation: '"Might" (and "may," "could") express possibility: "It might rain later."'
      },
      {
        question: 'What is the past form of "can"?',
        options: ['canned', 'could', 'can', 'coulds'],
        correctAnswer: 1,
        explanation: 'The past form of "can" is "could": "I could swim when I was young."'
      }
    ]
  },
  {
    topicId: 'gerunds-infinitives',
    questions: [
      {
        question: 'Which verb is followed by a gerund?',
        options: ['want', 'enjoy', 'decide', 'plan'],
        correctAnswer: 1,
        explanation: '"Enjoy" is followed by gerund: "I enjoy swimming" (not "to swim").'
      },
      {
        question: 'Complete: "I decided ___ a doctor."',
        options: ['becoming', 'to become', 'become', 'became'],
        correctAnswer: 1,
        explanation: '"Decide" is followed by infinitive: "decided to become."'
      },
      {
        question: 'Which is correct?',
        options: ['I stopped to smoke.', 'I stopped smoking.', 'Both mean the same', 'Neither is correct'],
        correctAnswer: 1,
        explanation: '"Stop + gerund" means quit doing something. "Stop + infinitive" means pause to do something.'
      },
      {
        question: 'After prepositions, use:',
        options: ['infinitive', 'gerund', 'base form', 'any form'],
        correctAnswer: 1,
        explanation: 'After prepositions, always use gerund: "interested in learning," "good at cooking."'
      }
    ]
  },
  {
    topicId: 'adjectives-adverbs',
    questions: [
      {
        question: 'Which is the adverb form of "quick"?',
        options: ['quickal', 'quickly', 'quicker', 'quickest'],
        correctAnswer: 1,
        explanation: 'Most adjectives form adverbs by adding -ly: "quick" → "quickly."'
      },
      {
        question: 'Choose the correct form: "She sings ___."',
        options: ['beautiful', 'beautifully', 'beauty', 'more beautiful'],
        correctAnswer: 1,
        explanation: 'Adverbs modify verbs: "sings beautifully" (how she sings).'
      },
      {
        question: 'What is the comparative of "good"?',
        options: ['gooder', 'more good', 'better', 'best'],
        correctAnswer: 2,
        explanation: '"Good" has irregular comparative: good → better → best.'
      },
      {
        question: 'Which adjective order is correct?',
        options: ['wooden big brown table', 'big brown wooden table', 'brown big wooden table', 'wooden brown big table'],
        correctAnswer: 1,
        explanation: 'Adjective order: opinion-size-age-color-origin-material-purpose: "big brown wooden."'
      }
    ]
  },
  {
    topicId: 'relative-clauses',
    questions: [
      {
        question: 'Choose the correct relative pronoun: "The man ___ lives next door is a doctor."',
        options: ['which', 'who', 'where', 'whose'],
        correctAnswer: 1,
        explanation: 'Use "who" for people: "The man who lives next door..."'
      },
      {
        question: 'Which sentence is a non-defining relative clause?',
        options: ['The car that I bought is red.', 'My car, which is red, is fast.', 'Both', 'Neither'],
        correctAnswer: 1,
        explanation: 'Non-defining clauses have commas and add extra information: "My car, which is red, is fast."'
      },
      {
        question: 'Can we omit the relative pronoun in: "The book ___ I read was great"?',
        options: ['Yes, because it\'s an object', 'No, never', 'Only in formal writing', 'Only with "who"'],
        correctAnswer: 0,
        explanation: 'We can omit object relative pronouns: "The book (that/which) I read..."'
      },
      {
        question: 'Use "whose" to indicate:',
        options: ['place', 'time', 'possession', 'reason'],
        correctAnswer: 2,
        explanation: '"Whose" shows possession: "The woman whose car was stolen..."'
      }
    ]
  }
];
