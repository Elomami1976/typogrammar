import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const ComplainAboutOrComplainOfPage: React.FC = () => {
  usePageMetadata({
    title: 'Complain About or Complain Of: What\'s the Difference? | TypoGrammar',
    description: 'Learn the difference between "complain about" and "complain of." Both are correct but used differently. Complain about = general complaints. Complain of = symptoms/pain.',
    canonical: 'https://typogrammar.com/grammar-mistakes/complain-about-or-complain-of/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complain About or Complain Of: What's the Difference?",
    "description": "Both 'complain about' and 'complain of' are correct but have different uses. 'Complain about' is for expressing dissatisfaction. 'Complain of' is formal, often for symptoms or pain.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/complain-about-or-complain-of" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between complain about and complain of?",
        "acceptedAnswer": { "@type": "Answer", "text": "Both are correct. 'Complain about' is common for general dissatisfaction (complain about the service). 'Complain of' is more formal and often used for symptoms/pain (complain of a headache)." }
      },
      {
        "@type": "Question",
        "name": "Which is more common: complain about or complain of?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Complain about' is more common in everyday English. 'Complain of' is more formal and typically used in medical contexts (The patient complained of chest pain) or formal complaints." }
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
        <span className="text-slate-900 dark:text-slate-100">Complain About or Complain Of</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Complain About or Complain Of: What's the Difference?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            <strong>Complain about</strong> = express dissatisfaction (common, everyday)
          </p>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>Complain of</strong> = report symptoms/pain (formal, medical)
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">COMPLAIN ABOUT 😤</p>
              <p className="text-blue-800 dark:text-blue-200 mb-2">Express dissatisfaction</p>
              <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">Common in everyday speech</p>
              <p className="text-blue-700 dark:text-blue-300 italic">"She complained about the noise."</p>
              <p className="text-blue-700 dark:text-blue-300 italic">"Stop complaining about the weather!"</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">COMPLAIN OF 🏥</p>
              <p className="text-purple-800 dark:text-purple-200 mb-2">Report symptoms or problems</p>
              <p className="text-purple-700 dark:text-purple-300 text-sm mb-2">Formal, often medical context</p>
              <p className="text-purple-700 dark:text-purple-300 italic">"The patient complained of dizziness."</p>
              <p className="text-purple-700 dark:text-purple-300 italic">"He complained of chest pain."</p>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-teal-800 dark:text-teal-200">
              <strong>Key difference:</strong> "Complain about" focuses on expressing unhappiness. "Complain of" focuses on reporting a specific problem (especially physical symptoms).
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <p className="font-bold text-slate-800 dark:text-slate-200 mb-2">In many cases, both work:</p>
            <p className="text-slate-700 dark:text-slate-300">
              "He complained <u>about</u> back pain." = casual
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              "He complained <u>of</u> back pain." = more formal/medical
            </p>
          </div>
        </section>

        {/* Examples Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          
          <p className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Complain ABOUT (everyday complaints):</p>
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Customers often complain <strong>about</strong> the slow service.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She's always complaining <strong>about</strong> something.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">They complained <strong>about</strong> the hotel conditions.</span>
            </div>
          </div>

          <p className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Complain OF (symptoms/formal):</p>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The patient complained <strong>of</strong> severe headaches.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She complained <strong>of</strong> feeling tired all the time.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">He complained <strong>of</strong> shortness of breath.</span>
            </div>
          </div>
        </section>

        {/* Complain TO Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Other Patterns with "Complain"
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">complain to someone</p>
              <p className="text-blue-800 dark:text-blue-200">Direct a complaint at someone</p>
              <p className="text-blue-700 dark:text-blue-300 italic">"I complained to the manager about the service."</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">complain that + clause</p>
              <p className="text-purple-800 dark:text-purple-200">Explain what the complaint is</p>
              <p className="text-purple-700 dark:text-purple-300 italic">"She complained that the food was cold."</p>
            </div>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Choose "about" or "of":</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "The employee complained _____ his low salary, and he also complained _____ feeling undervalued."
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
                  <strong>Answer:</strong> The employee complained <strong>about</strong> his low salary, and he also complained <strong>of</strong> feeling undervalued.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  "About" for the everyday complaint (salary), "of" for the internal feeling/state. Both could use "about" in casual speech.
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
              <Link to="/grammar-mistakes/interested-in-or-interested-on/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Interested In or Interested On?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/afraid-of-or-afraid-from/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Afraid Of or Afraid From?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/different-from-or-different-than/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Different From or Different Than?
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

export default ComplainAboutOrComplainOfPage;
