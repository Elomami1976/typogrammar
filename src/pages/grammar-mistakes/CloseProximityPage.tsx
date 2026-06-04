import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const CloseProximityPage: React.FC = () => {
  usePageMetadata({
    title: 'Close Proximity: Is It Redundant? | TypoGrammar',
    description: 'Is "close proximity" redundant? Yes! Proximity already means closeness. Just say "proximity" or "nearby." Learn why and see correct examples.',
    canonical: 'https://typogrammar.com/grammar-mistakes/close-proximity/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Close Proximity: Is It Redundant?",
    "description": "'Close proximity' is redundant because proximity, by definition, means nearness or closeness. Just use 'proximity,' 'nearby,' or 'close to.'",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/close-proximity" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is 'close proximity' redundant?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, 'close proximity' is redundant. Proximity means nearness or closeness, so adding 'close' repeats the meaning. Just say 'proximity' or use alternatives like 'nearby' or 'close to.'" }
      },
      {
        "@type": "Question",
        "name": "What should I say instead of 'close proximity'?",
        "acceptedAnswer": { "@type": "Answer", "text": "Use 'proximity,' 'nearby,' 'close to,' 'near,' or 'in the vicinity of.' For example, instead of 'in close proximity to the school,' say 'near the school' or 'in proximity to the school.'" }
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
        <span className="text-slate-900 dark:text-slate-100">Close Proximity</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Close Proximity: Is It Redundant?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            <strong>Yes, "close proximity" is redundant.</strong>
          </p>
          <p className="text-lg text-green-800 dark:text-green-200">
            Proximity already means closeness. Just say <strong>"proximity"</strong> or <strong>"nearby."</strong>
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Why Is It Redundant?
          </h2>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-blue-800 dark:text-blue-200">
              <strong>Proximity</strong> = nearness; closeness in space, time, or relationship
            </p>
          </div>

          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            Since proximity inherently means "closeness," saying "close proximity" is like saying "close closeness"-unnecessarily repetitive.
          </p>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
            <p className="text-lg text-teal-800 dark:text-teal-200">
              <strong>Etymology:</strong> "Proximity" comes from Latin <em>proximus</em>, meaning "nearest" or "very near."
            </p>
          </div>
        </section>

        {/* Examples Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">The hotel is in <strong>close proximity</strong> to the beach.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The hotel is <strong>near</strong> the beach.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The hotel is in <strong>proximity to</strong> the beach.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">They live in <strong>close proximity</strong> to each other.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">They live <strong>close to</strong> each other.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">They live <strong>nearby</strong>.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">The explosion occurred in <strong>close proximity</strong> to the school.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The explosion occurred <strong>near</strong> the school.</span>
            </div>
          </div>
        </section>

        {/* Better Alternatives Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Better Alternatives
          </h2>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <p className="text-slate-700 dark:text-slate-300 mb-3">Instead of "close proximity," use:</p>
            <ul className="text-slate-700 dark:text-slate-300 space-y-1">
              <li>• <strong>near</strong> (simplest)</li>
              <li>• <strong>nearby</strong></li>
              <li>• <strong>close to</strong></li>
              <li>• <strong>in proximity to</strong> (formal)</li>
              <li>• <strong>in the vicinity of</strong> (formal)</li>
              <li>• <strong>adjacent to</strong> (when touching/bordering)</li>
            </ul>
          </div>
        </section>

        {/* Why People Say It Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Why Do People Say It?
          </h2>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              "Close proximity" has become common because:
            </p>
            <ul className="text-slate-700 dark:text-slate-300 space-y-2">
              <li>• "Proximity" sounds formal and impressive</li>
              <li>• Adding "close" feels like it emphasizes the nearness</li>
              <li>• It's frequently used in real estate, journalism, and business writing</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 mt-3 italic">
              Despite its common use, careful writers avoid this redundancy.
            </p>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Fix this sentence:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "The new restaurant is located in close proximity to the train station."
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
                  <strong>Corrected:</strong> "The new restaurant is located <strong>near</strong> the train station."
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  Alternatively: "The new restaurant is close to the train station."
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Similar Redundancies Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Similar Redundancies
          </h2>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <ul className="text-slate-700 dark:text-slate-300 space-y-2">
              <li>• <span className="line-through">completely surrounded</span> → <strong>surrounded</strong></li>
              <li>• <span className="line-through">totally unanimous</span> → <strong>unanimous</strong></li>
              <li>• <span className="line-through">exact same</span> → <strong>same</strong></li>
              <li>• <span className="line-through">true fact</span> → <strong>fact</strong></li>
            </ul>
          </div>
        </section>

        {/* Related Grammar Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Related Grammar
          </h2>
          <ul className="space-y-2 text-lg">
            <li>
              <Link to="/grammar-mistakes/past-history/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Past History (Redundant?)
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/advance-planning/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Advance Planning (Redundant?)
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/free-gift/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Free Gift (Redundant?)
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

export default CloseProximityPage;
