import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const IHaveWroteOrWrittenPage: React.FC = () => {
  usePageMetadata({
    title: 'I Have Wrote or I Have Written? Which One Is Correct | TypoGrammar',
    description: 'Learn whether to say "I have wrote" or "I have written." The correct form is "I have written" because "written" is the past participle of "write."',
    canonical: 'https://typogrammar.com/grammar-mistakes/i-have-wrote-or-written'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "I Have Wrote or I Have Written?",
    "description": "The correct form is 'I have written.' Use 'wrote' for simple past (I wrote) and 'written' with have/has/had (I have written).",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/i-have-wrote-or-written" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it 'I have wrote' or 'I have written'?",
        "acceptedAnswer": { "@type": "Answer", "text": "The correct form is 'I have written.' 'Written' is the past participle of 'write' and must be used after have/has/had." }
      },
      {
        "@type": "Question",
        "name": "When do you use 'wrote' vs 'written'?",
        "acceptedAnswer": { "@type": "Answer", "text": "Use 'wrote' for simple past (I wrote a letter). Use 'written' with helping verbs (I have written many books)." }
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
        <span className="text-slate-900 dark:text-slate-100">I Have Wrote or Written</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          I Have Wrote or I Have Written? Which One Is Correct
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            The correct form is <strong>"I have written."</strong>
          </p>
          <p className="text-green-800 dark:text-green-200">
            "Written" is the past participle of "write." After have/has/had, always use "written," not "wrote."
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            The verb "write" is an irregular verb with three forms:
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
                  <td className="font-mono">write</td>
                  <td className="font-mono">wrote</td>
                  <td className="font-mono">written</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">Simple Past: "wrote"</p>
              <p className="text-blue-800 dark:text-blue-200">Used alone (no helping verb)</p>
              <p className="text-blue-700 dark:text-blue-300 italic mt-2">"I wrote a letter yesterday."</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">Past Participle: "written"</p>
              <p className="text-purple-800 dark:text-purple-200">Used with have/has/had</p>
              <p className="text-purple-700 dark:text-purple-300 italic mt-2">"I have written three novels."</p>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <p className="text-lg font-mono text-slate-800 dark:text-slate-200">
              Rule: <strong>have/has/had + past participle (written)</strong>, NOT simple past (wrote)
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
              <span className="text-lg text-slate-700 dark:text-slate-300">I <strong>have written</strong> many emails today.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She has <strong>written</strong> articles for major newspapers.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The book was <strong>written</strong> by a famous author.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I <strong>wrote</strong> a poem last night. (simple past - correct)</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I <strong>have wrote</strong> to them many times.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">Has she <strong>wrote</strong> back yet?</span>
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
              <strong>Incorrect:</strong> I have wrote a complaint to the manager.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct:</strong> I have written a complaint to the manager.
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
              "She has _____ (wrote/written) several best-selling novels."
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
                  <strong>Answer:</strong> She has <strong>written</strong> several best-selling novels.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  After "has," use the past participle "written."
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
              <Link to="/grammar-mistakes/i-have-saw-or-seen" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → I Have Saw or Seen?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/i-have-ate-or-eaten" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → I Have Ate or Eaten?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/i-have-drank-or-drunk" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → I Have Drank or Drunk?
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

export default IHaveWroteOrWrittenPage;
