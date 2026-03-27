import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const SoMuchVsSoManyPage: React.FC = () => {
  usePageMetadata({
    title: 'So Much vs So Many: What\'s the Difference? | TypoGrammar',
    description: 'Learn the difference between "so much" and "so many." So much is for uncountable nouns. So many is for countable nouns.',
    canonical: 'https://typogrammar.com/grammar-mistakes/so-much-vs-so-many'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "So Much vs So Many: What's the Difference?",
    "description": "So much is used with uncountable nouns (so much fun, so much love). So many is used with countable nouns (so many people, so many times).",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/so-much-vs-so-many" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between so much and so many?",
        "acceptedAnswer": { "@type": "Answer", "text": "So much is used with uncountable nouns (things you can't count): so much fun, so much help. So many is used with countable nouns (things you can count): so many friends, so many opportunities." }
      },
      {
        "@type": "Question",
        "name": "Is it 'so much' or 'so many' thanks?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Thanks' is uncountable, so we say 'Thank you so much' (not 'so many thanks'). However, 'many thanks' (without 'so') is acceptable in formal writing." }
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
        <span className="text-slate-900 dark:text-slate-100">So Much vs So Many</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          So Much vs So Many: What's the Difference?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            <strong>So much</strong> + uncountable nouns (fun, love, time)
          </p>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>So many</strong> + countable nouns (friends, books, chances)
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">SO MUCH 💖</p>
              <p className="text-blue-800 dark:text-blue-200 mb-2">Uncountable nouns</p>
              <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                <li>• so much fun</li>
                <li>• so much love</li>
                <li>• so much time</li>
                <li>• so much help</li>
                <li>• so much work</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">SO MANY 👥</p>
              <p className="text-purple-800 dark:text-purple-200 mb-2">Countable nouns</p>
              <ul className="text-purple-700 dark:text-purple-300 text-sm space-y-1">
                <li>• so many people</li>
                <li>• so many friends</li>
                <li>• so many times</li>
                <li>• so many chances</li>
                <li>• so many books</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-amber-800 dark:text-amber-200">
              <strong>Usage:</strong> "So much" and "so many" emphasize a large amount - often with positive emotion or surprise. They follow the same countable/uncountable rule as much/many.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <p className="font-bold text-slate-800 dark:text-slate-200 mb-2">"So much" as an adverb:</p>
            <p className="text-slate-700 dark:text-slate-300">
              "So much" can modify verbs and adjectives: "I love you <u>so much</u>." "Thank you <u>so much</u>."
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
              <span className="text-lg text-slate-700 dark:text-slate-300">We had <strong>so much</strong> fun at the party!</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">There were <strong>so many</strong> people at the concert.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She has <strong>so much</strong> talent.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I've made <strong>so many</strong> mistakes.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Thank you <strong>so much</strong>! (adverb)</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">There were <strong>so much</strong> people there.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">We had <strong>so many</strong> fun.</span>
            </div>
          </div>
        </section>

        {/* Common Expressions Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Expressions
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">SO MUCH:</p>
              <ul className="text-blue-700 dark:text-blue-300 space-y-1">
                <li>• Thank you so much!</li>
                <li>• I love you so much!</li>
                <li>• So much to do, so little time</li>
                <li>• So much for that idea...</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">SO MANY:</p>
              <ul className="text-purple-700 dark:text-purple-300 space-y-1">
                <li>• So many questions!</li>
                <li>• So many times before</li>
                <li>• So many reasons to...</li>
                <li>• So many options to choose from</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Fill in with "so much" or "so many":</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "I've learned _____ from this course and met _____ interesting people."
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
                  <strong>Answer:</strong> I've learned <strong>so much</strong> from this course and met <strong>so many</strong> interesting people.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  "Learned" (knowledge = uncountable) takes "so much"; "people" (countable) takes "so many."
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
              <Link to="/grammar-mistakes/too-much-vs-too-many" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Too Much vs. Too Many
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/many-vs-much" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Many vs. Much
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/little-vs-few" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Little vs. Few
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

export default SoMuchVsSoManyPage;
