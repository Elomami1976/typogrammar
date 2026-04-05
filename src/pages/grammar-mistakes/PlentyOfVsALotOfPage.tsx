import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const PlentyOfVsALotOfPage: React.FC = () => {
  usePageMetadata({
    title: 'Plenty of vs A Lot of: What Is the Difference? | TypoGrammar',
    description: 'Learn the difference between "plenty of" and "a lot of." Both mean a large quantity, but "plenty of" implies more than enough — a sense of abundance or sufficiency.',
    canonical: 'https://typogrammar.com/grammar-mistakes/plenty-of-vs-a-lot-of'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Plenty of vs A Lot of: What Is the Difference?",
    "description": "Both 'plenty of' and 'a lot of' express large quantities. 'Plenty of' suggests more than enough — abundance or sufficiency. 'A lot of' is more neutral and simply means a large amount.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/plenty-of-vs-a-lot-of" },
    "datePublished": "2026-03-30",
    "dateModified": "2026-03-30"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between 'plenty of' and 'a lot of'?",
        "acceptedAnswer": { "@type": "Answer", "text": "Both mean a large amount, but 'plenty of' adds the nuance of 'more than enough' or 'sufficient.' 'A lot of' is neutral and simply means a large quantity. Example: 'There is plenty of time' implies no need to rush, while 'there is a lot of time' just states a large amount." }
      },
      {
        "@type": "Question",
        "name": "Can 'plenty of' be used with uncountable nouns?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Both 'plenty of' and 'a lot of' work with countable and uncountable nouns: plenty of water, plenty of ideas, a lot of money, a lot of questions." }
      },
      {
        "@type": "Question",
        "name": "Is 'plenty of' more formal than 'a lot of'?",
        "acceptedAnswer": { "@type": "Answer", "text": "'A lot of' is very informal and common in spoken English. 'Plenty of' is slightly more formal and is used in both spoken and written contexts. For academic writing, prefer 'many,' 'much,' or 'a great deal of.'" }
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
        <span className="text-slate-900 dark:text-slate-100">Plenty of vs A Lot of</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Plenty of vs A Lot of: What Is the Difference?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <div className="text-lg text-green-800 dark:text-green-200 space-y-2">
            <p><strong>"A lot of"</strong> = simply a large quantity (neutral).</p>
            <p><strong>"Plenty of"</strong> = more than enough; implies fullness or sufficiency.</p>
          </div>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
              <h3 className="font-bold text-blue-900 dark:text-blue-100 text-lg mb-3">A LOT OF</h3>
              <ul className="text-blue-800 dark:text-blue-200 space-y-1 text-sm">
                <li>• Neutral — just states a large amount</li>
                <li>• Very common in spoken English</li>
                <li>• Countable and uncountable nouns</li>
                <li>• No emotional tone of surplus</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
              <h3 className="font-bold text-purple-900 dark:text-purple-100 text-lg mb-3">PLENTY OF</h3>
              <ul className="text-purple-800 dark:text-purple-200 space-y-1 text-sm">
                <li>• Implies abundance — more than enough</li>
                <li>• Slightly more formal than "a lot of"</li>
                <li>• Countable and uncountable nouns</li>
                <li>• Often used reassuringly</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <p className="text-lg text-amber-800 dark:text-amber-200">
              <strong>Key difference:</strong> "There is <strong>a lot of</strong> food" just says there's much food. "There is <strong>plenty of</strong> food" says there's more than enough — no one will go hungry.
            </p>
          </div>
        </section>

        {/* Examples Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>

          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">"A lot of" (large quantity)</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I have <strong>a lot of</strong> work to do today.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">There are <strong>a lot of</strong> people in this city.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She spent <strong>a lot of</strong> money on clothes.</span>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">"Plenty of" (more than enough)</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Don't rush — there's <strong>plenty of</strong> time.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">We have <strong>plenty of</strong> options to choose from.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Help yourself — there's <strong>plenty of</strong> food.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Plenty of</strong> students passed the exam this year.</span>
            </div>
          </div>
        </section>

        {/* Register/Formality */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Formality: Which Should You Use?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-700">
                  <th className="p-3 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200">Context</th>
                  <th className="p-3 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200">Best Choice</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">Spoken English / casual writing</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">A lot of</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-700/50">
                  <td className="p-3 border border-slate-200 dark:border-slate-600">Reassuring someone (enough exists)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">Plenty of</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">Academic / formal writing (countable)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">Many</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-700/50">
                  <td className="p-3 border border-slate-200 dark:border-slate-600">Academic / formal writing (uncountable)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">Much / a great deal of</td>
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
                <p className="text-lg text-red-800 dark:text-red-200"><strong>Incorrect:</strong> There is plenty of students in the hall. (missing "of" variation — it's fine grammatically but often misused)</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-lg text-green-800 dark:text-green-200"><strong>Note:</strong> "Plenty of students" is grammatically correct. The mistake is using "plenty" alone without "of" — never say "plenty students."</p>
              </div>
            </div>
            <div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-2">
                <p className="text-lg text-red-800 dark:text-red-200"><strong>Incorrect (IELTS/academic):</strong> There are a lot of evidences supporting this view.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-lg text-green-800 dark:text-green-200"><strong>Correct:</strong> There is <strong>a lot of evidence</strong> / <strong>plenty of evidence</strong> supporting this view. ("Evidence" is uncountable — no plural.)</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-slate-50 dark:bg-slate-700/50 p-5 rounded-lg">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Can I always substitute "a lot of" with "plenty of"?</h3>
              <p className="text-slate-700 dark:text-slate-300">Not always. "Plenty of" implies sufficiency. If you're saying there's too much of something negative ("a lot of crime"), using "plenty of crime" sounds oddly cheerful. Stick to "a lot of" in negative contexts.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700/50 p-5 rounded-lg">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Is "lots of" the same as "a lot of"?</h3>
              <p className="text-slate-700 dark:text-slate-300">Yes, "lots of" and "a lot of" are interchangeable in informal English. Both mean a large quantity. Avoid both in formal academic writing.</p>
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
              <strong>Choose the best option:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "Relax — we have _____ time before the train leaves." (a lot of / plenty of)
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
                  <strong>Best Answer:</strong> "Relax — we have <strong>plenty of</strong> time before the train leaves."
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  "Plenty of" is better here because the speaker is reassuring someone that there's more than enough time.
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
              <Link to="/grammar-mistakes/several-vs-some" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Several vs Some
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/many-vs-much" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Many vs Much
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/too-much-vs-too-many" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Too Much vs Too Many
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

export default PlentyOfVsALotOfPage;
