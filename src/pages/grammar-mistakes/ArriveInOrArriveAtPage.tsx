import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const ArriveInOrArriveAtPage: React.FC = () => {
  usePageMetadata({
    title: 'Arrive In or Arrive At: What\'s the Difference? | TypoGrammar',
    description: 'Learn when to use "arrive in" vs "arrive at." Use "arrive in" for cities, countries, and large areas. Use "arrive at" for specific places like buildings.',
    canonical: 'https://typogrammar.com/grammar-mistakes/arrive-in-or-arrive-at/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Arrive In or Arrive At: What's the Difference?",
    "description": "Use 'arrive in' for large places like cities and countries. Use 'arrive at' for specific locations like buildings, stations, and addresses.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/arrive-in-or-arrive-at" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When do you use arrive in vs arrive at?",
        "acceptedAnswer": { "@type": "Answer", "text": "Use 'arrive in' for large places: cities, countries, continents (arrive in Paris, arrive in Japan). Use 'arrive at' for specific places: buildings, stations, addresses (arrive at the airport, arrive at school)." }
      },
      {
        "@type": "Question",
        "name": "Can you say 'arrive to'?",
        "acceptedAnswer": { "@type": "Answer", "text": "No, 'arrive to' is incorrect in English. Always use 'arrive in' or 'arrive at.' Never say 'arrive to the station' - say 'arrive at the station.'" }
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
        <span className="text-slate-900 dark:text-slate-100">Arrive In or Arrive At</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Arrive In or Arrive At: What's the Difference?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            <strong>Arrive in</strong> = large places (cities, countries, continents)
          </p>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>Arrive at</strong> = specific places (buildings, stations, addresses)
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">ARRIVE IN 🌍</p>
              <p className="text-blue-800 dark:text-blue-200 mb-2">Large geographical areas</p>
              <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                <li>• Cities: arrive in London</li>
                <li>• Countries: arrive in France</li>
                <li>• Continents: arrive in Europe</li>
                <li>• Regions: arrive in California</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">ARRIVE AT 📍</p>
              <p className="text-purple-800 dark:text-purple-200 mb-2">Specific points/locations</p>
              <ul className="text-purple-700 dark:text-purple-300 text-sm space-y-1">
                <li>• Buildings: arrive at the hotel</li>
                <li>• Stations: arrive at the airport</li>
                <li>• Addresses: arrive at 123 Main St</li>
                <li>• Events: arrive at the meeting</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Warning:</strong> Never use "arrive to", this is always incorrect in English!
            </p>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
            <p className="text-lg text-teal-800 dark:text-teal-200">
              <strong>Special case - HOME:</strong> We say "arrive home" (no preposition needed).
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
              <span className="text-lg text-slate-700 dark:text-slate-300">We arrived <strong>in</strong> Tokyo at midnight. (city)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She arrived <strong>at</strong> the airport early. (building)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">They arrived <strong>in</strong> Australia last week. (country)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">He arrived <strong>at</strong> the office before 9 AM. (specific place)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">We arrived <strong>home</strong> tired. (no preposition)</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">We arrived <strong>to</strong> the hotel.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">She arrived <strong>at</strong> Paris.</span>
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
              <strong>Fill in with "in" or "at":</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "The train arrives _____ the station at 3 PM, and then we'll arrive _____ Berlin by 5 PM."
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
                  <strong>Answer:</strong> The train arrives <strong>at</strong> the station at 3 PM, and then we'll arrive <strong>in</strong> Berlin by 5 PM.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  "At" for the station (specific place), "in" for Berlin (city).
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
              <Link to="/grammar-mistakes/in-the-weekend-or-on-the-weekend/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → In the Weekend or On the Weekend?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/interested-in-or-interested-on/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Interested In or Interested On?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/enter-or-enter-to/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Enter or Enter To?
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

export default ArriveInOrArriveAtPage;
