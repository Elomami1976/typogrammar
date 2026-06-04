import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const SomeVsAnyPage: React.FC = () => {
  usePageMetadata({
    title: 'Some vs Any: What\'s the Difference? | TypoGrammar',
    description: 'Learn when to use "some" vs "any." Some is for positive statements and offers. Any is for questions and negatives.',
    canonical: 'https://typogrammar.com/grammar-mistakes/some-vs-any/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Some vs Any: What's the Difference?",
    "description": "Some is typically used in positive statements and offers/requests. Any is used in questions and negative sentences. Learn the rules and exceptions.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/some-vs-any" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between some and any?",
        "acceptedAnswer": { "@type": "Answer", "text": "Some is used in positive statements ('I have some money') and offers/requests ('Would you like some tea?'). Any is used in questions ('Do you have any questions?') and negatives ('I don't have any money')." }
      },
      {
        "@type": "Question",
        "name": "Can you use some in questions?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, use 'some' in questions when offering or requesting something, or when you expect 'yes' as an answer. 'Would you like some coffee?' 'Can I have some water?'" }
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
        <span className="text-slate-900 dark:text-slate-100">Some vs Any</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Some vs Any: What's the Difference?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            <strong>Some</strong> = positive statements, offers, requests
          </p>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>Any</strong> = questions, negative sentences
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">SOME ✓</p>
              <p className="text-blue-800 dark:text-blue-200 mb-2">Positive contexts</p>
              <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                <li>• Positive statements: "I have some ideas."</li>
                <li>• Offers: "Would you like some tea?"</li>
                <li>• Requests: "Can I have some water?"</li>
                <li>• Expected "yes": "Did someone call?"</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">ANY ❓</p>
              <p className="text-purple-800 dark:text-purple-200 mb-2">Questions & negatives</p>
              <ul className="text-purple-700 dark:text-purple-300 text-sm space-y-1">
                <li>• Questions: "Do you have any questions?"</li>
                <li>• Negatives: "I don't have any money."</li>
                <li>• With "if": "If you need any help..."</li>
                <li>• "It doesn't matter which": "Any color is fine."</li>
              </ul>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-teal-800 dark:text-teal-200">
              <strong>Key insight:</strong> Use "some" when you expect something exists or expect "yes." Use "any" when you're genuinely uncertain or in negatives.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <p className="font-bold text-slate-800 dark:text-slate-200 mb-2">Special meaning of "any":</p>
            <p className="text-slate-700 dark:text-slate-300">
              "Any" can mean "it doesn't matter which": "You can sit in <u>any</u> chair." "Call me <u>any</u>time."
            </p>
          </div>
        </section>

        {/* Examples Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          
          <p className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">SOME:</p>
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I bought <strong>some</strong> apples. (positive)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Would you like <strong>some</strong> coffee? (offer)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Can I have <strong>some</strong> sugar? (request)</span>
            </div>
          </div>

          <p className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">ANY:</p>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Do you have <strong>any</strong> questions? (question)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I don't have <strong>any</strong> money. (negative)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">If you see <strong>any</strong> problems, let me know. (with "if")</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Any</strong> seat is fine. (doesn't matter which)</span>
            </div>
          </div>
        </section>

        {/* Compounds Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Compound Words
          </h2>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <p className="text-slate-700 dark:text-slate-300 mb-2">The same rules apply to compounds:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-slate-800 dark:text-slate-200">SOME-:</p>
                <p className="text-slate-600 dark:text-slate-400">someone, something, somewhere, somebody</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800 dark:text-slate-200">ANY-:</p>
                <p className="text-slate-600 dark:text-slate-400">anyone, anything, anywhere, anybody</p>
              </div>
            </div>
            <p className="text-slate-700 dark:text-slate-300 mt-3 italic">
              "Is <strong>anyone</strong> home?" vs "I saw <strong>someone</strong> outside."
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
              <strong>Fill in with "some" or "any":</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "I made _____ cookies. Would you like _____? I'm sorry, I don't have _____ milk though."
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
                  <strong>Answer:</strong> I made <strong>some</strong> cookies. Would you like <strong>some</strong>? I'm sorry, I don't have <strong>any</strong> milk though.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  First = positive statement, second = offer, third = negative sentence.
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
              <Link to="/grammar-mistakes/a-few-vs-few/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → A Few vs. Few
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/a-little-vs-little/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → A Little vs. Little
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/many-vs-much/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Many vs. Much
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

export default SomeVsAnyPage;
