import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const ByVsWithPage: React.FC = () => {
  usePageMetadata({
    title: 'By vs. With: What\'s the Difference? | TypoGrammar',
    description: 'Learn the difference between by and with in English. By is used to show the agent in passive voice or the method used. With is used to show the tool or instrument.',
    canonical: 'https://typogrammar.com/grammar-mistakes/by-vs-with/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "By vs. With",
    "description": "By is used for the agent in passive sentences and means of transport or communication. With is used for the tool, instrument, or accompanying person.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/by-vs-with" },
    "datePublished": "2026-04-18",
    "dateModified": "2026-04-18"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between by and with?",
        "acceptedAnswer": { "@type": "Answer", "text": "'By' shows the agent (who/what caused something) in passive sentences: 'The window was broken by a ball.' It also shows method of travel: 'by car, by bus.' 'With' shows the tool or instrument: 'The window was broken with a hammer.' It also means accompanied: 'I came with my friend.'" }
      },
      {
        "@type": "Question",
        "name": "Is it 'killed by a knife' or 'killed with a knife'?",
        "acceptedAnswer": { "@type": "Answer", "text": "Both are possible but mean different things. 'Killed by a knife' treats the knife as the agent/cause. 'Killed with a knife' treats the knife as the instrument/tool used. In practice, 'stabbed/killed with a knife' (tool) is the more natural choice, while 'by' is typically used for people or forces of nature." }
      },
      {
        "@type": "Question",
        "name": "How do you use 'by' for transport?",
        "acceptedAnswer": { "@type": "Answer", "text": "Use 'by' without an article to talk about means of transport: 'by car,' 'by train,' 'by plane,' 'by bus.' Do NOT say 'by the car' or 'by a bus' in this context." }
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
        <span className="text-slate-900 dark:text-slate-100">By vs. With</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          By vs. With: What's the Difference?
        </h1>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-lg text-green-800 dark:text-green-200">
            <li><strong>By</strong> = the agent (who did it), method, or means of transport: "written <em>by</em> Shakespeare," "travel <em>by</em> train"</li>
            <li><strong>With</strong> = the tool/instrument, or accompanying someone/something: "cut <em>with</em> a knife," "came <em>with</em> my friend"</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">BY</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200 text-sm">1. Passive voice, agent (who/what did the action):</p>
                  <p className="text-slate-700 dark:text-slate-300 italic text-sm">"The book was written <strong>by</strong> Hemingway."</p>
                </div>
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200 text-sm">2. Means of transport (no article):</p>
                  <p className="text-slate-700 dark:text-slate-300 italic text-sm">"I travel <strong>by</strong> car / bus / train / plane."</p>
                </div>
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200 text-sm">3. Method of communication:</p>
                  <p className="text-slate-700 dark:text-slate-300 italic text-sm">"Send it <strong>by</strong> email / post."</p>
                </div>
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200 text-sm">4. Deadline:</p>
                  <p className="text-slate-700 dark:text-slate-300 italic text-sm">"Please finish it <strong>by</strong> Friday."</p>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">WITH</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200 text-sm">1. Tool or instrument (what was used):</p>
                  <p className="text-slate-700 dark:text-slate-300 italic text-sm">"She cut the bread <strong>with</strong> a knife."</p>
                </div>
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200 text-sm">2. Accompaniment (together with):</p>
                  <p className="text-slate-700 dark:text-slate-300 italic text-sm">"He came <strong>with</strong> his family."</p>
                </div>
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200 text-sm">3. Having / possessing a characteristic:</p>
                  <p className="text-slate-700 dark:text-slate-300 italic text-sm">"A room <strong>with</strong> a view." / "A man <strong>with</strong> blue eyes."</p>
                </div>
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200 text-sm">4. Emotions/reactions:</p>
                  <p className="text-slate-700 dark:text-slate-300 italic text-sm">"She trembled <strong>with</strong> fear." / "He smiled <strong>with</strong> joy."</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-5 rounded-lg">
            <h3 className="text-lg font-bold text-teal-900 dark:text-teal-100 mb-2">Key Distinction: Agent vs. Tool</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-2">In passive sentences, use <strong>by</strong> for the <em>person or force</em> that did the action, and <strong>with</strong> for the <em>instrument or tool</em> used:</p>
            <p className="text-slate-700 dark:text-slate-300 italic">"The door was locked <strong>by</strong> the security guard <strong>with</strong> a key."</p>
            <p className="text-slate-700 dark:text-slate-300 italic mt-1">"He was attacked <strong>by</strong> a stranger <strong>with</strong> a stick."</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The painting was created <strong>by</strong> Picasso. (agent)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">He painted it <strong>with</strong> a special brush. (tool)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I go to work <strong>by</strong> bus. (means of transport)</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I go to work <strong>with</strong> bus. (means of transport takes "by")</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I came to the party <strong>with</strong> my sister. (accompanied by)</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">The letter was written <strong>with</strong> a famous author.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The letter was written <strong>by</strong> a famous author.</span>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistake
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Incorrect:</strong> The homework was done with the student.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct:</strong> The homework was done by the student.
            </p>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm">
            In passive sentences, the person performing the action takes <em>by</em>, not <em>with</em>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Choose the correct word:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "The report was submitted _____ email _____ the manager." (by / with)
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
                  <strong>Answer:</strong> The report was submitted <strong>by</strong> email <strong>by</strong> the manager.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  First <em>by</em>: method of sending. Second <em>by</em>: agent (who submitted it).
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Related Grammar
          </h2>
          <ul className="space-y-2 text-lg">
            <li>
              <Link to="/grammar-mistakes/to-vs-for/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → To vs. For
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/about-vs-of/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → About vs. Of
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

export default ByVsWithPage;
