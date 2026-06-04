import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const AboutVsOfPage: React.FC = () => {
  usePageMetadata({
    title: 'About vs. Of: What\'s the Difference? | TypoGrammar',
    description: 'Learn the difference between about and of in English. About is used for topics and subjects, while of indicates possession, content, or composition.',
    canonical: 'https://typogrammar.com/grammar-mistakes/about-vs-of/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "About vs. Of",
    "description": "About is used for topics, discussions, and concerns. Of indicates possession, contents, parts, and composition.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/about-vs-of" },
    "datePublished": "2026-04-18",
    "dateModified": "2026-04-18"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between about and of?",
        "acceptedAnswer": { "@type": "Answer", "text": "'About' is used to talk about the subject or topic of something: 'a book about history,' 'I'm thinking about you.' 'Of' indicates possession, material, or relationship: 'the cover of the book,' 'made of wood,' 'a cup of tea.'" }
      },
      {
        "@type": "Question",
        "name": "Is it 'think about' or 'think of'?",
        "acceptedAnswer": { "@type": "Answer", "text": "Both 'think about' and 'think of' are used, but they have slightly different meanings. 'Think about' means to consider or reflect on something: 'I'm thinking about moving abroad.' 'Think of' means to have an idea or recall something: 'I can't think of his name.'" }
      },
      {
        "@type": "Question",
        "name": "Is it 'dream about' or 'dream of'?",
        "acceptedAnswer": { "@type": "Answer", "text": "Both are correct. 'Dream about' often refers to literal dreams while sleeping: 'I dreamed about you last night.' 'Dream of' often refers to hopes and ambitions: 'She dreams of becoming a doctor.'" }
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
        <span className="text-slate-900 dark:text-slate-100">About vs. Of</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          About vs. Of: What's the Difference?
        </h1>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-lg text-green-800 dark:text-green-200">
            <li><strong>About</strong> = the topic, subject, or concern: "a film <em>about</em> war," "worried <em>about</em> money"</li>
            <li><strong>Of</strong> = possession, content, composition, or relationship: "the end <em>of</em> the film," "made <em>of</em> glass," "a cup <em>of</em> coffee"</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Main Uses of ABOUT
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">1. Topic or subject</h3>
              <p className="text-slate-700 dark:text-slate-300 italic text-sm">"a documentary <strong>about</strong> climate change"</p>
              <p className="text-slate-700 dark:text-slate-300 italic text-sm">"Let's talk <strong>about</strong> the project."</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">2. Concern or worry</h3>
              <p className="text-slate-700 dark:text-slate-300 italic text-sm">"I'm worried <strong>about</strong> my health."</p>
              <p className="text-slate-700 dark:text-slate-300 italic text-sm">"She's excited <strong>about</strong> the trip."</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">3. Approximate amount (= around)</h3>
              <p className="text-slate-700 dark:text-slate-300 italic text-sm">"It costs <strong>about</strong> $20." / "I'll arrive <strong>about</strong> 3 o'clock."</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Main Uses of OF
          </h2>
          <div className="space-y-4">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-2">1. Possession / Belonging</h3>
              <p className="text-slate-700 dark:text-slate-300 italic text-sm">"the capital <strong>of</strong> France" / "the door <strong>of</strong> the house"</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-2">2. Content / Amount</h3>
              <p className="text-slate-700 dark:text-slate-300 italic text-sm">"a cup <strong>of</strong> tea" / "a bag <strong>of</strong> rice" / "a group <strong>of</strong> students"</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-2">3. Material / Composition</h3>
              <p className="text-slate-700 dark:text-slate-300 italic text-sm">"made <strong>of</strong> wood" / "built <strong>of</strong> stone" / "composed <strong>of</strong> water"</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-2">4. After certain adjectives</h3>
              <p className="text-slate-700 dark:text-slate-300 italic text-sm">"afraid <strong>of</strong>" / "proud <strong>of</strong>" / "tired <strong>of</strong>" / "fond <strong>of</strong>"</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Verbs That Change Meaning: Think about vs. Think of
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-slate-700 dark:text-slate-300">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-700">
                  <th className="p-3 border border-slate-200 dark:border-slate-600 font-bold">Verb + about</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-600 font-bold">Meaning</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-600 font-bold">Verb + of</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-600 font-bold">Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 italic">think about</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 text-sm">consider, reflect</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 italic">think of</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 text-sm">recall, have an idea</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-700/30">
                  <td className="p-3 border border-slate-200 dark:border-slate-600 italic">dream about</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 text-sm">literal dream while sleeping</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 italic">dream of</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 text-sm">hope or ambition</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 italic">hear about</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 text-sm">get news/information</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 italic">hear of</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 text-sm">know of the existence of</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">He wrote a book <strong>about</strong> his travels. (subject)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The beginning <strong>of</strong> the book is fascinating. (possession/part)</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">Tell me <strong>of</strong> your weekend. (topic = use "about")</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Tell me <strong>about</strong> your weekend.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I'm afraid <strong>about</strong> dogs. (afraid takes "of")</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I'm afraid <strong>of</strong> dogs.</span>
            </div>
          </div>
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
              "Have you heard _____ the new restaurant that opened downtown?" (about / of)
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
                  <strong>Answer:</strong> Have you heard <strong>about</strong> the new restaurant?
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  "Heard about" = received news/information about something. ("Heard of" = know that it exists.)
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
              <Link to="/grammar-mistakes/by-vs-with/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → By vs. With
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/to-vs-for/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → To vs. For
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/afraid-of-or-afraid-from/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Afraid Of or Afraid From?
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

export default AboutVsOfPage;
