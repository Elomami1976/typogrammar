import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const GoodInOrGoodAtPage: React.FC = () => {
  usePageMetadata({
    title: 'Good In or Good At? Which One Is Correct | TypoGrammar',
    description: 'Learn whether to say "good in" or "good at." The correct form is "good at" when talking about skills and abilities.',
    canonical: 'https://typogrammar.com/grammar-mistakes/good-in-or-good-at/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Good In or Good At?",
    "description": "The correct form is 'good at' when talking about skills and abilities. 'Good in' is used in specific contexts like 'good in bed' or 'good in a crisis.'",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/good-in-or-good-at" },
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
        <span className="text-slate-900 dark:text-slate-100">Good In or Good At</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Good In or Good At? Which One Is Correct
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            The correct form is <strong>"good at"</strong> when talking about skills and abilities.
          </p>
          <p className="text-green-800 dark:text-green-200">
            "Good in" is only correct in specific contexts (places or situations), not for skills.
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">Good AT (Skills)</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-2">Use for skills, abilities, subjects:</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>good <strong>at</strong> math</li>
                <li>good <strong>at</strong> swimming</li>
                <li>good <strong>at</strong> cooking</li>
                <li>good <strong>at</strong> his job</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2">Good IN (Context)</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-2">Use for places/situations:</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>good <strong>in</strong> a crisis</li>
                <li>good <strong>in</strong> emergencies</li>
                <li>looks good <strong>in</strong> blue</li>
              </ul>
            </div>
          </div>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <p className="text-lg font-mono text-slate-800 dark:text-slate-200">
              Rule: Skills and abilities → <strong>good at</strong>
            </p>
          </div>
        </section>

        {/* Examples Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She's very good <strong>at</strong> playing the piano.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I'm not good <strong>at</strong> public speaking.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">He's good <strong>in</strong> a crisis. (situation, not skill)</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">She's very good <strong>in</strong> mathematics.</span>
            </div>
          </div>
        </section>

        {/* Similar Adjectives Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Similar Adjectives with AT
          </h2>
          <ul className="list-disc list-inside text-lg text-slate-700 dark:text-slate-300 space-y-1">
            <li>good <strong>at</strong></li>
            <li>bad <strong>at</strong></li>
            <li>excellent <strong>at</strong></li>
            <li>terrible <strong>at</strong></li>
            <li>skilled <strong>at</strong></li>
            <li>hopeless <strong>at</strong></li>
          </ul>
        </section>

        {/* Common Mistake Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistake
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Incorrect:</strong> My brother is good in English.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct:</strong> My brother is good at English.
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
              <strong>Choose the correct preposition:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "I've never been good _____ sports." (in/at)
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
                  <strong>Answer:</strong> I've never been good <strong>at</strong> sports.
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
              <Link to="/grammar-mistakes/different-from-or-different-than/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Different From or Different Than?
              </Link>
            </li>
            <li>
              <Link to="/preposition-combinations/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Preposition Combinations
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

export default GoodInOrGoodAtPage;
