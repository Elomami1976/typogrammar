import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAd from '../components/GoogleAd';
import usePageMetadata from '../hooks/usePageMetadata';

const GrammarGuidePage: React.FC = () => {
  usePageMetadata({
    title: 'Complete English Grammar Guide | TypoGrammar Resources Hub',
    description: 'Your comprehensive resource hub for learning English grammar. Access organized guides on verb tenses, sentence structure, punctuation, parts of speech, and more. Perfect for students, teachers, and ESL/EFL learners.'
  });

  const grammarCategories = [
    {
      title: 'Verb Tenses',
      description: 'Master all 12 English tenses with clear explanations and examples',
      topics: [
        { name: 'Present Simple', slug: '/topics/present-simple' },
        { name: 'Present Progressive', slug: '/topics/present-progressive' },
        { name: 'Present Perfect', slug: '/topics/present-perfect' },
        { name: 'Past Simple', slug: '/topics/past-simple' },
        { name: 'Past Progressive', slug: '/topics/past-progressive' },
        { name: 'Future Simple', slug: '/topics/future-simple' },
        { name: 'Tense Visualizer Tool', slug: '/tense-visualizer' }
      ]
    },
    {
      title: 'Sentence Structure',
      description: 'Learn how to construct clear, grammatically correct sentences',
      topics: [
        { name: 'Active vs Passive Voice', slug: '/topics/passive-voice' },
        { name: 'Conditionals (If-Clauses)', slug: '/topics/conditionals' },
        { name: 'Reported Speech', slug: '/topics/reported-speech' },
        { name: 'Varying Sentence Structure', slug: '/writing/how-to-vary-sentence-structure' }
      ]
    },
    {
      title: 'Parts of Speech',
      description: 'Understand nouns, verbs, adjectives, adverbs, and more',
      topics: [
        { name: 'Adjectives & Adverbs', slug: '/topics/adjectives-adverbs' },
        { name: 'Prepositions', slug: '/topics/prepositions' },
        { name: 'Pronouns', slug: '/topics/pronouns' },
        { name: 'Articles (A, An, The)', slug: '/topics/articles' }
      ]
    },
    {
      title: 'Punctuation',
      description: 'Perfect your use of commas, semicolons, apostrophes, and more',
      topics: [
        { name: 'Apostrophes', slug: '/topics/apostrophes' },
        { name: 'Commas', slug: '/topics/commas' },
        { name: 'Semicolons & Colons', slug: '/blog/punctuation-guide-colons-semicolons' },
        { name: 'Quotation Marks', slug: '/topics/quotation-marks' }
      ]
    },
    {
      title: 'Writing Skills',
      description: 'Develop your essay, email, and creative writing abilities',
      topics: [
        { name: 'Essay Types & Structure', slug: '/writing/essay-types' },
        { name: 'Professional Email Writing', slug: '/writing/how-to-write-a-professional-email' },
        { name: 'Paraphrasing Techniques', slug: '/writing/how-to-paraphrase' },
        { name: 'Building Arguments', slug: '/writing/how-to-build-an-argument' },
        { name: 'Writing Assistant Tool', slug: '/writing-assistant' }
      ]
    },
    {
      title: 'Reading Comprehension',
      description: 'Improve your understanding and analysis of English texts',
      topics: [
        { name: 'Critical Reading Strategies', slug: '/reading/how-to-read-critically' },
        { name: 'Reading Comprehension Practice', slug: '/reading/reading-comprehension-practice' },
        { name: 'Reading Tips & Techniques', slug: '/reading/how-to-read-efficiently' }
      ]
    },
    {
      title: 'Vocabulary & Usage',
      description: 'Expand your vocabulary and avoid common mistakes',
      topics: [
        { name: 'Phrasal Verbs', slug: '/phrasal-verbs' },
        { name: 'Idioms & Expressions', slug: '/idioms' },
        { name: 'Commonly Confused Words', slug: '/commonly-confused-words' },
        { name: 'Homophones, Homonyms & Homographs', slug: '/vocabulary/homophones-homonyms-homographs' },
        { name: 'Collocations', slug: '/vocabulary/collocations' },
        { name: 'Prefixes & Suffixes', slug: '/prefixes-suffixes' }
      ]
    },
    {
      title: 'Pronunciation',
      description: 'Improve your English pronunciation and speaking skills',
      topics: [
        { name: 'Pronunciation Guide', slug: '/pronunciation' },
        { name: 'Past Tense Pronunciation', slug: '/pronunciation-of-ed' }
      ]
    },
    {
      title: 'Special Topics',
      description: 'Explore specific grammar topics and terminology',
      topics: [
        { name: 'Grammar Glossary A-Z', slug: '/grammar-glossary' },
        { name: 'Basic Grammar Terminology', slug: '/grammar-fundamentals/basic-terminology' },
        { name: 'Irregular Verbs', slug: '/irregular-verbs' },
        { name: 'Preposition Combinations', slug: '/preposition-combinations' }
      ]
    }
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">
            Complete English Grammar Guide
          </h1>
          <p className="font-body text-xl text-slate-600 max-w-3xl mx-auto dark:text-slate-400">
            Your comprehensive resource hub for mastering English grammar. Explore organized lessons, interactive tools, and practical exercises covering all aspects of English language learning.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link
            to="/blog"
            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 dark:from-blue-900/20 dark:to-indigo-900/20 dark:border-blue-800/30 dark:hover:border-blue-600"
          >
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-slate-100">Blog Articles</h3>
            </div>
            <p className="font-body text-slate-600 dark:text-slate-400">
              Read in-depth articles on grammar, writing tips, and language insights
            </p>
          </Link>

          <Link
            to="/progress"
            className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 hover:border-green-400 hover:shadow-lg transition-all duration-300 dark:from-green-900/20 dark:to-emerald-900/20 dark:border-green-800/30 dark:hover:border-green-600"
          >
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-slate-100">Track Progress</h3>
            </div>
            <p className="font-body text-slate-600 dark:text-slate-400">
              Monitor your learning journey and see which topics you've mastered
            </p>
          </Link>

          <Link
            to="/teacher"
            className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all duration-300 dark:from-purple-900/20 dark:to-pink-900/20 dark:border-purple-800/30 dark:hover:border-purple-600"
          >
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-slate-100">For Teachers</h3>
            </div>
            <p className="font-body text-slate-600 dark:text-slate-400">
              Resources and tips for teaching English grammar effectively
            </p>
          </Link>
        </div>

        {/* Grammar Categories */}
        <div className="space-y-8">
          {grammarCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50"
            >
              <h2 className="font-heading text-3xl font-bold text-slate-900 mb-2 dark:text-slate-100">
                {category.title}
              </h2>
              <p className="font-body text-slate-600 mb-6 dark:text-slate-400">
                {category.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.topics.map((topic, topicIndex) => (
                  <Link
                    key={topicIndex}
                    to={topic.slug}
                    className="group flex items-center gap-2 p-4 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 transition-all duration-200 dark:bg-slate-700/30 dark:border-slate-600 dark:hover:bg-blue-900/20 dark:hover:border-blue-600"
                  >
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="font-body text-slate-700 group-hover:text-blue-700 font-medium dark:text-slate-300 dark:group-hover:text-blue-400">
                      {topic.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-12 bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl border border-slate-200 dark:from-slate-800/50 dark:to-blue-900/20 dark:border-slate-700">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4 dark:text-slate-100">
            Interactive Learning Tools
          </h2>
          <p className="font-body text-slate-600 mb-6 dark:text-slate-400">
            Practice your skills with our interactive tools designed to make grammar learning engaging and effective.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/tense-visualizer"
              className="bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all duration-200 dark:bg-slate-700/50 dark:border-slate-600 dark:hover:border-blue-500"
            >
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2 dark:text-slate-100">Tense Visualizer</h3>
              <p className="font-body text-slate-600 dark:text-slate-400">
                Interactive timeline showing when to use each English tense
              </p>
            </Link>
            <Link
              to="/writing-assistant"
              className="bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all duration-200 dark:bg-slate-700/50 dark:border-slate-600 dark:hover:border-blue-500"
            >
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2 dark:text-slate-100">English Writing Styles</h3>
              <p className="font-body text-slate-600 dark:text-slate-400">
                Learn narrative, descriptive, expository, and persuasive writing
              </p>
            </Link>
            <Link
              to="/reading/reading-comprehension-practice"
              className="bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all duration-200 dark:bg-slate-700/50 dark:border-slate-600 dark:hover:border-blue-500"
            >
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2 dark:text-slate-100">Reading Comprehension</h3>
              <p className="font-body text-slate-600 dark:text-slate-400">
                Practice reading with quizzes and exercises
              </p>
            </Link>
            <Link
              to="/irregular-verbs"
              className="bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all duration-200 dark:bg-slate-700/50 dark:border-slate-600 dark:hover:border-blue-500"
            >
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2 dark:text-slate-100">Irregular Verbs Quiz</h3>
              <p className="font-body text-slate-600 dark:text-slate-400">
                Master irregular verb forms with interactive practice
              </p>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-xl text-white">
          <h2 className="font-heading text-3xl font-bold mb-4">Start Learning Today</h2>
          <p className="font-body text-lg mb-6 text-blue-50">
            All our resources are completely free. Begin improving your English skills now!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Browse All Topics
            </Link>
            <Link
              to="/faq"
              className="inline-block bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-200"
            >
              Have Questions?
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <GoogleAd adSlot="6406598038" />
        </div>
      </div>
    </>
  );
};

export default GrammarGuidePage;
