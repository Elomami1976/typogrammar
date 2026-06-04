import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, BulletList } from '../components/ArticleComponents';

const TOEFLReadingTimeManagementPage: React.FC = () => {
  usePageMetadata({
    title: 'TOEFL Reading Time Management: How to Finish the Section on Time | TypoGrammar',
    description: 'Learn the best TOEFL Reading time management strategies. Discover how to divide your time, avoid slow reading, and complete all questions within 35 minutes.'
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much time should I spend on each TOEFL Reading passage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should spend about 17-18 minutes per passage."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I run out of time in TOEFL Reading?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unanswered questions are marked incorrect, so it is better to guess than leave them blank."
        }
      },
      {
        "@type": "Question",
        "name": "Should I read the entire passage first?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is usually better to skim the passage first and then locate answers while reading specific sections."
        }
      }
    ]
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        TOEFL Reading Time Management
      </h1>

      <ArticleParagraph>
        Time management is one of the most important skills for success in the <strong>TOEFL Reading section</strong>.
      </ArticleParagraph>

      <ArticleParagraph>
        Many students understand the passages but still lose points because they run out of time before finishing all the questions.
      </ArticleParagraph>

      <ArticleParagraph>
        In this guide, you will learn the best <strong>TOEFL Reading time management strategies</strong> to help you complete the section confidently.
      </ArticleParagraph>

      <BulletList items={[
        'How to divide your time',
        'How long to spend on each passage',
        'How to avoid slow reading',
        'What to do if time is running out'
      ]} />

      {/* Time Overview Table */}
      <ArticleHeading>How Much Time Do You Get in TOEFL Reading?</ArticleHeading>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800">
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Section</th>
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Number of passages</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">2 academic passages</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/50">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Total questions</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">20 questions</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Total time</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">35 minutes</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/50">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Average time per passage</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">17-18 minutes</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Average time per question</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">About 1.5 minutes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ArticleParagraph>
        Understanding this timing is the first step to managing your time effectively.
      </ArticleParagraph>

      {/* Time Strategy Table */}
      <ArticleHeading>Recommended TOEFL Reading Time Strategy</ArticleHeading>

      <ArticleParagraph>
        A simple and effective strategy is to divide your time like this:
      </ArticleParagraph>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800">
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Task</th>
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Suggested Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Skim the passage</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">2-3 minutes</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/50">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Answer questions</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">13-14 minutes</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Review answers</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">1 minute</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ArticleParagraph>
        This structure helps you stay on schedule.
      </ArticleParagraph>

      {/* Step 1 */}
      <ArticleHeading>Step 1: Skim the Passage Quickly</ArticleHeading>

      <ArticleParagraph>
        Instead of reading every word, skim the passage first.
      </ArticleParagraph>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
        <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Skimming tips:</p>
        <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
          <li>Read the first sentence of each paragraph</li>
          <li>Look for repeated keywords</li>
          <li>Identify the main topic</li>
        </ul>
      </div>

      <ArticleParagraph>
        Skimming helps you understand the passage structure without wasting time.
      </ArticleParagraph>

      {/* Step 2 */}
      <ArticleHeading>Step 2: Focus on the Questions</ArticleHeading>

      <ArticleParagraph>
        After skimming, go directly to the questions.
      </ArticleParagraph>

      <ArticleParagraph>
        Most TOEFL answers appear in the same paragraph where the keywords are located.
      </ArticleParagraph>

      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-slate-400">
        <p className="font-semibold mb-3 text-slate-900 dark:text-slate-100">Example:</p>
        <p className="text-slate-700 dark:text-slate-300 mb-2">Question: According to the passage, why did feathers originally evolve?</p>
        <p className="text-slate-700 dark:text-slate-300">Keyword: <strong>feathers</strong></p>
      </div>

      <ArticleParagraph>
        Scan the passage to locate the relevant section quickly.
      </ArticleParagraph>

      {/* Step 3 */}
      <ArticleHeading>Step 3: Do Not Spend Too Long on One Question</ArticleHeading>

      <ArticleParagraph>
        One of the biggest mistakes students make is spending too much time on a single question.
      </ArticleParagraph>

      <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 my-6">
        <p className="text-slate-700 dark:text-slate-300">
          If you cannot answer a question within about <strong>90 seconds</strong>, move on and return later.
        </p>
      </div>

      <ArticleParagraph>
        Remember that every question is worth the same number of points.
      </ArticleParagraph>

      {/* Step 4 */}
      <ArticleHeading>Step 4: Answer Easy Questions First</ArticleHeading>

      <ArticleParagraph>
        Some questions are easier than others.
      </ArticleParagraph>

      <ArticleParagraph>
        Examples of easier question types include:
      </ArticleParagraph>

      <BulletList items={[
        'Vocabulary questions',
        'Factual information questions'
      ]} />

      <ArticleParagraph>
        Answer these first to secure quick points.
      </ArticleParagraph>

      {/* Step 5 */}
      <ArticleHeading>Step 5: Save Difficult Questions for Later</ArticleHeading>

      <ArticleParagraph>
        Harder question types include:
      </ArticleParagraph>

      <BulletList items={[
        'Inference questions',
        'Sentence insertion questions',
        'Summary questions'
      ]} />

      <ArticleParagraph>
        These questions require more analysis, so it is better to return to them later if needed.
      </ArticleParagraph>

      {/* Step 6 */}
      <ArticleHeading>Step 6: Keep Track of the Clock</ArticleHeading>

      <ArticleParagraph>
        You should check your time regularly.
      </ArticleParagraph>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
        <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">A good checkpoint strategy:</p>
        <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
          <li>After 17 minutes → finish the first passage</li>
          <li>After 34 minutes → finish the second passage</li>
        </ul>
      </div>

      <ArticleParagraph>
        This helps prevent rushing at the end.
      </ArticleParagraph>

      {/* Running Out of Time */}
      <ArticleHeading>What to Do If You Are Running Out of Time</ArticleHeading>

      <ArticleParagraph>
        If you only have a few minutes left:
      </ArticleParagraph>

      <BulletList items={[
        'Answer remaining questions quickly',
        'Use the process of elimination',
        'Make an educated guess if necessary'
      ]} />

      <ArticleParagraph>
        Leaving questions unanswered means losing points.
      </ArticleParagraph>

      {/* Common Mistakes */}
      <ArticleHeading>Common TOEFL Reading Time Mistakes</ArticleHeading>

      <ArticleParagraph>
        Many students struggle with time management because they:
      </ArticleParagraph>

      <BulletList items={[
        'Read every word slowly',
        'Overthink difficult questions',
        'Do not skip difficult questions',
        'Spend too much time on the first passage'
      ]} />

      <ArticleParagraph>
        Avoiding these mistakes can significantly improve your score.
      </ArticleParagraph>

      {/* Improve Reading Speed */}
      <ArticleHeading>How to Improve TOEFL Reading Speed</ArticleHeading>

      <ArticleParagraph>
        Improving reading speed takes practice.
      </ArticleParagraph>

      <ArticleParagraph>
        You can train your reading skills by:
      </ArticleParagraph>

      <BulletList items={[
        'Reading academic articles',
        'Practicing TOEFL-style passages',
        'Learning common academic vocabulary',
        'Timing your practice sessions'
      ]} />

      <ArticleParagraph>
        Over time, your reading speed and comprehension will improve.
      </ArticleParagraph>

      {/* FAQs */}
      <ArticleHeading>TOEFL Reading Time Management FAQs</ArticleHeading>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-900 dark:text-slate-100">How much time should I spend on each TOEFL Reading passage?</h3>
      <ArticleParagraph>
        You should spend about <strong>17-18 minutes per passage</strong>.
      </ArticleParagraph>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-900 dark:text-slate-100">What happens if I run out of time in TOEFL Reading?</h3>
      <ArticleParagraph>
        Unanswered questions are marked incorrect, so it is better to guess than leave them blank.
      </ArticleParagraph>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-900 dark:text-slate-100">Should I read the entire passage first?</h3>
      <ArticleParagraph>
        It is usually better to skim the passage first and then locate answers while reading specific sections.
      </ArticleParagraph>

      {/* Final Thoughts */}
      <ArticleHeading>Final Thoughts</ArticleHeading>

      <ArticleParagraph>
        Effective <strong>TOEFL Reading time management</strong> can significantly improve your performance on the exam.
      </ArticleParagraph>

      <ArticleParagraph>
        By skimming passages, focusing on questions, and avoiding time traps, you can complete the section with confidence.
      </ArticleParagraph>

      <ArticleParagraph>
        Practice with timed exercises regularly to build speed and accuracy before test day.
      </ArticleParagraph>

      {/* Related TOEFL Reading Guides */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8">
        <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
          Continue Your TOEFL Reading Preparation
        </h3>
        <ul className="space-y-2">
          <li>
            <Link to="/toefl/toefl-reading/toefl-reading-section-explained/" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              → TOEFL Reading Section Explained: Format, Question Types, and Tips
            </Link>
          </li>
          <li>
            <Link to="/toefl/toefl-reading/toefl-reading-strategies/" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              → TOEFL Reading Strategies: 10 Proven Tips to Score Higher
            </Link>
          </li>
          <li>
            <Link to="/toefl/toefl-reading/toefl-reading-question-types/" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              → TOEFL Reading Question Types: Complete Guide with Examples
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TOEFLReadingTimeManagementPage;
