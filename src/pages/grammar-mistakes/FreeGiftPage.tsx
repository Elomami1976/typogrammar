import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const FreeGiftPage: React.FC = () => {
  usePageMetadata({
    title: 'Free Gift: Is It Redundant? | TypoGrammar',
    description: 'Is "free gift" redundant? Yes! A gift is already free by definition. Just say "gift." Learn why and see correct examples.',
    canonical: 'https://typogrammar.com/grammar-mistakes/free-gift/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Free Gift: Is It Redundant?",
    "description": "'Free gift' is redundant because a gift, by definition, is something given without payment. Just use 'gift' for clearer, more concise writing.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/free-gift" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is 'free gift' redundant?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, 'free gift' is redundant. A gift is, by definition, something given without expecting payment. If you pay for it, it's not a gift-it's a purchase. Just say 'gift.'" }
      },
      {
        "@type": "Question",
        "name": "Why do advertisers say 'free gift'?",
        "acceptedAnswer": { "@type": "Answer", "text": "Advertisers use 'free gift' for emphasis to make offers sound more appealing. While grammatically redundant, it's a common marketing tactic. In formal or academic writing, just use 'gift.'" }
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
        <span className="text-slate-900 dark:text-slate-100">Free Gift</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Free Gift: Is It Redundant?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            <strong>Yes, "free gift" is redundant.</strong>
          </p>
          <p className="text-lg text-green-800 dark:text-green-200">
            A gift is already free by definition. Just say <strong>"gift."</strong>
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Why Is It Redundant?
          </h2>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-blue-800 dark:text-blue-200">
              <strong>Gift</strong> = something given voluntarily without payment
            </p>
          </div>

          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            If you have to pay for something, it's not a gift-it's a purchase. Therefore, all gifts are free by definition, making "free gift" redundant.
          </p>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
            <p className="text-lg text-teal-800 dark:text-teal-200">
              <strong>Think about it:</strong> Have you ever received a gift and then been asked to pay for it? That wouldn't be a gift!
            </p>
          </div>
        </section>

        {/* Why It's Common Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Why Do People Say It?
          </h2>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              <strong>Marketing emphasis:</strong> Advertisers use "free gift" to make offers sound more appealing. The word "free" grabs attention.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              While common in advertising, avoid "free gift" in formal writing, academic work, or professional communication.
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
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">You'll receive a <strong>free gift</strong> with your purchase.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">You'll receive a <strong>gift</strong> with your purchase.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">Sign up now for a <strong>free gift</strong>!</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Sign up now for a <strong>gift</strong>!</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Sign up now for a <strong>complimentary gift</strong>!</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">We're giving away <strong>free gifts</strong> to attendees.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">We're giving <strong>gifts</strong> to attendees.</span>
            </div>
          </div>
        </section>

        {/* Similar Redundancies Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Similar Redundancies
          </h2>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <ul className="text-slate-700 dark:text-slate-300 space-y-2">
              <li>• <span className="line-through">free bonus</span> → <strong>bonus</strong></li>
              <li>• <span className="line-through">added bonus</span> → <strong>bonus</strong></li>
              <li>• <span className="line-through">unexpected surprise</span> → <strong>surprise</strong></li>
              <li>• <span className="line-through">free giveaway</span> → <strong>giveaway</strong></li>
            </ul>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Fix this sentence:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "Subscribe today and receive a free gift worth $50!"
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
                  <strong>Corrected:</strong> "Subscribe today and receive a <strong>gift</strong> worth $50!"
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  Alternatively: "Subscribe today and receive a complimentary item worth $50!"
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
              <Link to="/grammar-mistakes/advance-planning/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Advance Planning (Redundant?)
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/end-result/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → End Result (Redundant?)
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/final-outcome/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Final Outcome (Redundant?)
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

export default FreeGiftPage;
