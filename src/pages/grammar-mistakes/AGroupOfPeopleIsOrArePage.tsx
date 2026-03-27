import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const AGroupOfPeopleIsOrArePage: React.FC = () => {
  usePageMetadata({
    title: 'A Group of People Is or Are? Which One Is Correct | TypoGrammar',
    description: 'Learn whether to say "a group of people is" or "a group of people are." Both can be correct! It depends on whether you focus on the group or individuals.',
    canonical: 'https://typogrammar.com/grammar-mistakes/a-group-of-people-is-or-are'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "A Group of People Is or Are?",
    "description": "Both can be correct! Use 'is' when treating the group as a single unit. Use 'are' when thinking of the individuals within the group.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/a-group-of-people-is-or-are" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it 'a group of people is' or 'a group of people are'?",
        "acceptedAnswer": { "@type": "Answer", "text": "Both can be correct. Use 'is' when viewing the group as one unit. Use 'are' when emphasizing the individuals within the group. In American English, 'is' is more common. In British English, 'are' is often preferred." }
      },
      {
        "@type": "Question",
        "name": "Do collective nouns take singular or plural verbs?",
        "acceptedAnswer": { "@type": "Answer", "text": "Collective nouns like 'group,' 'team,' or 'family' can take either singular or plural verbs depending on meaning and regional preferences. American English tends to use singular verbs; British English often uses plural verbs." }
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
        <span className="text-slate-900 dark:text-slate-100">A Group of People Is or Are</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          A Group of People Is or Are? Which One Is Correct
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8 dark:bg-blue-900/30 dark:border-blue-400">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-blue-800 dark:text-blue-200 mb-2">
            <strong>Both can be correct!</strong>
          </p>
          <p className="text-blue-800 dark:text-blue-200">
            Use <strong>"is"</strong> when treating the group as a single unit.<br />
            Use <strong>"are"</strong> when focusing on the individuals within the group.
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            <strong>"Group"</strong> is a <strong>collective noun</strong>—a word that refers to multiple people or things as a single unit. Other examples include: team, family, committee, audience, company, staff.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
              <h3 className="font-bold text-green-900 dark:text-green-100 text-lg mb-3">Use "is" (singular)</h3>
              <p className="text-green-800 dark:text-green-200 mb-2">
                When the group acts as <strong>one unit</strong>
              </p>
              <p className="text-green-700 dark:text-green-300 italic">
                "A group of tourists <strong>is</strong> arriving at 3 PM."
              </p>
              <p className="text-green-600 dark:text-green-400 text-sm mt-2">
                (The group arrives together as one)
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
              <h3 className="font-bold text-purple-900 dark:text-purple-100 text-lg mb-3">Use "are" (plural)</h3>
              <p className="text-purple-800 dark:text-purple-200 mb-2">
                When emphasizing <strong>individuals</strong>
              </p>
              <p className="text-purple-700 dark:text-purple-300 italic">
                "A group of people <strong>are</strong> waiting for different buses."
              </p>
              <p className="text-purple-600 dark:text-purple-400 text-sm mt-2">
                (They're acting individually)
              </p>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <p className="text-lg text-amber-800 dark:text-amber-200">
              <strong>Regional note:</strong> American English prefers <strong>"is"</strong> for collective nouns. British English often uses <strong>"are"</strong>.
            </p>
          </div>
        </section>

        {/* Examples Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Group as one unit (singular verb)</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">A group of students <strong>is</strong> visiting the museum today.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The group <strong>has</strong> decided to postpone the meeting.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">A group of protesters <strong>was</strong> blocking the entrance.</span>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Individuals in the group (plural verb)</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">A group of employees <strong>are</strong> working on different projects.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The group <strong>have</strong> gone their separate ways.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">A group of scientists <strong>are</strong> disagreeing about the results.</span>
            </div>
          </div>
        </section>

        {/* Other Collective Nouns */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Other Collective Nouns
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            The same rule applies to other collective nouns:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li>• The team <strong>is/are</strong></li>
                <li>• The family <strong>is/are</strong></li>
                <li>• The committee <strong>is/are</strong></li>
                <li>• The audience <strong>is/are</strong></li>
              </ul>
            </div>
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li>• The company <strong>is/are</strong></li>
                <li>• The staff <strong>is/are</strong></li>
                <li>• The class <strong>is/are</strong></li>
                <li>• The government <strong>is/are</strong></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Consistency Tip */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Important: Be Consistent!
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            Once you choose singular or plural, stay consistent within the same sentence or paragraph:
          </p>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Inconsistent:</strong> The group <strong>is</strong> meeting later, and <strong>they</strong> are bringing food.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Consistent:</strong> The group <strong>is</strong> meeting later, and <strong>it</strong> is bringing food.<br />
              OR: The group <strong>are</strong> meeting later, and <strong>they</strong> are bringing food.
            </p>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Which is correct?</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "A group of volunteers _____ (is/are) organizing the event together as a unified effort."
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
                  <strong>Answer:</strong> A group of volunteers <strong>is</strong> organizing the event together as a unified effort.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  "Together as a unified effort" suggests they're acting as one unit, so "is" fits best.
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
              <Link to="/grammar-mistakes/a-lot-of-people-is-or-are" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → A Lot of People Is or Are?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/a-number-of-vs-the-number-of" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → A Number Of vs The Number Of
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/people-is-or-people-are" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → People Is or People Are?
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

export default AGroupOfPeopleIsOrArePage;
