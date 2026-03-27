import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const SpeakVsTalkPage: React.FC = () => {
  usePageMetadata({
    title: 'Speak vs. Talk: What\'s the Difference? | TypoGrammar',
    description: 'Learn the difference between speak and talk in English. Speak is more formal, talk is more casual. Clear examples and usage rules.',
    canonical: 'https://typogrammar.com/grammar-mistakes/speak-vs-talk'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Speak vs. Talk",
    "description": "Speak is more formal and often used for one-way communication. Talk is more casual and implies conversation or discussion.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/speak-vs-talk" },
    "datePublished": "2026-03-07",
    "dateModified": "2026-03-07"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between speak and talk?",
        "acceptedAnswer": { "@type": "Answer", "text": "Speak is more formal and often one-directional (speak a language, speak to an audience). Talk is more casual and implies two-way conversation (talk to a friend, talk about something)." }
      },
      {
        "@type": "Question",
        "name": "Do you say 'speak with' or 'talk with'?",
        "acceptedAnswer": { "@type": "Answer", "text": "Both are correct. 'Speak with' is more formal, while 'talk with' is more casual. 'Talk to' is more common than 'speak to' in everyday conversation." }
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
        <span className="text-slate-900 dark:text-slate-100">Speak vs. Talk</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Speak vs. Talk: What's the Difference?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            <strong>Speak</strong> is more formal and often refers to one-way communication or language ability.
          </p>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>Talk</strong> is more casual and implies a two-way conversation or discussion.
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">SPEAK</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">Use "speak" for:</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>Languages (speak English)</li>
                <li>Formal situations</li>
                <li>Public speaking</li>
                <li>One-way communication</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2">TALK</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">Use "talk" for:</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>Conversations (talk to/with someone)</li>
                <li>Casual situations</li>
                <li>Discussions about topics</li>
                <li>Two-way communication</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Phrases Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Phrases
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">SPEAK + ...</h3>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                <li>✔ speak English/French/etc.</li>
                <li>✔ speak to someone (formal)</li>
                <li>✔ speak at a conference</li>
                <li>✔ speak publicly</li>
                <li>✔ speak your mind</li>
                <li>✔ speak up</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">TALK + ...</h3>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                <li>✔ talk to/with someone</li>
                <li>✔ talk about something</li>
                <li>✔ talk on the phone</li>
                <li>✔ talk business</li>
                <li>✔ small talk</li>
                <li>✔ talk it over</li>
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
              <span className="text-lg text-slate-700 dark:text-slate-300">She <strong>speaks</strong> four languages fluently.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Can I <strong>talk</strong> to you for a minute?</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The CEO will <strong>speak</strong> at the conference.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">We need to <strong>talk</strong> about the project.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">She <strong>talks</strong> four languages.</span>
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
              <strong>Incorrect:</strong> I can talk Japanese. (for language ability)
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct:</strong> I can speak Japanese.
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
              "We need to _____ about your grades." (speak/talk)
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
                  <strong>Answer:</strong> We need to <strong>talk</strong> about your grades.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  (This is a discussion about a topic, so "talk about" is correct.)
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
              <Link to="/grammar-mistakes/listen-vs-hear" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Listen vs. Hear
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/do-vs-make" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Do vs. Make
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/bring-vs-take" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Bring vs. Take
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

export default SpeakVsTalkPage;
