import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const SeveralVsSomePage: React.FC = () => {
  usePageMetadata({
    title: 'Several vs Some: What Is the Difference? | TypoGrammar',
    description: 'Learn the difference between "several" and "some." Several means more than two but not a huge number. Some is vaguer and used for unknown or unspecified quantities.',
    canonical: 'https://typogrammar.com/grammar-mistakes/several-vs-some'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Several vs Some: What Is the Difference?",
    "description": "'Several' means more than two but not many (usually 3–7). 'Some' is vaguer — it refers to an unspecified amount and can be used with both countable and uncountable nouns.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/several-vs-some" },
    "datePublished": "2026-03-30",
    "dateModified": "2026-03-30"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between several and some?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Several' means more than two but not a huge number (roughly 3–7). 'Some' is vaguer — it means a certain amount without specifying how many, and works with both countable and uncountable nouns." }
      },
      {
        "@type": "Question",
        "name": "Can 'several' be used with uncountable nouns?",
        "acceptedAnswer": { "@type": "Answer", "text": "No. 'Several' is only used with countable plural nouns (several books, several days). Use 'some' with uncountable nouns (some water, some advice)." }
      },
      {
        "@type": "Question",
        "name": "Is 'several' more than 'some'?",
        "acceptedAnswer": { "@type": "Answer", "text": "Generally yes. 'Several' implies a more definite, slightly larger amount (3–7), while 'some' is vaguer and can suggest just a small amount. However, the exact quantity depends on context." }
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
        <span className="text-slate-900 dark:text-slate-100">Several vs Some</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Several vs Some: What Is the Difference?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <div className="text-lg text-green-800 dark:text-green-200 space-y-2">
            <p><strong>"Several"</strong> = more than two but not many (roughly 3–7); countable nouns only.</p>
            <p><strong>"Some"</strong> = a vague, unspecified amount; works with both countable and uncountable nouns.</p>
          </div>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
              <h3 className="font-bold text-blue-900 dark:text-blue-100 text-lg mb-3">SEVERAL</h3>
              <ul className="text-blue-800 dark:text-blue-200 space-y-1 text-sm">
                <li>• Means more than two, but not a lot (3–7)</li>
                <li>• More definite than "some"</li>
                <li>• Only with countable plural nouns</li>
                <li>• Implies the speaker has a rough number in mind</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
              <h3 className="font-bold text-purple-900 dark:text-purple-100 text-lg mb-3">SOME</h3>
              <ul className="text-purple-800 dark:text-purple-200 space-y-1 text-sm">
                <li>• Means an unspecified amount</li>
                <li>• Vaguer than "several"</li>
                <li>• With countable and uncountable nouns</li>
                <li>• Common in questions and offers too</li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <p className="text-lg text-amber-800 dark:text-amber-200">
              <strong>Key difference:</strong> "Several" is more specific and always countable. "Some" is flexible — it works with water, advice, money, as well as books and people.
            </p>
          </div>
        </section>

        {/* Examples Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">"Several" (countable, roughly 3–7)</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I have read <strong>several</strong> books on this topic.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Several</strong> students failed the exam.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">We had to wait <strong>several</strong> hours.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I need <strong>several</strong> water. (uncountable — use "some")</span>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">"Some" (countable and uncountable)</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I need <strong>some</strong> water.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She gave me <strong>some</strong> advice.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Can I have <strong>some</strong> cookies?</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Some</strong> people prefer working at night.</span>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Quick Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-700">
                  <th className="p-3 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200">Feature</th>
                  <th className="p-3 border border-slate-300 dark:border-slate-600 text-blue-700 dark:text-blue-300">Several</th>
                  <th className="p-3 border border-slate-300 dark:border-slate-600 text-purple-700 dark:text-purple-300">Some</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">Approximate number</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">3–7 (more specific)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">Any amount (vague)</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-700/50">
                  <td className="p-3 border border-slate-200 dark:border-slate-600">Countable nouns?</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">✔ Yes</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">✔ Yes</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">Uncountable nouns?</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">✘ No</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">✔ Yes</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-700/50">
                  <td className="p-3 border border-slate-200 dark:border-slate-600">Negative sentences?</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">Rarely used</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">Use "any" instead</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Common Mistakes Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistakes
          </h2>
          <div className="space-y-4">
            <div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-2">
                <p className="text-lg text-red-800 dark:text-red-200"><strong>Incorrect:</strong> I need several information.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-lg text-green-800 dark:text-green-200"><strong>Correct:</strong> I need <strong>some</strong> information. ("Information" is uncountable.)</p>
              </div>
            </div>
            <div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-2">
                <p className="text-lg text-red-800 dark:text-red-200"><strong>Incorrect:</strong> She has several money in her account.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-lg text-green-800 dark:text-green-200"><strong>Correct:</strong> She has <strong>some</strong> money in her account.</p>
              </div>
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
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Is "several" more than "some"?</h3>
              <p className="text-slate-700 dark:text-slate-300">Generally yes. "Several" implies roughly 3–7, while "some" can mean just 1–2 or more. The exact number depends on context, but "several" always implies a noticeably distinct group.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700/50 p-5 rounded-lg">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Can I use "some" instead of "several" always?</h3>
              <p className="text-slate-700 dark:text-slate-300">Not always. If you want to emphasise that a notable number of something happened (e.g., "It took several attempts"), "several" is the better choice. "Some attempts" sounds more casual and less emphatic.</p>
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
              <strong>Choose the correct quantifier:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "She gave me _____ good advice about the interview." (several / some)
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
                  <strong>Answer:</strong> She gave me <strong>some</strong> good advice about the interview.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  "Advice" is uncountable, so "several" cannot be used here.
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
              <Link to="/grammar-mistakes/plenty-of-vs-a-lot-of" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Plenty of vs A Lot of
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/some-vs-any" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Some vs Any
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/many-vs-much" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Many vs Much
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/a-few-vs-few" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → A Few vs Few
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

export default SeveralVsSomePage;
