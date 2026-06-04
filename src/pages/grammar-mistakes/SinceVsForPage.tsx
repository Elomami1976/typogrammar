import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const SinceVsForPage: React.FC = () => {
  usePageMetadata({
    title: 'Since vs. For: What\'s the Difference? | TypoGrammar',
    description: 'Learn the difference between since and for in English. Since refers to a specific point in time, while for refers to a duration or period of time.',
    canonical: 'https://typogrammar.com/grammar-mistakes/since-vs-for/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Since vs. For",
    "description": "Since refers to the starting point of an action (since Monday, since 2019). For refers to the duration or length of time (for three days, for two years).",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/since-vs-for" },
    "datePublished": "2026-04-18",
    "dateModified": "2026-04-18"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between since and for?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Since' is followed by a specific point in time (since Monday, since 2010, since I was a child). 'For' is followed by a period of time (for three days, for two years, for a long time). Both are used with the present perfect tense." }
      },
      {
        "@type": "Question",
        "name": "Is it 'since three hours' or 'for three hours'?",
        "acceptedAnswer": { "@type": "Answer", "text": "The correct phrase is 'for three hours.' 'Three hours' is a duration (a period of time), so use 'for.' Use 'since' only for a specific point in time, like 'since 3 o'clock.'" }
      },
      {
        "@type": "Question",
        "name": "Can I use since with the past simple?",
        "acceptedAnswer": { "@type": "Answer", "text": "In some cases yes, but 'since' is most commonly used with the present perfect tense. 'I have lived here since 2015.' Using past simple with 'since' in the main clause is less common and can sound unnatural." }
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
        <span className="text-slate-900 dark:text-slate-100">Since vs. For</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Since vs. For: What's the Difference?
        </h1>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-lg text-green-800 dark:text-green-200">
            <li><strong>Since</strong> = a specific point in time when something started → "since Monday," "since 2018," "since I was born"</li>
            <li><strong>For</strong> = a length or duration of time → "for three days," "for two years," "for a long time"</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">SINCE (point in time)</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">Use <strong>since</strong> to show when something started:</p>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                <li>since <em>Monday</em></li>
                <li>since <em>January</em></li>
                <li>since <em>2015</em></li>
                <li>since <em>this morning</em></li>
                <li>since <em>she left</em></li>
                <li>since <em>the beginning</em></li>
              </ul>
              <div className="mt-3 p-3 bg-blue-100 dark:bg-blue-900/40 rounded">
                <p className="text-sm text-blue-800 dark:text-blue-200 font-medium">Question: Since when? When did it start?</p>
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
              <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">FOR (period of time)</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">Use <strong>for</strong> to show how long something lasted:</p>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                <li>for <em>three days</em></li>
                <li>for <em>two years</em></li>
                <li>for <em>six months</em></li>
                <li>for <em>a long time</em></li>
                <li>for <em>hours</em></li>
                <li>for <em>ages</em></li>
              </ul>
              <div className="mt-3 p-3 bg-green-100 dark:bg-green-900/40 rounded">
                <p className="text-sm text-green-800 dark:text-green-200 font-medium">Question: For how long? How long did it last?</p>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-5 rounded-lg">
            <h3 className="text-lg font-bold text-teal-900 dark:text-teal-100 mb-2">Tense Note</h3>
            <p className="text-slate-700 dark:text-slate-300">Both <em>since</em> and <em>for</em> are most commonly used with the <strong>present perfect</strong> tense when the action continues up to now:</p>
            <p className="text-slate-700 dark:text-slate-300 italic mt-2">"I have lived here <strong>since</strong> 2010." (started in 2010, still here now)</p>
            <p className="text-slate-700 dark:text-slate-300 italic mt-1">"I have lived here <strong>for</strong> 14 years." (14 years of duration)</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I have been waiting <strong>since</strong> 9 o'clock.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I have been waiting <strong>for</strong> two hours.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I have been waiting <strong>since</strong> two hours.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I have been waiting <strong>for</strong> 9 o'clock.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She has worked here <strong>since</strong> she graduated.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She has worked here <strong>for</strong> five years.</span>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistake
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Incorrect:</strong> I haven't seen him since a long time.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct:</strong> I haven't seen him for a long time.
            </p>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm">
            "A long time" is a duration (period), not a point in time. Always use <em>for</em> with duration expressions.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Quick Comparison Table
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-slate-700 dark:text-slate-300">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-700">
                  <th className="p-3 border border-slate-200 dark:border-slate-600 font-bold">Word</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-600 font-bold">Follows</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-600 font-bold">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 font-bold text-blue-600 dark:text-blue-400">since</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">a point in time (when)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 italic">since Monday / since 2010</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-700/30">
                  <td className="p-3 border border-slate-200 dark:border-slate-600 font-bold text-green-600 dark:text-green-400">for</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">a period of time (how long)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 italic">for three days / for a long time</td>
                </tr>
              </tbody>
            </table>
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
              "They have been married _____ 20 years." (since / for)
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
                  <strong>Answer:</strong> They have been married <strong>for</strong> 20 years.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  "20 years" is a duration, so use <em>for</em>. (Compare: "They have been married since 2004.")
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
              <Link to="/grammar-mistakes/during-vs-for-vs-while/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → During vs. For vs. While
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/still-vs-yet-vs-already/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Still vs. Yet vs. Already
              </Link>
            </li>
            <li>
              <Link to="/topics/present-perfect/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Present Perfect Tense
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

export default SinceVsForPage;
