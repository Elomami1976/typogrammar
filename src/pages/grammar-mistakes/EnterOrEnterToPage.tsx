import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const EnterOrEnterToPage: React.FC = () => {
  usePageMetadata({
    title: 'Enter or Enter To: Which Is Correct? | TypoGrammar',
    description: 'Is it "enter the room" or "enter to the room"? Learn the correct usage. "Enter" takes a direct object - no "to" needed.',
    canonical: 'https://typogrammar.com/grammar-mistakes/enter-or-enter-to/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Enter or Enter To: Which Is Correct?",
    "description": "'Enter' is a transitive verb that takes a direct object. Never use 'enter to' - say 'enter the building' not 'enter to the building.'",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/enter-or-enter-to" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it enter or enter to?",
        "acceptedAnswer": { "@type": "Answer", "text": "Always 'enter' without 'to.' 'Enter' takes a direct object. Say 'enter the room' NOT 'enter to the room.' This is different from 'go to' or 'come to.'" }
      },
      {
        "@type": "Question",
        "name": "Why do people say 'enter to'?",
        "acceptedAnswer": { "@type": "Answer", "text": "This mistake happens because we say 'go to' a place, so learners assume 'enter to' is similar. But 'enter' works differently - it's transitive and takes a direct object without any preposition." }
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
        <span className="text-slate-900 dark:text-slate-100">Enter or Enter To</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Enter or Enter To: Which Is Correct?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            <strong>Enter + place</strong> = ALWAYS correct ✓
          </p>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>Enter to + place</strong> = ALWAYS wrong ✗
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
            <p className="text-lg text-blue-800 dark:text-blue-200 mb-3">
              <strong>"Enter"</strong> is a transitive verb. It takes a direct object without any preposition.
            </p>
            <div className="text-blue-700 dark:text-blue-300 font-mono">
              <p>enter + place/thing</p>
              <p className="italic mt-2">"Enter the building." NOT "Enter to the building."</p>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-teal-800 dark:text-teal-200">
              <strong>Why this mistake happens:</strong> We say "go <u>to</u>" and "come <u>to</u>," so learners assume "enter to" follows the same pattern. But "enter" works like "visit" - no preposition needed.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <p className="font-bold text-slate-800 dark:text-slate-200 mb-2">Compare:</p>
            <div className="grid md:grid-cols-2 gap-4 text-slate-700 dark:text-slate-300">
              <div>
                <p className="font-semibold text-green-700 dark:text-green-400">No preposition:</p>
                <p>enter the room</p>
                <p>visit the museum</p>
                <p>reach the station</p>
                <p>approach the desk</p>
              </div>
              <div>
                <p className="font-semibold text-blue-700 dark:text-blue-400">With preposition:</p>
                <p>go to the room</p>
                <p>come to the museum</p>
                <p>get to the station</p>
                <p>walk to the desk</p>
              </div>
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
              <span className="text-lg text-slate-700 dark:text-slate-300">Please <strong>enter</strong> the building through the main door.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She <strong>entered</strong> the room quietly.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">You cannot <strong>enter</strong> the country without a visa.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The thief <strong>entered</strong> the house through a window.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Enter</strong> your password to continue.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">Please <strong>enter to</strong> the building.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">She <strong>entered into</strong> the room.</span>
            </div>
          </div>
        </section>

        {/* Enter Into Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            When "Enter Into" IS Correct
          </h2>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <p className="text-purple-800 dark:text-purple-200 mb-3">
              <strong>"Enter into"</strong> is correct only for abstract/formal situations, not physical locations:
            </p>
            <ul className="text-purple-700 dark:text-purple-300 space-y-2">
              <li>• enter into an agreement</li>
              <li>• enter into a contract</li>
              <li>• enter into negotiations</li>
              <li>• enter into a discussion</li>
            </ul>
            <p className="text-purple-700 dark:text-purple-300 italic mt-3">
              "The two companies entered into a partnership."
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
              <strong>Choose the correct sentence:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 mb-2">A) "The students entered to the classroom."</p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">B) "The students entered the classroom."</p>
            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showAnswer ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer && (
              <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <p className="text-lg text-green-800 dark:text-green-200">
                  <strong>Answer:</strong> B is correct: "The students entered the classroom."
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  "Enter" takes a direct object - no preposition needed for physical places.
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
              <Link to="/grammar-mistakes/arrive-in-or-arrive-at/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Arrive In or Arrive At?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/discuss-or-discuss-about/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Discuss or Discuss About?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/request-or-request-for/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Request or Request For?
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

export default EnterOrEnterToPage;
