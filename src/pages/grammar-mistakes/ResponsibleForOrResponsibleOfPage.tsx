import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const ResponsibleForOrResponsibleOfPage: React.FC = () => {
  usePageMetadata({
    title: 'Responsible For or Responsible Of? Which Is Correct? | TypoGrammar',
    description: 'Is it "responsible for" or "responsible of"? Learn why "responsible for" is always correct. Never say "responsible of" in English.',
    canonical: 'https://typogrammar.com/grammar-mistakes/responsible-for-or-responsible-of'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Responsible For or Responsible Of? Which Is Correct?",
    "description": "'Responsible for' is always correct. 'Responsible of' is never correct in English. Use 'responsible for' with tasks, actions, people, and things.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/responsible-for-or-responsible-of" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it 'responsible for' or 'responsible of'?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Responsible for' is always correct. 'Responsible of' is a common error and is never correct in English. Say 'responsible for the project,' not 'responsible of the project.'" }
      },
      {
        "@type": "Question",
        "name": "Why do people say 'responsible of'?",
        "acceptedAnswer": { "@type": "Answer", "text": "The error often comes from translating directly from other languages where the equivalent word uses 'of' (like French 'responsable de' or Spanish 'responsable de'). In English, the correct preposition is always 'for.'" }
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
        <span className="text-slate-900 dark:text-slate-100">Responsible For or Responsible Of</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Responsible For or Responsible Of? Which Is Correct?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>"Responsible for"</strong> is always correct. <strong>"Responsible of"</strong> is never correct.
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            The Rule
          </h2>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-blue-800 dark:text-blue-200">
              <strong>Responsible</strong> + <strong>for</strong> = ALWAYS correct<br />
              <span className="line-through">Responsible + of</span> = NEVER correct
            </p>
          </div>

          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            In English, "responsible" is always followed by "for" - this is a fixed collocation that never changes, regardless of what comes after it.
          </p>

          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Common Error Source:</strong> Many languages use "of" with their word for "responsible" (French: responsable <em>de</em>, Spanish: responsable <em>de</em>). This causes direct translation errors.
            </p>
          </div>
        </section>

        {/* Usage Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            What Follows "Responsible For"?
          </h2>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <ul className="text-slate-700 dark:text-slate-300 space-y-2">
              <li>• <strong>Tasks:</strong> She's responsible <strong>for</strong> the project.</li>
              <li>• <strong>People:</strong> I'm responsible <strong>for</strong> my team.</li>
              <li>• <strong>Actions:</strong> Who is responsible <strong>for</strong> this mess?</li>
              <li>• <strong>Gerunds:</strong> He's responsible <strong>for</strong> organizing the event.</li>
              <li>• <strong>Outcomes:</strong> The manager is responsible <strong>for</strong> the results.</li>
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
              <span className="text-lg text-slate-700 dark:text-slate-300">She is <strong>responsible for</strong> the marketing department.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">She is <strong>responsible of</strong> the marketing department.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Who is <strong>responsible for</strong> this decision?</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">Who is <strong>responsible of</strong> this decision?</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">He is <strong>responsible for</strong> managing the budget.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Parents are <strong>responsible for</strong> their children.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The company is <strong>responsible for</strong> the damage.</span>
            </div>
          </div>
        </section>

        {/* Responsible To Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            "Responsible To" (Different Meaning)
          </h2>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              Note: "Responsible <strong>to</strong>" is also correct but has a different meaning:
            </p>
            <ul className="text-slate-700 dark:text-slate-300 space-y-2">
              <li>• <strong>Responsible for</strong> = having duty/blame for something</li>
              <li>• <strong>Responsible to</strong> = accountable to a person/authority</li>
            </ul>
            <div className="mt-4 space-y-2">
              <p className="text-slate-700 dark:text-slate-300 italic">
                "The manager is responsible <strong>for</strong> sales." (handles sales)
              </p>
              <p className="text-slate-700 dark:text-slate-300 italic">
                "The manager is responsible <strong>to</strong> the CEO." (reports to the CEO)
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
              <strong>Choose the correct preposition:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "The IT department is responsible _____ maintaining the servers." (for/of)
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
                  <strong>Answer:</strong> The IT department is responsible <strong>for</strong> maintaining the servers.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  "Responsible" is always followed by "for," never "of."
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Memory Tip Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Memory Tip
          </h2>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <p className="text-lg text-purple-800 dark:text-purple-200">
              Think: <strong>"Responsible FOR fixing"</strong> - both have the letter <strong>R</strong>!
            </p>
            <p className="text-purple-700 dark:text-purple-300 mt-2">
              Responsible = R → For = has R → They go together!
            </p>
          </div>
        </section>

        {/* Related Grammar Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Related Grammar
          </h2>
          <ul className="space-y-2 text-lg">
            <li>
              <Link to="/grammar-mistakes/proud-of-or-proud-for" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Proud Of or Proud For?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/afraid-of-or-afraid-from" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Afraid Of or Afraid From?
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

export default ResponsibleForOrResponsibleOfPage;
