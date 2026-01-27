import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading } from '../components/ArticleComponents';
import SchemaMarkup from '../components/SchemaMarkup';

const PresentSimpleTensePage: React.FC = () => {
  usePageMetadata({
    title: 'What Is the Present Simple Tense? Definition, Rules & Examples',
    description: 'Learn what the Present Simple tense is, when to use it, how to form it, examples, common mistakes, and quick comparisons.',
    canonical: 'https://typogrammar.com/grammar/verb-tenses/present-simple'
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Is the Present Simple Tense?",
    "author": {
      "@type": "Organization",
      "name": "TypoGrammar Editorial Team",
      "url": "https://typogrammar.com/about/editorial-team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TypoGrammar",
      "url": "https://typogrammar.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://typogrammar.com/grammar/verb-tenses/present-simple"
    },
    "dateModified": "2026-01-27"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the Present Simple tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Present Simple tense is used to describe habits, routines, general truths, permanent situations, and scheduled future events. It expresses actions that happen regularly or facts that are always true."
              }
            },
            {
              "@type": "Question",
              "name": "When do you use the Present Simple tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use the Present Simple for: habits and routines (I drink coffee every morning), general truths and facts (The Earth revolves around the Sun), permanent situations (She lives in Paris), and scheduled future events (The train leaves at 7 AM)."
              }
            },
            {
              "@type": "Question",
              "name": "How do you form the Present Simple tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Form the Present Simple with: Subject + base verb (for I/you/we/they) or Subject + verb+s/es (for he/she/it). Negative: Subject + do/does + not + base verb. Question: Do/Does + subject + base verb?"
              }
            },
            {
              "@type": "Question",
              "name": "What are common time expressions for the Present Simple tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Common time expressions include: always, usually, often, sometimes, rarely, never, every day/week/month/year, on Mondays/weekends, once/twice a day."
              }
            },
            {
              "@type": "Question",
              "name": "What are common mistakes with the Present Simple tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Common mistakes include: forgetting -s/-es with he/she/it (He go → He goes), using do/does with be verb (Does he is → Is he), double negatives (He doesn't knows → He doesn't know), using it for actions happening now instead of Present Progressive, and incorrect third-person spelling."
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between Present Simple and Present Progressive?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Present Simple describes habits, routines, and permanent situations (I work from home). Present Progressive describes actions happening right now or temporary situations (I am working right now). Simple = regular/permanent, Progressive = temporary/ongoing."
              }
            }
          ]
  };

  return (
    <>
      <SchemaMarkup type="Article" data={articleSchema} />
      <SchemaMarkup type="FAQPage" data={faqSchema} />

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          What Is the Present Simple Tense?
        </h1>

        <div className="bg-blue-50 dark:bg-slate-700 border-l-4 border-blue-600 p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Definition</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            The Present Simple tense is used to describe habits, routines, general truths, permanent situations, and scheduled future events. It expresses actions that happen regularly or facts that are always true, without emphasizing when exactly they occur.
          </p>
        </div>

        <ArticleHeading>When to Use the Present Simple Tense</ArticleHeading>
        <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><strong>Habits and routines:</strong> I drink coffee every morning.</li>
          <li><strong>General truths and facts:</strong> The Earth revolves around the Sun.</li>
          <li><strong>Permanent situations:</strong> She lives in Paris.</li>
          <li><strong>Scheduled future events:</strong> The train leaves at 7 AM tomorrow.</li>
          <li><strong>Instructions and directions:</strong> You turn left at the traffic light.</li>
          <li><strong>Newspaper headlines:</strong> Government announces new policy.</li>
        </ul>

        <ArticleHeading>Present Simple Tense Structure</ArticleHeading>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Type</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Formula</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Affirmative</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">S + V (base/+s/es)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She works every day. / I work from home.</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Negative</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">S + do/does not + V (base)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She doesn't work on weekends. / I don't like coffee.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Question</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Do/Does + S + V (base)?</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Does she work here? / Do you speak English?</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ArticleHeading>Common Time Expressions</ArticleHeading>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>always, usually, often, sometimes, rarely, never</li>
          <li>every day, every week, every month, every year</li>
          <li>on Mondays, on weekends</li>
          <li>once a day, twice a week, three times a month</li>
          <li>in the morning/afternoon/evening</li>
          <li>at night, at 7 o'clock</li>
        </ul>

        <ArticleHeading>Examples</ArticleHeading>
        
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Habits and Routines</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I wake up at 6 AM every day.</li>
          <li>She goes to the gym three times a week.</li>
          <li>They usually have dinner at 7 PM.</li>
          <li>He never eats breakfast.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">General Truths and Facts</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>Water boils at 100 degrees Celsius.</li>
          <li>The sun rises in the east.</li>
          <li>Cats love milk.</li>
          <li>English is spoken in many countries.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Scheduled Future Events</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>The meeting starts at 10 AM tomorrow.</li>
          <li>The flight departs at 8:30 PM.</li>
          <li>The semester begins next Monday.</li>
          <li>The store opens at 9 AM on weekdays.</li>
        </ul>

        <ArticleHeading>Common Mistakes</ArticleHeading>
        
        <div className="space-y-4 mb-8">
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> He go to school every day.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> He goes to school every day.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Third person singular (he/she/it) requires -s or -es ending.</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> Does he is a teacher?</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> Is he a teacher?</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Don't use do/does with the verb "be." Use only the verb "be" in questions.</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> He doesn't knows the answer.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> He doesn't know the answer.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> After doesn't, use the base form of the verb (no -s).</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I study right now.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I am studying right now.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> For actions happening at this moment, use Present Progressive, not Present Simple.</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> She studys English.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> She studies English.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> For verbs ending in consonant + y, change y to i and add -es.</p>
          </div>
        </div>

        <ArticleHeading>Present Simple vs. Present Progressive</ArticleHeading>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          The Present Simple describes <strong>habits, routines, and permanent situations</strong>, while the Present Progressive describes <strong>actions happening right now or temporary situations</strong>.
        </p>

        <ul className="list-disc list-inside space-y-3 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li><strong>Use Simple for habits:</strong> I work from home. (permanent situation)</li>
          <li><strong>Use Progressive for now:</strong> I am working from home today. (temporary, happening now)</li>
          <li><strong>Simple = repeated/regular:</strong> She drinks coffee every morning.</li>
          <li><strong>Progressive = right now:</strong> She is drinking coffee right now.</li>
          <li><strong>Simple = facts:</strong> He lives in London.</li>
        </ul>

        <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-8">
          <h4 className="font-bold text-xl mb-4 text-slate-900 dark:text-slate-100">Side-by-Side Comparison</h4>
          <div className="space-y-2 text-slate-700 dark:text-slate-300">
            <p><strong>Present Simple:</strong> I play tennis. (habit)</p>
            <p><strong>Present Progressive:</strong> I am playing tennis. (right now)</p>
            <p className="mt-4"><strong>Present Simple:</strong> She studies at the library. (routine)</p>
            <p><strong>Present Progressive:</strong> She is studying at the library. (happening now)</p>
          </div>
        </div>

        <ArticleHeading>Quick Check</ArticleHeading>
        <div className="space-y-6 mb-8">
          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">1. Choose the correct form: He ___ to work by bus every day.</p>
            <p>A) go</p>
            <p>B) goes</p>
            <p>C) going</p>
            <p>D) is going</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) goes</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">2. Which sentence is correct?</p>
            <p>A) Water boil at 100 degrees.</p>
            <p>B) Water boils at 100 degrees.</p>
            <p>C) Water is boiling at 100 degrees.</p>
            <p>D) Water boiling at 100 degrees.</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) Water boils at 100 degrees.</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">3. Choose the correct negative: She ___ like coffee.</p>
            <p>A) doesn't</p>
            <p>B) don't</p>
            <p>C) isn't</p>
            <p>D) not</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: A) doesn't</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">4. Which is a Present Simple use? The train ___</p>
            <p>A) is leaving now</p>
            <p>B) leaves at 8 AM tomorrow</p>
            <p>C) has left</p>
            <p>D) will leave</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) leaves at 8 AM tomorrow</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">5. Choose the correct question form:</p>
            <p>A) Does she works here?</p>
            <p>B) Do she work here?</p>
            <p>C) Does she work here?</p>
            <p>D) Is she work here?</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: C) Does she work here?</p>
          </div>
        </div>

        <ArticleHeading>Next Steps</ArticleHeading>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><Link to="/grammar/verb-tenses" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">Verb Tenses Overview</Link> - Learn all 12 English verb tenses</li>
          <li><Link to="/grammar/verb-tenses/present-progressive" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">What Is the Present Progressive Tense?</Link> - Compare with Present Simple</li>
          <li><Link to="/quizzes/verb-tenses-quiz" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">Verb Tenses Quiz</Link> - Test your knowledge of all tenses</li>
        </ul>

        <div className="bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 p-6 my-8 rounded-lg">
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            By <Link to="/about/editorial-team" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">TypoGrammar Editorial Team</Link>
          </p>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            TypoGrammar Editorial Team creates independent, grammar-focused educational content to help English learners improve clarity, structure, and accuracy for academic and real-world use.
          </p>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">Editorial Standards & Trust Policy</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
            <li>Independent educational content</li>
            <li>No score guarantees</li>
            <li>Not affiliated with ETS/TOEFL/IELTS</li>
            <li>Reviewed for clarity and accuracy</li>
          </ul>
          <p className="text-slate-700 dark:text-slate-300 mt-4">
            <strong>Last reviewed:</strong> 2026<br />
            <strong>Reviewed by:</strong> TypoGrammar Editorial Team
          </p>
        </div>
      </article>
    </>
  );
};

export default PresentSimpleTensePage;
