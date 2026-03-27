import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const ALittleVsLittlePage: React.FC = () => {
  usePageMetadata({
    title: 'A Little vs Little: What\'s the Difference? | TypoGrammar',
    description: 'Learn the difference between "a little" and "little." A little = some, positive. Little = almost none, negative. Used with uncountable nouns.',
    canonical: 'https://typogrammar.com/grammar-mistakes/a-little-vs-little'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "A Little vs Little: What's the Difference?",
    "description": "'A little' has a positive meaning - some, enough. 'Little' has a negative meaning - almost none, not enough. Both are used with uncountable nouns.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/a-little-vs-little" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between a little and little?",
        "acceptedAnswer": { "@type": "Answer", "text": "'A little' = some, a small but sufficient amount (positive). 'Little' = almost none, hardly any (negative). 'I have a little money' (I have some money - positive). 'I have little money' (I hardly have any money - negative)." }
      },
      {
        "@type": "Question",
        "name": "Is little positive or negative?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Little' (without 'a') is negative - it means 'almost none' or 'not enough.' 'A little' (with 'a') is positive - it means 'some' or 'enough.'" }
      }
    ]
  };

  return (
    <>
      <SchemaMarkup type="Article" data={articleSchema} />
      <SchemaMarkup type="FAQPage" data={faqSchema} />

      <nav className="mb-6 text-slate-600 dark:text-slate-400">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
        {' › '}
        <Link to="/grammar-mistakes" className="hover:text-blue-600 dark:hover:text-blue-400">Grammar Mistakes</Link>
        {' › '}
        <span className="text-slate-900 dark:text-slate-100">A Little vs Little</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          A Little vs Little: What's the Difference?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            <strong>A little</strong> = some, a small amount (POSITIVE ✓)
          </p>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>Little</strong> = almost none, hardly any (NEGATIVE ✗)
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="font-bold text-green-900 dark:text-green-100 mb-2">A LITTLE 😊</p>
              <p className="text-green-800 dark:text-green-200 mb-2">Some, a small but positive amount</p>
              <p className="text-green-700 dark:text-green-300 italic">"I have a little time."</p>
              <p className="text-green-600 dark:text-green-400 text-sm mt-2">= I have some time. I can help!</p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <p className="font-bold text-red-900 dark:text-red-100 mb-2">LITTLE 😔</p>
              <p className="text-red-800 dark:text-red-200 mb-2">Almost none, not enough</p>
              <p className="text-red-700 dark:text-red-300 italic">"I have little time."</p>
              <p className="text-red-600 dark:text-red-400 text-sm mt-2">= I hardly have any time. I'm too busy.</p>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-amber-800 dark:text-amber-200">
              <strong>Key insight:</strong> Just like "a few" vs "few," the tiny word "a" completely changes the meaning! "A little" is positive. "Little" alone is negative.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <p className="font-bold text-slate-800 dark:text-slate-200 mb-2">Both are used with UNCOUNTABLE nouns:</p>
            <p className="text-slate-700 dark:text-slate-300">
              a little water, little time, a little money, little hope
            </p>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
              (For countable nouns, use "a few" / "few")
            </p>
          </div>
        </section>

        {/* Examples Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          
          <p className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">A LITTLE (positive):</p>
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">😊</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I speak <strong>a little</strong> French. (some French - helpful)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">😊</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Would you like <strong>a little</strong> more coffee? (offering more)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">😊</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">We still have <strong>a little</strong> time. (enough time)</span>
            </div>
          </div>

          <p className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">LITTLE (negative):</p>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">😔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">There is <strong>little</strong> hope. (almost no hope)</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">😔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">He paid <strong>little</strong> attention. (hardly any attention)</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">😔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">We have <strong>little</strong> money left. (not enough)</span>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Same Sentence, Different Meaning
          </h2>
          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="text-lg text-green-800 dark:text-green-200">
                "I have <strong>a little</strong> experience."
              </p>
              <p className="text-green-700 dark:text-green-300 text-sm">= I have some experience. I can do the job!</p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <p className="text-lg text-red-800 dark:text-red-200">
                "I have <strong>little</strong> experience."
              </p>
              <p className="text-red-700 dark:text-red-300 text-sm">= I hardly have any experience. I might not be qualified.</p>
            </div>
          </div>
        </section>

        {/* A Little as Adverb Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            "A Little" as an Adverb
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="text-blue-800 dark:text-blue-200 mb-2">
              <strong>"A little"</strong> can modify adjectives and verbs:
            </p>
            <ul className="text-blue-700 dark:text-blue-300 space-y-1">
              <li>• I'm <strong>a little</strong> tired. (slightly tired)</li>
              <li>• Could you speak <strong>a little</strong> louder? (slightly louder)</li>
              <li>• Wait <strong>a little</strong>. (for a short time)</li>
            </ul>
          </div>
        </section>

        {/* Summary Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Summary: Little/Few Patterns
          </h2>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <table className="w-full text-left">
              <thead>
                <tr className="text-slate-800 dark:text-slate-200">
                  <th className="pb-2"></th>
                  <th className="pb-2">Countable (books, people)</th>
                  <th className="pb-2">Uncountable (money, time)</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="py-2 font-semibold text-green-700 dark:text-green-400">Positive (+)</td>
                  <td className="py-2">a few</td>
                  <td className="py-2">a little</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold text-red-700 dark:text-red-400">Negative (−)</td>
                  <td className="py-2">few</td>
                  <td className="py-2">little</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Choose "a little" or "little":</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "Unfortunately, there is _____ we can do to help. The situation is difficult."
            </p>
            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showAnswer ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer && (
              <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <p className="text-lg text-green-800 dark:text-green-200">
                  <strong>Answer:</strong> There is <strong>little</strong> we can do to help.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  "Little" (negative) - the context is negative (difficult situation, unfortunately), so we can't do much.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Related Grammar Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Related Grammar
          </h2>
          <ul className="space-y-2 text-lg">
            <li>
              <Link to="/grammar-mistakes/a-few-vs-few" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → A Few vs. Few
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/little-vs-few" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Little vs. Few
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/some-vs-any" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Some vs. Any
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → All Grammar Mistakes
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default ALittleVsLittlePage;
