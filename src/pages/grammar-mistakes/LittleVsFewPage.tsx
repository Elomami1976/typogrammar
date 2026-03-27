import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const LittleVsFewPage: React.FC = () => {
  usePageMetadata({
    title: 'Little vs Few: What Is the Difference? | TypoGrammar',
    description: 'Learn the difference between "little" and "few." Use "little" with uncountable nouns and "few" with countable nouns.',
    canonical: 'https://typogrammar.com/grammar-mistakes/little-vs-few'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Little vs Few",
    "description": "Use 'little' with uncountable nouns (little water, little time) and 'few' with countable nouns (few people, few books).",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/little-vs-few" },
    "datePublished": "2026-03-07",
    "dateModified": "2026-03-07"
  };

  return (
    <>
      <SchemaMarkup type="Article" data={articleSchema} />

      <nav className="mb-6 text-slate-600 dark:text-slate-400">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
        {' › '}
        <Link to="/grammar-mistakes" className="hover:text-blue-600 dark:hover:text-blue-400">Grammar Mistakes</Link>
        {' › '}
        <span className="text-slate-900 dark:text-slate-100">Little vs Few</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Little vs Few: What Is the Difference?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            <strong>"Little"</strong> = uncountable nouns | <strong>"Few"</strong> = countable nouns
          </p>
          <p className="text-green-800 dark:text-green-200">
            Both mean "not much/not many" and have a negative connotation. Add "a" for positive meaning: "a little" / "a few."
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">LITTLE (Uncountable)</h3>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li><strong>little</strong> time (not enough)</li>
                <li><strong>little</strong> money</li>
                <li><strong>little</strong> hope</li>
                <li><strong>a little</strong> water (some, positive)</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2">FEW (Countable)</h3>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li><strong>few</strong> friends (not enough)</li>
                <li><strong>few</strong> options</li>
                <li><strong>few</strong> chances</li>
                <li><strong>a few</strong> books (some, positive)</li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100 mb-2">Important Nuance:</h3>
            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
              <li><strong>little/few</strong> (without "a") = negative (not enough)</li>
              <li><strong>a little/a few</strong> (with "a") = positive (some, enough)</li>
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
              <span className="text-lg text-slate-700 dark:text-slate-300">I have <strong>few friends</strong> in this city. (negative - not many)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I have <strong>a few friends</strong> here. (positive - some)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">There's <strong>little hope</strong> of success. (negative)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">There's <strong>a little hope</strong> left. (positive - some)</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I have <strong>few money</strong>. (money is uncountable)</span>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Comparison Table
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-slate-300 dark:border-slate-600">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-700">
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-2">Meaning</th>
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-2">Countable</th>
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-2">Uncountable</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Negative (not enough)</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><strong>few</strong></td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><strong>little</strong></td></tr>
                <tr className="bg-slate-50 dark:bg-slate-800"><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Positive (some)</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><strong>a few</strong></td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><strong>a little</strong></td></tr>
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
              <strong>Incorrect:</strong> I have few time to finish this project.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct:</strong> I have little time to finish this project.
            </p>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Choose the correct word:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "There's _____ we can do about the situation." (little/few)
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
                  <strong>Answer:</strong> There's <strong>little</strong> we can do about the situation.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  ("We can do" refers to an uncountable amount of action/things.)
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
              <Link to="/grammar-mistakes/many-vs-much" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Many vs Much
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/less-people-or-fewer-people" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Less People or Fewer People?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/much-people-or-many-people" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Much People or Many People?
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

export default LittleVsFewPage;
