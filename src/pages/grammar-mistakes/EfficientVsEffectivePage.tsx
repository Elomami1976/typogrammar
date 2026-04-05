import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const EfficientVsEffectivePage: React.FC = () => {
  usePageMetadata({
    title: 'Efficient vs Effective: What Is the Difference? | TypoGrammar',
    description: 'Learn the difference between "efficient" and "effective." Effective means producing the desired result. Efficient means achieving it with minimum waste of time or resources.',
    canonical: 'https://typogrammar.com/grammar-mistakes/efficient-vs-effective'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Efficient vs Effective: What Is the Difference?",
    "description": "'Effective' means producing the desired result — it focuses on outcome. 'Efficient' means achieving results with minimum waste of effort, time, or resources — it focuses on method.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/efficient-vs-effective" },
    "datePublished": "2026-03-30",
    "dateModified": "2026-03-30"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between efficient and effective?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Effective' means something works and produces the desired result (e.g., 'an effective treatment'). 'Efficient' means it does so with minimal waste of time or resources (e.g., 'an efficient engine'). You can be effective without being efficient (it works but is slow/wasteful), and efficient without being effective (fast but the wrong thing)." }
      },
      {
        "@type": "Question",
        "name": "Can something be efficient but not effective?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. For example, a car that uses very little fuel (efficient) but drives in the wrong direction is not effective. Efficiency is about the process; effectiveness is about the outcome." }
      },
      {
        "@type": "Question",
        "name": "Which is more important: efficiency or effectiveness?",
        "acceptedAnswer": { "@type": "Answer", "text": "Effectiveness comes first — you must be doing the right thing before optimising how you do it. As management consultant Peter Drucker said: 'Efficiency is doing things right; effectiveness is doing the right things.'" }
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
        <span className="text-slate-900 dark:text-slate-100">Efficient vs Effective</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Efficient vs Effective: What Is the Difference?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <div className="text-lg text-green-800 dark:text-green-200 space-y-2">
            <p><strong>"Effective"</strong> = achieves the desired result (focuses on <em>outcome</em>).</p>
            <p><strong>"Efficient"</strong> = achieves results with minimum waste (focuses on <em>method/process</em>).</p>
          </div>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
              <h3 className="font-bold text-blue-900 dark:text-blue-100 text-lg mb-3">EFFECTIVE</h3>
              <p className="text-blue-800 dark:text-blue-200 mb-2 italic">"Does it work?"</p>
              <ul className="text-blue-800 dark:text-blue-200 space-y-1 text-sm">
                <li>• Produces the desired result</li>
                <li>• Focuses on the <strong>outcome</strong></li>
                <li>• Something can be slow but still effective</li>
                <li>• Most important quality — are you doing the right thing?</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
              <h3 className="font-bold text-purple-900 dark:text-purple-100 text-lg mb-3">EFFICIENT</h3>
              <p className="text-purple-800 dark:text-purple-200 mb-2 italic">"Does it work well with less?"</p>
              <ul className="text-purple-800 dark:text-purple-200 space-y-1 text-sm">
                <li>• Achieves goals with minimal waste</li>
                <li>• Focuses on the <strong>process</strong></li>
                <li>• Saves time, money, or effort</li>
                <li>• Secondary quality — <em>how well</em> you do the right thing</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <p className="text-lg text-amber-800 dark:text-amber-200">
              <strong>Classic quote:</strong> Peter Drucker — <em>"Efficiency is doing things right; effectiveness is doing the right things."</em>
            </p>
          </div>
        </section>

        {/* Examples Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">"Effective" (focused on results)</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">This is an <strong>effective</strong> method for treating the infection.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She is an <strong>effective</strong> leader who always delivers results.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The new policy has been <strong>effective</strong> in reducing crime.</span>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">"Efficient" (focused on minimal waste)</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">This engine is very <strong>efficient</strong> — it uses very little fuel.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She completed the project quickly and <strong>efficiently</strong>.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">We need a more <strong>efficient</strong> system to save time and money.</span>
            </div>
          </div>
        </section>

        {/* Can something be one without the other? */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Can Something Be One Without the Other?
          </h2>
          <div className="space-y-4">
            <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
              <p className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Effective but NOT efficient:</p>
              <p className="text-slate-700 dark:text-slate-300">A doctor who cures patients but takes 4 hours per consultation. Result achieved ✔ — but wasteful of time ✘</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
              <p className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Efficient but NOT effective:</p>
              <p className="text-slate-700 dark:text-slate-300">A salesperson who sends 500 emails per day with no replies. Very fast ✔ — but producing no sales ✘</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="font-semibold text-green-800 dark:text-green-200 mb-2">Both effective AND efficient (ideal):</p>
              <p className="text-green-700 dark:text-green-300">A manager who achieves team goals on time and within budget. Result achieved ✔ — and minimal waste ✔</p>
            </div>
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
                <p className="text-lg text-red-800 dark:text-red-200"><strong>Incorrect:</strong> This medicine is very efficient at treating headaches.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-lg text-green-800 dark:text-green-200"><strong>Correct:</strong> This medicine is very <strong>effective</strong> at treating headaches. (result matters, not the process)</p>
              </div>
            </div>
            <div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-2">
                <p className="text-lg text-red-800 dark:text-red-200"><strong>Incorrect:</strong> We need to find an effective way to reduce paperwork in the office.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-lg text-green-800 dark:text-green-200"><strong>Correct (if emphasising reducing waste):</strong> We need to find an <strong>efficient</strong> way to reduce paperwork. (about doing it without wasting time)</p>
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
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Which word is better to use in IELTS writing?</h3>
              <p className="text-slate-700 dark:text-slate-300">Both are strong academic words. Use "effective" when you mean it achieved results. Use "efficient" when you mean it saved resources. Avoid using them interchangeably — examiners notice the distinction.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700/50 p-5 rounded-lg">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">What are the nouns for these adjectives?</h3>
              <p className="text-slate-700 dark:text-slate-300"><strong>Effective → effectiveness</strong> (noun) | <strong>Efficient → efficiency</strong> (noun). Example: "The effectiveness of the vaccine was proven" / "energy efficiency."</p>
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
              <strong>Choose the correct word:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "Solar panels are a cost-_____ way to generate electricity." (effective / efficient)
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
                  <strong>Answer:</strong> Solar panels are a cost-<strong>effective</strong> way to generate electricity.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  "Cost-effective" is a fixed phrase meaning good value for the cost — it focuses on results per cost. "Cost-efficient" is also acceptable but less common in this context.
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
              <Link to="/grammar-mistakes/sensible-vs-sensitive" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Sensible vs Sensitive
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/advice-vs-advise" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Advice vs Advise
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/do-vs-make" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Do vs Make
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

export default EfficientVsEffectivePage;
