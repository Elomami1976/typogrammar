import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, BulletList } from '../components/ArticleComponents';

const TOEFLReadingStrategiesPage: React.FC = () => {
  usePageMetadata({
    title: 'TOEFL Reading Strategies: 10 Proven Tips to Score Higher | TypoGrammar',
    description: 'Master the TOEFL Reading section with proven strategies. Learn how to skim passages, answer questions faster, improve vocabulary, and increase your TOEFL Reading score.'
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can I improve my TOEFL Reading score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Improve your score by practicing academic reading, learning common question types, and using skimming and scanning strategies."
        }
      },
      {
        "@type": "Question",
        "name": "How much time should I spend per passage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should spend about 17 minutes per passage."
        }
      },
      {
        "@type": "Question",
        "name": "Is TOEFL Reading difficult?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The passages are academic, but with practice and the right strategies, most students can significantly improve their score."
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
        TOEFL Reading Strategies: How to Score Higher
      </h1>

      <ArticleParagraph>
        The <strong>TOEFL Reading section</strong> measures how well you understand academic texts similar to university textbooks.
      </ArticleParagraph>

      <ArticleParagraph>
        Many students lose points not because the passages are difficult, but because they use the wrong strategies.
      </ArticleParagraph>

      <ArticleParagraph>
        In this guide, you will learn the <strong>most effective TOEFL Reading strategies</strong> used by high-scoring test takers.
      </ArticleParagraph>

      <BulletList items={[
        'How to read passages faster',
        'How to answer questions correctly',
        'How to avoid common TOEFL mistakes',
        'How to manage your time'
      ]} />

      {/* Quick Overview Table */}
      <ArticleHeading>Quick Overview of the TOEFL Reading Section</ArticleHeading>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800">
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Feature</th>
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Passages</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">2 academic passages</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/50">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Questions</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">20 questions total</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Time limit</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">35 minutes</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/50">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Score range</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">0-30 points</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ArticleParagraph>
        That means you have about <strong>17 minutes per passage</strong>.
      </ArticleParagraph>

      {/* Strategy 1 */}
      <ArticleHeading>Strategy 1: Skim the Passage First</ArticleHeading>

      <ArticleParagraph>
        Do not read the entire passage slowly.
      </ArticleParagraph>

      <ArticleParagraph>
        Instead, <strong>skim the passage</strong> to understand the main idea.
      </ArticleParagraph>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
        <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">How to skim effectively:</p>
        <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
          <li>Read the first sentence of each paragraph</li>
          <li>Look for repeated keywords</li>
          <li>Notice headings or topic sentences</li>
        </ul>
      </div>

      <ArticleParagraph>
        This gives you a quick understanding of the structure.
      </ArticleParagraph>

      {/* Strategy 2 */}
      <ArticleHeading>Strategy 2: Read the Question Carefully</ArticleHeading>

      <ArticleParagraph>
        Before searching for the answer, read the question carefully.
      </ArticleParagraph>

      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-slate-400">
        <p className="font-semibold mb-3 text-slate-900 dark:text-slate-100">Example question:</p>
        <p className="text-slate-700 dark:text-slate-300 italic">
          What does the passage suggest about early bird feathers?
        </p>
      </div>

      <ArticleParagraph>
        Look for keywords like:
      </ArticleParagraph>

      <BulletList items={[
        'suggest',
        'imply',
        'according to the passage'
      ]} />

      <ArticleParagraph>
        These keywords tell you what type of question it is.
      </ArticleParagraph>

      {/* Strategy 3 */}
      <ArticleHeading>Strategy 3: Scan for Keywords</ArticleHeading>

      <ArticleParagraph>
        After reading the question, <strong>scan the passage</strong> to find the relevant part.
      </ArticleParagraph>

      <ArticleParagraph>
        Most TOEFL answers appear in the same paragraph as the keywords.
      </ArticleParagraph>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
        <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Focus on:</p>
        <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
          <li>names</li>
          <li>dates</li>
          <li>scientific terms</li>
          <li>repeated vocabulary</li>
        </ul>
      </div>

      {/* Strategy 4 */}
      <ArticleHeading>Strategy 4: Do Not Read Every Word</ArticleHeading>

      <ArticleParagraph>
        Many students waste time reading every word.
      </ArticleParagraph>

      <ArticleParagraph>
        Instead, focus on <strong>important information</strong>.
      </ArticleParagraph>

      <ArticleParagraph>
        Ignore:
      </ArticleParagraph>

      <BulletList items={[
        'minor details',
        'extra explanations',
        'complex examples'
      ]} />

      {/* Strategy 5 */}
      <ArticleHeading>Strategy 5: Use the Process of Elimination</ArticleHeading>

      <ArticleParagraph>
        Often two answer choices are clearly incorrect.
      </ArticleParagraph>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
        <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Eliminate answers that:</p>
        <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
          <li>contradict the passage</li>
          <li>include information not mentioned</li>
          <li>change the meaning</li>
        </ul>
      </div>

      <ArticleParagraph>
        This improves your chances even if you are unsure.
      </ArticleParagraph>

      {/* Strategy 6 */}
      <ArticleHeading>Strategy 6: Understand Vocabulary in Context</ArticleHeading>

      <ArticleParagraph>
        You will see vocabulary questions in the TOEFL Reading section.
      </ArticleParagraph>

      <ArticleParagraph>
        You do not need to know every word.
      </ArticleParagraph>

      <ArticleParagraph>
        Instead, use the sentence context to guess the meaning.
      </ArticleParagraph>

      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-slate-400">
        <p className="font-semibold mb-3 text-slate-900 dark:text-slate-100">Example:</p>
        <p className="text-slate-700 dark:text-slate-300 mb-4">The word <strong>"abundant"</strong> most nearly means:</p>
        <ul className="space-y-1 text-slate-700 dark:text-slate-300">
          <li>A) rare</li>
          <li>B) plentiful</li>
          <li>C) dangerous</li>
          <li>D) complex</li>
        </ul>
        <p className="mt-4 text-green-600 dark:text-green-400 font-semibold">Correct answer: B</p>
      </div>

      {/* Strategy 7 */}
      <ArticleHeading>Strategy 7: Focus on Topic Sentences</ArticleHeading>

      <ArticleParagraph>
        Academic paragraphs usually start with a <strong>topic sentence</strong>.
      </ArticleParagraph>

      <ArticleParagraph>
        This sentence explains the main idea of the paragraph.
      </ArticleParagraph>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
        <p className="text-slate-700 dark:text-slate-300">
          If you understand the topic sentence, you understand the paragraph.
        </p>
      </div>

      {/* Strategy 8 */}
      <ArticleHeading>Strategy 8: Manage Your Time</ArticleHeading>

      <ArticleParagraph>
        Time management is critical.
      </ArticleParagraph>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800">
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Task</th>
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Recommended Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">First passage</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">17 minutes</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/50">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Second passage</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">17 minutes</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Review answers</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">1 minute</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 my-6">
        <p className="text-slate-700 dark:text-slate-300">
          If you spend too long on one question, skip it and return later.
        </p>
      </div>

      {/* Strategy 9 */}
      <ArticleHeading>Strategy 9: Practice with Academic Texts</ArticleHeading>

      <ArticleParagraph>
        TOEFL passages come from academic subjects such as:
      </ArticleParagraph>

      <BulletList items={[
        'biology',
        'history',
        'geography',
        'psychology',
        'environmental science'
      ]} />

      <ArticleParagraph>
        Reading these topics regularly will improve your comprehension speed.
      </ArticleParagraph>

      {/* Strategy 10 */}
      <ArticleHeading>Strategy 10: Practice with TOEFL-Style Questions</ArticleHeading>

      <ArticleParagraph>
        Understanding the question types is one of the best ways to improve.
      </ArticleParagraph>

      <ArticleParagraph>
        Common TOEFL Reading questions include:
      </ArticleParagraph>

      <BulletList items={[
        'Factual information questions',
        'Vocabulary questions',
        'Inference questions',
        'Sentence simplification questions',
        'Summary questions'
      ]} />

      <ArticleParagraph>
        Practicing these question types helps you recognize patterns.
      </ArticleParagraph>

      {/* Common Mistakes */}
      <ArticleHeading>Common Mistakes in TOEFL Reading</ArticleHeading>

      <ArticleParagraph>
        Many students lose points because of these mistakes:
      </ArticleParagraph>

      <BulletList items={[
        'Reading too slowly',
        'Overthinking answers',
        'Ignoring keywords',
        'Not managing time'
      ]} />

      <ArticleParagraph>
        Avoiding these mistakes can quickly improve your score.
      </ArticleParagraph>

      {/* FAQs */}
      <ArticleHeading>TOEFL Reading FAQs</ArticleHeading>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-900 dark:text-slate-100">How can I improve my TOEFL Reading score?</h3>
      <ArticleParagraph>
        Improve your score by practicing academic reading, learning common question types, and using skimming and scanning strategies.
      </ArticleParagraph>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-900 dark:text-slate-100">How much time should I spend per passage?</h3>
      <ArticleParagraph>
        You should spend about <strong>17 minutes per passage</strong>.
      </ArticleParagraph>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-900 dark:text-slate-100">Is TOEFL Reading difficult?</h3>
      <ArticleParagraph>
        The passages are academic, but with practice and the right strategies, most students can significantly improve their score.
      </ArticleParagraph>

      {/* Final Thoughts */}
      <ArticleHeading>Final Thoughts</ArticleHeading>

      <ArticleParagraph>
        The best TOEFL Reading strategies combine <strong>speed, comprehension, and smart question techniques</strong>.
      </ArticleParagraph>

      <ArticleParagraph>
        If you practice these strategies consistently, you can improve your reading score and perform better on the TOEFL exam.
      </ArticleParagraph>

      <ArticleParagraph>
        Start practicing today and treat each passage like a short academic article.
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
            <Link to="/toefl/toefl-reading/toefl-reading-question-types/" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              → TOEFL Reading Question Types: Complete Guide with Examples
            </Link>
          </li>
          <li>
            <Link to="/toefl/toefl-reading/toefl-reading-time-management/" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              → TOEFL Reading Time Management: How to Finish on Time
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TOEFLReadingStrategiesPage;
