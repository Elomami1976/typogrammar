import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading } from '../components/ArticleComponents';
import SchemaMarkup from '../components/SchemaMarkup';

const PresentProgressiveTensePage: React.FC = () => {
  usePageMetadata({
    title: 'What Is the Present Progressive Tense? Definition, Rules & Examples',
    description: 'Learn what the Present Progressive (Present Continuous) tense is, when to use it, examples, common mistakes, and comparisons.',
    canonical: 'https://typogrammar.com/grammar/verb-tenses/present-progressive'
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Is the Present Progressive Tense?",
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
      "@id": "https://typogrammar.com/grammar/verb-tenses/present-progressive"
    },
    "dateModified": "2026-01-27"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the Present Progressive tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Present Progressive tense (also called Present Continuous) is used to describe actions happening right now, temporary situations, and planned future arrangements. It emphasizes the ongoing nature of an action in the present moment."
              }
            },
            {
              "@type": "Question",
              "name": "When do you use the Present Progressive tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use the Present Progressive for: actions happening now (I am studying right now), temporary situations (She is living in London this month), future arrangements (We are meeting tomorrow at 5), and changing situations (The weather is getting colder)."
              }
            },
            {
              "@type": "Question",
              "name": "How do you form the Present Progressive tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Form the Present Progressive with: Subject + am/is/are + verb-ing. Negative: Subject + am/is/are + not + verb-ing. Question: Am/Is/Are + subject + verb-ing?"
              }
            },
            {
              "@type": "Question",
              "name": "What are common time expressions for the Present Progressive tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Common time expressions include: now, right now, at the moment, currently, today, this week, this month, these days, at present, still."
              }
            },
            {
              "@type": "Question",
              "name": "What are common mistakes with the Present Progressive tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Common mistakes include: using with stative verbs (I am knowing → I know), wrong -ing spelling (stoping → stopping), forgetting the 'be' verb (She going → She is going), using it for habits instead of Present Simple, and incorrect subject-verb agreement."
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between Present Progressive and Present Simple?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Present Progressive describes actions happening now or temporary situations (I am working from home today). Present Simple describes habits and permanent situations (I work from home). Progressive = temporary/ongoing, Simple = permanent/habitual."
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
          What Is the Present Progressive Tense?
        </h1>

        <div className="bg-blue-50 dark:bg-slate-700 border-l-4 border-blue-600 p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Definition</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            The Present Progressive tense (also called Present Continuous) is used to describe actions happening right now, temporary situations, and planned future arrangements. It emphasizes the ongoing nature of an action in the present moment or near future.
          </p>
        </div>

        <ArticleHeading>When to Use the Present Progressive Tense</ArticleHeading>
        <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><strong>Actions happening now:</strong> I am studying right now.</li>
          <li><strong>Temporary situations:</strong> She is living in London this month.</li>
          <li><strong>Future arrangements:</strong> We are meeting tomorrow at 5 PM.</li>
          <li><strong>Changing situations:</strong> The weather is getting colder.</li>
          <li><strong>Annoying repeated actions (with always):</strong> He is always losing his keys.</li>
          <li><strong>Background actions in storytelling:</strong> The sun is shining and birds are singing.</li>
        </ul>

        <ArticleHeading>Present Progressive Tense Structure</ArticleHeading>
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
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">S + am/is/are + V-ing</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She is working now. / I am studying English.</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Negative</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">S + am/is/are + not + V-ing</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She isn't working today. / I am not sleeping.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Question</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Am/Is/Are + S + V-ing?</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Is she working? / Are you listening to me?</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ArticleHeading>Common Time Expressions</ArticleHeading>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>now, right now, at the moment, at present</li>
          <li>currently, presently</li>
          <li>today, this week, this month, this year</li>
          <li>these days, nowadays</li>
          <li>still (for actions continuing)</li>
          <li>Look! Listen! (to draw attention to current actions)</li>
        </ul>

        <ArticleHeading>Examples</ArticleHeading>
        
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Actions Happening Now</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I am writing an email right now.</li>
          <li>Listen! Someone is playing the piano.</li>
          <li>The children are sleeping at the moment.</li>
          <li>Look! It is snowing outside.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Temporary Situations</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>She is staying with her parents this month.</li>
          <li>We are studying hard for our exams.</li>
          <li>He is working on a special project these days.</li>
          <li>They are living in a hotel while their house is being renovated.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Future Arrangements</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I am meeting my friends for dinner tonight.</li>
          <li>They are flying to Paris next week.</li>
          <li>We are having a party on Saturday.</li>
          <li>She is starting her new job next Monday.</li>
        </ul>

        <ArticleHeading>Common Mistakes</ArticleHeading>
        
        <div className="space-y-4 mb-8">
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I am knowing the answer.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I know the answer.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Stative verbs like "know" describe states, not actions, and aren't used in progressive tenses.</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> She going to the store.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> She is going to the store.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Present Progressive requires the "be" verb (am/is/are) before the -ing form.</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> He is stoping the car.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> He is stopping the car.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> For verbs ending in consonant-vowel-consonant, double the final consonant before adding -ing.</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I am drinking coffee every morning.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I drink coffee every morning.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> For habits and routines, use Present Simple, not Present Progressive.</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> They is watching TV.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> They are watching TV.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use "are" with plural subjects, not "is."</p>
          </div>
        </div>

        <ArticleHeading>Present Progressive vs. Present Simple</ArticleHeading>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          The Present Progressive describes <strong>temporary actions happening now</strong>, while the Present Simple describes <strong>permanent situations and habits</strong>.
        </p>

        <ul className="list-disc list-inside space-y-3 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li><strong>Use Progressive for now:</strong> I am working from home today. (temporary, right now)</li>
          <li><strong>Use Simple for habits:</strong> I work from home. (permanent situation)</li>
          <li><strong>Progressive = temporary:</strong> She is living in London this year.</li>
          <li><strong>Simple = permanent:</strong> She lives in London.</li>
          <li><strong>Progressive = ongoing:</strong> He is reading a book right now.</li>
        </ul>

        <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-8">
          <h4 className="font-bold text-xl mb-4 text-slate-900 dark:text-slate-100">Side-by-Side Comparison</h4>
          <div className="space-y-2 text-slate-700 dark:text-slate-300">
            <p><strong>Present Progressive:</strong> I am studying English. (right now)</p>
            <p><strong>Present Simple:</strong> I study English. (general fact/habit)</p>
            <p className="mt-4"><strong>Present Progressive:</strong> She is working on a project. (temporary)</p>
            <p><strong>Present Simple:</strong> She works at Google. (permanent)</p>
          </div>
        </div>

        <ArticleHeading>Quick Check</ArticleHeading>
        <div className="space-y-6 mb-8">
          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">1. Choose the correct form: She ___ to music right now.</p>
            <p>A) listens</p>
            <p>B) is listening</p>
            <p>C) listen</p>
            <p>D) listening</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) is listening</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">2. Which sentence is WRONG?</p>
            <p>A) I am loving this song.</p>
            <p>B) I am watching TV.</p>
            <p>C) She is sleeping now.</p>
            <p>D) They are playing football.</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: A) I am loving this song. (love is a stative verb)</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">3. Choose the correct form: We ___ dinner at 7 PM tomorrow.</p>
            <p>A) have</p>
            <p>B) are having</p>
            <p>C) having</p>
            <p>D) has</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) are having (future arrangement)</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">4. Which expresses a habit?</p>
            <p>A) I am reading a book right now.</p>
            <p>B) I read books every day.</p>
            <p>C) I am always reading books.</p>
            <p>D) Books are interesting.</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) I read books every day.</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">5. Choose the correct negative: They ___ working today.</p>
            <p>A) isn't</p>
            <p>B) aren't</p>
            <p>C) not</p>
            <p>D) don't</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) aren't</p>
          </div>
        </div>

        <ArticleHeading>Next Steps</ArticleHeading>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><Link to="/grammar/verb-tenses" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">Verb Tenses Overview</Link> - Learn all 12 English verb tenses</li>
          <li><Link to="/grammar/verb-tenses/present-simple" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">What Is the Present Simple Tense?</Link> - Compare with Present Progressive</li>
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

export default PresentProgressiveTensePage;
