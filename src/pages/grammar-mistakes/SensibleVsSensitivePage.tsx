import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const SensibleVsSensitivePage: React.FC = () => {
  usePageMetadata({
    title: 'Sensible vs Sensitive: What Is the Difference? | TypoGrammar',
    description: 'Learn the difference between "sensible" and "sensitive." Sensible means practical and reasonable. Sensitive means easily affected emotionally or physically.',
    canonical: 'https://typogrammar.com/grammar-mistakes/sensible-vs-sensitive'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Sensible vs Sensitive: What Is the Difference?",
    "description": "'Sensible' means having good judgment, practical, and reasonable. 'Sensitive' means easily affected by physical or emotional stimuli. These adjectives are often confused by English learners.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/sensible-vs-sensitive" },
    "datePublished": "2026-03-30",
    "dateModified": "2026-03-30"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between sensible and sensitive?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Sensible' describes someone who is practical, reasonable, and has good judgment (e.g., 'a sensible decision'). 'Sensitive' describes someone or something that is easily affected emotionally, physically, or aesthetically (e.g., 'sensitive skin,' 'a sensitive person who cries easily')." }
      },
      {
        "@type": "Question",
        "name": "Can a person be both sensible and sensitive?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. A person can be both sensible (making rational decisions) and sensitive (being emotionally aware or easily affected). These are separate traits: 'She is a sensible and sensitive manager who makes smart decisions but also understands her team's feelings.'" }
      },
      {
        "@type": "Question",
        "name": "Is 'sensible' positive or negative?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Sensible' is generally positive — it means practical and reasonable. 'Sensitive' can be positive (empathetic, emotionally aware) or negative (overly emotional, easily upset), depending on context." }
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
        <span className="text-slate-900 dark:text-slate-100">Sensible vs Sensitive</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Sensible vs Sensitive: What Is the Difference?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <div className="text-lg text-green-800 dark:text-green-200 space-y-2">
            <p><strong>"Sensible"</strong> = practical, reasonable, having good judgment.</p>
            <p><strong>"Sensitive"</strong> = easily affected emotionally, physically, or aesthetically.</p>
          </div>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
              <h3 className="font-bold text-blue-900 dark:text-blue-100 text-lg mb-3">SENSIBLE</h3>
              <p className="text-blue-800 dark:text-blue-200 mb-2 text-sm">From "sense" (judgment/reason)</p>
              <ul className="text-blue-800 dark:text-blue-200 space-y-1 text-sm">
                <li>• Practical and realistic</li>
                <li>• Shows good judgment</li>
                <li>• A generally positive trait</li>
                <li>• Describes decisions, people, choices</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
              <h3 className="font-bold text-purple-900 dark:text-purple-100 text-lg mb-3">SENSITIVE</h3>
              <p className="text-purple-800 dark:text-purple-200 mb-2 text-sm">From "sense" (feeling/perception)</p>
              <ul className="text-purple-800 dark:text-purple-200 space-y-1 text-sm">
                <li>• Easily affected emotionally or physically</li>
                <li>• Showing empathy or awareness</li>
                <li>• Can be positive or negative</li>
                <li>• Describes people, skin, data, topics</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <p className="text-lg text-amber-800 dark:text-amber-200">
              <strong>Memory trick:</strong> <strong>Sensible</strong> = makes <strong>sense</strong> (rational decisions). <strong>Sensitive</strong> = <strong>senses</strong> everything (feelings/stimuli).
            </p>
          </div>
        </section>

        {/* Examples Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">"Sensible" (practical/reasonable)</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">That was a very <strong>sensible</strong> decision.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Wear <strong>sensible</strong> shoes for the hike.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She gave us a <strong>sensible</strong> piece of advice.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">He's a <strong>sensible</strong> man who always thinks things through.</span>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">"Sensitive" (easily affected/aware)</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She has very <strong>sensitive</strong> skin that burns easily.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">He is <strong>sensitive</strong> to criticism and gets upset easily.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">This is a <strong>sensitive</strong> topic — handle it carefully.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The company must protect <strong>sensitive</strong> customer data.</span>
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
                <p className="text-lg text-red-800 dark:text-red-200"><strong>Incorrect:</strong> He is a very sensitive person — he always makes the right choice.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-lg text-green-800 dark:text-green-200"><strong>Correct:</strong> He is a very <strong>sensible</strong> person — he always makes the right choice. (making good decisions = sensible)</p>
              </div>
            </div>
            <div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-2">
                <p className="text-lg text-red-800 dark:text-red-200"><strong>Incorrect:</strong> She is sensible to other people's feelings.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-lg text-green-800 dark:text-green-200"><strong>Correct:</strong> She is <strong>sensitive</strong> to other people's feelings. (easily affected by others = sensitive)</p>
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
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Can "sensitive" describe information?</h3>
              <p className="text-slate-700 dark:text-slate-300">Yes. "Sensitive information/data" means information that must be carefully protected (e.g., personal data, state secrets). This usage is common in technology and law.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700/50 p-5 rounded-lg">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Can "sensible" describe a person?</h3>
              <p className="text-slate-700 dark:text-slate-300">Yes. "She is a sensible person" means she has good judgment and makes wise decisions. It's always a compliment.</p>
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
              "Don't joke about his weight — he is very _____ about it." (sensible / sensitive)
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
                  <strong>Answer:</strong> sensitive — he is very <strong>sensitive</strong> about it.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  He is easily hurt or upset about it → <strong>sensitive</strong>.
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
              <Link to="/grammar-mistakes/efficient-vs-effective" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Efficient vs Effective
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

export default SensibleVsSensitivePage;
