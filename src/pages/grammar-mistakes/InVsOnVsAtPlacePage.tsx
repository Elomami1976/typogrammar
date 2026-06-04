import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const InVsOnVsAtPlacePage: React.FC = () => {
  usePageMetadata({
    title: 'In vs. On vs. At for Place: Complete Guide | TypoGrammar',
    description: 'Learn when to use in, on, and at to describe location and place in English. Includes rules, examples, and common mistakes to avoid.',
    canonical: 'https://typogrammar.com/grammar-mistakes/in-vs-on-vs-at-place/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "In vs. On vs. At for Place",
    "description": "In is for enclosed spaces and areas. On is for surfaces and lines. At is for specific points and addresses.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/in-vs-on-vs-at-place" },
    "datePublished": "2026-04-18",
    "dateModified": "2026-04-18"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you say 'in the street' or 'on the street'?",
        "acceptedAnswer": { "@type": "Answer", "text": "In American English, 'on the street' is standard ('She lives on Oak Street'). In British English, 'in the street' is also common for being physically inside the street area. For addresses, 'on' is the more universal choice." }
      },
      {
        "@type": "Question",
        "name": "Is it 'at school' or 'in school'?",
        "acceptedAnswer": { "@type": "Answer", "text": "'At school' means physically at the school building: 'She is at school right now.' 'In school' means enrolled as a student: 'He is still in school' (not yet graduated). Both are correct but have different meanings." }
      },
      {
        "@type": "Question",
        "name": "When do you use 'in' vs 'at' for cities?",
        "acceptedAnswer": { "@type": "Answer", "text": "Use 'in' for cities and countries when talking about being inside the area: 'I live in London.' Use 'at' for a specific location within a city: 'I'll meet you at Trafalgar Square.'" }
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
        <span className="text-slate-900 dark:text-slate-100">In vs. On vs. At (Place)</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          In vs. On vs. At for Place: When to Use Each
        </h1>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-lg text-green-800 dark:text-green-200">
            <li><strong>In</strong> = inside an enclosed area, city, or country: "in the room," "in London," "in France"</li>
            <li><strong>On</strong> = on a surface, floor, or line (street): "on the table," "on the 2nd floor," "on Oxford Street"</li>
            <li><strong>At</strong> = at a specific point or address: "at the door," "at 10 Downing Street," "at the airport"</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">IN (enclosed / area)</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">Use for spaces you can be <strong>inside</strong> of:</p>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300 text-sm">
                <li>in the room / house / car</li>
                <li>in the park / garden</li>
                <li>in London / Paris</li>
                <li>in England / France</li>
                <li>in the world</li>
                <li>in a photo / picture</li>
                <li>in the newspaper</li>
                <li>in bed</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
              <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">ON (surface / line)</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">Use for <strong>surfaces</strong> and <strong>lines</strong> (streets, floors):</p>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300 text-sm">
                <li>on the table / floor / wall</li>
                <li>on the 3rd floor</li>
                <li>on Oxford Street</li>
                <li>on the left / right</li>
                <li>on the way</li>
                <li>on TV / the radio</li>
                <li>on the phone</li>
                <li>on a farm / island</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">AT (specific point)</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">Use for <strong>specific points</strong>, addresses, and institutions:</p>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300 text-sm">
                <li>at the door / gate</li>
                <li>at 15 Oak Street</li>
                <li>at the airport / station</li>
                <li>at school / work / home</li>
                <li>at the top / bottom</li>
                <li>at the bus stop</li>
                <li>at the corner</li>
                <li>at the table (sitting)</li>
              </ul>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-5 rounded-lg">
            <h3 className="text-lg font-bold text-teal-900 dark:text-teal-100 mb-3">Think of It as a Scale</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-2">The three prepositions follow a scale from <em>large/general</em> to <em>small/specific</em>:</p>
            <p className="text-slate-700 dark:text-slate-300 italic">"She lives <strong>in</strong> London, <strong>on</strong> Baker Street, <strong>at</strong> number 221."</p>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">IN = country/city level. ON = street level. AT = building/number level.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Pairs and Tricky Cases
          </h2>
          <div className="space-y-4">
            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-lg">
              <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2">at school vs. in school</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm"><strong>at school</strong> = physically at the school building</p>
              <p className="text-slate-700 dark:text-slate-300 text-sm"><strong>in school</strong> = enrolled as a student (still studying)</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-lg">
              <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2">in the corner vs. at the corner</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm"><strong>in the corner</strong> = inside a room (The lamp is in the corner.)</p>
              <p className="text-slate-700 dark:text-slate-300 text-sm"><strong>at the corner</strong> = the corner of a street (Turn left at the corner.)</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-lg">
              <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2">in bed vs. on the bed</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm"><strong>in bed</strong> = sleeping or resting (I was in bed by 10.)</p>
              <p className="text-slate-700 dark:text-slate-300 text-sm"><strong>on the bed</strong> = on top of the bed surface (She put the clothes on the bed.)</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The keys are <strong>in</strong> the drawer.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">There is a picture <strong>on</strong> the wall.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I'll meet you <strong>at</strong> the entrance.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">She works <strong>at</strong> London. (city = use "in")</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She works <strong>in</strong> London.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">The book is <strong>at</strong> the table.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The book is <strong>on</strong> the table.</span>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Choose the correct preposition:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "I saw him standing _____ the corner of the street, waiting for a taxi." (in / on / at)
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
                  <strong>Answer:</strong> I saw him standing <strong>at</strong> the corner of the street.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  "At the corner of a street" is a specific point (outdoors). Use <em>in the corner</em> only for corners inside a room.
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
              <Link to="/grammar-mistakes/in-vs-on-vs-at-time-and-place/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → In vs. On vs. At (Time and Place Overview)
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/arrive-in-or-arrive-at/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Arrive In or Arrive At?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/in-the-weekend-or-on-the-weekend/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → In the Weekend or On the Weekend?
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

export default InVsOnVsAtPlacePage;
