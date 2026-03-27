import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const RememberVsRemindPage: React.FC = () => {
  usePageMetadata({
    title: 'Remember vs Remind: What\'s the Difference? | TypoGrammar',
    description: 'Learn the difference between "remember" and "remind." Remember = recall from memory yourself. Remind = make someone else remember.',
    canonical: 'https://typogrammar.com/grammar-mistakes/remember-vs-remind'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Remember vs Remind: What's the Difference?",
    "description": "Remember means to recall something from your own memory. Remind means to make someone else remember something. Remind requires an object (remind someone).",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/remember-vs-remind" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between remember and remind?",
        "acceptedAnswer": { "@type": "Answer", "text": "Remember = to recall something from your own memory (internal). Remind = to make someone else remember (external action). 'I remembered to call' vs 'She reminded me to call.'" }
      },
      {
        "@type": "Question",
        "name": "Can you say 'Please remember me to call'?",
        "acceptedAnswer": { "@type": "Answer", "text": "No. Say 'Please remind me to call.' You remind someone (external action), but you remember something yourself (internal action)." }
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
        <span className="text-slate-900 dark:text-slate-100">Remember vs Remind</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Remember vs Remind: What's the Difference?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            <strong>Remember</strong> = recall from YOUR memory (internal)
          </p>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>Remind</strong> = make SOMEONE ELSE remember (external)
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">REMEMBER 🧠</p>
              <p className="text-blue-800 dark:text-blue-200 mb-2">Internal mental action</p>
              <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">You recall something by yourself</p>
              <p className="text-blue-700 dark:text-blue-300 font-mono text-sm mb-2">remember + to do</p>
              <p className="text-blue-700 dark:text-blue-300 font-mono text-sm mb-2">remember + doing (past)</p>
              <p className="text-blue-700 dark:text-blue-300 italic">"I remember meeting her."</p>
              <p className="text-blue-700 dark:text-blue-300 italic">"Remember to lock the door."</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">REMIND 📢</p>
              <p className="text-purple-800 dark:text-purple-200 mb-2">External action on someone</p>
              <p className="text-purple-700 dark:text-purple-300 text-sm mb-2">You help someone else remember</p>
              <p className="text-purple-700 dark:text-purple-300 font-mono text-sm mb-2">remind + person + to do</p>
              <p className="text-purple-700 dark:text-purple-300 font-mono text-sm mb-2">remind + person + of/about</p>
              <p className="text-purple-700 dark:text-purple-300 italic">"Remind me to call Mom."</p>
              <p className="text-purple-700 dark:text-purple-300 italic">"This reminds me of home."</p>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-amber-800 dark:text-amber-200">
              <strong>Key difference:</strong> "Remind" ALWAYS needs a person as object. "Remember" doesn't need a person - it happens in your own mind.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <p className="font-bold text-slate-800 dark:text-slate-200 mb-2">"Remind" structures:</p>
            <ul className="text-slate-700 dark:text-slate-300 space-y-1">
              <li>• remind someone to do something</li>
              <li>• remind someone about something</li>
              <li>• remind someone of something (= make them think of it)</li>
              <li>• something reminds someone of something</li>
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
              <span className="text-lg text-slate-700 dark:text-slate-300">I <strong>remember</strong> my first day at school. (I recall it)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">This song <strong>reminds</strong> me of my childhood. (makes me think of)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Please <strong>remind</strong> me to buy milk. (help me remember)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Remember</strong> to turn off the lights. (don't forget)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She <strong>reminded</strong> him about the meeting. (told him so he wouldn't forget)</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">Please <strong>remember</strong> me to buy milk.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">This song <strong>remembers</strong> me of my childhood.</span>
            </div>
          </div>
        </section>

        {/* Special Expression Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Special Expression
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">"Remember me to..."</p>
            <p className="text-blue-800 dark:text-blue-200 mb-2">
              This is an old-fashioned way to say "give my regards to..."
            </p>
            <p className="text-blue-700 dark:text-blue-300 italic">
              "Remember me to your mother." = "Give my regards to your mother."
            </p>
            <p className="text-blue-600 dark:text-blue-400 text-sm mt-2">
              (This usage is rare in modern English)
            </p>
          </div>
        </section>

        {/* Common Mistake Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistakes
          </h2>
          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <p className="text-lg text-red-800 dark:text-red-200">
                <strong>Incorrect:</strong> The photo remembers me of our vacation.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="text-lg text-green-800 dark:text-green-200">
                <strong>Correct:</strong> The photo reminds me of our vacation.
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <p className="text-lg text-red-800 dark:text-red-200">
                <strong>Incorrect:</strong> Can you remember me to call the doctor?
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="text-lg text-green-800 dark:text-green-200">
                <strong>Correct:</strong> Can you remind me to call the doctor?
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
              <strong>Fill in with "remember" or "remind":</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "You _____ me of my best friend. You have the same smile."
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
                  <strong>Answer:</strong> You <strong>remind</strong> me of my best friend.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  "Remind" is correct because something external (you) is making me think of my friend.
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
              <Link to="/grammar-mistakes/say-vs-tell" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Say vs. Tell
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/learn-vs-study" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Learn vs. Study
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/borrow-vs-lend" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Borrow vs. Lend
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

export default RememberVsRemindPage;
