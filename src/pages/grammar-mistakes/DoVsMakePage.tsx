import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const DoVsMakePage: React.FC = () => {
  usePageMetadata({
    title: 'Do vs. Make: What\'s the Difference? | TypoGrammar',
    description: 'Learn the difference between do and make in English. Do is for actions and tasks, make is for creating and producing. Clear examples and collocations.',
    canonical: 'https://typogrammar.com/grammar-mistakes/do-vs-make/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Do vs. Make",
    "description": "Do is used for actions, tasks, and work in general. Make is used for creating, producing, or building something.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/do-vs-make" },
    "datePublished": "2026-03-07",
    "dateModified": "2026-03-07"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between do and make?",
        "acceptedAnswer": { "@type": "Answer", "text": "Do is used for actions, tasks, and jobs (do homework, do the dishes). Make is used for creating or producing something (make a cake, make a decision)." }
      },
      {
        "@type": "Question",
        "name": "Is it 'do a mistake' or 'make a mistake'?",
        "acceptedAnswer": { "@type": "Answer", "text": "The correct phrase is 'make a mistake.' We also say 'make an error' and 'make an exception.'" }
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
        <span className="text-slate-900 dark:text-slate-100">Do vs. Make</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Do vs. Make: What's the Difference?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            <strong>Do</strong> is used for actions, tasks, and work in general.
          </p>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>Make</strong> is used for creating, producing, or building something.
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">DO</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">Use "do" for:</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>Tasks and chores</li>
                <li>Work and jobs</li>
                <li>General activities</li>
                <li>Replacing verbs (What are you doing?)</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2">MAKE</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">Use "make" for:</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>Creating or producing</li>
                <li>Food and drinks</li>
                <li>Plans and decisions</li>
                <li>Causing reactions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Collocations Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Collocations
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">DO + ...</h3>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                <li>✔ do homework</li>
                <li>✔ do the dishes</li>
                <li>✔ do the laundry</li>
                <li>✔ do your best</li>
                <li>✔ do business</li>
                <li>✔ do a favor</li>
                <li>✔ do exercise</li>
                <li>✔ do research</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">MAKE + ...</h3>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                <li>✔ make a mistake</li>
                <li>✔ make a decision</li>
                <li>✔ make breakfast</li>
                <li>✔ make money</li>
                <li>✔ make a promise</li>
                <li>✔ make progress</li>
                <li>✔ make an effort</li>
                <li>✔ make a plan</li>
              </ul>
            </div>
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
              <span className="text-lg text-slate-700 dark:text-slate-300">I need to <strong>do</strong> my homework.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She <strong>made</strong> a cake for the party.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">We <strong>made</strong> a decision to move abroad.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I <strong>did</strong> a mistake.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I <strong>made</strong> a mistake.</span>
            </div>
          </div>
        </section>

        {/* Common Mistake Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistake
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Incorrect:</strong> I need to do a decision.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct:</strong> I need to make a decision.
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
              <strong>Choose the correct word:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "Can you _____ me a favor?" (do/make)
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
                  <strong>Answer:</strong> Can you <strong>do</strong> me a favor?
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  ("Do a favor" is the correct collocation.)
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
              <Link to="/grammar-mistakes/advice-vs-advise/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Advice vs. Advise
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/speak-vs-talk/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Speak vs. Talk
              </Link>
            </li>
            <li>
              <Link to="/vocabulary/collocations/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → English Collocations
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

export default DoVsMakePage;
