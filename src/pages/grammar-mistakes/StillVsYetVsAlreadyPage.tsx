import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const StillVsYetVsAlreadyPage: React.FC = () => {
  usePageMetadata({
    title: 'Still vs. Yet vs. Already: What\'s the Difference? | TypoGrammar',
    description: 'Learn the difference between still, yet, and already in English. Still means continuing, yet means expected but not done, and already means sooner than expected.',
    canonical: 'https://typogrammar.com/grammar-mistakes/still-vs-yet-vs-already/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Still vs. Yet vs. Already",
    "description": "Still shows that something is continuing. Yet shows something is expected but hasn't happened. Already shows something happened sooner than expected.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/still-vs-yet-vs-already" },
    "datePublished": "2026-04-18",
    "dateModified": "2026-04-18"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between still, yet, and already?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Still' means something is continuing: 'He is still sleeping.' 'Yet' means something is expected but hasn't happened (used in negatives/questions): 'Have you eaten yet?' 'Already' means something happened sooner than expected: 'She has already finished.' These words are often used with the present perfect tense." }
      },
      {
        "@type": "Question",
        "name": "Where does 'still' go in a sentence?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Still' is placed before the main verb or after the verb 'be': 'I still love her.' / 'She is still here.' In negative sentences, 'still' goes before the auxiliary: 'He still hasn't called.'" }
      },
      {
        "@type": "Question",
        "name": "Where does 'yet' go in a sentence?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Yet' is usually placed at the end of a negative sentence or question: 'I haven't finished yet.' / 'Has she arrived yet?' It can also appear after 'not': 'She hasn't yet decided.'" }
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
        <span className="text-slate-900 dark:text-slate-100">Still vs. Yet vs. Already</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Still vs. Yet vs. Already: What's the Difference?
        </h1>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-lg text-green-800 dark:text-green-200">
            <li><strong>Still</strong> = something is continuing (not finished): "He is <em>still</em> sleeping."</li>
            <li><strong>Yet</strong> = expected but not done (negatives and questions): "Have you eaten <em>yet</em>?"</li>
            <li><strong>Already</strong> = happened sooner than expected: "She has <em>already</em> finished!"</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">STILL</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm mb-2">Shows something is <strong>continuing</strong>. Used in affirmative, negative, and question sentences.</p>
              <p className="text-slate-700 dark:text-slate-300 text-sm mb-1 font-medium">Position: before main verb / after "be"</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 text-sm">
                <li>She is <em>still</em> here.</li>
                <li>I <em>still</em> love you.</li>
                <li>He <em>still</em> hasn't called.</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 dark:text-red-100 mb-2">YET</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm mb-2">Shows something is <strong>expected but hasn't happened</strong>. Mainly used in negatives and questions.</p>
              <p className="text-slate-700 dark:text-slate-300 text-sm mb-1 font-medium">Position: at end of sentence</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 text-sm">
                <li>I haven't done it <em>yet</em>.</li>
                <li>Has she arrived <em>yet</em>?</li>
                <li>Not ready <em>yet</em>.</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">ALREADY</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm mb-2">Shows something happened <strong>earlier than expected</strong>. Used in affirmative sentences.</p>
              <p className="text-slate-700 dark:text-slate-300 text-sm mb-1 font-medium">Position: between auxiliary and main verb</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 text-sm">
                <li>I've <em>already</em> eaten.</li>
                <li>She has <em>already</em> left.</li>
                <li>He is <em>already</em> there.</li>
              </ul>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-5 rounded-lg">
            <h3 className="text-lg font-bold text-teal-900 dark:text-teal-100 mb-3">Position Summary</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-slate-700 dark:text-slate-300 text-sm">
                <thead>
                  <tr className="bg-teal-100 dark:bg-teal-900/40">
                    <th className="p-2 border border-teal-200 dark:border-teal-700 font-bold">Word</th>
                    <th className="p-2 border border-teal-200 dark:border-teal-700 font-bold">Sentence type</th>
                    <th className="p-2 border border-teal-200 dark:border-teal-700 font-bold">Position</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border border-teal-200 dark:border-teal-700 font-bold">still</td>
                    <td className="p-2 border border-teal-200 dark:border-teal-700">all types</td>
                    <td className="p-2 border border-teal-200 dark:border-teal-700">before main verb / after "be"</td>
                  </tr>
                  <tr className="bg-teal-50 dark:bg-teal-900/20">
                    <td className="p-2 border border-teal-200 dark:border-teal-700 font-bold">yet</td>
                    <td className="p-2 border border-teal-200 dark:border-teal-700">negative / question</td>
                    <td className="p-2 border border-teal-200 dark:border-teal-700">end of sentence</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-teal-200 dark:border-teal-700 font-bold">already</td>
                    <td className="p-2 border border-teal-200 dark:border-teal-700">affirmative</td>
                    <td className="p-2 border border-teal-200 dark:border-teal-700">between auxiliary + main verb</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The kids are <strong>still</strong> playing outside. (continuing)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I haven't packed my bags <strong>yet</strong>. (expected but not done)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She has <strong>already</strong> passed the exam. (sooner than expected)</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I haven't done it <strong>still</strong>. (use "yet" in negatives at end of sentence)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I haven't done it <strong>yet</strong>. / I <strong>still</strong> haven't done it.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">Have you <strong>already</strong> arrived? (not wrong, but sounds unnatural, "yet" is more natural in questions)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Have you arrived <strong>yet</strong>?</span>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistake
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Incorrect:</strong> I have yet eaten dinner.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct:</strong> I haven't eaten dinner yet. / I have already eaten dinner.
            </p>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm">
            "Yet" is used in negative sentences and questions. For affirmative sentences expressing early completion, use "already."
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Choose the correct word:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "I can't believe it, she is _____ here! The meeting doesn't start for another hour." (still / yet / already)
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
                  <strong>Answer:</strong> She is <strong>already</strong> here!
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  "Already" is used because her arrival happened sooner than expected.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Related Grammar
          </h2>
          <ul className="space-y-2 text-lg">
            <li>
              <Link to="/grammar-mistakes/since-vs-for/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Since vs. For
              </Link>
            </li>
            <li>
              <Link to="/topics/present-perfect/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Present Perfect Tense
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

export default StillVsYetVsAlreadyPage;
