import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const LearnVsStudyPage: React.FC = () => {
  usePageMetadata({
    title: 'Learn vs Study: What\'s the Difference? | TypoGrammar',
    description: 'Learn the difference between "learn" and "study." Study is the process of gaining knowledge. Learn is the result - acquiring knowledge or skills.',
    canonical: 'https://typogrammar.com/grammar-mistakes/learn-vs-study'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Learn vs Study: What's the Difference?",
    "description": "Study is the process or activity of trying to gain knowledge. Learn is the result - successfully acquiring knowledge or a skill.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/learn-vs-study" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between learn and study?",
        "acceptedAnswer": { "@type": "Answer", "text": "Study = the process of trying to gain knowledge (reading, practicing, attending classes). Learn = the result of successfully gaining knowledge or a skill. You study to learn." }
      },
      {
        "@type": "Question",
        "name": "Do you say 'learn English' or 'study English'?",
        "acceptedAnswer": { "@type": "Answer", "text": "Both are correct! 'I study English' = I'm taking classes/reading books. 'I'm learning English' = I'm gaining the ability to use English. You can study without learning, but you can't learn without some form of study or practice." }
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
        <span className="text-slate-900 dark:text-slate-100">Learn vs Study</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Learn vs Study: What's the Difference?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            <strong>Study</strong> = the process/activity of trying to gain knowledge
          </p>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>Learn</strong> = the result of gaining knowledge or skills
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">STUDY 📚</p>
              <p className="text-blue-800 dark:text-blue-200 mb-2">The PROCESS</p>
              <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">Reading books, attending classes, practicing, reviewing</p>
              <p className="text-blue-700 dark:text-blue-300 italic">"I study for 3 hours every day."</p>
              <p className="text-blue-700 dark:text-blue-300 italic">"She studies medicine at university."</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">LEARN 🎓</p>
              <p className="text-purple-800 dark:text-purple-200 mb-2">The RESULT</p>
              <p className="text-purple-700 dark:text-purple-300 text-sm mb-2">Successfully gaining knowledge or skills</p>
              <p className="text-purple-700 dark:text-purple-300 italic">"I learned to swim when I was 5."</p>
              <p className="text-purple-700 dark:text-purple-300 italic">"She learned a lot from her mistakes."</p>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-amber-800 dark:text-amber-200">
              <strong>Key insight:</strong> You can study without learning (if you don't absorb the information), but you can't learn academic subjects without some form of study.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <p className="font-bold text-slate-800 dark:text-slate-200 mb-2">Think of it this way:</p>
            <p className="text-slate-700 dark:text-slate-300 text-lg">
              Study → Process → Learn (Result)
            </p>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              "I <strong>studied</strong> hard for the exam, and I <strong>learned</strong> a lot."
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
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I <strong>study</strong> English every day. (the activity)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I <strong>learned</strong> English from watching movies. (the result)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She <strong>studies</strong> law at Harvard. (formal education)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">He <strong>learned</strong> to drive when he was 18. (acquired skill)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I need to <strong>study</strong> for my exam. (prepare through effort)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">What did you <strong>learn</strong> today? (what knowledge did you gain?)</span>
            </div>
          </div>
        </section>

        {/* Special Uses Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Special Uses
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">LEARN (not study) for skills:</p>
              <p className="text-blue-800 dark:text-blue-200">
                learn to swim, learn to drive, learn to cook, learn to play guitar
              </p>
              <p className="text-blue-700 dark:text-blue-300 mt-2 text-sm">
                (We don't say "study to swim" - these are practical skills)
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">STUDY (not learn) for academic disciplines:</p>
              <p className="text-purple-800 dark:text-purple-200">
                study medicine, study law, study economics, study biology
              </p>
              <p className="text-purple-700 dark:text-purple-300 mt-2 text-sm">
                (We say "study medicine" not "learn medicine")
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
              <strong>Fill in with "learn" or "study":</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "I _____ hard, but I didn't _____ anything because I was too tired."
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
                  <strong>Answer:</strong> I <strong>studied</strong> hard, but I didn't <strong>learn</strong> anything because I was too tired.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  "Studied" = the effort/process. "Learn" = the result (which didn't happen here).
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
              <Link to="/grammar-mistakes/remember-vs-remind" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Remember vs. Remind
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/do-vs-make" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Do vs. Make
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/say-vs-tell" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Say vs. Tell
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

export default LearnVsStudyPage;
