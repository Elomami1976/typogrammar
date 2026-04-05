import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const ShouldHaveVsShouldOfPage: React.FC = () => {
  usePageMetadata({
    title: 'Should Have vs. Should Of: Which Is Correct? | TypoGrammar',
    description: 'Learn why "should have" is correct and "should of" is wrong. "Should of" is a common writing error caused by the sound of the contraction "should\'ve". Clear examples and explanations.',
    canonical: 'https://typogrammar.com/grammar-mistakes/should-have-vs-should-of'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Should Have vs. Should Of",
    "description": "\"Should have\" is correct. \"Should of\" is a common spelling error based on the pronunciation of the contraction \"should've.\" The word \"of\" is never used after modal verbs like should, could, would, or must.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": {
      "@type": "Organization",
      "name": "TypoGrammar",
      "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://typogrammar.com/grammar-mistakes/should-have-vs-should-of"
    },
    "datePublished": "2026-03-29",
    "dateModified": "2026-03-29"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is 'should of' ever correct?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. 'Should of' is always incorrect. It is a spelling error caused by the way the contraction 'should've' (should have) sounds when spoken. The correct form is always 'should have.'"
        }
      },
      {
        "@type": "Question",
        "name": "Why do people write 'should of' instead of 'should have'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In spoken English, 'should have' is often contracted to 'should've', which sounds like 'should of' when spoken quickly. Writers then mistakenly spell the sound they hear as 'of' instead of 'have' or \"'ve\"."
        }
      },
      {
        "@type": "Question",
        "name": "Does the same rule apply to 'could of' and 'would of'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. 'Could of' and 'would of' are also always incorrect. The correct forms are 'could have' and 'would have'. This error occurs with all modal verbs including must, might, and may."
        }
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
        <span className="text-slate-900 dark:text-slate-100">Should Have vs. Should Of</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Should Have vs. Should Of: Which Is Correct?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            <strong>Should have</strong> is always correct.
          </p>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>Should of</strong> is always incorrect — it is a spelling error caused by the sound of <em>should've</em>.
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            <strong>Should have</strong> is the correct grammatical structure. It is a modal perfect construction
            used to express regret, criticism, or advice about a past action:
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg mb-6 font-mono text-lg">
            <span className="text-blue-800 dark:text-blue-200">should</span>
            {' '}+{' '}
            <span className="text-green-800 dark:text-green-200">have</span>
            {' '}+{' '}
            <span className="text-purple-800 dark:text-purple-200">past participle</span>
          </div>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            The error <strong>should of</strong> occurs because in natural spoken English, <em>should have</em> is
            contracted to <em>should've</em>, which sounds exactly like <em>"should of"</em> when spoken quickly.
            Writers who aren't aware of this contraction mistakenly write <em>"of"</em> instead of <em>"have"</em>.
          </p>
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-5 rounded-r-lg">
            <p className="font-semibold text-slate-800 dark:text-slate-200 mb-2">The sound chain:</p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              <strong>should have</strong> → contracted to <strong>should've</strong> → sounds like <strong>"should of"</strong>
            </p>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
              The word "of" is a preposition. It can never follow a modal verb to form a tense.
            </p>
          </div>
        </section>

        {/* Correct vs Incorrect */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Correct vs. Incorrect
          </h2>
          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <p className="text-lg text-red-800 dark:text-red-200">
                <strong>Incorrect:</strong> You should of studied harder.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="text-lg text-green-800 dark:text-green-200">
                <strong>Correct:</strong> You should have studied harder.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="text-lg text-green-800 dark:text-green-200">
                <strong>Correct (contracted):</strong> You should've studied harder.
              </p>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            More Examples
          </h2>
          <div className="space-y-4">
            {[
              {
                wrong: "I should of called you earlier.",
                right: "I should have called you earlier.",
                contracted: "I should've called you earlier."
              },
              {
                wrong: "She should of told the truth.",
                right: "She should have told the truth.",
                contracted: "She should've told the truth."
              },
              {
                wrong: "They should of left sooner.",
                right: "They should have left sooner.",
                contracted: "They should've left sooner."
              },
            ].map((ex, i) => (
              <div key={i} className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                <div className="flex items-start p-3 bg-red-50 dark:bg-red-900/20">
                  <span className="text-red-600 dark:text-red-400 mr-3 text-xl font-bold">✘</span>
                  <span className="text-lg text-slate-700 dark:text-slate-300 line-through">{ex.wrong}</span>
                </div>
                <div className="flex items-start p-3 bg-green-50 dark:bg-green-900/20">
                  <span className="text-green-600 dark:text-green-400 mr-3 text-xl font-bold">✔</span>
                  <span className="text-lg text-slate-700 dark:text-slate-300">{ex.right}</span>
                </div>
                <div className="flex items-start p-3 bg-blue-50 dark:bg-blue-900/20">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl font-bold">✔</span>
                  <span className="text-lg text-slate-700 dark:text-slate-300">{ex.contracted} <span className="text-sm text-slate-500">(contracted)</span></span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Same Rule — Other Modals */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            The Same Rule Applies to All Modal Verbs
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            This error is not unique to <em>should</em>. It occurs with all modal verbs. The rule is the same: always use <strong>have</strong>, never <strong>of</strong>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm md:text-base">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-700">
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-semibold text-slate-800 dark:text-slate-200">Incorrect ✘</th>
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-semibold text-slate-800 dark:text-slate-200">Correct ✔</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["should of", "should have / should've"],
                  ["could of", "could have / could've"],
                  ["would of", "would have / would've"],
                  ["must of", "must have / must've"],
                  ["might of", "might have / might've"],
                  ["may of", "may have"],
                ].map(([wrong, right]) => (
                  <tr key={wrong} className="even:bg-slate-50 dark:even:bg-slate-800/40">
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-700 dark:text-red-400 line-through">{wrong}</td>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-700 dark:text-green-400 font-medium">{right}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* When to Use Should Have */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            When to Use "Should Have"
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            Use <strong>should have + past participle</strong> for:
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 dark:bg-slate-700/50 p-5 rounded-lg">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">1. Regret about the past</h3>
              <p className="text-slate-700 dark:text-slate-300 italic">"I should have saved the document before closing it."</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700/50 p-5 rounded-lg">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">2. Criticizing past actions</h3>
              <p className="text-slate-700 dark:text-slate-300 italic">"You should have told me about the problem sooner."</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700/50 p-5 rounded-lg">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">3. Advice about what was the right action</h3>
              <p className="text-slate-700 dark:text-slate-300 italic">"He should have applied for the job when he had the chance."</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-slate-50 dark:bg-slate-700/50 p-5 rounded-lg">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Is "should of" ever correct?
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                No, never. It is always a grammatical error. The word <em>of</em> is a preposition and cannot
                be used after a modal verb to form a tense. Always write <strong>should have</strong> or its
                contraction <strong>should've</strong>.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700/50 p-5 rounded-lg">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Why do people write "should of"?
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                When people speak quickly, <em>should've</em> sounds exactly like <em>"should of"</em>.
                Writers who aren't fully aware of the contraction <em>should've</em> (= should have) write
                what they hear: <em>"of"</em>.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700/50 p-5 rounded-lg">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Does this apply to "could of" and "would of" too?
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Yes. <em>Could of</em>, <em>would of</em>, <em>must of</em>, and <em>might of</em> are all
                incorrect. The correct forms are <strong>could have</strong>, <strong>would have</strong>,
                <strong> must have</strong>, and <strong>might have</strong>.
              </p>
            </div>
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
              "We should ___ prepared better for the meeting." (of / have)
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
                  <strong>Answer:</strong> We should <strong>have</strong> prepared better for the meeting.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  (Never use "of" after a modal verb. "Should have" is the correct modal perfect form.)
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
                → He Didn't Went or He Didn't Go?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/by-accident-vs-on-accident" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → By Accident vs. On Accident
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

export default ShouldHaveVsShouldOfPage;
