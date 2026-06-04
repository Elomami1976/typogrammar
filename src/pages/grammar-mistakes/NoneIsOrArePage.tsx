import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const NoneIsOrArePage: React.FC = () => {
  usePageMetadata({
    title: 'None Is or None Are? Which One Is Correct | TypoGrammar',
    description: 'Learn whether to say "none is" or "none are." Both can be correct! None takes singular or plural verbs depending on context and intended meaning.',
    canonical: 'https://typogrammar.com/grammar-mistakes/none-is-or-are/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "None Is or None Are?",
    "description": "Both 'none is' and 'none are' can be correct. None can take either a singular or plural verb depending on whether you're emphasizing 'not one' or 'not any.'",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/none-is-or-are" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it 'none is' or 'none are'?",
        "acceptedAnswer": { "@type": "Answer", "text": "Both can be correct. Use 'none is' when emphasizing 'not one.' Use 'none are' when 'none' refers to a plural noun. In modern English, 'none are' is often preferred." }
      },
      {
        "@type": "Question",
        "name": "When should I use 'none is'?",
        "acceptedAnswer": { "@type": "Answer", "text": "Use 'none is' when you want to emphasize 'not a single one' or when 'none' refers to an uncountable noun (e.g., 'None of the water is clean')." }
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
        <span className="text-slate-900 dark:text-slate-100">None Is or Are</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          None Is or None Are? Which One Is Correct
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8 dark:bg-blue-900/30 dark:border-blue-400">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-blue-800 dark:text-blue-200 mb-2">
            <strong>Both can be correct!</strong>
          </p>
          <p className="text-blue-800 dark:text-blue-200">
            Use <strong>"none is"</strong> to emphasize "not one." Use <strong>"none are"</strong> when referring to a plural noun. Both are grammatically acceptable in modern English.
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            <strong>None</strong> is unique among indefinite pronouns. It can be treated as singular OR plural depending on the context:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
              <p className="font-bold text-slate-800 dark:text-slate-200 mb-2">Use "none is" (singular):</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>When emphasizing "not one"</li>
                <li>With uncountable nouns</li>
                <li>In formal writing (traditional)</li>
              </ul>
            </div>
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
              <p className="font-bold text-slate-800 dark:text-slate-200 mb-2">Use "none are" (plural):</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>With plural nouns</li>
                <li>When meaning "not any"</li>
                <li>In everyday usage (common)</li>
              </ul>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
            <p className="text-lg text-teal-800 dark:text-teal-200">
              <strong>Tip:</strong> When in doubt, look at what "none" refers to. If it's a plural noun, "none are" is usually more natural.
            </p>
          </div>
        </section>

        {/* Examples Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">"None is" (singular)</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">None of the cake <strong>is</strong> left. (uncountable)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">None of this <strong>is</strong> true. (uncountable)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">None <strong>is</strong> more important than family. (emphasizing "not one")</span>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">"None are" (plural)</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">None of the students <strong>are</strong> absent today. (plural noun)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">None of my friends <strong>are</strong> coming to the party. (plural noun)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">None of the answers <strong>are</strong> correct. (plural noun)</span>
            </div>
          </div>
        </section>

        {/* Both Acceptable Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            When Both Are Acceptable
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            In many cases, both forms are correct-it depends on what you want to emphasize:
          </p>
          <div className="space-y-4">
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
              <p className="text-lg text-slate-800 dark:text-slate-200 mb-2">
                <strong>None of the books is damaged.</strong>
              </p>
              <p className="text-slate-600 dark:text-slate-400">→ Emphasizes "not a single one of the books"</p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
              <p className="text-lg text-slate-800 dark:text-slate-200 mb-2">
                <strong>None of the books are damaged.</strong>
              </p>
              <p className="text-slate-600 dark:text-slate-400">→ More natural in everyday speech, meaning "not any of the books"</p>
            </div>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Which is better?</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "None of the milk _____ spoiled." (is/are)
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
                  <strong>Answer:</strong> None of the milk <strong>is</strong> spoiled.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  "Milk" is uncountable, so use the singular verb "is."
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
              <Link to="/grammar-mistakes/a-number-of-vs-the-number-of/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → A Number Of vs The Number Of
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/everyone-is-or-everyone-are/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Everyone Is or Everyone Are?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/each-are-or-each-is/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Each Are or Each Is?
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

export default NoneIsOrArePage;
