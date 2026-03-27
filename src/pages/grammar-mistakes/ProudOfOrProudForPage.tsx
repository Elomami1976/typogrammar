import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const ProudOfOrProudForPage: React.FC = () => {
  usePageMetadata({
    title: 'Proud Of or Proud For? Which Is Correct? | TypoGrammar',
    description: 'Is it "proud of" or "proud for"? Learn the difference. Use "proud of" for people and achievements. "Proud for" is rarely used in standard English.',
    canonical: 'https://typogrammar.com/grammar-mistakes/proud-of-or-proud-for'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Proud Of or Proud For? Which Is Correct?",
    "description": "'Proud of' is the standard English expression. Use 'proud of' when expressing pride in someone or something. 'Proud for' is non-standard in most contexts.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/proud-of-or-proud-for" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it 'proud of' or 'proud for'?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Proud of' is the correct and standard expression. Say 'I am proud of you' not 'I am proud for you.' Use 'proud of' with people, achievements, work, and things." }
      },
      {
        "@type": "Question",
        "name": "Can you say 'proud for someone'?",
        "acceptedAnswer": { "@type": "Answer", "text": "While some people use 'proud for you' informally to mean 'happy for you,' the standard expression is 'proud of you.' To express happiness about someone's success, say 'I'm happy for you' or 'I'm proud of you.'" }
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
        <span className="text-slate-900 dark:text-slate-100">Proud Of or Proud For</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Proud Of or Proud For? Which Is Correct?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>"Proud of"</strong> is correct. Say "I'm proud of you," not "I'm proud for you."
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            The Rule
          </h2>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-blue-800 dark:text-blue-200">
              <strong>Proud of</strong> = the standard preposition to use with "proud"
            </p>
          </div>

          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            In English, we are "proud <em>of</em>" someone or something. This is a fixed collocation - "proud" almost always takes the preposition "of."
          </p>

          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <p className="text-lg text-amber-800 dark:text-amber-200">
              <strong>Note:</strong> Some people informally say "proud for you" to mean "happy on your behalf," but this is not standard. Use "happy for you" instead.
            </p>
          </div>
        </section>

        {/* Usage Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            What Follows "Proud Of"?
          </h2>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <ul className="text-slate-700 dark:text-slate-300 space-y-2">
              <li>• <strong>People:</strong> I'm proud <strong>of</strong> my daughter.</li>
              <li>• <strong>Oneself:</strong> You should be proud <strong>of</strong> yourself.</li>
              <li>• <strong>Achievements:</strong> She's proud <strong>of</strong> her accomplishments.</li>
              <li>• <strong>Things:</strong> We're proud <strong>of</strong> our work.</li>
              <li>• <strong>Gerunds:</strong> I'm proud <strong>of</strong> finishing the marathon.</li>
            </ul>
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
              <span className="text-lg text-slate-700 dark:text-slate-300">I am so <strong>proud of</strong> you!</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I am so <strong>proud for</strong> you!</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">We are <strong>proud of</strong> our team's success.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">We are <strong>proud for</strong> our team's success.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She is <strong>proud of</strong> being a doctor.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">He's <strong>proud of</strong> what he achieved.</span>
            </div>
          </div>
        </section>

        {/* Proud Of vs Happy For Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Proud Of vs Happy For
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">PROUD OF</p>
              <p className="text-blue-800 dark:text-blue-200 text-sm mb-2">Feeling pride in someone's achievement</p>
              <p className="text-blue-700 dark:text-blue-300 italic">"I'm proud of you for graduating."</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">HAPPY FOR</p>
              <p className="text-purple-800 dark:text-purple-200 text-sm mb-2">Feeling joy on someone's behalf</p>
              <p className="text-purple-700 dark:text-purple-300 italic">"I'm happy for you about the new job."</p>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mt-4">
            Both expressions are correct but have slightly different meanings. Don't confuse them!
          </p>
        </section>

        {/* Practice Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Choose the correct preposition:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "My parents are very proud _____ my achievements." (of/for)
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
                  <strong>Answer:</strong> My parents are very proud <strong>of</strong> my achievements.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  "Proud" always takes the preposition "of."
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
              <Link to="/grammar-mistakes/afraid-of-or-afraid-from" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Afraid Of or Afraid From?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/responsible-for-or-responsible-of" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Responsible For or Responsible Of?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/interested-in-or-interested-on" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Interested In or Interested On?
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

export default ProudOfOrProudForPage;
