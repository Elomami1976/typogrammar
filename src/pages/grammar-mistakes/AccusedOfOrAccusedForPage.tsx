import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const AccusedOfOrAccusedForPage: React.FC = () => {
  usePageMetadata({
    title: 'Accused of or Accused for? Which Is Correct? | TypoGrammar',
    description: 'Is it "accused of" or "accused for"? The correct preposition is "of." Learn the rule with clear examples: "He was accused of theft," not "accused for theft."',
    canonical: 'https://typogrammar.com/grammar-mistakes/accused-of-or-accused-for'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Accused of or Accused for? Which Is Correct?",
    "description": "'Accused of' is the correct form. The verb 'accuse' takes the preposition 'of': 'accused of murder,' 'accused of lying.' 'Accused for' is a common learner error.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/accused-of-or-accused-for" },
    "datePublished": "2026-03-30",
    "dateModified": "2026-03-30"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it 'accused of' or 'accused for'?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Accused of' is correct. The verb and adjective 'accused' always takes 'of': 'He was accused of fraud.' 'Accused for' is a common non-standard error." }
      },
      {
        "@type": "Question",
        "name": "What is the structure of 'accuse someone of something'?",
        "acceptedAnswer": { "@type": "Answer", "text": "The full structure is: accuse + someone + of + noun/gerund. Example: 'They accused him of stealing the car.' When passive: 'He was accused of stealing the car.'" }
      },
      {
        "@type": "Question",
        "name": "Can 'accused of' be followed by a verb?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. When a verb follows 'accused of,' use the gerund (-ing): 'She was accused of lying.' Never use the infinitive: NOT 'accused of to lie.'" }
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
        <span className="text-slate-900 dark:text-slate-100">Accused of or Accused for</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Accused of or Accused for? Which Is Correct?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>"Accused of"</strong> is correct. Always say "accused <strong>of</strong> something," never "accused <strong>for</strong> something."
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            The Rule
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-blue-800 dark:text-blue-200">
              <strong>accuse + someone + of + noun/gerund</strong>
            </p>
            <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
              Active: "They accused him <em>of</em> theft."<br />
              Passive: "He was accused <em>of</em> theft."
            </p>
          </div>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            The verb <strong>"accuse"</strong> is always paired with the preposition <strong>"of."</strong> This applies to both the active form ("accuse someone of") and the passive form ("be accused of"). Using "for" instead of "of" is a very common mistake made by English learners.
          </p>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <p className="text-lg text-amber-800 dark:text-amber-200">
              <strong>Why "for" feels natural:</strong> Learners sometimes think "for" makes sense because punishment follows a crime ("arrested <em>for</em> theft," "fined <em>for</em> speeding"). But "accuse" is different — it specifically uses "of."
            </p>
          </div>
        </section>

        {/* Active vs Passive */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Active vs Passive Voice
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">Active Voice</p>
              <p className="text-blue-800 dark:text-blue-200 italic">"The police <strong>accused him of</strong> robbery."</p>
              <p className="text-blue-700 dark:text-blue-300 text-sm mt-1">accuse + person + of + crime/action</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">Passive Voice</p>
              <p className="text-purple-800 dark:text-purple-200 italic">"He <strong>was accused of</strong> robbery."</p>
              <p className="text-purple-700 dark:text-purple-300 text-sm mt-1">be accused + of + crime/action</p>
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
              <span className="text-lg text-slate-700 dark:text-slate-300">He was <strong>accused of</strong> murder.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">He was <strong>accused for</strong> murder.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She was <strong>accused of</strong> lying to the committee.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The company was <strong>accused of</strong> tax evasion.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">They accused the politician <strong>of</strong> corruption.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">They accused the politician <strong>for</strong> corruption.</span>
            </div>
          </div>
        </section>

        {/* Accused of vs Charged with/Arrested for */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            "Accused of" vs "Charged with" vs "Arrested for"
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            These related expressions use different prepositions — don't mix them up:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-700">
                  <th className="p-3 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200">Expression</th>
                  <th className="p-3 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200">Preposition</th>
                  <th className="p-3 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200">Example</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 font-semibold">accuse / accused</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">of</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">accused <strong>of</strong> fraud</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-700/50">
                  <td className="p-3 border border-slate-200 dark:border-slate-600 font-semibold">charge / charged</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">with</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">charged <strong>with</strong> murder</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 font-semibold">arrest / arrested</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">for</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">arrested <strong>for</strong> theft</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-700/50">
                  <td className="p-3 border border-slate-200 dark:border-slate-600 font-semibold">convict / convicted</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">of</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">convicted <strong>of</strong> robbery</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistakes
          </h2>
          <div className="space-y-4">
            <div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-2">
                <p className="text-lg text-red-800 dark:text-red-200"><strong>Incorrect:</strong> The employee was accused for embezzlement.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-lg text-green-800 dark:text-green-200"><strong>Correct:</strong> The employee was accused <strong>of</strong> embezzlement.</p>
              </div>
            </div>
            <div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-2">
                <p className="text-lg text-red-800 dark:text-red-200"><strong>Incorrect:</strong> She accused him for cheating.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-lg text-green-800 dark:text-green-200"><strong>Correct:</strong> She accused him <strong>of</strong> cheating.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Fill in the correct preposition:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "The manager was accused _____ stealing company funds." (of / for)
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
                  <strong>Answer:</strong> The manager was accused <strong>of</strong> stealing company funds.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  "Accused" always takes "of," not "for."
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Related Grammar */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Related Grammar
          </h2>
          <ul className="space-y-2 text-lg">
            <li>
              <Link to="/grammar-mistakes/capable-of-or-capable-to" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Capable of or Capable to?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/fond-of-or-fond-for" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Fond of or Fond for?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/responsible-for-or-responsible-of" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Responsible for or Responsible of?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/different-from-or-different-than" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Different from or Different than?
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

export default AccusedOfOrAccusedForPage;
