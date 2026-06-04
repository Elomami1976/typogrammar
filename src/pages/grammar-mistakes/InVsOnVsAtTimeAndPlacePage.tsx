import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const InVsOnVsAtTimeAndPlacePage: React.FC = () => {
  usePageMetadata({
    title: 'In vs. On vs. At: Time and Place Prepositions | TypoGrammar',
    description: 'Learn when to use in, on, and at for both time and place in English. Complete guide with clear rules, tables, and examples for all uses.',
    canonical: 'https://typogrammar.com/grammar-mistakes/in-vs-on-vs-at-time-and-place/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "In vs. On vs. At: Time and Place Prepositions",
    "description": "A complete guide to using in, on, and at for both time and place expressions in English, with rules, examples, and practice.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/in-vs-on-vs-at-time-and-place" },
    "datePublished": "2026-04-18",
    "dateModified": "2026-04-18"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When do you use in, on, and at for time?",
        "acceptedAnswer": { "@type": "Answer", "text": "Use 'in' for long periods (months, years, seasons, centuries): 'in January,' 'in 2020.' Use 'on' for specific days and dates: 'on Monday,' 'on March 15th.' Use 'at' for precise times and fixed periods: 'at 3 o'clock,' 'at noon,' 'at night.'" }
      },
      {
        "@type": "Question",
        "name": "When do you use in, on, and at for place?",
        "acceptedAnswer": { "@type": "Answer", "text": "Use 'in' for enclosed spaces, cities, countries: 'in the room,' 'in London.' Use 'on' for surfaces or lines: 'on the table,' 'on the street.' Use 'at' for specific points or addresses: 'at the bus stop,' 'at 15 Baker Street.'" }
      },
      {
        "@type": "Question",
        "name": "Is it 'in the morning' or 'at the morning'?",
        "acceptedAnswer": { "@type": "Answer", "text": "The correct phrase is 'in the morning.' Use 'in' for parts of the day: in the morning, in the afternoon, in the evening. But use 'at' for night: at night." }
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
        <span className="text-slate-900 dark:text-slate-100">In vs. On vs. At</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          In vs. On vs. At: Time and Place Prepositions
        </h1>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">Quick Answer</h2>
          <div className="grid md:grid-cols-3 gap-4 text-green-800 dark:text-green-200">
            <div>
              <p className="font-bold text-lg mb-1">IN (large / general)</p>
              <p className="text-sm">Time: months, years, seasons</p>
              <p className="text-sm">Place: cities, countries, rooms</p>
            </div>
            <div>
              <p className="font-bold text-lg mb-1">ON (specific / surface)</p>
              <p className="text-sm">Time: days, dates</p>
              <p className="text-sm">Place: surfaces, streets</p>
            </div>
            <div>
              <p className="font-bold text-lg mb-1">AT (precise / point)</p>
              <p className="text-sm">Time: exact times, fixed expressions</p>
              <p className="text-sm">Place: exact locations, addresses</p>
            </div>
          </div>
        </div>

        {/* TIME Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Time Prepositions
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse text-slate-700 dark:text-slate-300">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-700">
                  <th className="p-3 border border-slate-200 dark:border-slate-600 font-bold">Preposition</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-600 font-bold">Use for Time</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-600 font-bold">Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 font-bold text-blue-600 dark:text-blue-400">in</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">months, years, seasons, centuries, parts of day</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 italic">in January, in 2024, in summer, in the morning</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-700/30">
                  <td className="p-3 border border-slate-200 dark:border-slate-600 font-bold text-green-600 dark:text-green-400">on</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">days of the week, specific dates, special days</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 italic">on Monday, on 15th March, on Christmas Day</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 font-bold text-purple-600 dark:text-purple-400">at</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">exact times, fixed expressions (noon, night, midnight)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 italic">at 9 o'clock, at noon, at night, at the weekend</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">IN (time)</h3>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300 text-sm">
                <li>in the morning / afternoon / evening</li>
                <li>in January / February</li>
                <li>in spring / summer</li>
                <li>in 1990 / in 2025</li>
                <li>in the 21st century</li>
                <li>in the past / future</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h3 className="font-bold text-green-900 dark:text-green-100 mb-2">ON (time)</h3>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300 text-sm">
                <li>on Monday / Tuesday</li>
                <li>on 5th April</li>
                <li>on Christmas Day</li>
                <li>on my birthday</li>
                <li>on weekdays</li>
                <li>on New Year's Eve</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-2">AT (time)</h3>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300 text-sm">
                <li>at 8 o'clock</li>
                <li>at noon / midnight</li>
                <li>at night</li>
                <li>at the weekend (BrE)</li>
                <li>at Christmas (period)</li>
                <li>at the moment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PLACE Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Place Prepositions
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse text-slate-700 dark:text-slate-300">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-700">
                  <th className="p-3 border border-slate-200 dark:border-slate-600 font-bold">Preposition</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-600 font-bold">Use for Place</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-600 font-bold">Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 font-bold text-blue-600 dark:text-blue-400">in</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">enclosed spaces, areas, cities, countries</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 italic">in the room, in Paris, in France, in the box</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-700/30">
                  <td className="p-3 border border-slate-200 dark:border-slate-600 font-bold text-green-600 dark:text-green-400">on</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">surfaces, lines (streets), floors, media</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 italic">on the table, on Main Street, on the 3rd floor, on TV</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 font-bold text-purple-600 dark:text-purple-400">at</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">specific points, addresses, institutions</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 italic">at the bus stop, at 15 Oak Street, at school, at work</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I was born <strong>in</strong> 1995, <strong>on</strong> a Monday, <strong>at</strong> 6 am.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She lives <strong>in</strong> London, <strong>on</strong> Baker Street, <strong>at</strong> number 221.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I'll see you <strong>in</strong> Monday.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I'll see you <strong>on</strong> Monday.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">The meeting is <strong>on</strong> 3 o'clock.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The meeting is <strong>at</strong> 3 o'clock.</span>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Fill in the gap:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "The concert starts _____ 8 pm _____ Saturday evening." (in / on / at)
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
                  <strong>Answer:</strong> The concert starts <strong>at</strong> 8 pm <strong>on</strong> Saturday evening.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  "At" for exact time; "on" for day of the week.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Related Grammar
          </h2>
          <ul className="space-y-2 text-lg">
            <li>
              <Link to="/grammar-mistakes/in-vs-on-vs-at-place/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → In vs. On vs. At (Place Focus)
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/since-vs-for/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Since vs. For
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/arrive-in-or-arrive-at/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Arrive In or Arrive At?
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

export default InVsOnVsAtTimeAndPlacePage;
