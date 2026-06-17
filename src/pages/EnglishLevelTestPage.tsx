import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import GoogleAd from '../components/GoogleAd';

type Phase = 'intro' | 'test' | 'results';
type AnswerKey = 'A' | 'B' | 'C' | 'D';
type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

interface Question {
  id: number;
  level: CEFRLevel;
  sentence: string;
  options: { A: string; B: string; C: string; D: string };
  correct: AnswerKey;
  explanation: string;
}

const QUESTIONS: Question[] = [
  // A1
  { id: 1, level: 'A1', sentence: 'She ___ a teacher.', options: { A: 'am', B: 'is', C: 'are', D: 'be' }, correct: 'B', explanation: 'Third person singular "she" uses "is".' },
  { id: 2, level: 'A1', sentence: '___ you from Italy?', options: { A: 'Am', B: 'Is', C: 'Are', D: 'Do' }, correct: 'C', explanation: '"Are" is used with "you" in questions.' },
  { id: 3, level: 'A1', sentence: 'I ___ coffee every morning.', options: { A: 'drinks', B: 'drinking', C: 'drank', D: 'drink' }, correct: 'D', explanation: 'First person present simple uses the base form: "drink".' },
  { id: 4, level: 'A1', sentence: 'There ___ two cats in the garden.', options: { A: 'is', B: 'am', C: 'be', D: 'are' }, correct: 'D', explanation: '"There are" is used with plural nouns.' },
  { id: 5, level: 'A1', sentence: 'What ___ your name?', options: { A: 'are', B: 'am', C: 'is', D: 'be' }, correct: 'C', explanation: '"What is your name?" uses "is" because "name" is singular.' },
  { id: 6, level: 'A1', sentence: 'She ___ not like vegetables.', options: { A: 'does', B: 'do', C: 'is', D: 'are' }, correct: 'A', explanation: 'Third person singular negation uses "does not".' },
  // A2
  { id: 7, level: 'A2', sentence: 'We ___ to Paris last summer.', options: { A: 'go', B: 'gone', C: 'going', D: 'went' }, correct: 'D', explanation: 'Past simple uses "went", the irregular past form of "go".' },
  { id: 8, level: 'A2', sentence: 'He ___ already eaten lunch.', options: { A: 'is', B: 'do', C: 'has', D: 'have' }, correct: 'C', explanation: 'Present perfect uses "has" for third person singular subjects.' },
  { id: 9, level: 'A2', sentence: '___ you like some help?', options: { A: 'Do', B: 'Should', C: 'Would', D: 'Will' }, correct: 'C', explanation: '"Would you like" is the standard polite offer form.' },
  { id: 10, level: 'A2', sentence: 'The meeting is ___ Monday morning.', options: { A: 'in', B: 'at', C: 'by', D: 'on' }, correct: 'D', explanation: '"On" is used with specific days: "on Monday".' },
  { id: 11, level: 'A2', sentence: 'She is ___ than her brother.', options: { A: 'tall', B: 'more tall', C: 'tallest', D: 'taller' }, correct: 'D', explanation: 'Short one-syllable adjectives form comparatives with "-er".' },
  { id: 12, level: 'A2', sentence: 'I ___ in this city for five years.', options: { A: 'live', B: 'am living', C: 'have lived', D: 'lived' }, correct: 'C', explanation: 'Present perfect with "for" expresses duration up to the present moment.' },
  { id: 13, level: 'A2', sentence: 'He ___ to bed early when he was a child.', options: { A: 'goes', B: 'has gone', C: 'used to go', D: 'is going' }, correct: 'C', explanation: '"Used to" expresses a repeated past habit that no longer occurs.' },
  // B1
  { id: 14, level: 'B1', sentence: 'If it ___ tomorrow, we will cancel the trip.', options: { A: 'rained', B: 'will rain', C: 'rains', D: 'rain' }, correct: 'C', explanation: 'First conditional uses present simple in the if-clause, not future simple.' },
  { id: 15, level: 'B1', sentence: 'The letter ___ by the secretary yesterday.', options: { A: 'wrote', B: 'is written', C: 'has written', D: 'was written' }, correct: 'D', explanation: 'Past simple passive: "was" + past participle ("was written").' },
  { id: 16, level: 'B1', sentence: 'I wish I ___ more time to study.', options: { A: 'have', B: 'will have', C: 'would have', D: 'had' }, correct: 'D', explanation: '"Wish" + past tense expresses an unreal present desire.' },
  { id: 17, level: 'B1', sentence: 'He suggested ___ to the cinema.', options: { A: 'to go', B: 'go', C: 'gone', D: 'going' }, correct: 'D', explanation: '"Suggest" is followed by a gerund ("-ing form"), not an infinitive.' },
  { id: 18, level: 'B1', sentence: 'The house, ___ was built in 1920, needs repair.', options: { A: 'that', B: 'who', C: 'which', D: 'whose' }, correct: 'C', explanation: '"Which" introduces non-restrictive relative clauses for things. After a comma, "that" cannot be used.' },
  { id: 19, level: 'B1', sentence: 'By 2030, scientists ___ a cure for the disease.', options: { A: 'discover', B: 'will discover', C: 'will have discovered', D: 'have discovered' }, correct: 'C', explanation: 'Future perfect ("will have + past participle") expresses completion before a future point in time.' },
  { id: 20, level: 'B1', sentence: 'She looked ___ she had seen a ghost.', options: { A: 'like', B: 'as if', C: 'as', D: 'though' }, correct: 'B', explanation: '"As if" introduces a hypothetical comparison clause.' },
  // B2
  { id: 21, level: 'B2', sentence: 'She denied ___ the documents.', options: { A: 'to take', B: 'take', C: 'taken', D: 'taking' }, correct: 'D', explanation: '"Deny" is always followed by a gerund ("-ing form"), not an infinitive.' },
  { id: 22, level: 'B2', sentence: '___ the heavy rain, the match continued.', options: { A: 'Although', B: 'Even though', C: 'However', D: 'Despite' }, correct: 'D', explanation: '"Despite" is a preposition followed directly by a noun phrase, not a clause.' },
  { id: 23, level: 'B2', sentence: 'Not only ___ he fail the exam, but he also lost his scholarship.', options: { A: 'has', B: 'did', C: 'does', D: 'was' }, correct: 'B', explanation: 'Negative inversion with "not only" requires the auxiliary "did" for simple past.' },
  { id: 24, level: 'B2', sentence: 'It is vital that every employee ___ the training program.', options: { A: 'completes', B: 'complete', C: 'will complete', D: 'is completing' }, correct: 'B', explanation: 'Mandative subjunctive after "vital that" uses the base form (no -s, no auxiliary).' },
  { id: 25, level: 'B2', sentence: 'She ___ for two hours when the power went out.', options: { A: 'was working', B: 'worked', C: 'have worked', D: 'had been working' }, correct: 'D', explanation: 'Past perfect continuous shows an action in progress before a past interruption.' },
  { id: 26, level: 'B2', sentence: 'The contract ___ by both parties before the deadline.', options: { A: 'must sign', B: 'must be signed', C: 'must have been signed', D: 'must have signed' }, correct: 'C', explanation: 'Modal perfect passive ("must have been signed") expresses obligation about a past completed action.' },
  { id: 27, level: 'B2', sentence: 'The results, ___ were unexpected, led to a complete review of the policy.', options: { A: 'that', B: 'who', C: 'what', D: 'which' }, correct: 'D', explanation: '"Which" introduces a non-restrictive relative clause. "That" cannot be used after a comma.' },
  // C1
  { id: 28, level: 'C1', sentence: 'Scarcely ___ sat down when the phone rang.', options: { A: 'I had', B: 'have I', C: 'I have', D: 'had I' }, correct: 'D', explanation: '"Scarcely...when" triggers subject-auxiliary inversion: "Scarcely had I sat down..."' },
  { id: 29, level: 'C1', sentence: 'The proposal is one ___ many experts have serious doubts.', options: { A: 'that', B: 'which', C: 'about which', D: 'in which' }, correct: 'C', explanation: '"Have doubts about something" requires "about", fronted with "which" in formal register.' },
  { id: 30, level: 'C1', sentence: '___ she may have said publicly, her actions told a different story.', options: { A: 'However', B: 'Whenever', C: 'Whoever', D: 'Whatever' }, correct: 'D', explanation: '"Whatever" introduces a concessive clause meaning "no matter what".' },
  { id: 31, level: 'C1', sentence: 'The management insisted that the report ___ rewritten before the meeting.', options: { A: 'was', B: 'would be', C: 'be', D: 'should have been' }, correct: 'C', explanation: 'Mandative subjunctive after "insist that" uses the base form: "be rewritten".' },
  { id: 32, level: 'C1', sentence: "___ it not been for the team's dedication, the project would have failed.", options: { A: 'Were', B: 'Should', C: 'If', D: 'Had' }, correct: 'D', explanation: 'Inverted third conditional omits "if" and fronts the auxiliary: "Had it not been for..."' },
  { id: 33, level: 'C1', sentence: 'The extent ___ technology has changed our lives cannot be overstated.', options: { A: 'which', B: 'in which', C: 'at which', D: 'to which' }, correct: 'D', explanation: '"The extent to which" is a fixed collocation meaning "the degree to which" or "how much".' },
  { id: 34, level: 'C1', sentence: '___ impressive his qualifications may be, experience matters more in this role.', options: { A: 'Whatever', B: 'However', C: 'Whenever', D: 'Whoever' }, correct: 'B', explanation: '"However + adjective" introduces a concessive clause meaning "no matter how".' },
  // C2
  { id: 35, level: 'C2', sentence: "The committee's decision, long ___, was finally announced yesterday.", options: { A: 'awaiting', B: 'having awaited', C: 'awaited', D: 'it was awaited' }, correct: 'C', explanation: 'Past participle as a reduced relative clause: "long awaited" = "which had long been awaited".' },
  { id: 36, level: 'C2', sentence: 'No sooner ___ the news than she burst into tears.', options: { A: 'she had heard', B: 'had she heard', C: 'she heard', D: 'she has heard' }, correct: 'B', explanation: '"No sooner...than" triggers subject-auxiliary inversion: "No sooner had she heard..."' },
  { id: 37, level: 'C2', sentence: 'The legislation, ___ aim was to reduce inequality, had the opposite effect.', options: { A: 'which', B: 'its', C: 'that', D: 'whose' }, correct: 'D', explanation: '"Whose" is the genitive relative pronoun used here to mean "the legislation\'s aim".' },
  { id: 38, level: 'C2', sentence: 'It is high time the government ___ action on climate change.', options: { A: 'takes', B: 'will take', C: 'has taken', D: 'took' }, correct: 'D', explanation: '"High time" + past tense expresses urgency: the action should already have happened.' },
  { id: 39, level: 'C2', sentence: 'The phenomenon ___ known as code-switching involves alternating between languages.', options: { A: 'broadly', B: 'is broadly', C: 'it broadly', D: 'broadly being' }, correct: 'A', explanation: '"Broadly known as" is a participial phrase modifying "phenomenon", equivalent to "that is broadly known as".' },
  { id: 40, level: 'C2', sentence: 'She spoke with such ___ that even her critics were moved.', options: { A: 'passionate', B: 'passionately', C: 'passion', D: 'passioning' }, correct: 'C', explanation: '"Such + noun + that" is a result clause structure. "Passion" (noun) is required here.' },
];

interface LevelInfo {
  label: string;
  tagline: string;
  description: string;
  canDo: string[];
  ielts: string;
  toefl: string;
  badgeBg: string;
  cardBg: string;
  cardBorder: string;
  cardText: string;
  resources: { label: string; to: string }[];
}

const LEVEL_INFO: Record<CEFRLevel, LevelInfo> = {
  A1: {
    label: 'Beginner',
    tagline: 'You are at the starting line.',
    description: 'You can understand and use familiar everyday expressions and very basic phrases. You can introduce yourself and interact in a simple way when the other person speaks slowly.',
    canDo: [
      'Understand and use simple everyday phrases',
      'Introduce yourself and others',
      'Ask and answer questions about personal details',
      'Interact in a basic way when someone speaks slowly and clearly',
    ],
    ielts: 'below 3.0',
    toefl: 'below 1.0 (new scale)',
    badgeBg: 'bg-slate-600',
    cardBg: 'bg-slate-50 dark:bg-slate-800',
    cardBorder: 'border-slate-300 dark:border-slate-600',
    cardText: 'text-slate-700 dark:text-slate-300',
    resources: [
      { label: 'Grammar Guide', to: '/grammar-guide/' },
      { label: 'Getting Started', to: '/getting-started/' },
      { label: 'Interactive Exercises', to: '/interactive-exercises/' },
    ],
  },
  A2: {
    label: 'Elementary',
    tagline: 'You are building your foundations.',
    description: 'You can understand sentences and frequently used expressions related to everyday situations. You can communicate in simple and routine tasks on familiar topics.',
    canDo: [
      'Understand frequently used expressions on familiar topics',
      'Describe your background and immediate environment in simple terms',
      'Communicate in simple and routine tasks',
      'Talk about past events and future plans in basic terms',
    ],
    ielts: '3.0 to 3.5',
    toefl: '1.0 to 2.0 (new scale)',
    badgeBg: 'bg-blue-600',
    cardBg: 'bg-blue-50 dark:bg-blue-950',
    cardBorder: 'border-blue-300 dark:border-blue-800',
    cardText: 'text-blue-800 dark:text-blue-200',
    resources: [
      { label: 'Grammar Guide', to: '/grammar-guide/' },
      { label: 'Verb Tenses Quiz', to: '/quizzes/verb-tenses-quiz/' },
      { label: 'Interactive Exercises', to: '/interactive-exercises/' },
    ],
  },
  B1: {
    label: 'Intermediate',
    tagline: 'You can handle most everyday situations.',
    description: 'You can understand the main points of clear standard input on familiar matters. You can deal with most situations likely to arise while travelling and produce simple connected text on familiar topics.',
    canDo: [
      'Understand the main points of standard speech on familiar topics',
      'Deal with most situations while travelling in an English-speaking country',
      'Write simple connected text on familiar or personal topics',
      'Describe experiences, events, dreams, and ambitions',
    ],
    ielts: '4.0 to 5.0',
    toefl: '2.0 to 3.0 (new scale)',
    badgeBg: 'bg-green-600',
    cardBg: 'bg-green-50 dark:bg-green-950',
    cardBorder: 'border-green-300 dark:border-green-800',
    cardText: 'text-green-800 dark:text-green-200',
    resources: [
      { label: 'Verb Tenses Quiz', to: '/quizzes/verb-tenses-quiz/' },
      { label: 'IELTS Writing Task 2', to: '/ielts/ielts-writing-task-2-essay-types/' },
      { label: 'Grammar Checker', to: '/grammar-checker/' },
    ],
  },
  B2: {
    label: 'Upper Intermediate',
    tagline: 'You can communicate with ease on most topics.',
    description: 'You can understand the main ideas of complex text on both concrete and abstract topics. You can interact with a degree of fluency and spontaneity that makes regular interaction with native speakers quite possible.',
    canDo: [
      'Understand complex text on concrete and abstract topics',
      'Interact with native speakers without strain for either party',
      'Produce clear, detailed text on a wide range of subjects',
      'Explain advantages and disadvantages of various options',
    ],
    ielts: '5.5 to 6.5',
    toefl: '3.0 to 4.5 (new scale)',
    badgeBg: 'bg-teal-600',
    cardBg: 'bg-teal-50 dark:bg-teal-950',
    cardBorder: 'border-teal-300 dark:border-teal-800',
    cardText: 'text-teal-800 dark:text-teal-200',
    resources: [
      { label: 'Band 9 IELTS Essays', to: '/ielts/50-band-9-ielts-writing-task-2-sample-essays/' },
      { label: 'Grammar Checker', to: '/grammar-checker/' },
      { label: 'Paraphrasing Tool', to: '/paraphrasing-tool/' },
    ],
  },
  C1: {
    label: 'Advanced',
    tagline: 'You handle complex language with confidence.',
    description: 'You can understand a wide range of demanding, longer texts and recognise implicit meaning. You can express yourself fluently and spontaneously without much searching for words.',
    canDo: [
      'Understand demanding, longer texts and recognise implicit meaning',
      'Express yourself fluently without much searching for words',
      'Use language flexibly for social, academic, and professional purposes',
      'Produce clear, well-structured, detailed text on complex subjects',
    ],
    ielts: '7.0 to 8.0',
    toefl: '4.5 to 6.0 (new scale)',
    badgeBg: 'bg-violet-600',
    cardBg: 'bg-violet-50 dark:bg-violet-950',
    cardBorder: 'border-violet-300 dark:border-violet-800',
    cardText: 'text-violet-800 dark:text-violet-200',
    resources: [
      { label: 'Band 9 IELTS Essays', to: '/ielts/50-band-9-ielts-writing-task-2-sample-essays/' },
      { label: 'IELTS Speaking Questions', to: '/ielts/1000-ielts-speaking-questions/' },
      { label: 'Paraphrasing Tool', to: '/paraphrasing-tool/' },
    ],
  },
  C2: {
    label: 'Proficiency',
    tagline: 'You have mastered the English language.',
    description: 'You can understand with ease virtually everything heard or read. You can summarise information from different spoken and written sources and express yourself spontaneously, very fluently and precisely.',
    canDo: [
      'Understand virtually everything heard or read with ease',
      'Summarise information from different spoken and written sources',
      'Reconstruct arguments and accounts in a coherent presentation',
      'Express yourself spontaneously, fluently, and precisely',
    ],
    ielts: '8.5 to 9.0',
    toefl: '5.5 to 6.0 (new scale)',
    badgeBg: 'bg-amber-500',
    cardBg: 'bg-amber-50 dark:bg-amber-950',
    cardBorder: 'border-amber-300 dark:border-amber-800',
    cardText: 'text-amber-800 dark:text-amber-200',
    resources: [
      { label: 'Educators Network', to: '/educators/' },
      { label: 'Daily English Reads', to: '/daily-english-reads/' },
      { label: 'Writing Assistant', to: '/writing-assistant/' },
    ],
  },
};

const CEFR_ORDER: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

function getLevel(score: number): CEFRLevel {
  if (score <= 8) return 'A1';
  if (score <= 15) return 'A2';
  if (score <= 22) return 'B1';
  if (score <= 29) return 'B2';
  if (score <= 36) return 'C1';
  return 'C2';
}

const FAQ_ITEMS = [
  {
    q: 'What does CEFR stand for?',
    a: 'CEFR stands for Common European Framework of Reference for Languages. It is an international standard for measuring language ability on a six-level scale: A1 (Beginner), A2 (Elementary), B1 (Intermediate), B2 (Upper Intermediate), C1 (Advanced), and C2 (Proficiency). It is used by universities, employers, and exam boards worldwide.',
  },
  {
    q: 'How accurate is this English level test?',
    a: 'This test uses 40 grammar-focused questions calibrated to CEFR descriptors. It provides a reliable indication of your grammatical proficiency level. For an official CEFR certification, you would need to take a recognized exam such as IELTS, TOEFL, or a Cambridge qualification.',
  },
  {
    q: 'How long does the English level test take?',
    a: 'The test has 40 multiple-choice questions. Most learners complete it in 10 to 15 minutes. There is no time limit, so you can work at your own pace.',
  },
  {
    q: 'Can I use this test for IELTS or TOEFL preparation?',
    a: 'Yes. CEFR levels align directly with IELTS and TOEFL score ranges. A2 corresponds to IELTS 3.0 to 3.5, B1 to IELTS 4.0 to 5.0, B2 to IELTS 5.5 to 6.5, C1 to IELTS 7.0 to 8.0, and C2 to IELTS 8.5 to 9.0. The test results page includes the relevant score range for your level.',
  },
  {
    q: 'Can I retake the English level test?',
    a: 'Yes, the test is completely free and can be retaken as many times as you like. There is no sign-up required. Simply click "Take the Test Again" on the results page to restart with the same 40 questions.',
  },
];

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://typogrammar.com/english-level-test/',
      url: 'https://typogrammar.com/english-level-test/',
      name: 'Free English Level Test - CEFR A1 to C2 Placement | TypoGrammar',
      description: 'Take our free 40-question English level test and find out your CEFR level (A1 to C2) instantly. No sign-up required. Includes score breakdown and exam equivalents for IELTS and TOEFL.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://typogrammar.com' },
          { '@type': 'ListItem', position: 2, name: 'English Level Test', item: 'https://typogrammar.com/english-level-test/' },
        ],
      },
    },
    {
      '@type': 'Quiz',
      name: 'Free English Level Test: 40 Questions (CEFR A1 to C2)',
      description: 'A free 40-question placement test to determine your English level on the CEFR scale from A1 (Beginner) to C2 (Proficiency). Covers grammar, verb tenses, sentence structure, and advanced constructions.',
      url: 'https://typogrammar.com/english-level-test/',
      numberOfQuestions: 40,
      educationalLevel: 'A1 to C2',
      timeRequired: 'PT15M',
      inLanguage: 'en',
      isAccessibleForFree: true,
      provider: { '@type': 'Organization', name: 'TypoGrammar', url: 'https://typogrammar.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

const ANSWER_KEYS: AnswerKey[] = ['A', 'B', 'C', 'D'];

const EnglishLevelTestPage: React.FC = () => {
  usePageMetadata({
    title: 'Free English Level Test - CEFR A1 to C2 Placement | TypoGrammar',
    description: 'Take our free 40-question English level test and find out your CEFR level instantly. Covers A1 Beginner to C2 Proficiency. No sign-up required. Includes IELTS and TOEFL equivalents.',
    canonical: 'https://typogrammar.com/english-level-test/',
    ogTitle: 'Free English Level Test - Find Your CEFR Level (A1 to C2)',
    ogDescription: 'Take this free 40-question English placement test and discover your CEFR level instantly. Covers Beginner (A1) to Proficiency (C2). No sign-up needed.',
    ogType: 'website',
    ogUrl: 'https://typogrammar.com/english-level-test/',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Free English Level Test - Find Your CEFR Level (A1 to C2)',
    twitterDescription: 'Take this free 40-question English placement test and discover your CEFR level instantly. No sign-up needed.',
  });

  const [phase, setPhase] = useState<Phase>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerKey | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState<Record<number, AnswerKey>>({});
  const [copied, setCopied] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const currentQ = QUESTIONS[currentIndex];
  const totalQ = QUESTIONS.length;
  const isLast = currentIndex === totalQ - 1;

  const score = Object.entries(answers).filter(([id, key]) => {
    const q = QUESTIONS.find(q => q.id === Number(id));
    return q && q.correct === key;
  }).length;

  const level = getLevel(score);
  const levelInfo = LEVEL_INFO[level];

  const breakdown = CEFR_ORDER.map(lvl => {
    const qs = QUESTIONS.filter(q => q.level === lvl);
    const correct = qs.filter(q => answers[q.id] === q.correct).length;
    return { level: lvl, correct, total: qs.length };
  });

  const handleSelectAnswer = (key: AnswerKey) => {
    if (showFeedback) return;
    setSelectedAnswer(key);
    setShowFeedback(true);
    setAnswers(prev => ({ ...prev, [currentQ.id]: key }));
  };

  const handleNext = () => {
    if (isLast) {
      setPhase('results');
    } else {
      setCurrentIndex(i => i + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  const handleRestart = () => {
    setPhase('intro');
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setAnswers({});
    setCopied(false);
  };

  const handleCopyResult = () => {
    const text = `I scored ${score}/40 on the free TypoGrammar English Level Test. My CEFR level is ${level} (${levelInfo.label}). Find out your level at https://typogrammar.com/english-level-test/`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const getButtonStyle = (key: AnswerKey): string => {
    const base = 'w-full text-left px-5 py-4 rounded-xl border-2 font-medium text-base transition-all duration-150 flex items-start gap-3';
    if (!showFeedback) {
      return `${base} border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 cursor-pointer`;
    }
    if (key === currentQ.correct) {
      return `${base} border-green-500 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200`;
    }
    if (key === selectedAnswer && key !== currentQ.correct) {
      return `${base} border-red-400 bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200`;
    }
    return `${base} border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 opacity-60`;
  };

  const renderSentence = (sentence: string) => {
    const parts = sentence.split('___');
    if (parts.length === 1) return <>{sentence}</>;
    return (
      <>
        {parts[0]}
        <span className="inline-block border-b-2 border-slate-400 dark:border-slate-500 min-w-14 mx-1 text-center text-slate-400 text-sm">?</span>
        {parts[1]}
      </>
    );
  };

  const progressPct = Math.round(((currentIndex) / totalQ) * 100);

  if (phase === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 text-white py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              Free - No Sign-up Required - 40 Questions
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Free English Level Test
            </h1>
            <p className="text-xl text-blue-100 mb-4 max-w-2xl mx-auto">
              Find out your English level instantly. 40 grammar questions calibrated to the CEFR scale from A1 (Beginner) to C2 (Proficiency).
            </p>
            <p className="text-base text-blue-100 mb-8 max-w-xl mx-auto">
              Takes about 10 to 15 minutes. Each question shows an explanation after you answer. Your CEFR level and score breakdown are revealed at the end.
            </p>
            <button
              onClick={() => setPhase('test')}
              className="bg-white text-blue-700 font-bold text-lg px-10 py-4 rounded-xl shadow-lg hover:bg-blue-50 transition-colors"
            >
              Start the Test
            </button>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 py-12">
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { num: '40', label: 'Questions', sub: 'A1 through C2' },
              { num: '10-15', label: 'Minutes', sub: 'at your own pace' },
              { num: '6', label: 'CEFR Levels', sub: 'A1, A2, B1, B2, C1, C2' },
            ].map(stat => (
              <div key={stat.label} className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.num}</div>
                <div className="font-semibold text-slate-800 dark:text-slate-200">{stat.label}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{stat.sub}</div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 mb-10">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-5">The 6 CEFR Levels</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {CEFR_ORDER.map(lvl => (
                <div key={lvl} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-700">
                  <span className={`${LEVEL_INFO[lvl].badgeBg} text-white font-bold text-sm px-3 py-1 rounded-full min-w-10 text-center`}>{lvl}</span>
                  <div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{LEVEL_INFO[lvl].label}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">IELTS {LEVEL_INFO[lvl].ielts}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">How the test works</h2>
            <ol className="space-y-2 text-slate-700 dark:text-slate-300 text-sm list-decimal list-inside">
              <li>Read each sentence carefully and choose the best answer from the four options.</li>
              <li>After you select an option, the correct answer and a short explanation appear immediately.</li>
              <li>Click "Next Question" to move forward. You cannot go back.</li>
              <li>After question 40, your CEFR level and a full score breakdown are shown.</li>
            </ol>
          </div>

          <div className="text-center">
            <button
              onClick={() => setPhase('test')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-10 py-4 rounded-xl shadow transition-colors"
            >
              Start the Test
            </button>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                <button
                  className="w-full text-left px-6 py-4 font-semibold text-slate-900 dark:text-slate-100 flex justify-between items-center"
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  aria-expanded={expandedFaq === i}
                >
                  <span>{item.q}</span>
                  <span className="text-slate-400 ml-4 flex-shrink-0">{expandedFaq === i ? '-' : '+'}</span>
                </button>
                {expandedFaq === i && (
                  <div className="px-6 pb-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-700 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  if (phase === 'test') {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Question {currentIndex + 1} of {totalQ}
            </span>
            <span className={`${LEVEL_INFO[currentQ.level].badgeBg} text-white text-xs font-bold px-3 py-1 rounded-full`}>
              {currentQ.level}
            </span>
          </div>

          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-8">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8 mb-6">
            <p className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-8 leading-relaxed">
              {renderSentence(currentQ.sentence)}
            </p>

            <div className="space-y-3">
              {ANSWER_KEYS.map(key => (
                <button
                  key={key}
                  className={getButtonStyle(key)}
                  onClick={() => handleSelectAnswer(key)}
                  disabled={showFeedback}
                >
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold border-2 ${
                    !showFeedback
                      ? 'border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400'
                      : key === currentQ.correct
                      ? 'border-green-500 text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900'
                      : key === selectedAnswer
                      ? 'border-red-400 text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900'
                      : 'border-slate-200 dark:border-slate-700 text-slate-400'
                  }`}>
                    {key}
                  </span>
                  <span>{currentQ.options[key]}</span>
                </button>
              ))}
            </div>

            {showFeedback && (
              <div className={`mt-6 p-4 rounded-xl border ${
                selectedAnswer === currentQ.correct
                  ? 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200'
                  : 'bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300'
              }`}>
                <p className="font-semibold mb-1 text-sm">
                  {selectedAnswer === currentQ.correct ? 'Correct!' : `Correct answer: ${currentQ.correct} - "${currentQ.options[currentQ.correct]}"`}
                </p>
                <p className="text-sm">{currentQ.explanation}</p>
              </div>
            )}
          </div>

          {showFeedback && (
            <div className="text-center">
              <button
                onClick={handleNext}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl transition-colors shadow"
              >
                {isLast ? 'See My Results' : 'Next Question'}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-10 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-3 uppercase tracking-wide font-semibold">Your English Level</p>
          <div className={`inline-flex items-center gap-3 ${levelInfo.badgeBg} text-white px-8 py-4 rounded-2xl shadow-lg mb-4`}>
            <span className="text-5xl font-black">{level}</span>
            <div className="text-left">
              <div className="text-xl font-bold">{levelInfo.label}</div>
              <div className="text-sm opacity-90">{levelInfo.tagline}</div>
            </div>
          </div>
          <div className="text-slate-600 dark:text-slate-400 text-lg mt-3">
            Score: <span className="font-bold text-slate-900 dark:text-slate-100">{score}</span> / {totalQ}
            <span className="text-sm ml-2">({Math.round((score / totalQ) * 100)}%)</span>
          </div>
        </div>

        <div className={`${levelInfo.cardBg} border ${levelInfo.cardBorder} rounded-2xl p-6 md:p-8 mb-6`}>
          <p className={`${levelInfo.cardText} text-base leading-relaxed mb-5`}>{levelInfo.description}</p>
          <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-3 text-sm uppercase tracking-wide">What you can do at {level}</h3>
          <ul className="space-y-2">
            {levelInfo.canDo.map((item, i) => (
              <li key={i} className={`flex items-start gap-2 text-sm ${levelInfo.cardText}`}>
                <span className="text-green-500 mt-0.5 flex-shrink-0">+</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 mb-6">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4">Exam Score Equivalents</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-4">
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">IELTS</div>
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">{levelInfo.ielts}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Band score range</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-4">
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">TOEFL iBT</div>
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">{levelInfo.toefl}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">2026 band scale</div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 mb-6">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4">Score Breakdown by Level</h3>
          <div className="space-y-3">
            {breakdown.map(({ level: lvl, correct, total }) => {
              const pct = Math.round((correct / total) * 100);
              const isYourLevel = lvl === level;
              return (
                <div key={lvl} className={`flex items-center gap-3 p-3 rounded-xl ${isYourLevel ? `${LEVEL_INFO[lvl].cardBg} border ${LEVEL_INFO[lvl].cardBorder}` : 'bg-slate-50 dark:bg-slate-700'}`}>
                  <span className={`${LEVEL_INFO[lvl].badgeBg} text-white text-xs font-bold px-2.5 py-1 rounded-full min-w-9 text-center flex-shrink-0`}>{lvl}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{LEVEL_INFO[lvl].label}</span>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{correct}/{total}</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-1.5">
                      <div
                        className={`${LEVEL_INFO[lvl].badgeBg} h-1.5 rounded-full transition-all`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                  {isYourLevel && <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex-shrink-0">Your level</span>}
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 mb-6">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4">Recommended Next Steps</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            {levelInfo.resources.map(r => (
              <Link
                key={r.to}
                to={r.to}
                className="block px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl text-center transition-colors"
              >
                {r.label}
              </Link>
            ))}
          </div>
        </div>

        <GoogleAd adSlot="6406598038" />

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 mb-8">
          <button
            onClick={handleCopyResult}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-semibold rounded-xl transition-colors"
          >
            {copied ? 'Copied!' : 'Copy My Result'}
          </button>
          <button
            onClick={handleRestart}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
          >
            Take the Test Again
          </button>
        </div>

        <div className="text-center mb-10">
          <Link to="/quizzes/verb-tenses-quiz/" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
            Also try: Free Verb Tenses Quiz (50 questions)
          </Link>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="border border-slate-100 dark:border-slate-700 rounded-xl overflow-hidden">
                <button
                  className="w-full text-left px-5 py-4 font-semibold text-slate-900 dark:text-slate-100 flex justify-between items-center text-sm"
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="text-slate-400 ml-4 flex-shrink-0">{expandedFaq === i ? '-' : '+'}</span>
                </button>
                {expandedFaq === i && (
                  <div className="px-5 pb-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-700 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnglishLevelTestPage;
