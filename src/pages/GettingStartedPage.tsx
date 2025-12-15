import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAd from '../components/GoogleAd';
import usePageMetadata from '../hooks/usePageMetadata';

const GettingStartedPage: React.FC = () => {
  usePageMetadata({
    title: 'Getting Started with English Grammar | Beginner\'s Guide | TypoGrammar',
    description: 'New to learning English grammar? Start here! This beginner-friendly guide will help you navigate TypoGrammar and create an effective learning plan for mastering English grammar and writing skills.'
  });

  const learningPaths = [
    {
      level: 'Absolute Beginner',
      description: 'Just starting to learn English grammar',
      topics: [
        { name: 'Basic Grammar Terminology', slug: '/basic-grammar-terminology', description: 'Learn essential grammar terms' },
        { name: 'Present Simple Tense', slug: '/topics/present-simple', description: 'Your first verb tense' },
        { name: 'Articles (A, An, The)', slug: '/topics/articles', description: 'When to use a, an, and the' },
        { name: 'Basic Pronouns', slug: '/topics/pronouns', description: 'I, you, he, she, it, we, they' }
      ]
    },
    {
      level: 'Elementary',
      description: 'You know the basics and want to build on them',
      topics: [
        { name: 'Past Simple Tense', slug: '/topics/past-simple', description: 'Talk about past actions' },
        { name: 'Future Simple Tense', slug: '/topics/future-simple', description: 'Express future plans' },
        { name: 'Adjectives & Adverbs', slug: '/topics/adjectives-adverbs', description: 'Describe nouns and verbs' },
        { name: 'Prepositions', slug: '/topics/prepositions', description: 'In, on, at, by, with, etc.' }
      ]
    },
    {
      level: 'Intermediate',
      description: 'Ready to tackle more complex grammar',
      topics: [
        { name: 'Present Perfect Tense', slug: '/topics/present-perfect', description: 'Connect past and present' },
        { name: 'Passive Voice', slug: '/topics/passive-voice', description: 'Focus on the action, not the doer' },
        { name: 'Conditionals', slug: '/topics/conditionals', description: 'If-clauses and hypotheticals' },
        { name: 'Reported Speech', slug: '/topics/reported-speech', description: 'Quote what others said' }
      ]
    },
    {
      level: 'Advanced',
      description: 'Polish your skills and master nuances',
      topics: [
        { name: 'Phrasal Verbs', slug: '/phrasal-verbs', description: 'Master idiomatic verb expressions' },
        { name: 'Idioms', slug: '/idioms', description: 'Understand figurative language' },
        { name: 'Academic Writing', slug: '/essay-types', description: 'Write sophisticated essays' },
        { name: 'Advanced Punctuation', slug: '/blog/punctuation-guide-colons-semicolons', description: 'Colons, semicolons, and more' }
      ]
    }
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 p-4 rounded-full mb-4 dark:bg-blue-900/40">
            <svg className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="font-heading text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">
            Getting Started with TypoGrammar
          </h1>
          <p className="font-body text-xl text-slate-600 max-w-3xl mx-auto dark:text-slate-400">
            Welcome! Whether you're a complete beginner or looking to refine your English skills, this guide will help you make the most of TypoGrammar and create an effective learning plan.
          </p>
        </div>

        {/* How to Use This Site */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200 mb-12 dark:from-blue-900/20 dark:to-indigo-900/20 dark:border-blue-800/30">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6 dark:text-slate-100">
            How to Use TypoGrammar
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg dark:bg-slate-800/50">
              <div className="text-3xl font-bold text-blue-600 mb-2 dark:text-blue-400">1</div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2 dark:text-slate-100">Choose Your Level</h3>
              <p className="font-body text-slate-600 dark:text-slate-400">
                Find your current English level below and start with recommended topics.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg dark:bg-slate-800/50">
              <div className="text-3xl font-bold text-blue-600 mb-2 dark:text-blue-400">2</div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2 dark:text-slate-100">Learn & Practice</h3>
              <p className="font-body text-slate-600 dark:text-slate-400">
                Read explanations, study examples, and complete quizzes to reinforce learning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg dark:bg-slate-800/50">
              <div className="text-3xl font-bold text-blue-600 mb-2 dark:text-blue-400">3</div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2 dark:text-slate-100">Track Progress</h3>
              <p className="font-body text-slate-600 dark:text-slate-400">
                Use our <Link to="/progress" className="text-blue-600 hover:underline dark:text-blue-400">Progress Tracker</Link> to monitor completed topics.
              </p>
            </div>
          </div>
        </div>

        {/* Learning Paths by Level */}
        <div className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6 text-center dark:text-slate-100">
            Choose Your Learning Path
          </h2>
          <div className="space-y-6">
            {learningPaths.map((path, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-600 text-white font-bold px-4 py-1 rounded-full text-sm">
                    {path.level}
                  </span>
                  <p className="font-body text-slate-600 dark:text-slate-400">{path.description}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {path.topics.map((topic, topicIndex) => (
                    <Link
                      key={topicIndex}
                      to={topic.slug}
                      className="group p-4 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 transition-all duration-200 dark:bg-slate-700/30 dark:border-slate-600 dark:hover:bg-blue-900/20 dark:hover:border-blue-600"
                    >
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <div>
                          <h4 className="font-heading font-bold text-slate-900 group-hover:text-blue-700 dark:text-slate-100 dark:group-hover:text-blue-400">
                            {topic.name}
                          </h4>
                          <p className="font-body text-sm text-slate-600 dark:text-slate-400">{topic.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Study Tips */}
        <div className="bg-white p-8 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 mb-12 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6 dark:text-slate-100">
            Study Tips for Success
          </h2>
          <div className="space-y-4 font-body text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center dark:bg-green-900/40">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <p><strong>Study consistently:</strong> 15-20 minutes daily is better than cramming for hours once a week.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center dark:bg-green-900/40">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <p><strong>Practice actively:</strong> Complete quizzes, write example sentences, and apply what you learn.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center dark:bg-green-900/40">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <p><strong>Review regularly:</strong> Revisit topics you've studied to reinforce long-term retention.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center dark:bg-green-900/40">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <p><strong>Use multiple resources:</strong> Combine TypoGrammar with reading books, watching movies, and conversing with others.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center dark:bg-green-900/40">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <p><strong>Don't rush:</strong> Master each topic thoroughly before moving to the next one.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center dark:bg-green-900/40">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <p><strong>Track your progress:</strong> Check off completed topics to stay motivated and see how far you've come!</p>
            </div>
          </div>
        </div>

        {/* Quick Access Tools */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200 mb-12 dark:from-purple-900/20 dark:to-pink-900/20 dark:border-purple-800/30">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6 dark:text-slate-100">
            Helpful Tools & Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/grammar-guide"
              className="bg-white p-6 rounded-lg border border-slate-200 hover:border-purple-400 hover:shadow-md transition-all duration-200 dark:bg-slate-800/50 dark:border-slate-700 dark:hover:border-purple-500"
            >
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2 dark:text-slate-100">📚 Grammar Guide</h3>
              <p className="font-body text-slate-600 dark:text-slate-400">
                Browse all topics organized by category
              </p>
            </Link>
            <Link
              to="/tense-visualizer"
              className="bg-white p-6 rounded-lg border border-slate-200 hover:border-purple-400 hover:shadow-md transition-all duration-200 dark:bg-slate-800/50 dark:border-slate-700 dark:hover:border-purple-500"
            >
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2 dark:text-slate-100">⏱️ Tense Visualizer</h3>
              <p className="font-body text-slate-600 dark:text-slate-400">
                Interactive timeline showing when to use each tense
              </p>
            </Link>
            <Link
              to="/writing-assistant"
              className="bg-white p-6 rounded-lg border border-slate-200 hover:border-purple-400 hover:shadow-md transition-all duration-200 dark:bg-slate-800/50 dark:border-slate-700 dark:hover:border-purple-500"
            >
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2 dark:text-slate-100">✍️ Writing Assistant</h3>
              <p className="font-body text-slate-600 dark:text-slate-400">
                Get feedback on your writing
              </p>
            </Link>
            <Link
              to="/blog"
              className="bg-white p-6 rounded-lg border border-slate-200 hover:border-purple-400 hover:shadow-md transition-all duration-200 dark:bg-slate-800/50 dark:border-slate-700 dark:hover:border-purple-500"
            >
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2 dark:text-slate-100">📝 Blog</h3>
              <p className="font-body text-slate-600 dark:text-slate-400">
                Read articles about grammar, idioms, and language tips
              </p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-xl text-white">
          <h2 className="font-heading text-3xl font-bold mb-4">Ready to Begin?</h2>
          <p className="font-body text-lg mb-6 text-blue-50">
            Pick a topic from your level above and start learning today. Remember, every expert was once a beginner!
          </p>
          <Link
            to="/"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            Explore All Topics
          </Link>
        </div>

        <div className="mt-8">
          <GoogleAd adSlot="6406598038" />
        </div>
      </div>
    </>
  );
};

export default GettingStartedPage;
