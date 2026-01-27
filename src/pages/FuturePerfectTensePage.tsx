import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading } from '../components/ArticleComponents';
import SchemaMarkup from '../components/SchemaMarkup';

const FuturePerfectTensePage: React.FC = () => {
  usePageMetadata({
    title: 'What Is the Future Perfect Tense? Definition, Rules & Examples',
    description: 'Learn what the Future Perfect tense is, when to use it, examples, common mistakes, and how it differs from Future Simple.',
    canonical: 'https://typogrammar.com/grammar/verb-tenses/future-perfect'
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Is the Future Perfect Tense?",
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
      "@id": "https://typogrammar.com/grammar/verb-tenses/future-perfect"
    },
    "dateModified": "2026-01-27"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the Future Perfect tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Future Perfect tense describes actions that will be completed before a specific time or action in the future. It is formed with will have + past participle and shows completion before a future moment."
              }
            },
            {
              "@type": "Question",
              "name": "When do you use the Future Perfect tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use the Future Perfect for: actions completed before a future time (I will have finished by 5 PM), experiences before a future moment (She will have graduated by next year), and predictions about completed future actions (They will have left by the time you arrive)."
              }
            },
            {
              "@type": "Question",
              "name": "How do you form the Future Perfect tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Form the Future Perfect with: Subject + will + have + past participle. Negative: Subject + will + not + have + past participle. Question: Will + subject + have + past participle?"
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between Future Perfect and Future Simple?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Future Perfect describes actions completed before a future time (I will have finished by 5 PM). Future Simple describes future actions without reference to completion time (I will finish my work). Perfect = completed before, Simple = will happen."
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
          What Is the Future Perfect Tense?
        </h1>

        <div className="bg-blue-50 dark:bg-slate-700 border-l-4 border-blue-600 p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Definition</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            The Future Perfect tense describes actions that will be completed before a specific time or action in the future. It is formed with will have + past participle and shows completion before a future moment.
          </p>
        </div>

        <ArticleHeading>When to Use the Future Perfect Tense</ArticleHeading>
        <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><strong>Actions completed before a future time:</strong> I will have finished by 5 PM.</li>
          <li><strong>Experiences before a future moment:</strong> She will have graduated by next year.</li>
          <li><strong>Predictions about completed future actions:</strong> They will have left by the time you arrive.</li>
          <li><strong>Future milestones:</strong> By 2030, we will have lived here for 10 years.</li>
        </ul>

        <ArticleHeading>Future Perfect Tense Structure</ArticleHeading>
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
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">S + will + have + past participle</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I will have finished. / She will have left.</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Negative</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">S + will not/won't + have + past participle</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I won't have finished. / She won't have left.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Question</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Will + S + have + past participle?</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Will you have finished? / Will she have left?</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ArticleHeading>Common Time Expressions</ArticleHeading>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>by + future time (by 5 PM, by tomorrow, by next week)</li>
          <li>by the time + clause (by the time you arrive)</li>
          <li>before + future time (before Monday)</li>
          <li>in + time period (in 2 hours, in 5 years)</li>
          <li>by the end of + period (by the end of the year)</li>
          <li>when + Present Simple (when you get home)</li>
        </ul>

        <ArticleHeading>Examples</ArticleHeading>
        
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Actions Completed Before a Future Time</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I will have finished my homework by 8 PM.</li>
          <li>She will have left by the time you arrive.</li>
          <li>They will have completed the project before the deadline.</li>
          <li>We will have eaten dinner by 7 PM.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Future Milestones and Experiences</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>By 2030, I will have lived in this city for 20 years.</li>
          <li>She will have graduated by next year.</li>
          <li>By the end of this month, he will have worked here for 5 years.</li>
          <li>By tomorrow, we will have finished all the preparations.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Predictions About Completed Actions</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>By the time you read this, I will have left.</li>
          <li>When you wake up, I will have already gone to work.</li>
          <li>By next week, they will have sold all the tickets.</li>
          <li>In two hours, the meeting will have ended.</li>
        </ul>

        <ArticleHeading>Common Mistakes</ArticleHeading>
        
        <div className="space-y-4 mb-8">
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I will have finish by 5 PM.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I will have finished by 5 PM.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use past participle (finished), not base form (finish) after "will have."</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> She will have went home.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> She will have gone home.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use past participle (gone), not past simple (went) after "will have."</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> By the time you will arrive, I will have left.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> By the time you arrive, I will have left.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use Present Simple (arrive), not Future (will arrive) in time clauses.</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I will have been finish.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I will have finished.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use "will have + past participle," not "will have been + base form."</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> They will finished by tomorrow.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> They will have finished by tomorrow.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Include "have" in the Future Perfect structure.</p>
          </div>
        </div>

        <ArticleHeading>Future Perfect vs. Future Simple</ArticleHeading>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          The Future Perfect describes <strong>actions completed before a future time</strong>, while the Future Simple describes <strong>future actions without reference to completion before another time</strong>.
        </p>

        <ul className="list-disc list-inside space-y-3 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li><strong>Use Future Perfect with "by":</strong> I will have finished by 5 PM. (completed before 5 PM)</li>
          <li><strong>Use Future Simple generally:</strong> I will finish my work. (sometime in the future)</li>
          <li><strong>Future Perfect = before a point:</strong> She will have left before you arrive.</li>
          <li><strong>Future Simple = will happen:</strong> She will leave tomorrow.</li>
          <li><strong>Future Perfect emphasizes completion:</strong> By 2030, I will have traveled to 50 countries.</li>
          <li><strong>Future Simple states action:</strong> I will travel to Europe next year.</li>
        </ul>

        <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-8">
          <h4 className="font-bold text-xl mb-4 text-slate-900 dark:text-slate-100">Side-by-Side Comparison</h4>
          <div className="space-y-2 text-slate-700 dark:text-slate-300">
            <p><strong>Future Perfect:</strong> I will have finished by 5 PM. (completed before 5 PM)</p>
            <p><strong>Future Simple:</strong> I will finish my work. (will happen, but timing not specified)</p>
            <p className="mt-4"><strong>Future Perfect:</strong> By next year, she will have graduated. (completed before next year)</p>
            <p><strong>Future Simple:</strong> She will graduate next year. (the action will happen next year)</p>
          </div>
        </div>

        <ArticleHeading>Quick Check</ArticleHeading>
        <div className="space-y-6 mb-8">
          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">1. Choose the correct form: I ___ by 5 PM.</p>
            <p>A) will finish</p>
            <p>B) will have finish</p>
            <p>C) will have finished</p>
            <p>D) will finished</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: C) will have finished</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">2. Which sentence is WRONG?</p>
            <p>A) I will have finished.</p>
            <p>B) She will have gone.</p>
            <p>C) They will have went.</p>
            <p>D) We will have left.</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: C) They will have went. (should be "will have gone")</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">3. Complete: By the time you ___, I will have left.</p>
            <p>A) will arrive</p>
            <p>B) arrive</p>
            <p>C) arrived</p>
            <p>D) arriving</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) arrive (no "will" in time clauses)</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">4. Which shows completion before a future time?</p>
            <p>A) I will finish my work.</p>
            <p>B) I will have finished by 5 PM.</p>
            <p>C) I am finishing my work.</p>
            <p>D) I finished my work.</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) I will have finished by 5 PM.</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">5. Choose the correct form: By 2030, they ___ here for 20 years.</p>
            <p>A) will live</p>
            <p>B) will have lived</p>
            <p>C) will be living</p>
            <p>D) live</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) will have lived</p>
          </div>
        </div>

        <ArticleHeading>Next Steps</ArticleHeading>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><Link to="/grammar/verb-tenses" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">Verb Tenses Overview</Link> - Learn all 12 English verb tenses</li>
          <li><Link to="/grammar/verb-tenses/future-simple" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">What Is the Future Simple Tense?</Link> - Compare with Future Perfect</li>
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

export default FuturePerfectTensePage;
