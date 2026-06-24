// ─── TypoGrammar Educators Network — Data Model ─────────────────────────────
//
// This is the single source of truth for:
//   • Educators / contributing authors
//   • Contributor-written articles
//
// Designed for E-E-A-T: every author profile must represent a real person.
// Do NOT populate this file with fictional or AI-generated identities.
// Add real contributors here as they are verified and onboarded.

import type { ComponentType } from 'react';

export type Expertise =
  | 'IELTS'
  | 'TOEFL'
  | 'Grammar'
  | 'Writing'
  | 'Linguistics'
  | 'ESL Teaching';

export const EXPERTISE_TAGS: Expertise[] = [
  'IELTS',
  'TOEFL',
  'Grammar',
  'Writing',
  'Linguistics',
  'ESL Teaching',
];

export interface ContributorAuthor {
  /** Full display name, e.g. "Priya Darshini Arasavelli". */
  fullName: string;
  /** URL slug, lowercase-hyphenated, e.g. "priya-darshini-arasavelli". */
  slug: string;
  /** Short professional title shown under the name. */
  title: string;
  /** Multi-paragraph biography. Use plain strings (paragraphs split by blank line). */
  bio: string;
  /** Public-facing 400×400 (or larger square) profile photo path. */
  photo: string;
  /** Full LinkedIn profile URL — used for `sameAs` schema + LinkedIn button. */
  linkedinUrl?: string;
  /** Optional personal website URL. */
  websiteUrl?: string;
  /** Optional country of residence/practice (helps E-E-A-T context). */
  country?: string;
  /** One or more expertise tags from the EXPERTISE_TAGS list. */
  expertise: Expertise[];
  /** ISO date string (YYYY-MM-DD) the contributor joined the network. */
  joinDate: string;
  /** Marks members of the founding contributor cohort (permanent badge). */
  foundingContributor: boolean;
}

export interface ContributorArticleReference {
  /** Plain-text citation (book/journal/article title, author, year, etc.). */
  citation: string;
  /** Optional URL — will open in a new tab with rel="noopener noreferrer". */
  url?: string;
}

export interface ContributorArticle {
  /** Article title. */
  title: string;
  /** URL slug, lowercase-hyphenated. */
  slug: string;
  /** Author slug (must match a `ContributorAuthor.slug`). */
  authorSlug: string;
  /** Featured image (1200×630 recommended for OG). */
  featuredImage: string;
  /** Short summary/excerpt (~160 chars) used for cards + meta description. */
  excerpt: string;
  /** React component that renders the full article body. */
  content: ComponentType;
  /** Estimated reading time in minutes. */
  readingTime: number;
  /** ISO date string (YYYY-MM-DD). */
  publishDate: string;
  /** Optional ISO date string for last update. */
  modifiedDate?: string;
  /** Optional references section. */
  references?: ContributorArticleReference[];
  /** SEO overrides (optional). */
  seo?: {
    title?: string;
    description?: string;
    ogImage?: string;
  };
}

// ─── Founding Contributors ──────────────────────────────────────────────────
// Populate as authors are verified. The /educators landing page renders an
// empty-state grid while this array is empty.
import WhyStudentsStruggleToSpeakEnglish from '../content/contributor-articles/why-some-students-understand-english-but-struggle-to-speak-it';
import HowToSoundMoreNaturalInEnglish from '../content/contributor-articles/how-to-sound-more-natural-in-english';
import TwentyFiveMostCommonGrammarMistakes from '../content/contributor-articles/25-most-common-grammar-mistakes-made-by-esl-learners';
import FromStudyingEnglishToLivingInIt from '../content/contributor-articles/from-studying-english-to-living-in-it';
import EnglishPronunciationChallengesForSpanishSpeakers from '../content/contributor-articles/english-pronunciation-challenges-for-spanish-native-speakers';
import TwentyFiveGrammarMistakesTeachersCorrect from '../content/contributor-articles/25-common-grammar-mistakes-esl-learners-make-and-how-teachers-can-correct';
import FromUnderstandingEnglishToSpeakingIt from '../content/contributor-articles/from-understanding-english-to-speaking-it-why-fluency-feels-so-difficult';
import HowToStopTranslatingAndStartCommunicating from '../content/contributor-articles/how-to-stop-translating-and-start-communicating';
import ThePsychologyOfLanguageLearning from '../content/contributor-articles/the-psychology-of-language-learning-why-students-forget-vocabulary-so-quickly';

export const EDUCATORS: ContributorAuthor[] = [
  {
    fullName: 'Ayesha Mahmuda',
    slug: 'ayesha-mahmuda',
    title: 'ESL Learner, Educator & Writer',
    bio: `Ayesha Mahmuda holds an M.A. in English Literature from International Islamic University Chittagong, Bangladesh, with a thesis focused on feminist literary criticism.

As an ESL learner herself, she writes from lived experience, exploring the gap between understanding a language and truly being able to speak or write it spontaneously. Her background spans teaching, content writing, and social media, with a growing interest in language learning psychology and ESL pedagogy.

She believes the most honest writing comes from the intersection of personal struggle and genuine curiosity.`,
    photo: '/images/educators%20network/Ayesha%20Mahmuda.png',
    linkedinUrl: 'https://www.linkedin.com/in/ayesha-mahmuda-7242bb374',
    country: 'Bangladesh',
    expertise: ['ESL Teaching', 'Writing', 'Linguistics'],
    joinDate: '2026-06-05',
    foundingContributor: true,
  },
  {
    fullName: 'Priya Darshini Arasavelli',
    slug: 'priya-darshini-arasavelli',
    title: 'IELTS Trainer and Creative Writer',
    bio: `Priya Darshini Arasavelli, an IELTS Trainer, once declared, "I hate you, grammar!" Today, she holds a degree in English Language and Literature, is an active scriptwriter and lyricist, and has polished her skills through PlanetSpark.

Leveraging her background as a Verbal Faculty member, Priya teaches all four IELTS modules and conducts internal examiner audits to ensure strict evaluation standards.

Her unique blend of technical expertise and creative writing makes English fluency deeply practical for her students.`,
    photo: '/images/educators%20network/Priya%20Darshini%20Arasavelli.png',
    linkedinUrl: 'https://www.linkedin.com/in/priya-darshini-arasavelli-26626aab',
    expertise: ['IELTS', 'Writing', 'ESL Teaching'],
    joinDate: '2026-06-05',
    foundingContributor: true,
  },
  {
    fullName: 'Petr Varfolomeev',
    slug: 'petr-varfolomeev',
    title: 'CELTA Certified ESL/EFL Teacher',
    bio: `Petr Varfolomeev is an English teacher with 5+ years of experience teaching adult learners of various levels and backgrounds.

He is interested in linguistics, especially etymology and language analysis, which he often incorporates into his lessons to deepen understanding and engagement.

Petr holds a CELTA certificate (Pass A) and a CAE certificate (Grade A, C2). His teaching techniques combine communicative and lexical approaches, with a focus on student-centred learning and adapting lessons to each student's goals and needs.`,
    photo: '/images/educators%20network/Petr%20Varfolomeev.png',
    linkedinUrl: 'https://www.linkedin.com/in/petr-varfolomeev/',
    expertise: ['ESL Teaching', 'Grammar', 'Linguistics'],
    joinDate: '2026-06-08',
    foundingContributor: true,
  },
  {
    fullName: 'Wessam El-Shatawy',
    slug: 'wessam-el-shatawy',
    title: 'English Instructor',
    bio: `Wessam El-Shatawy is an Egyptian English language instructor and academic practitioner with more than fifteen years of experience in teaching general English, oral communication, business English, and ESP.

He currently teaches at the School of Continuing Education, the American University in Cairo, where he teaches adult learners at varying proficiency levels. He has also contributed to teacher training and academic administration.

His interests include learner psychology, second language acquisition, and digital learning. He holds CELTA and AUC FELT qualifications.`,
    photo: '/images/educators%20network/Wessam%20El-Shatawy.png',
    linkedinUrl: 'https://www.linkedin.com/in/wessam-elshatawy/',
    country: 'Egypt',
    expertise: ['ESL Teaching', 'Linguistics', 'Writing'],
    joinDate: '2026-06-13',
    foundingContributor: true,
  },
  {
    fullName: 'Mariela Villalobos Segovia',
    slug: 'mariela-villalobos-segovia',
    title: 'Professional Translator (EN/ES)',
    bio: `Mariela Villalobos is a language tutor and translator specializing in Spanish and English language teaching, as well as cross-cultural communication. She offers personalized lessons designed to improve fluency, confidence, and practical language use in real-life situations.

With a background in professional translation studies, she also provides language support and translation services. She is passionate about accessible education and enjoys helping learners achieve their goals through flexible, student-centered approaches tailored to individual needs and learning styles.`,
    photo: '/images/educators%20network/Mariela%20Villalobos%20Segovia.png',
    linkedinUrl: 'https://www.linkedin.com/in/marielavillalobos',
    websiteUrl: 'https://linktr.ee/marie_villalobos',
    country: 'Chile',
    expertise: ['ESL Teaching', 'Linguistics'],
    joinDate: '2026-06-14',
    foundingContributor: true,
  },
  {
    fullName: 'Asma Batool',
    slug: 'asma-batool',
    title: 'English Language Expert: GCSE · IGCSE · O/A Levels · IB/SAT',
    bio: `With 17 years of classroom and one-to-one teaching experience, I specialise in GCSE, IGCSE, O/A Level, and IB English. I have helped hundreds of students improve their writing, reading comprehension, grammar, and exam technique, turning uncertainty into confidence and average grades into outstanding results.

My sessions are structured, personalised, and always focused on what your student actually needs. Whether your student is just starting out or preparing for final exams, I will meet them exactly where they are.`,
    photo: '/images/educators%20network/Asma%20Batool.png',
    linkedinUrl: 'https://www.linkedin.com/in/asma-batool-88638012b/',
    country: 'Pakistan',
    expertise: ['Grammar', 'ESL Teaching', 'Writing'],
    joinDate: '2026-06-15',
    foundingContributor: true,
  },
  {
    fullName: 'Aleeza Saleem',
    slug: 'aleeza-saleem',
    title: 'English Access Teacher | TESOL Certified',
    bio: `Aleeza Saleem is an English language educator and former teacher of the U.S.-funded English Access Scholarship Program. She is passionate about language learning, educational psychology, and the role of technology in education.

Through her classroom experience, she examines the challenges facing modern learners and advocates for approaches that promote confidence, critical thinking, and effective communication.`,
    photo: '/images/educators%20network/Aleeza%20Saleem.png',
    linkedinUrl: 'https://www.linkedin.com/in/aleeza-malik-02j1997/',
    expertise: ['ESL Teaching', 'Linguistics'],
    joinDate: '2026-06-16',
    foundingContributor: true,
  },
  {
    fullName: 'Sabine Schumann',
    slug: 'sabine-schumann',
    title: 'Business English and Intercultural Communication Trainer',
    bio: `I am a Business English and Communication Trainer with extensive experience helping professionals and international teams communicate more clearly and confidently in English.

My work spans corporate settings, universities, and professional training institutions, where I design and deliver tailored programmes focused on practical language use, intercultural communication, and developing the fluency that professionals actually need in the workplace.

I am also a published ELT author. My particular interest is in helping learners move beyond translation and begin thinking directly in English -- a shift that transforms not just language use, but professional confidence.`,
    photo: '/images/educators%20network/Sabine%20Schumann.png',
    linkedinUrl: 'https://www.linkedin.com/in/sabine-schumann-1621a031b',
    websiteUrl: 'https://www.bet-professional.de/',
    expertise: ['ESL Teaching', 'Writing', 'Linguistics'],
    joinDate: '2026-06-17',
    foundingContributor: true,
  },
  {
    fullName: 'Ravshan Khujakulov',
    slug: 'ravshan-khujakulov',
    title: 'EFL Teacher and Applied Linguistics Researcher',
    bio: `Ravshan Khujakulov is a dedicated and results-oriented EFL teacher with a Master's degree in TESOL and more than a decade of experience teaching English at university level in Uzbekistan.

He specialises in creating engaging and effective learning environments for students of all levels, with a particular focus on the cognitive and psychological dimensions of vocabulary acquisition. His research in applied linguistics informs a teaching approach grounded in evidence from memory science.

Fluent in English and Uzbek, he is committed to fostering intercultural understanding and empowering learners to achieve their language goals through strategies that work with, rather than against, how the brain actually learns.`,
    photo: '/images/educators%20network/Ravshan%20Khujakulov.png',
    linkedinUrl: 'https://www.linkedin.com/in/ravshan-khujakulov-2549b521a/',
    country: 'Uzbekistan',
    expertise: ['ESL Teaching', 'Linguistics'],
    joinDate: '2026-06-17',
    foundingContributor: true,
  },
];

// ─── Contributor Articles ───────────────────────────────────────────────────
export const CONTRIBUTOR_ARTICLES: ContributorArticle[] = [
  {
    title:
      'Why Some Students Understand English Perfectly but Struggle to Speak It',
    slug: 'why-some-students-understand-english-but-struggle-to-speak-it',
    authorSlug: 'ayesha-mahmuda',
    featuredImage:
      '/images/educators%20network/typogrammar-educators-network-banner.png',
    excerpt:
      'Why do ESL learners read, write, and understand English fluently yet freeze the moment they have to speak? A linguist-backed look at the affective filter, the perfectionism trap, and the translation loop, with practical fixes for learners and instructors.',
    content: WhyStudentsStruggleToSpeakEnglish,
    readingTime: 8,
    publishDate: '2026-06-05',
    references: [
      {
        citation:
          'Ali, Z. (2007). Willing learners yet unwilling speakers in ESL classrooms. Asian Journal of University Education, 3(2), 57-73.',
        url: 'https://doaj.org/article/0e6eb50bae0d46a79305a0d48217104a',
      },
      {
        citation:
          'Krashen, S. D. (1982). Principles and practice in second language acquisition. Pergamon Press.',
        url: 'https://www.sdkrashen.com/content/books/principles_and_practice.pdf',
      },
      {
        citation:
          'Krashen, S. D. (1985). The input hypothesis: Issues and implications. Longman.',
        url: 'https://scholar.google.com/scholar?q=Krashen+1985+input+hypothesis',
      },
      {
        citation:
          'Kroll, J. F., & Stewart, E. (1994). Category interference in translation and picture naming: Evidence for asymmetric connections between bilingual memory representations. Journal of Memory and Language, 33(2), 149-174.',
        url: 'https://doi.org/10.1006/jmla.1994.1008',
      },
      {
        citation:
          'Lewis, M. (1993). The lexical approach: The state of ELT and the way forward. Language Teaching Publications.',
        url: 'https://scholar.google.com/scholar?q=Lewis+1993+lexical+approach',
      },
      {
        citation:
          'Swain, M. (1985). Communicative competence: Some roles of comprehensible input and comprehensible output in its development. In S. Gass & C. Madden (Eds.), Input in second language acquisition (pp. 235-253). Newbury House.',
        url: 'https://doi.org/10.4324/9781315835877-13',
      },
      {
        citation:
          'Swain, M. (1993). The output hypothesis: Just speaking and writing aren\'t enough. The Canadian Modern Language Review, 50(1), 158-164.',
        url: 'https://doi.org/10.3138/cmlr.50.1.158',
      },
    ],
    seo: {
      title:
        'Why Some Students Understand English but Can\'t Speak It | TypoGrammar Educators Network',
      description:
        'Linguist-backed explanation of why ESL learners read and understand English fluently but struggle to speak it, plus practical, evidence-based fixes.',
    },
  },
  {
    title:
      'How to Sound More Natural in English Without Learning Thousands of New Words',
    slug: 'how-to-sound-more-natural-in-english',
    authorSlug: 'priya-darshini-arasavelli',
    featuredImage:
      '/images/educators%20network/typogrammar-educators-network-banner.png',
    excerpt:
      'An IELTS trainer\'s practical, no-vocabulary-grind guide to sounding natural in English: connected speech, framing phrases, real-life vs. textbook English, fillers, and pace and rhythm.',
    content: HowToSoundMoreNaturalInEnglish,
    readingTime: 9,
    publishDate: '2026-06-05',
    seo: {
      title:
        'How to Sound More Natural in English Without Learning New Words | TypoGrammar Educators Network',
      description:
        'Five practical techniques from IELTS trainer Priya Darshini Arasavelli to sound natural in English without memorizing thousands of new words: connected speech, framing phrases, real-life expressions, fillers, and rhythm.',
    },
  },
  {
    title: 'The 25 Most Common Grammar Mistakes Made by ESL Learners',
    slug: '25-most-common-grammar-mistakes-made-by-esl-learners',
    authorSlug: 'petr-varfolomeev',
    featuredImage:
      '/images/educators%20network/typogrammar-educators-network-banner.png',
    excerpt:
      'A CELTA-certified teacher counts down the 25 grammar mistakes he sees ESL learners make most often, from missing articles and double negatives to confusing make and do, since and for, and will and going to.',
    content: TwentyFiveMostCommonGrammarMistakes,
    readingTime: 7,
    publishDate: '2026-06-08',
    seo: {
      title:
        'The 25 Most Common Grammar Mistakes Made by ESL Learners | TypoGrammar Educators Network',
      description:
        'CELTA-certified ESL teacher Petr Varfolomeev breaks down the 25 grammar mistakes ESL learners make most often, with clear examples and quick fixes you can apply right away.',
    },
  },
  {
    title: 'From Studying English to Living in It',
    slug: 'from-studying-english-to-living-in-it',
    authorSlug: 'wessam-el-shatawy',
    featuredImage:
      '/images/educators%20network/typogrammar-educators-network-banner.png',
    excerpt:
      'An AUC English instructor with fifteen years of experience shares seven research-backed habits that help learners move from studying English to thinking in it, drawing on Krashen, Vygotsky, and McLaughlin.',
    content: FromStudyingEnglishToLivingInIt,
    readingTime: 10,
    publishDate: '2026-06-13',
    references: [
      {
        citation:
          'Krashen, S. D. (1982). Principles and practice in second language acquisition. Pergamon Press.',
        url: 'https://www.sdkrashen.com/content/books/principles_and_practice.pdf',
      },
      {
        citation:
          'Krashen, S. D. (1985). The input hypothesis: Issues and implications. Longman.',
        url: 'https://scholar.google.com/scholar?q=Krashen+1985+input+hypothesis',
      },
      {
        citation:
          'Vygotsky, L. S. (1986). Thought and language (A. Kozulin, Trans.). MIT Press. (Original work published 1934).',
        url: 'https://scholar.google.com/scholar?q=Vygotsky+1986+thought+and+language',
      },
      {
        citation:
          'McLaughlin, B. (1987). Theories of second-language learning. Edward Arnold.',
        url: 'https://scholar.google.com/scholar?q=McLaughlin+1987+theories+second+language+learning',
      },
      {
        citation:
          'Lewis, M. (1993). The lexical approach: The state of ELT and the way forward. Language Teaching Publications.',
        url: 'https://scholar.google.com/scholar?q=Lewis+1993+lexical+approach',
      },
    ],
    seo: {
      title:
        'From Studying English to Living in It | TypoGrammar Educators Network',
      description:
        'AUC English instructor Wessam El-Shatawy shares seven research-backed habits that help learners move from studying English to thinking in it, drawing on Krashen, Vygotsky, and McLaughlin.',
    },
  },
  {
    title:
      'English Pronunciation Challenges for Spanish Native Speakers and Practical Solutions',
    slug: 'english-pronunciation-challenges-for-spanish-native-speakers',
    authorSlug: 'mariela-villalobos-segovia',
    featuredImage:
      '/images/educators%20network/typogrammar-educators-network-banner.png',
    excerpt:
      'A Chilean translator and language tutor identifies four core pronunciation challenges for Spanish speakers of English and shares classroom-tested activities and exercises to overcome each one.',
    content: EnglishPronunciationChallengesForSpanishSpeakers,
    readingTime: 12,
    publishDate: '2026-06-14',
    references: [
      {
        citation:
          'Ruiz Cecilia, R., & Villoria Prieto, J. (2006). Training course in phonetics: Tasks for developing transcription and pronunciation skills. Comares.',
      },
    ],
    seo: {
      title:
        'English Pronunciation Challenges for Spanish Native Speakers | TypoGrammar Educators Network',
      description:
        'Translator and language tutor Mariela Villalobos Segovia identifies four key pronunciation challenges for Spanish speakers learning English, from consonant clusters and missing sounds to the psychology of speaking, with practical classroom activities.',
    },
  },
  {
    title:
      '25 Common Grammar Mistakes ESL Learners Make and How Teachers Can Correct Them',
    slug: '25-common-grammar-mistakes-esl-learners-make-and-how-teachers-can-correct',
    authorSlug: 'asma-batool',
    featuredImage:
      '/images/educators%20network/typogrammar-educators-network-banner.png',
    excerpt:
      'With 17 years of teaching experience, Asma Batool identifies 25 persistent ESL grammar mistakes drawn from real classrooms in Pakistan, with targeted correction strategies for each one.',
    content: TwentyFiveGrammarMistakesTeachersCorrect,
    readingTime: 10,
    publishDate: '2026-06-15',
    seo: {
      title:
        '25 Common Grammar Mistakes ESL Learners Make | TypoGrammar Educators Network',
      description:
        'With 17 years of teaching experience, Asma Batool identifies 25 persistent ESL grammar mistakes drawn from real classrooms, with targeted correction strategies rooted in L1 transfer patterns.',
    },
  },
  {
    title: 'From Understanding English to Speaking It: Why Fluency Feels So Difficult',
    slug: 'from-understanding-english-to-speaking-it-why-fluency-feels-so-difficult',
    authorSlug: 'aleeza-saleem',
    featuredImage:
      '/images/educators%20network/typogrammar-educators-network-banner.png',
    excerpt:
      'A TESOL-certified English Access teacher explains why learners who understand English fluently still freeze when speaking, covering fear of mistakes, the translation loop, test-focused classrooms, passive exposure, and how to build real speaking confidence.',
    content: FromUnderstandingEnglishToSpeakingIt,
    readingTime: 7,
    publishDate: '2026-06-16',
    seo: {
      title:
        'From Understanding English to Speaking It: Why Fluency Feels So Difficult | TypoGrammar Educators Network',
      description:
        'English Access teacher Aleeza Saleem explains why ESL learners who understand English well still struggle to speak it, from fear and perfectionism to the translation loop and passive screen exposure.',
    },
  },
  {
    title: 'Thinking in English: How to Stop Translating and Start Communicating',
    slug: 'how-to-stop-translating-and-start-communicating',
    authorSlug: 'sabine-schumann',
    featuredImage:
      '/images/educators%20network/typogrammar-educators-network-banner.png',
    excerpt:
      'A Business English trainer and published ELT author explains how to stop mentally translating and start thinking directly in English, through regular input, regular output, learning vocabulary in context, tolerating uncertainty, and focusing on collocations over isolated words.',
    content: HowToStopTranslatingAndStartCommunicating,
    readingTime: 8,
    publishDate: '2026-06-17',
    seo: {
      title:
        'Thinking in English: How to Stop Translating and Start Communicating | TypoGrammar Educators Network',
      description:
        'Business English trainer Sabine Schumann explains how to stop mentally translating and start thinking directly in English, with practical strategies for input, output, vocabulary in context, and collocation learning.',
    },
  },
  {
    title:
      'The Psychology of Language Learning: Why Students Forget Vocabulary So Quickly',
    slug: 'the-psychology-of-language-learning-why-students-forget-vocabulary-so-quickly',
    authorSlug: 'ravshan-khujakulov',
    featuredImage:
      '/images/educators%20network/typogrammar-educators-network-banner.png',
    excerpt:
      'A university EFL teacher and applied linguistics researcher explains why students forget vocabulary so fast, drawing on the Ebbinghaus Forgetting Curve, levels of processing, interference theory, the spacing effect, and retrieval practice -- with classroom strategies adapted to real teaching conditions.',
    content: ThePsychologyOfLanguageLearning,
    readingTime: 10,
    publishDate: '2026-06-17',
    references: [
      {
        citation:
          'Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). Distributed practice in verbal recall tasks: A review and quantitative synthesis. Psychological Bulletin, 132(2), 354-380.',
      },
      {
        citation:
          'Craik, F. I. M., & Lockhart, R. S. (1972). Levels of processing: A framework for memory research. Journal of Verbal Learning and Verbal Behavior, 11(6), 671-684.',
      },
      {
        citation:
          'Ebbinghaus, H. (1913). Memory: A contribution to experimental psychology (H. A. Ruger & C. E. Bussenius, Trans.). Teachers College, Columbia University. (Original work published 1885)',
      },
      {
        citation:
          'Jiang, N. (2000). Lexical representation and development in a second language. Applied Linguistics, 21(1), 47-77.',
      },
      {
        citation:
          'Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. Psychological Science, 17(3), 249-255.',
      },
    ],
    seo: {
      title:
        'The Psychology of Language Learning: Why Students Forget Vocabulary So Quickly | TypoGrammar Educators Network',
      description:
        'University EFL teacher Ravshan Khujakulov explains the cognitive science behind vocabulary forgetting -- the Forgetting Curve, shallow processing, interference, the spacing effect, and retrieval practice -- with practical classroom strategies for EFL and ESL teachers.',
    },
  },
];

// ─── Helpers ────────────────────────────────────────────────────────────────
export const getAuthorBySlug = (slug: string): ContributorAuthor | undefined =>
  EDUCATORS.find((a) => a.slug === slug);

export const getArticlesByAuthor = (authorSlug: string): ContributorArticle[] =>
  CONTRIBUTOR_ARTICLES.filter((a) => a.authorSlug === authorSlug).sort(
    (a, b) => (a.publishDate > b.publishDate ? -1 : 1)
  );

export const getArticleBySlug = (slug: string): ContributorArticle | undefined =>
  CONTRIBUTOR_ARTICLES.find((a) => a.slug === slug);

export const getFoundingContributors = (): ContributorAuthor[] =>
  EDUCATORS.filter((a) => a.foundingContributor);

export const NETWORK_BANNER =
  '/images/educators%20network/typogrammar-educators-network-banner.png';
