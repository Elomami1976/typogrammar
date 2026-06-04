import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const BorrowVsLendPage: React.FC = () => {
  usePageMetadata({
    title: 'Borrow vs Lend: What\'s the Difference? | TypoGrammar',
    description: 'Learn the difference between "borrow" and "lend." Borrow = take temporarily. Lend = give temporarily. The direction of the object is key.',
    canonical: 'https://typogrammar.com/grammar-mistakes/borrow-vs-lend/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Borrow vs Lend: What's the Difference?",
    "description": "Borrow means to take something temporarily with permission. Lend means to give something temporarily. The direction of the object determines which word to use.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/borrow-vs-lend" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between borrow and lend?",
        "acceptedAnswer": { "@type": "Answer", "text": "Borrow = take something temporarily (you receive). Lend = give something temporarily (you give). Example: 'Can I borrow your pen?' vs 'Can you lend me your pen?'" }
      },
      {
        "@type": "Question",
        "name": "Can you borrow me $10?",
        "acceptedAnswer": { "@type": "Answer", "text": "No, this is incorrect. You cannot 'borrow someone' something. Say 'Can you lend me $10?' or 'Can I borrow $10 from you?'" }
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
        <span className="text-slate-900 dark:text-slate-100">Borrow vs Lend</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Borrow vs Lend: What's the Difference?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            <strong>Borrow</strong> = TAKE something temporarily (← receive)
          </p>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>Lend</strong> = GIVE something temporarily (→ give)
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">BORROW ← (receive)</p>
              <p className="text-blue-800 dark:text-blue-200 mb-2">Take something from someone temporarily</p>
              <p className="text-blue-700 dark:text-blue-300 font-mono text-sm mb-2">borrow + something + from + person</p>
              <p className="text-blue-700 dark:text-blue-300 italic">"Can I borrow your car?"</p>
              <p className="text-blue-700 dark:text-blue-300 italic">"I borrowed $20 from my friend."</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">LEND → (give)</p>
              <p className="text-purple-800 dark:text-purple-200 mb-2">Give something to someone temporarily</p>
              <p className="text-purple-700 dark:text-purple-300 font-mono text-sm mb-2">lend + person + something</p>
              <p className="text-purple-700 dark:text-purple-300 italic">"Can you lend me your car?"</p>
              <p className="text-purple-700 dark:text-purple-300 italic">"She lent me $20."</p>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg mb-4">
            <p className="font-bold text-slate-800 dark:text-slate-200 mb-2">Visual:</p>
            <div className="flex items-center justify-center gap-4 text-lg text-slate-700 dark:text-slate-300">
              <span className="font-bold">Person A</span>
              <span className="text-2xl">📚</span>
              <span className="flex flex-col items-center">
                <span>→ lends →</span>
                <span>← borrows ←</span>
              </span>
              <span className="text-2xl">📚</span>
              <span className="font-bold">Person B</span>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
            <p className="text-lg text-teal-800 dark:text-teal-200">
              <strong>Memory tip:</strong> <strong>B</strong>orrow = <strong>B</strong>ring to me. <strong>L</strong>end = <strong>L</strong>eave with you.
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
              <span className="text-lg text-slate-700 dark:text-slate-300">Can I <strong>borrow</strong> your phone?</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Can you <strong>lend</strong> me your phone?</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I <strong>borrowed</strong> a book from the library.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The bank <strong>lent</strong> them money for a house.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She never <strong>lends</strong> her clothes to anyone.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">Can you <strong>borrow</strong> me your pen?</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I <strong>lent</strong> a book from the library.</span>
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
              <strong>Incorrect:</strong> Can you borrow me $10?
            </p>
            <p className="text-red-700 dark:text-red-300 text-sm mt-1">
              (You cannot "borrow someone" something)
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct:</strong> Can you lend me $10?
            </p>
            <p className="text-lg text-green-800 dark:text-green-200 mt-2">
              <strong>Also correct:</strong> Can I borrow $10 from you?
            </p>
          </div>
        </section>

        {/* Verb Forms Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Verb Forms
          </h2>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <table className="w-full text-left">
              <thead>
                <tr className="text-slate-800 dark:text-slate-200">
                  <th className="pb-2">Base</th>
                  <th className="pb-2">Past</th>
                  <th className="pb-2">Past Participle</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="font-mono py-1">borrow</td>
                  <td className="font-mono py-1">borrowed</td>
                  <td className="font-mono py-1">borrowed</td>
                </tr>
                <tr>
                  <td className="font-mono py-1">lend</td>
                  <td className="font-mono py-1">lent</td>
                  <td className="font-mono py-1">lent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Fill in with "borrow" or "lend":</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "I forgot my umbrella. Could you _____ me yours?"
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
                  <strong>Answer:</strong> Could you <strong>lend</strong> me yours?
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  "Lend" is correct because you're asking someone to give you something temporarily.
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
              <Link to="/grammar-mistakes/bring-vs-take/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Bring vs. Take
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/say-vs-tell/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Say vs. Tell
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/remember-vs-remind/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Remember vs. Remind
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

export default BorrowVsLendPage;
