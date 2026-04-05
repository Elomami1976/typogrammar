import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const EachOfOrEveryOfPage: React.FC = () => {
  usePageMetadata({
    title: 'Each of vs Every: Can You Say "Every of"? | TypoGrammar',
    description: '"Each of" is correct English. "Every of" is NOT grammatical. Learn when to use "each of" vs "every" with clear grammar rules and examples.',
    canonical: 'https://typogrammar.com/grammar-mistakes/each-of-or-every-of'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Each of vs Every: Can You Say 'Every of'?",
    "description": "'Each of' is grammatically correct. 'Every of' does NOT exist in English grammar. Use 'each of + the/my/those + plural noun' or simply 'every + singular noun.'",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/each-of-or-every-of" },
    "datePublished": "2026-03-30",
    "dateModified": "2026-03-30"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can you say 'every of'?",
        "acceptedAnswer": { "@type": "Answer", "text": "No. 'Every of' is not grammatical in English. Use 'each of' when you want to use 'of': 'each of the students.' Use 'every' alone before a singular noun: 'every student.'" }
      },
      {
        "@type": "Question",
        "name": "What is the difference between 'each of' and 'every'?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Each of' focuses on individual members of a group (one by one). 'Every' treats the group as a whole. 'Each of the students submitted a report' (individual focus) vs 'Every student submitted a report' (group as a whole). Both take a singular verb." }
      },
      {
        "@type": "Question",
        "name": "Does 'each of' take a singular or plural verb?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Each of' takes a singular verb. Example: 'Each of the students IS responsible.' Even though 'students' is plural, the verb agrees with 'each,' which is singular." }
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
        <span className="text-slate-900 dark:text-slate-100">Each of or Every of</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Each of vs Every: Can You Say "Every of"?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <div className="text-lg text-green-800 dark:text-green-200 space-y-2">
            <p><strong>"Each of"</strong> ✔ — correct and grammatical.</p>
            <p><strong>"Every of"</strong> ✘ — does NOT exist in English. Never use it.</p>
            <p>Use <strong>"every"</strong> alone before a singular noun: "every student," "every day."</p>
          </div>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            The Rule
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
              <h3 className="font-bold text-blue-900 dark:text-blue-100 text-lg mb-3">EACH OF + plural noun group</h3>
              <p className="text-blue-800 dark:text-blue-200 mb-2 text-sm">Structure: <strong>each of + the/my/these + plural noun</strong></p>
              <p className="text-blue-700 dark:text-blue-300 text-sm">→ Singular verb (each of the students <strong>is</strong>)</p>
              <p className="text-blue-700 dark:text-blue-300 text-sm mt-1">→ Focuses on individuals one by one</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
              <h3 className="font-bold text-purple-900 dark:text-purple-100 text-lg mb-3">EVERY + singular noun</h3>
              <p className="text-purple-800 dark:text-purple-200 mb-2 text-sm">Structure: <strong>every + singular noun</strong></p>
              <p className="text-purple-700 dark:text-purple-300 text-sm">→ Singular verb (every student <strong>is</strong>)</p>
              <p className="text-purple-700 dark:text-purple-300 text-sm mt-1">→ Treats the group collectively</p>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>❌ "Every of" does not exist.</strong> "Every" cannot be followed by "of." This is a very common error among learners who try to apply the "each of" pattern to "every."
            </p>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <p className="text-lg text-amber-800 dark:text-amber-200">
              <strong>Memory tip:</strong> Only <strong>EACH</strong> can precede "of." <strong>EVERY</strong> goes directly before a singular noun — no "of."
            </p>
          </div>
        </section>

        {/* Structures */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Correct Structures
          </h2>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg font-mono text-sm space-y-2">
            <p className="text-green-700 dark:text-green-300">✔ each of the/my/these + PLURAL NOUN + singular verb</p>
            <p className="text-green-700 dark:text-green-300">✔ every + SINGULAR NOUN + singular verb</p>
            <p className="text-red-700 dark:text-red-300 line-through">✘ every of the + noun (WRONG)</p>
          </div>
        </section>

        {/* Examples Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">"Each of" (correct)</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Each of</strong> the students <strong>is</strong> responsible for their own work.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Each of</strong> my children <strong>has</strong> a different personality.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Each of</strong> these problems <strong>requires</strong> a different solution.</span>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">"Every" (correct)</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Every</strong> student <strong>is</strong> expected to attend.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Every</strong> mistake <strong>is</strong> an opportunity to learn.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I exercise <strong>every</strong> day.</span>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">"Every of" (WRONG — never use)</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through"><strong>Every of</strong> the students is responsible.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through"><strong>Every of</strong> my children has a different personality.</span>
            </div>
          </div>
        </section>

        {/* Each vs Every: Subtle Difference */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Each vs Every: The Subtle Difference
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">EACH — individual focus</p>
              <p className="text-blue-800 dark:text-blue-200 text-sm mb-2">Looks at members one by one</p>
              <p className="text-blue-700 dark:text-blue-300 italic text-sm">"Each student received a certificate." (one by one)</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">EVERY — group focus</p>
              <p className="text-purple-800 dark:text-purple-200 text-sm mb-2">Views group as a collective whole</p>
              <p className="text-purple-700 dark:text-purple-300 italic text-sm">"Every student received a certificate." (all of them)</p>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-sm">In many contexts these are interchangeable. The distinction becomes important with larger groups — "every" is more natural for hundreds of people, while "each" implies a smaller, more counted group.</p>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistakes
          </h2>
          <div className="space-y-4">
            <div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-2">
                <p className="text-lg text-red-800 dark:text-red-200"><strong>Incorrect:</strong> Every of the participants received a prize.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-lg text-green-800 dark:text-green-200"><strong>Correct:</strong> <strong>Each of</strong> the participants received a prize. / <strong>Every</strong> participant received a prize.</p>
              </div>
            </div>
            <div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-2">
                <p className="text-lg text-red-800 dark:text-red-200"><strong>Incorrect:</strong> Each of student must submit the form.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-lg text-green-800 dark:text-green-200"><strong>Correct:</strong> Each of the <strong>students</strong> must submit the form. (needs determiner + plural noun after "each of")</p>
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
              <strong>Choose the correct form:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "_____ the team members was given a clear role." (Each of / Every of)
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
                  <strong>Answer:</strong> <strong>Each of</strong> the team members was given a clear role.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  "Every of" does not exist. "Each of" is the correct form before a determiner + plural noun.
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
              <Link to="/grammar-mistakes/either-of-or-neither-of" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Either of / Neither of
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/each-are-or-each-is" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Each Are or Each Is?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/a-number-of-vs-the-number-of" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → A Number of vs The Number of
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/everyone-is-or-everyone-are" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Everyone Is or Everyone Are?
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

export default EachOfOrEveryOfPage;
