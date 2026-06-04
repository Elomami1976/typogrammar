import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const ManyVsMuchPage: React.FC = () => {
  usePageMetadata({
    title: 'Many vs Much: What Is the Difference? | TypoGrammar',
    description: 'Learn the difference between "many" and "much." Use "many" with countable nouns and "much" with uncountable nouns.',
    canonical: 'https://typogrammar.com/grammar-mistakes/many-vs-much/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Many vs Much",
    "description": "Use 'many' with countable nouns (many books, many people) and 'much' with uncountable nouns (much water, much time).",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/many-vs-much" },
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
        <span className="text-slate-900 dark:text-slate-100">Many vs Much</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Many vs Much: What Is the Difference?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            <strong>"Many"</strong> = countable nouns | <strong>"Much"</strong> = uncountable nouns
          </p>
          <p className="text-green-800 dark:text-green-200">
            Both are used in questions and negative sentences. In affirmative sentences, prefer "a lot of."
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">MANY (Countable)</h3>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>How <strong>many</strong> books?</li>
                <li>not <strong>many</strong> people</li>
                <li>too <strong>many</strong> cars</li>
                <li>so <strong>many</strong> ideas</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2">MUCH (Uncountable)</h3>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>How <strong>much</strong> water?</li>
                <li>not <strong>much</strong> time</li>
                <li>too <strong>much</strong> noise</li>
                <li>so <strong>much</strong> work</li>
              </ul>
            </div>
          </div>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-teal-900 dark:text-teal-100 mb-2">Usage Note:</h3>
            <p className="text-slate-700 dark:text-slate-300">
              In <strong>affirmative sentences</strong>, native speakers often prefer <strong>"a lot of"</strong> instead of much/many:
            </p>
            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 mt-2 space-y-1">
              <li>✔ I have <strong>a lot of</strong> friends. (more natural)</li>
              <li>? I have <strong>many</strong> friends. (sounds formal)</li>
            </ul>
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
              <span className="text-lg text-slate-700 dark:text-slate-300">How <strong>many</strong> languages do you speak?</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">How <strong>much</strong> money do you need?</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">There isn't <strong>much</strong> traffic today.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">How <strong>much</strong> people are coming?</span>
            </div>
          </div>
        </section>

        {/* Quick Reference Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Quick Reference Table
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-slate-300 dark:border-slate-600">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-700">
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-2">Context</th>
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-2">Countable</th>
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-2">Uncountable</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Question</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">How <strong>many</strong>?</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">How <strong>much</strong>?</td></tr>
                <tr className="bg-slate-50 dark:bg-slate-800"><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Negative</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">not <strong>many</strong></td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">not <strong>much</strong></td></tr>
                <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Affirmative</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2" colSpan={2}><strong>a lot of</strong> (both types)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Common Mistake Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistake
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Incorrect:</strong> I don't have much friends here.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct:</strong> I don't have many friends here.
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
              <strong>Choose the correct word:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "How _____ sugar do you take in your coffee?" (many/much)
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
                  <strong>Answer:</strong> How <strong>much</strong> sugar do you take in your coffee?
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  ("Sugar" is an uncountable noun.)
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
              <Link to="/grammar-mistakes/little-vs-few/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Little vs Few
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/less-people-or-fewer-people/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Less People or Fewer People?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/much-people-or-many-people/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Much People or Many People?
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

export default ManyVsMuchPage;
