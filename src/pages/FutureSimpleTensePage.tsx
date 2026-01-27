import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading } from '../components/ArticleComponents';
import SchemaMarkup from '../components/SchemaMarkup';

const FutureSimpleTensePage: React.FC = () => {
  usePageMetadata({
    title: 'What Is the Future Simple Tense? Definition, Rules & Examples',
    description: 'Learn what the Future Simple tense is, when to use it, examples, common mistakes, and how it differs from going to.',
    canonical: 'https://typogrammar.com/grammar/verb-tenses/future-simple'
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Is the Future Simple Tense?",
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
      "@id": "https://typogrammar.com/grammar/verb-tenses/future-simple"
    },
    "dateModified": "2026-01-27"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the Future Simple tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Future Simple tense describes actions that will happen in the future. It is formed with will + base verb and is used for predictions, spontaneous decisions, promises, and offers."
              }
            },
            {
              "@type": "Question",
              "name": "When do you use the Future Simple tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use the Future Simple for: predictions (It will rain tomorrow), spontaneous decisions (I'll help you), promises (I will call you), offers (I'll open the door), and facts about the future (She will be 30 next year)."
              }
            },
            {
              "@type": "Question",
              "name": "How do you form the Future Simple tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Form the Future Simple with: Subject + will + base verb. Negative: Subject + will + not/won't + base verb. Question: Will + subject + base verb?"
              }
            },
            {
              "@type": "Question",
              "name": "What are common time expressions for the Future Simple tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Common time expressions include: tomorrow, next week/month/year, in the future, soon, later, tonight, in + time period (in 2 hours)."
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between will and going to?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Will is used for spontaneous decisions and predictions without evidence (I'll help you). Going to is used for planned actions and predictions with evidence (I'm going to help you / Look at those clouds - it's going to rain)."
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
          What Is the Future Simple Tense?
        </h1>

        <div className="bg-blue-50 dark:bg-slate-700 border-l-4 border-blue-600 p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Definition</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            The Future Simple tense describes actions that will happen in the future. It is formed with will + base verb and is used for predictions, spontaneous decisions, promises, and offers.
          </p>
        </div>

        <ArticleHeading>When to Use the Future Simple Tense</ArticleHeading>
        <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><strong>Predictions based on opinion:</strong> I think it will rain tomorrow.</li>
          <li><strong>Spontaneous decisions:</strong> I'll help you with your homework. (decided right now)</li>
          <li><strong>Promises:</strong> I will call you later.</li>
          <li><strong>Offers:</strong> I'll open the door for you.</li>
          <li><strong>Threats and warnings:</strong> If you don't study, you will fail.</li>
          <li><strong>Facts about the future:</strong> She will be 30 next year.</li>
        </ul>

        <ArticleHeading>Future Simple Tense Structure</ArticleHeading>
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
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">S + will + base verb</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I will go. / She will study.</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Negative</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">S + will not/won't + base verb</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I won't go. / She won't study.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Question</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Will + S + base verb?</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Will you go? / Will she study?</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ArticleHeading>Common Time Expressions</ArticleHeading>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>tomorrow, the day after tomorrow</li>
          <li>next week, next month, next year</li>
          <li>in the future, in + time (in 2 hours, in 5 years)</li>
          <li>soon, later, tonight</li>
          <li>one day, some day, someday</li>
          <li>I think, I hope, I believe, probably, maybe</li>
        </ul>

        <ArticleHeading>Examples</ArticleHeading>
        
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Predictions</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I think it will rain tomorrow.</li>
          <li>She will probably pass the exam.</li>
          <li>Technology will change our lives in the future.</li>
          <li>I don't think they will come to the party.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Spontaneous Decisions, Promises, and Offers</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>A: I'm thirsty. B: I'll get you some water. (spontaneous decision)</li>
          <li>I promise I will help you with your project. (promise)</li>
          <li>I'll carry your bags for you. (offer)</li>
          <li>Don't worry, I won't tell anyone. (promise)</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Facts About the Future</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>The sun will rise tomorrow at 6 AM.</li>
          <li>She will be 21 next month.</li>
          <li>The meeting will start at 3 PM.</li>
          <li>Summer vacation will begin in June.</li>
        </ul>

        <ArticleHeading>Common Mistakes</ArticleHeading>
        
        <div className="space-y-4 mb-8">
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I will to go home.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I will go home.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Don't use "to" after "will." Use the base form of the verb.</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> She will goes to school.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> She will go to school.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use the base form (go), not the -s form (goes) after "will."</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I will call you when I will arrive.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I will call you when I arrive.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Don't use "will" in time clauses (after when, before, after, as soon as, until). Use Present Simple.</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I think he will to be late.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I think he will be late.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> "Will" is followed by the base verb, not "to + verb."</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> She not will come.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> She will not come. / She won't come.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Place "not" after "will," not before.</p>
          </div>
        </div>

        <ArticleHeading>Future Simple (will) vs. Going to</ArticleHeading>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          The Future Simple with <strong>will</strong> is for spontaneous decisions and predictions without evidence, while <strong>going to</strong> is for planned actions and predictions with evidence.
        </p>

        <ul className="list-disc list-inside space-y-3 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li><strong>Use will for spontaneous decisions:</strong> A: The phone is ringing. B: I'll answer it.</li>
          <li><strong>Use going to for plans:</strong> I'm going to visit my parents next week. (already planned)</li>
          <li><strong>Use will for predictions without evidence:</strong> I think Brazil will win the World Cup.</li>
          <li><strong>Use going to for predictions with evidence:</strong> Look at those clouds! It's going to rain.</li>
          <li><strong>Will = decision made now:</strong> I'll have the chicken. (deciding at restaurant)</li>
          <li><strong>Going to = decision made before:</strong> I'm going to have chicken. (already decided)</li>
        </ul>

        <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-8">
          <h4 className="font-bold text-xl mb-4 text-slate-900 dark:text-slate-100">Side-by-Side Comparison</h4>
          <div className="space-y-2 text-slate-700 dark:text-slate-300">
            <p><strong>Will (spontaneous):</strong> A: We need milk. B: I'll buy some. (deciding now)</p>
            <p><strong>Going to (planned):</strong> I'm going to buy milk. I added it to my list. (already planned)</p>
            <p className="mt-4"><strong>Will (opinion):</strong> I think it will be sunny tomorrow.</p>
            <p><strong>Going to (evidence):</strong> Look at the sky! It's going to be sunny.</p>
          </div>
        </div>

        <ArticleHeading>Quick Check</ArticleHeading>
        <div className="space-y-6 mb-8">
          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">1. Choose the correct form: I ___ help you tomorrow.</p>
            <p>A) will</p>
            <p>B) will to</p>
            <p>C) going to</p>
            <p>D) am will</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: A) will</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">2. Which sentence is WRONG?</p>
            <p>A) I will call you later.</p>
            <p>B) She will goes to school.</p>
            <p>C) They will arrive soon.</p>
            <p>D) We won't be late.</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) She will goes to school. (should be "will go")</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">3. Complete: I'll call you when I ___ home.</p>
            <p>A) will arrive</p>
            <p>B) arrive</p>
            <p>C) am arriving</p>
            <p>D) will be arriving</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) arrive (no "will" in time clauses)</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">4. Which shows a spontaneous decision?</p>
            <p>A) I'm going to help you. (planned)</p>
            <p>B) I'll help you. (spontaneous)</p>
            <p>C) I help you.</p>
            <p>D) I helped you.</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) I'll help you.</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">5. Choose the correct negative: They ___ come to the party.</p>
            <p>A) will not</p>
            <p>B) not will</p>
            <p>C) willn't</p>
            <p>D) will to not</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: A) will not (or won't)</p>
          </div>
        </div>

        <ArticleHeading>Next Steps</ArticleHeading>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><Link to="/grammar/verb-tenses" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">Verb Tenses Overview</Link> - Learn all 12 English verb tenses</li>
          <li><Link to="/grammar/verb-tenses/future-progressive" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">What Is the Future Progressive Tense?</Link> - Learn about ongoing future actions</li>
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

export default FutureSimpleTensePage;
