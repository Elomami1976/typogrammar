import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const ListenVsHearPage: React.FC = () => {
  usePageMetadata({
    title: 'Listen vs. Hear: What\'s the Difference? | TypoGrammar',
    description: 'Learn the difference between listen and hear in English. Listen is active/intentional, hear is passive/involuntary. Clear examples and practice.',
    canonical: 'https://typogrammar.com/grammar-mistakes/listen-vs-hear'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Listen vs. Hear",
    "description": "Listen is active - you choose to pay attention. Hear is passive - sounds reach your ears without intention.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/listen-vs-hear" },
    "datePublished": "2026-03-07",
    "dateModified": "2026-03-07"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between listen and hear?",
        "acceptedAnswer": { "@type": "Answer", "text": "Listen is active and intentional - you pay attention to a sound. Hear is passive and involuntary - sounds reach your ears naturally." }
      },
      {
        "@type": "Question",
        "name": "Is it 'listen to music' or 'hear music'?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Listen to music' means you're actively paying attention. 'Hear music' means music reaches your ears without intention (like background music)." }
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
        <Link to="/grammar-mistakes" className="hover:text-blue-600 dark:hover:text-blue-400">Grammar Mistakes</Link>
        {' › '}
        <span className="text-slate-900 dark:text-slate-100">Listen vs. Hear</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Listen vs. Hear: What's the Difference?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            <strong>Listen</strong> is <em>active</em> – you choose to pay attention to a sound.
          </p>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>Hear</strong> is <em>passive</em> – sounds reach your ears without intention.
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">LISTEN (Active)</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">Characteristics:</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>Intentional attention</li>
                <li>Focus on a specific sound</li>
                <li>Requires effort</li>
                <li>Usually followed by "to"</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-400 mt-3 italic">"I'm listening to a podcast."</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2">HEAR (Passive)</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">Characteristics:</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>Involuntary/automatic</li>
                <li>Sounds reach your ears</li>
                <li>No effort required</li>
                <li>Like see vs. look</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-400 mt-3 italic">"I heard a loud noise outside."</p>
            </div>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300">
              <strong>Compare:</strong> Listen vs. Hear is like <strong>Look vs. See</strong> or <strong>Watch vs. Notice</strong>. The first is active, the second is passive.
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
              <span className="text-lg text-slate-700 dark:text-slate-300">I <strong>listen to</strong> music every morning. (actively, by choice)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Did you <strong>hear</strong> that noise? (passively, without intention)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Listen</strong> carefully to the instructions. (pay attention)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I can <strong>hear</strong> birds singing outside. (sounds reach me)</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I <strong>hear</strong> to music every day. ("hear to" is incorrect)</span>
            </div>
          </div>
        </section>

        {/* Important Note Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Important Grammar Note
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-2">
              <strong>Listen</strong> needs <strong>"to"</strong> before an object:
            </p>
            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 mb-4">
              <li>✔ Listen <strong>to</strong> the teacher</li>
              <li>✘ Listen the teacher</li>
            </ul>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-2">
              <strong>Hear</strong> does NOT need "to":
            </p>
            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300">
              <li>✔ I heard the news.</li>
              <li>✘ I heard to the news.</li>
            </ul>
          </div>
        </section>

        {/* Common Mistake Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistake
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Incorrect:</strong> I like to hear music while working.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct:</strong> I like to listen to music while working.
            </p>
            <p className="text-green-700 dark:text-green-300 mt-1">
              (Active choice to focus on music = listen)
            </p>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Choose the correct word:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "I was walking home when I _____ someone call my name." (listened/heard)
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
                  <strong>Answer:</strong> I was walking home when I <strong>heard</strong> someone call my name.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  (The sound reached your ears without intention—passive hearing.)
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
              <Link to="/grammar-mistakes/speak-vs-talk" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Speak vs. Talk
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/bring-vs-take" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Bring vs. Take
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/do-vs-make" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Do vs. Make
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → All Grammar Mistakes
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default ListenVsHearPage;
