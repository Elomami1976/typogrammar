import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const DuringVsForVsWhilePage: React.FC = () => {
  usePageMetadata({
    title: 'During vs. For vs. While: What\'s the Difference? | TypoGrammar',
    description: 'Learn the difference between during, for, and while in English. During is used with nouns, for is used with time periods, and while introduces a clause with a verb.',
    canonical: 'https://typogrammar.com/grammar-mistakes/during-vs-for-vs-while/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "During vs. For vs. While",
    "description": "During is a preposition followed by a noun. For is a preposition followed by a time period. While is a conjunction followed by a subject and verb.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/during-vs-for-vs-while" },
    "datePublished": "2026-04-18",
    "dateModified": "2026-04-18"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between during, for, and while?",
        "acceptedAnswer": { "@type": "Answer", "text": "'During' is a preposition used before a noun: 'during the meeting.' 'For' is a preposition showing duration: 'for two hours.' 'While' is a conjunction introducing a clause with a subject + verb: 'while I was working.'" }
      },
      {
        "@type": "Question",
        "name": "Is it 'during I was sleeping' or 'while I was sleeping'?",
        "acceptedAnswer": { "@type": "Answer", "text": "The correct form is 'while I was sleeping.' 'While' is a conjunction and must be followed by a subject and verb. 'During' is a preposition and must be followed by a noun: 'during my sleep.'" }
      },
      {
        "@type": "Question",
        "name": "Can 'during' and 'while' be used interchangeably?",
        "acceptedAnswer": { "@type": "Answer", "text": "No. During needs a noun after it: 'during the lecture.' While needs a clause: 'while the teacher was lecturing.' You cannot swap them directly without changing the structure." }
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
        <span className="text-slate-900 dark:text-slate-100">During vs. For vs. While</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          During vs. For vs. While: What's the Difference?
        </h1>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-lg text-green-800 dark:text-green-200">
            <li><strong>During</strong> + noun: "during the meeting," "during lunch"</li>
            <li><strong>For</strong> + time period: "for two hours," "for a week"</li>
            <li><strong>While</strong> + subject + verb: "while I was working," "while she slept"</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">DURING</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm mb-2">Preposition. Followed by a <strong>noun</strong>. Shows that something happened in a specific period.</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 text-sm">
                <li>during the exam</li>
                <li>during summer</li>
                <li>during the war</li>
                <li>during my holiday</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">FOR</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm mb-2">Preposition. Followed by a <strong>time duration</strong>. Shows how long something lasted.</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 text-sm">
                <li>for two hours</li>
                <li>for a week</li>
                <li>for three months</li>
                <li>for a long time</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2">WHILE</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm mb-2">Conjunction. Followed by a <strong>subject + verb</strong>. Shows two things happening at the same time.</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 text-sm">
                <li>while I was sleeping</li>
                <li>while she cooked</li>
                <li>while he reads</li>
                <li>while we waited</li>
              </ul>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-5 rounded-lg">
            <h3 className="text-lg font-bold text-teal-900 dark:text-teal-100 mb-2">Key Distinction</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-2"><strong>During</strong> vs. <strong>While</strong> both describe time, but they work differently grammatically:</p>
            <p className="text-slate-700 dark:text-slate-300 italic">"<strong>During</strong> the flight, I watched a movie." (during + noun: "the flight")</p>
            <p className="text-slate-700 dark:text-slate-300 italic mt-1">"<strong>While</strong> I was flying, I watched a movie." (while + clause: "I was flying")</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">He fell asleep <strong>during</strong> the lecture.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">He fell asleep <strong>while</strong> the teacher was lecturing.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">He fell asleep <strong>during</strong> the teacher was lecturing. (during cannot precede a clause)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I lived there <strong>for</strong> five years.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I lived there <strong>during</strong> five years.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She called me <strong>while</strong> I was cooking dinner.</span>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistake
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Incorrect:</strong> During I was in London, I visited many museums.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct:</strong> While I was in London, I visited many museums.
            </p>
            <p className="text-lg text-green-800 dark:text-green-200 mt-2">
              OR: During my time in London, I visited many museums. (during + noun phrase)
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Choose the correct word:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "Please don't talk _____ the presentation." (during / while / for)
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
                  <strong>Answer:</strong> Please don't talk <strong>during</strong> the presentation.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  "The presentation" is a noun, so <em>during</em> is correct.
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
              <Link to="/grammar-mistakes/since-vs-for/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Since vs. For
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/in-vs-on-vs-at-time-and-place/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → In vs. On vs. At (Time and Place)
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

export default DuringVsForVsWhilePage;
