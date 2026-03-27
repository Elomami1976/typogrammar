import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const IAmAgreeOrIAgreePage: React.FC = () => {
  usePageMetadata({
    title: 'I Am Agree or I Agree? Which One Is Correct | TypoGrammar',
    description: 'Learn whether to say "I am agree" or "I agree." The correct form is "I agree" because agree is a verb, not an adjective.',
    canonical: 'https://typogrammar.com/grammar-mistakes/i-am-agree-or-i-agree'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "I Am Agree or I Agree?",
    "description": "The correct form is 'I agree.' Agree is a verb, not an adjective, so it doesn't need the verb 'to be' before it.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/i-am-agree-or-i-agree" },
    "datePublished": "2026-03-07",
    "dateModified": "2026-03-07"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it 'I am agree' or 'I agree'?",
        "acceptedAnswer": { "@type": "Answer", "text": "The correct form is 'I agree' because 'agree' is a verb that doesn't need the auxiliary verb 'be' before it." }
      },
      {
        "@type": "Question",
        "name": "Why is 'I am agree' wrong?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Am' is used with adjectives (I am happy) or continuous verbs (I am going), but 'agree' is a simple verb in the present tense." }
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
        <span className="text-slate-900 dark:text-slate-100">I Am Agree or I Agree</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          I Am Agree or I Agree? Which One Is Correct
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            The correct form is <strong>"I agree."</strong>
          </p>
          <p className="text-green-800 dark:text-green-200">
            "Agree" is a verb, not an adjective, so it doesn't need the verb "to be" (am/is/are) before it.
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            This is a common mistake, especially for speakers whose native language uses a form of "to be" with the equivalent of "agree."
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            In English, <strong>agree</strong> is a regular verb. It is conjugated in the present simple tense like this:
          </p>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg mb-4">
            <ul className="text-lg font-mono text-slate-800 dark:text-slate-200 space-y-1">
              <li>I <strong>agree</strong></li>
              <li>You <strong>agree</strong></li>
              <li>He/She/It <strong>agrees</strong></li>
              <li>We <strong>agree</strong></li>
              <li>They <strong>agree</strong></li>
            </ul>
          </div>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            We use "am/is/are" with <strong>adjectives</strong> (I am happy) or with <strong>-ing verbs</strong> (I am working), but not with simple present tense verbs like "agree."
          </p>
        </section>

        {/* Examples Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I <strong>agree</strong> with you.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She <strong>agrees</strong> with the proposal.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">We <strong>don't agree</strong> on this matter.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I <strong>am agree</strong> with you.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">She <strong>is agree</strong> with the proposal.</span>
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
              <strong>Incorrect:</strong> I am agree that this is a good idea.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct:</strong> I agree that this is a good idea.
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
              <strong>Fix the sentence:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "They are not agree with the new policy."
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
                  <strong>Answer:</strong> They <strong>don't agree</strong> with the new policy.
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
              <Link to="/grammar-mistakes/he-didnt-went-or-he-didnt-go" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → He Didn't Went or He Didn't Go?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/did-you-went-or-did-you-go" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Did You Went or Did You Go?
              </Link>
            </li>
            <li>
              <Link to="/grammar/verb-tenses/present-simple" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Present Simple Tense
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

export default IAmAgreeOrIAgreePage;
