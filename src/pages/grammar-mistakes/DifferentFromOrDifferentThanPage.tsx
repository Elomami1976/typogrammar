import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const DifferentFromOrDifferentThanPage: React.FC = () => {
  usePageMetadata({
    title: 'Different From or Different Than? Which One Is Correct | TypoGrammar',
    description: 'Learn whether to say "different from" or "different than." "Different from" is standard in British English; "different than" is common in American English.',
    canonical: 'https://typogrammar.com/grammar-mistakes/different-from-or-different-than/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Different From or Different Than?",
    "description": "'Different from' is the standard form in British English and widely accepted in American English. 'Different than' is common in American English, especially before clauses.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/different-from-or-different-than" },
    "datePublished": "2026-03-07",
    "dateModified": "2026-03-07"
  };

  return (
    <>
      <SchemaMarkup type="Article" data={articleSchema} />

      <nav className="mb-6 text-slate-600 dark:text-slate-400">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
        {' › '}
        <Link to="/grammar-mistakes/" className="hover:text-blue-600 dark:hover:text-blue-400">Grammar Mistakes</Link>
        {' › '}
        <span className="text-slate-900 dark:text-slate-100">Different From or Different Than</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Different From or Different Than? Which One Is Correct
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            <strong>"Different from"</strong> is the standard and most widely accepted form.
          </p>
          <p className="text-green-800 dark:text-green-200">
            <strong>"Different than"</strong> is acceptable in American English, especially before clauses. "Different to" is used in British English.
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <div className="space-y-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">Different FROM (Standard)</h3>
              <p className="text-slate-700 dark:text-slate-300">The most widely accepted form in both British and American English. Always safe to use.</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-2">Different THAN (American English)</h3>
              <p className="text-slate-700 dark:text-slate-300">Common in American English, especially before clauses. Considered less formal.</p>
            </div>
            <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
              <h3 className="text-lg font-bold text-teal-900 dark:text-teal-100 mb-2">Different TO (British English)</h3>
              <p className="text-slate-700 dark:text-slate-300">Used in British English but less common than "different from."</p>
            </div>
          </div>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            <strong>Best practice:</strong> Use "different from" in formal writing and exams (IELTS, TOEFL) as it's universally accepted.
          </p>
        </section>

        {/* Examples Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Your answer is different <strong>from</strong> mine. (Standard)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The result was different <strong>than</strong> we expected. (American English)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">This is different <strong>to</strong> what I imagined. (British English)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Life in the city is very different <strong>from</strong> life in the countryside.</span>
            </div>
          </div>
        </section>

        {/* Usage Tips Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Usage Tips
          </h2>
          <ul className="list-disc list-inside text-lg text-slate-700 dark:text-slate-300 space-y-2">
            <li><strong>Before a noun/pronoun:</strong> Use "different from" → "different from you"</li>
            <li><strong>Before a clause:</strong> "Different than" is acceptable → "different than I thought"</li>
            <li><strong>Formal writing/exams:</strong> Always use "different from"</li>
            <li><strong>Avoid "different to"</strong> in American English contexts</li>
          </ul>
        </section>

        {/* Common Mistake Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistake
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Incorrect (in formal writing):</strong> The new version is different than the old one.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct (standard):</strong> The new version is different from the old one.
            </p>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Choose the best answer for formal writing:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "Her approach is completely different _____ his." (from/than/to)
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
                  <strong>Answer:</strong> Her approach is completely different <strong>from</strong> his.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  ("Different from" is the safest choice for formal writing and exams.)
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
              <Link to="/grammar-mistakes/interested-in-or-interested-on/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Interested In or Interested On?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/good-in-or-good-at/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Good In or Good At?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/married-with-or-married-to/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Married With or Married To?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → All Grammar Mistakes
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default DifferentFromOrDifferentThanPage;
