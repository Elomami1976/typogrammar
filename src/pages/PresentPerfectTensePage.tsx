import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading } from '../components/ArticleComponents';
import SchemaMarkup from '../components/SchemaMarkup';

const PresentPerfectTensePage: React.FC = () => {
  usePageMetadata({
    title: 'What Is the Present Perfect Tense? Definition, Rules & Examples',
    description: 'Learn what the Present Perfect tense is, when to use it, examples, common mistakes, and how it differs from Past Simple.',
    canonical: 'https://typogrammar.com/grammar/verb-tenses/present-perfect'
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Is the Present Perfect Tense?",
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
      "@id": "https://typogrammar.com/grammar/verb-tenses/present-perfect"
    },
    "dateModified": "2026-01-27"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the Present Perfect tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Present Perfect tense describes actions that occurred at an unspecified time in the past, actions with results in the present, or experiences up to now. It connects past actions to the present moment."
              }
            },
            {
              "@type": "Question",
              "name": "When do you use the Present Perfect tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use the Present Perfect for: life experiences (I have visited Paris), recent past actions with present results (I have lost my keys), actions continuing to now (I have lived here for 5 years), and actions in unfinished time periods (I haven't seen him today)."
              }
            },
            {
              "@type": "Question",
              "name": "How do you form the Present Perfect tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Form the Present Perfect with: Subject + have/has + past participle. Negative: Subject + have/has + not + past participle. Question: Have/Has + subject + past participle?"
              }
            },
            {
              "@type": "Question",
              "name": "What are common time expressions for the Present Perfect tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Common time expressions include: ever, never, already, yet, just, so far, recently, lately, since, for, up to now, until now, today, this week."
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between Present Perfect and Past Simple?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Present Perfect describes actions with present relevance or unspecified time (I have visited Paris). Past Simple describes completed actions at specific past times (I visited Paris in 2020). Perfect = connected to now, Simple = finished past."
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
          What Is the Present Perfect Tense?
        </h1>

        <div className="bg-blue-50 dark:bg-slate-700 border-l-4 border-blue-600 p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Definition</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            The Present Perfect tense describes actions that occurred at an unspecified time in the past, actions with results in the present, or experiences up to now. It connects past actions to the present moment.
          </p>
        </div>

        <ArticleHeading>When to Use the Present Perfect Tense</ArticleHeading>
        <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><strong>Life experiences:</strong> I have visited Paris. (when isn't important)</li>
          <li><strong>Recent past with present results:</strong> I have lost my keys. (still lost now)</li>
          <li><strong>Actions continuing to now:</strong> I have lived here for 5 years. (still living here)</li>
          <li><strong>Unfinished time periods:</strong> I haven't seen him today. (today isn't finished)</li>
          <li><strong>Repeated actions up to now:</strong> She has called me three times this week.</li>
        </ul>

        <ArticleHeading>Present Perfect Tense Structure</ArticleHeading>
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
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">S + have/has + past participle</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I have seen that movie. / She has finished.</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Negative</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">S + have/has + not + past participle</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I haven't seen it. / She hasn't finished.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Question</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Have/Has + S + past participle?</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Have you seen it? / Has she finished?</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ArticleHeading>Common Time Expressions</ArticleHeading>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>ever, never (Have you ever been to Japan?)</li>
          <li>already, yet (I've already eaten. / Have you finished yet?)</li>
          <li>just, recently, lately (I've just arrived.)</li>
          <li>so far, up to now, until now (So far, I've completed 5 chapters.)</li>
          <li>since + starting point (since 2020, since Monday)</li>
          <li>for + duration (for 3 years, for two weeks)</li>
          <li>today, this week, this month, this year (unfinished periods)</li>
        </ul>

        <ArticleHeading>Examples</ArticleHeading>
        
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Life Experiences</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I have visited Paris three times.</li>
          <li>She has never eaten sushi.</li>
          <li>Have you ever seen a shooting star?</li>
          <li>They have traveled to over 20 countries.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Recent Past with Present Results</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I have lost my keys. (I don't have them now)</li>
          <li>She has broken her leg. (It's still broken)</li>
          <li>They have just arrived. (They're here now)</li>
          <li>I've already eaten. (I'm not hungry now)</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Actions Continuing to Now</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I have lived here for 5 years. (still living here)</li>
          <li>She has worked at Google since 2020. (still works there)</li>
          <li>We have known each other for a long time.</li>
          <li>He has been a teacher since he graduated.</li>
        </ul>

        <ArticleHeading>Common Mistakes</ArticleHeading>
        
        <div className="space-y-4 mb-8">
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I have seen him yesterday.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I saw him yesterday.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Don't use Present Perfect with specific past time words like yesterday, last week, in 2020.</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I have went to Paris.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I have been to Paris. / I went to Paris.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use past participle (been), not past simple (went) after have/has.</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> She has finish her homework.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> She has finished her homework.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use past participle form (finished), not base form (finish).</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I live here for 5 years.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I have lived here for 5 years.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use Present Perfect with "for" + duration when the action continues to now.</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> Have you finished already your homework?</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> Have you already finished your homework?</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> "Already" usually goes between have/has and the past participle.</p>
          </div>
        </div>

        <ArticleHeading>Present Perfect vs. Past Simple</ArticleHeading>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          The Present Perfect describes <strong>actions with present relevance or unspecified time</strong>, while the Past Simple describes <strong>completed actions at specific past times</strong>.
        </p>

        <ul className="list-disc list-inside space-y-3 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li><strong>Use Perfect without specific time:</strong> I have visited Paris. (when not important)</li>
          <li><strong>Use Simple with specific time:</strong> I visited Paris in 2020. (when is important)</li>
          <li><strong>Perfect = connected to now:</strong> I have lost my keys. (still lost)</li>
          <li><strong>Simple = disconnected from now:</strong> I lost my keys yesterday. (maybe found them already)</li>
          <li><strong>Perfect with for/since:</strong> I have lived here for 5 years. (still living)</li>
          <li><strong>Simple with finished time:</strong> I lived there for 5 years. (don't live there now)</li>
        </ul>

        <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-8">
          <h4 className="font-bold text-xl mb-4 text-slate-900 dark:text-slate-100">Side-by-Side Comparison</h4>
          <div className="space-y-2 text-slate-700 dark:text-slate-300">
            <p><strong>Present Perfect:</strong> I have visited London. (experience, when not specified)</p>
            <p><strong>Past Simple:</strong> I visited London in 2020. (specific past time)</p>
            <p className="mt-4"><strong>Present Perfect:</strong> She has lived here for 10 years. (still lives here)</p>
            <p><strong>Past Simple:</strong> She lived here for 10 years. (doesn't live here anymore)</p>
          </div>
        </div>

        <ArticleHeading>Quick Check</ArticleHeading>
        <div className="space-y-6 mb-8">
          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">1. Choose the correct form: I ___ that movie three times.</p>
            <p>A) saw</p>
            <p>B) have seen</p>
            <p>C) see</p>
            <p>D) am seeing</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) have seen</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">2. Which sentence is WRONG?</p>
            <p>A) I have visited Paris.</p>
            <p>B) I have seen him yesterday.</p>
            <p>C) I have just arrived.</p>
            <p>D) I have never been there.</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) I have seen him yesterday.</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">3. Complete: She ___ here for 5 years.</p>
            <p>A) lives</p>
            <p>B) lived</p>
            <p>C) has lived</p>
            <p>D) is living</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: C) has lived</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">4. Which is correct?</p>
            <p>A) I have went to school.</p>
            <p>B) I have gone to school.</p>
            <p>C) I have go to school.</p>
            <p>D) I have going to school.</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) I have gone to school.</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">5. Choose the correct form: ___ you ever ___ sushi?</p>
            <p>A) Do / eat</p>
            <p>B) Did / eat</p>
            <p>C) Have / eaten</p>
            <p>D) Are / eating</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: C) Have / eaten</p>
          </div>
        </div>

        <ArticleHeading>Next Steps</ArticleHeading>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><Link to="/grammar/verb-tenses" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">Verb Tenses Overview</Link> - Learn all 12 English verb tenses</li>
          <li><Link to="/grammar/verb-tenses/past-simple" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">What Is the Past Simple Tense?</Link> - Compare with Present Perfect</li>
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

export default PresentPerfectTensePage;
