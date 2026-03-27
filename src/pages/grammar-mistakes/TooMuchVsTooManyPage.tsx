import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const TooMuchVsTooManyPage: React.FC = () => {
  usePageMetadata({
    title: 'Too Much vs Too Many: What\'s the Difference? | TypoGrammar',
    description: 'Learn the difference between "too much" and "too many." Too much is for uncountable nouns. Too many is for countable nouns.',
    canonical: 'https://typogrammar.com/grammar-mistakes/too-much-vs-too-many'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Too Much vs Too Many: What's the Difference?",
    "description": "Too much is used with uncountable nouns (too much water, too much time). Too many is used with countable nouns (too many books, too many people).",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/too-much-vs-too-many" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between too much and too many?",
        "acceptedAnswer": { "@type": "Answer", "text": "Too much is used with uncountable nouns (things you can't count): too much water, too much stress. Too many is used with countable nouns (things you can count): too many cars, too many mistakes." }
      },
      {
        "@type": "Question",
        "name": "Is it too much people or too many people?",
        "acceptedAnswer": { "@type": "Answer", "text": "It's 'too many people.' People is a countable noun (you can count 1 person, 2 people, 3 people), so use 'too many.'" }
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
        <span className="text-slate-900 dark:text-slate-100">Too Much vs Too Many</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Too Much vs Too Many: What's the Difference?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            <strong>Too much</strong> + uncountable nouns (water, time, money)
          </p>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>Too many</strong> + countable nouns (books, people, cars)
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">TOO MUCH 💧</p>
              <p className="text-blue-800 dark:text-blue-200 mb-2">Uncountable nouns (can't count)</p>
              <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                <li>• too much water</li>
                <li>• too much time</li>
                <li>• too much money</li>
                <li>• too much stress</li>
                <li>• too much noise</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">TOO MANY 📚</p>
              <p className="text-purple-800 dark:text-purple-200 mb-2">Countable nouns (can count)</p>
              <ul className="text-purple-700 dark:text-purple-300 text-sm space-y-1">
                <li>• too many books</li>
                <li>• too many people</li>
                <li>• too many mistakes</li>
                <li>• too many cars</li>
                <li>• too many questions</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-amber-800 dark:text-amber-200">
              <strong>Test:</strong> Can you put a number in front? "Two waters" ❌ = uncountable (too much). "Two books" ✓ = countable (too many).
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <p className="font-bold text-slate-800 dark:text-slate-200 mb-2">"Too much" as an adverb:</p>
            <p className="text-slate-700 dark:text-slate-300">
              "Too much" can also modify verbs: "You work <u>too much</u>." "I think <u>too much</u>."
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
              <span className="text-lg text-slate-700 dark:text-slate-300">There's <strong>too much</strong> sugar in this coffee.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">There are <strong>too many</strong> cars on the road.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I have <strong>too much</strong> work to do.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She made <strong>too many</strong> mistakes on the test.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Don't eat <strong>too much</strong>! (adverb)</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">There are <strong>too much</strong> people here.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I spent <strong>too many</strong> money.</span>
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
              <strong>Fill in with "too much" or "too many":</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "I can't sleep because I drank _____ coffee and I have _____ things on my mind."
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
                  <strong>Answer:</strong> I can't sleep because I drank <strong>too much</strong> coffee and I have <strong>too many</strong> things on my mind.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  Coffee = uncountable (too much), things = countable (too many).
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
                → Many vs. Much
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/so-much-vs-so-many" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → So Much vs. So Many
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/less-people-or-fewer-people" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Less vs. Fewer
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

export default TooMuchVsTooManyPage;
