import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const InTheWeekendOrOnTheWeekendPage: React.FC = () => {
  usePageMetadata({
    title: 'In the Weekend or On the Weekend? Which One Is Correct | TypoGrammar',
    description: 'Learn whether to say "in the weekend" or "on the weekend." American English uses "on the weekend," British English uses "at the weekend."',
    canonical: 'https://typogrammar.com/grammar-mistakes/in-the-weekend-or-on-the-weekend/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "In the Weekend or On the Weekend?",
    "description": "'On the weekend' is used in American English. 'At the weekend' is used in British English. 'In the weekend' is generally incorrect.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/in-the-weekend-or-on-the-weekend" },
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
        <span className="text-slate-900 dark:text-slate-100">In the Weekend or On the Weekend</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          In the Weekend or On the Weekend? Which One Is Correct
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            <strong>"On the weekend"</strong> (American English) or <strong>"At the weekend"</strong> (British English).
          </p>
          <p className="text-green-800 dark:text-green-200">
            "In the weekend" is incorrect in standard English. Don't use "in" with "weekend."
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">🇺🇸 American English</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-2">Use "on the weekend":</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>I'll visit you <strong>on the weekend</strong>.</li>
                <li>What do you do <strong>on weekends</strong>?</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2">🇬🇧 British English</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-2">Use "at the weekend":</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>I'll visit you <strong>at the weekend</strong>.</li>
                <li>What do you do <strong>at weekends</strong>?</li>
              </ul>
            </div>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Important:</strong> "In the weekend" is NOT correct in either American or British English.
            </p>
          </div>
        </section>

        {/* Time Preposition Rules Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Time Preposition Rules
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-slate-300 dark:border-slate-600">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-700">
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left">Use ON</th>
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left">Use AT</th>
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left">Use IN</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Days (on Monday)</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Times (at 5 o'clock)</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Months (in March)</td></tr>
                <tr className="bg-slate-50 dark:bg-slate-800"><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Dates (on July 4th)</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Night (at night)</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Years (in 2024)</td></tr>
                <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Weekends (US)</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Weekends (UK)</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Seasons (in summer)</td></tr>
              </tbody>
            </table>
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
              <span className="text-lg text-slate-700 dark:text-slate-300">I usually relax <strong>on the weekend</strong>. (US)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I usually relax <strong>at the weekend</strong>. (UK)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">What are you doing <strong>on weekends</strong>?</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I usually relax <strong>in the weekend</strong>.</span>
            </div>
          </div>
        </section>

        {/* Common Mistake Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistake
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Incorrect:</strong> I went to the beach in the weekend.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct (US):</strong> I went to the beach on the weekend.
            </p>
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct (UK):</strong> I went to the beach at the weekend.
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
              <strong>Fix the sentence:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "We always have a family dinner in the weekend."
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
                  <strong>Answer:</strong> We always have a family dinner <strong>on/at the weekend</strong>.
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

export default InTheWeekendOrOnTheWeekendPage;
