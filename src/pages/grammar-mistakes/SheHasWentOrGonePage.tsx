import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const SheHasWentOrGonePage: React.FC = () => {
  usePageMetadata({
    title: 'She Has Went or She Has Gone? Which One Is Correct | TypoGrammar',
    description: 'Learn whether to say "she has went" or "she has gone." The correct form is "she has gone" because "gone" is the past participle of "go."',
    canonical: 'https://typogrammar.com/grammar-mistakes/she-has-went-or-gone'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "She Has Went or She Has Gone?",
    "description": "The correct form is 'she has gone.' Use 'went' for simple past (she went) and 'gone' with have/has/had (she has gone).",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/she-has-went-or-gone" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it 'she has went' or 'she has gone'?",
        "acceptedAnswer": { "@type": "Answer", "text": "The correct form is 'she has gone.' 'Gone' is the past participle of 'go' and must be used after have/has/had." }
      },
      {
        "@type": "Question",
        "name": "What is the difference between 'has gone' and 'went'?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Went' is simple past for completed actions (She went home). 'Has gone' is present perfect, indicating relevance to now (She has gone home, meaning she's not here now)." }
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
        <span className="text-slate-900 dark:text-slate-100">She Has Went or Gone</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          She Has Went or She Has Gone? Which One Is Correct
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            The correct form is <strong>"she has gone."</strong>
          </p>
          <p className="text-green-800 dark:text-green-200">
            "Gone" is the past participle of "go." After have/has/had, always use "gone," not "went."
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            The verb "go" is an irregular verb with three forms:
          </p>
          
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg mb-4">
            <table className="w-full text-left">
              <thead>
                <tr className="text-slate-800 dark:text-slate-200">
                  <th className="pb-2">Base Form</th>
                  <th className="pb-2">Simple Past</th>
                  <th className="pb-2">Past Participle</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="font-mono">go</td>
                  <td className="font-mono">went</td>
                  <td className="font-mono">gone</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">Simple Past: "went"</p>
              <p className="text-blue-800 dark:text-blue-200">Used alone (no helping verb)</p>
              <p className="text-blue-700 dark:text-blue-300 italic mt-2">"She went to the store."</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">Past Participle: "gone"</p>
              <p className="text-purple-800 dark:text-purple-200">Used with have/has/had</p>
              <p className="text-purple-700 dark:text-purple-300 italic mt-2">"She has gone to the store."</p>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <p className="text-lg text-amber-800 dark:text-amber-200">
              <strong>Meaning difference:</strong> "She went" = past action. "She has gone" = she left and is still away.
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
              <span className="text-lg text-slate-700 dark:text-slate-300">She <strong>has gone</strong> to the gym.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She <strong>has gone</strong> home for the holidays.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">My sister <strong>has gone</strong> to live abroad.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She <strong>went</strong> to the movies last night. (simple past - correct)</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">She <strong>has went</strong> to the doctor.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">She <strong>has went</strong> shopping.</span>
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
              <strong>Incorrect:</strong> She has went out with her friends.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct:</strong> She has gone out with her friends.
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
              <strong>Choose the correct form:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "Where has she _____ (went/gone)? I can't find her anywhere."
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
                  <strong>Answer:</strong> Where has she <strong>gone</strong>? I can't find her anywhere.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  After "has," use the past participle "gone."
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
              <Link to="/grammar-mistakes/i-have-went-or-have-gone" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → I Have Went or Have Gone?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/he-didnt-went-or-he-didnt-go" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → He Didn't Went or Didn't Go?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/he-has-came-or-come" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → He Has Came or Come?
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

export default SheHasWentOrGonePage;
