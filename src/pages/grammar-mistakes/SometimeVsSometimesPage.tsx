import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const SometimeVsSometimesPage: React.FC = () => {
  usePageMetadata({
    title: 'Sometime vs Sometimes: What\'s the Difference? | TypoGrammar',
    description: 'Learn the difference between "sometime" (at an unspecified time) and "sometimes" (occasionally). Plus "some time" (a period of time).',
    canonical: 'https://typogrammar.com/grammar-mistakes/sometime-vs-sometimes/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Sometime vs Sometimes: What's the Difference?",
    "description": "'Sometime' means at an unspecified point in time. 'Sometimes' means occasionally or now and then. 'Some time' means a period or amount of time.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/sometime-vs-sometimes" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What's the difference between sometime and sometimes?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Sometime' (one word) means at an unspecified point in time: 'Let's meet sometime next week.' 'Sometimes' (with an s) means occasionally: 'I sometimes eat pizza.'" }
      },
      {
        "@type": "Question",
        "name": "When do I use 'some time' as two words?",
        "acceptedAnswer": { "@type": "Answer", "text": "Use 'some time' (two words) when referring to a period or amount of time: 'I need some time to think.' 'It takes some time to learn a language.'" }
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
        <span className="text-slate-900 dark:text-slate-100">Sometime vs Sometimes</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Sometime vs Sometimes: What's the Difference?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>Sometime</strong> = at an unspecified point in time<br />
            <strong>Sometimes</strong> = occasionally, now and then<br />
            <strong>Some time</strong> = a period/amount of time
          </p>
        </div>

        {/* Three Forms Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            The Three Forms
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">SOMETIME</p>
              <p className="text-blue-800 dark:text-blue-200 text-sm mb-2">At an unspecified time</p>
              <p className="text-blue-700 dark:text-blue-300 italic">"Let's meet sometime."</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">SOMETIMES</p>
              <p className="text-purple-800 dark:text-purple-200 text-sm mb-2">Occasionally</p>
              <p className="text-purple-700 dark:text-purple-300 italic">"I sometimes forget."</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="font-bold text-green-900 dark:text-green-100 mb-2">SOME TIME</p>
              <p className="text-green-800 dark:text-green-200 text-sm mb-2">A period of time</p>
              <p className="text-green-700 dark:text-green-300 italic">"I need some time."</p>
            </div>
          </div>
        </section>

        {/* Detailed Explanations */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            When to Use Each
          </h2>
          
          <div className="space-y-6">
            {/* Sometime */}
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">SOMETIME - Unspecified Point in Time</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                Use "sometime" when you don't know exactly when something will happen.
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✔</span>
                  <span className="text-slate-700 dark:text-slate-300">Call me <strong>sometime</strong> this week.</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✔</span>
                  <span className="text-slate-700 dark:text-slate-300">I'll finish this <strong>sometime</strong> tomorrow.</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✔</span>
                  <span className="text-slate-700 dark:text-slate-300">We should have coffee <strong>sometime</strong>.</span>
                </div>
              </div>
            </div>

            {/* Sometimes */}
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">SOMETIMES - Occasionally</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                Use "sometimes" to describe how often something happens (not always, not never).
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✔</span>
                  <span className="text-slate-700 dark:text-slate-300">I <strong>sometimes</strong> work from home.</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✔</span>
                  <span className="text-slate-700 dark:text-slate-300"><strong>Sometimes</strong> life is difficult.</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✔</span>
                  <span className="text-slate-700 dark:text-slate-300">She <strong>sometimes</strong> forgets her keys.</span>
                </div>
              </div>
            </div>

            {/* Some time */}
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">SOME TIME - A Period of Time</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                Use "some time" (two words) when referring to a duration or amount of time.
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✔</span>
                  <span className="text-slate-700 dark:text-slate-300">I need <strong>some time</strong> to think about this.</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✔</span>
                  <span className="text-slate-700 dark:text-slate-300">It takes <strong>some time</strong> to learn a language.</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✔</span>
                  <span className="text-slate-700 dark:text-slate-300">We haven't seen each other in <strong>some time</strong>.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistakes
          </h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I <strong>sometime</strong> eat at that restaurant.</span>
              <span className="text-green-600 dark:text-green-400 ml-2">→ sometimes</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">Let's meet <strong>sometimes</strong> next week.</span>
              <span className="text-green-600 dark:text-green-400 ml-2">→ sometime</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I need <strong>sometime</strong> to decide.</span>
              <span className="text-green-600 dark:text-green-400 ml-2">→ some time</span>
            </div>
          </div>
        </section>

        {/* Memory Trick Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Memory Trick
          </h2>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <ul className="text-purple-700 dark:text-purple-300 space-y-2 text-lg">
              <li>• <strong>Sometimes</strong> has an "S" at the end = <strong>S</strong>ometimes happens (frequency)</li>
              <li>• <strong>Sometime</strong> = at <strong>some</strong> point in <strong>time</strong> (when)</li>
              <li>• <strong>Some time</strong> = <strong>some</strong> amount of <strong>time</strong> (duration)</li>
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
              <strong>Fill in the blank:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "I _____ make mistakes, but that's how I learn." (sometime / sometimes / some time)
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
                  <strong>Answer:</strong> I <strong>sometimes</strong> make mistakes, but that's how I learn.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  "Sometimes" means occasionally. We're talking about how often, not when or how long.
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
              <Link to="/grammar-mistakes/everyday-vs-every-day/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Everyday vs Every Day
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/a-lot-or-alot/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → A Lot or Alot?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/into-vs-in-to/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Into vs In To
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

export default SometimeVsSometimesPage;
