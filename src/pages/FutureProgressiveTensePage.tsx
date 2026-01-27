import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading } from '../components/ArticleComponents';
import SchemaMarkup from '../components/SchemaMarkup';

const FutureProgressiveTensePage: React.FC = () => {
  usePageMetadata({
    title: 'What Is the Future Progressive Tense? Definition, Rules & Examples',
    description: 'Learn what the Future Progressive (Future Continuous) tense is, when to use it, examples, common mistakes, and comparisons.',
    canonical: 'https://typogrammar.com/grammar/verb-tenses/future-progressive'
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Is the Future Progressive Tense?",
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
      "@id": "https://typogrammar.com/grammar/verb-tenses/future-progressive"
    },
    "dateModified": "2026-01-27"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the Future Progressive tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Future Progressive tense (also called Future Continuous) describes actions that will be in progress at a specific time in the future. It is formed with will be + verb-ing and emphasizes duration."
              }
            },
            {
              "@type": "Question",
              "name": "When do you use the Future Progressive tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use the Future Progressive for: actions in progress at a specific future time (I will be working at 8 PM tomorrow), parallel future actions (While you are cooking, I will be cleaning), and polite questions about plans (Will you be using the car tomorrow?)."
              }
            },
            {
              "@type": "Question",
              "name": "How do you form the Future Progressive tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Form the Future Progressive with: Subject + will + be + verb-ing. Negative: Subject + will + not + be + verb-ing. Question: Will + subject + be + verb-ing?"
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between Future Progressive and Future Simple?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Future Progressive describes ongoing actions in progress at a future time (I will be working at 5 PM). Future Simple describes future actions without emphasis on duration (I will work tomorrow). Progressive = ongoing, Simple = completed action."
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
          What Is the Future Progressive Tense?
        </h1>

        <div className="bg-blue-50 dark:bg-slate-700 border-l-4 border-blue-600 p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Definition</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            The Future Progressive tense (also called Future Continuous) describes actions that will be in progress at a specific time in the future. It is formed with will be + verb-ing and emphasizes duration.
          </p>
        </div>

        <ArticleHeading>When to Use the Future Progressive Tense</ArticleHeading>
        <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><strong>Actions in progress at a specific future time:</strong> I will be working at 8 PM tomorrow.</li>
          <li><strong>Parallel future actions:</strong> While you are cooking, I will be cleaning.</li>
          <li><strong>Polite questions about plans:</strong> Will you be using the car tomorrow?</li>
          <li><strong>Actions happening around a future time:</strong> She will be traveling next week.</li>
          <li><strong>Background actions in future narratives:</strong> This time tomorrow, I'll be lying on the beach.</li>
        </ul>

        <ArticleHeading>Future Progressive Tense Structure</ArticleHeading>
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
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">S + will + be + V-ing</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I will be working. / She will be studying.</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Negative</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">S + will not/won't + be + V-ing</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I won't be working. / She won't be studying.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Question</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Will + S + be + V-ing?</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Will you be working? / Will she be studying?</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ArticleHeading>Common Time Expressions</ArticleHeading>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>at this time tomorrow, this time next week</li>
          <li>at 5 PM tomorrow, at 8 o'clock next Monday</li>
          <li>tomorrow, next week, next month</li>
          <li>in the future, in + time (in 2 hours)</li>
          <li>while, when (with future actions)</li>
          <li>all day tomorrow, all evening</li>
        </ul>

        <ArticleHeading>Examples</ArticleHeading>
        
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Actions in Progress at a Specific Future Time</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I will be working at 8 PM tomorrow.</li>
          <li>This time next week, we will be flying to Paris.</li>
          <li>She will be studying at the library tomorrow afternoon.</li>
          <li>At 10 AM, they will be having a meeting.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Parallel Future Actions</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>While you are cooking dinner, I will be cleaning the house.</li>
          <li>When I arrive, they will be waiting for me.</li>
          <li>While she is presenting, I will be taking notes.</li>
          <li>As you are sleeping, I will be working on my project.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Polite Questions and Background Actions</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>Will you be using the car tomorrow? (polite question)</li>
          <li>Will you be passing the post office? Could you mail this? (polite)</li>
          <li>This time tomorrow, I'll be lying on the beach. (background)</li>
          <li>In two hours, we'll be eating dinner. (future background)</li>
        </ul>

        <ArticleHeading>Common Mistakes</ArticleHeading>
        
        <div className="space-y-4 mb-8">
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I will be know the answer tomorrow.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I will know the answer tomorrow.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Stative verbs like "know" aren't used in progressive forms.</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> She will be work tomorrow.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> She will be working tomorrow.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Add -ing to the verb after "will be."</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> They will being studying.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> They will be studying.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use "will be," not "will being."</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I will be worked at 5 PM.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I will be working at 5 PM.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use -ing form, not past participle.</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> Will you be need help tomorrow?</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> Will you need help tomorrow?</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> "Need" is usually a stative verb, not used in progressive form.</p>
          </div>
        </div>

        <ArticleHeading>Future Progressive vs. Future Simple</ArticleHeading>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          The Future Progressive describes <strong>ongoing actions in progress at a future time</strong>, while the Future Simple describes <strong>future actions without emphasis on duration</strong>.
        </p>

        <ul className="list-disc list-inside space-y-3 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li><strong>Use Progressive for ongoing:</strong> I will be working at 5 PM. (in progress at that time)</li>
          <li><strong>Use Simple for completion:</strong> I will work tomorrow. (complete the work)</li>
          <li><strong>Progressive = specific time:</strong> At 8 PM, she will be sleeping.</li>
          <li><strong>Simple = general future:</strong> She will sleep after dinner.</li>
          <li><strong>Progressive = background:</strong> While I'm studying, you will be watching TV.</li>
          <li><strong>Simple = main action:</strong> I will study, then I will sleep.</li>
        </ul>

        <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-8">
          <h4 className="font-bold text-xl mb-4 text-slate-900 dark:text-slate-100">Side-by-Side Comparison</h4>
          <div className="space-y-2 text-slate-700 dark:text-slate-300">
            <p><strong>Future Progressive:</strong> I will be studying at 7 PM. (in progress at that specific time)</p>
            <p><strong>Future Simple:</strong> I will study tonight. (complete the action sometime tonight)</p>
            <p className="mt-4"><strong>Future Progressive:</strong> This time tomorrow, we'll be flying to Paris. (action in progress)</p>
            <p><strong>Future Simple:</strong> We will fly to Paris tomorrow. (the flight will happen)</p>
          </div>
        </div>

        <ArticleHeading>Quick Check</ArticleHeading>
        <div className="space-y-6 mb-8">
          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">1. Choose the correct form: I ___ at 8 PM tomorrow.</p>
            <p>A) will work</p>
            <p>B) will be working</p>
            <p>C) will be work</p>
            <p>D) am working</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) will be working</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">2. Which sentence is WRONG?</p>
            <p>A) I will be studying.</p>
            <p>B) She will be reading.</p>
            <p>C) They will be knowing.</p>
            <p>D) We will be waiting.</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: C) They will be knowing.</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">3. Complete: This time next week, we ___ on the beach.</p>
            <p>A) will lie</p>
            <p>B) will be lying</p>
            <p>C) will be lie</p>
            <p>D) are lying</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) will be lying</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">4. Which shows an action in progress at a future time?</p>
            <p>A) I will work tomorrow.</p>
            <p>B) I will be working at 5 PM tomorrow.</p>
            <p>C) I worked yesterday.</p>
            <p>D) I am working now.</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) I will be working at 5 PM tomorrow.</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">5. Choose the correct form: While you ___, I will be cooking.</p>
            <p>A) study</p>
            <p>B) are studying</p>
            <p>C) will study</p>
            <p>D) studied</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) are studying</p>
          </div>
        </div>

        <ArticleHeading>Next Steps</ArticleHeading>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><Link to="/grammar/verb-tenses" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">Verb Tenses Overview</Link> - Learn all 12 English verb tenses</li>
          <li><Link to="/grammar/verb-tenses/future-simple" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">What Is the Future Simple Tense?</Link> - Compare with Future Progressive</li>
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

export default FutureProgressiveTensePage;
