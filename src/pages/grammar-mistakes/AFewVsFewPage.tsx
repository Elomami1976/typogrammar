import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const AFewVsFewPage: React.FC = () => {
  usePageMetadata({
    title: 'A Few vs Few: What\'s the Difference? | TypoGrammar',
    description: 'Learn the difference between "a few" and "few." A few = some, positive. Few = almost none, negative. Small word, big difference!',
    canonical: 'https://typogrammar.com/grammar-mistakes/a-few-vs-few/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "A Few vs Few: What's the Difference?",
    "description": "'A few' has a positive meaning - some, enough. 'Few' has a negative meaning - almost none, not enough. Both are used with countable nouns.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/a-few-vs-few" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between a few and few?",
        "acceptedAnswer": { "@type": "Answer", "text": "'A few' = some, a small but sufficient number (positive). 'Few' = almost none, hardly any (negative). 'I have a few friends' (I have some friends - positive). 'I have few friends' (I hardly have any friends - negative)." }
      },
      {
        "@type": "Question",
        "name": "Is few positive or negative?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Few' (without 'a') is negative - it means 'almost none' or 'not enough.' 'A few' (with 'a') is positive - it means 'some' or 'enough.'" }
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
        <Link to="/grammar-mistakes/" className="hover:text-blue-600 dark:hover:text-blue-400">Grammar Mistakes</Link>
        {' › '}
        <span className="text-slate-900 dark:text-slate-100">A Few vs Few</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          A Few vs Few: What's the Difference?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            <strong>A few</strong> = some, a small number (POSITIVE ✓)
          </p>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>Few</strong> = almost none, hardly any (NEGATIVE ✗)
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="font-bold text-green-900 dark:text-green-100 mb-2">A FEW 😊</p>
              <p className="text-green-800 dark:text-green-200 mb-2">Some, a small but positive amount</p>
              <p className="text-green-700 dark:text-green-300 italic">"I have a few friends."</p>
              <p className="text-green-600 dark:text-green-400 text-sm mt-2">= I have some friends. That's good!</p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <p className="font-bold text-red-900 dark:text-red-100 mb-2">FEW 😔</p>
              <p className="text-red-800 dark:text-red-200 mb-2">Almost none, not enough</p>
              <p className="text-red-700 dark:text-red-300 italic">"I have few friends."</p>
              <p className="text-red-600 dark:text-red-400 text-sm mt-2">= I hardly have any friends. That's sad.</p>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-teal-800 dark:text-teal-200">
              <strong>Key insight:</strong> The tiny word "a" completely changes the meaning! "A few" is positive and optimistic. "Few" alone is negative and pessimistic.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <p className="font-bold text-slate-800 dark:text-slate-200 mb-2">Both are used with COUNTABLE nouns:</p>
            <p className="text-slate-700 dark:text-slate-300">
              a few books, few people, a few chances, few opportunities
            </p>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
              (For uncountable nouns, use "a little" / "little")
            </p>
          </div>
        </section>

        {/* Examples Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          
          <p className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">A FEW (positive):</p>
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">😊</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I have <strong>a few</strong> questions. (some questions - normal)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">😊</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">We still have <strong>a few</strong> minutes left. (enough time)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">😊</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She made <strong>a few</strong> mistakes. (some, but acceptable)</span>
            </div>
          </div>

          <p className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">FEW (negative):</p>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">😔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Few</strong> people understand this. (almost nobody)</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">😔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">He has <strong>few</strong> friends. (hardly any - lonely)</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">😔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">There are <strong>few</strong> opportunities. (not enough)</span>
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
                "I have <strong>a few</strong> dollars."
              </p>
              <p className="text-green-700 dark:text-green-300 text-sm">= I have some money. I can buy something.</p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <p className="text-lg text-red-800 dark:text-red-200">
                "I have <strong>few</strong> dollars."
              </p>
              <p className="text-red-700 dark:text-red-300 text-sm">= I hardly have any money. I can't afford much.</p>
            </div>
          </div>
        </section>

        {/* Quite a Few Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            "Quite a Few"
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="text-blue-800 dark:text-blue-200 mb-2">
              <strong>"Quite a few"</strong> = a fairly large number (more than "a few")
            </p>
            <p className="text-blue-700 dark:text-blue-300 italic">
              "Quite a few people came to the party." (= many people, more than expected)
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
              <strong>Choose "a few" or "few":</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "The movie was so boring that _____ people stayed until the end."
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
                  <strong>Answer:</strong> <strong>few</strong> people stayed until the end.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  "Few" (negative) - the context is negative (boring movie), so hardly anyone stayed.
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
              <Link to="/grammar-mistakes/a-little-vs-little/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → A Little vs. Little
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/little-vs-few/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Little vs. Few
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/some-vs-any/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Some vs. Any
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

export default AFewVsFewPage;
