import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, BulletList } from '../components/ArticleComponents';

const TOEFLReadingQuestionTypesPage: React.FC = () => {
  usePageMetadata({
    title: 'TOEFL Reading Question Types: Complete Guide with Examples | TypoGrammar',
    description: 'Learn all TOEFL Reading question types with clear explanations and examples. Understand factual, vocabulary, inference, summary, and sentence simplification questions.'
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many questions are in TOEFL Reading?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The TOEFL Reading section includes 20 questions based on two academic passages."
        }
      },
      {
        "@type": "Question",
        "name": "What is the most common TOEFL Reading question type?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Factual information questions appear most frequently in the TOEFL Reading section."
        }
      },
      {
        "@type": "Question",
        "name": "How can I answer TOEFL Reading questions faster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use skimming and scanning techniques to locate relevant information quickly."
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
        TOEFL Reading Question Types
      </h1>

      <ArticleParagraph>
        The <strong>TOEFL Reading section</strong> contains several different question types designed to measure your ability to understand academic texts.
      </ArticleParagraph>

      <ArticleParagraph>
        Knowing these question types is one of the most effective ways to improve your TOEFL score because each type requires a specific strategy.
      </ArticleParagraph>

      <ArticleParagraph>
        In this guide, you will learn:
      </ArticleParagraph>

      <BulletList items={[
        'All TOEFL Reading question types',
        'How each question works',
        'Examples of real TOEFL-style questions',
        'Tips for answering them correctly'
      ]} />

      {/* Overview Table */}
      <ArticleHeading>Overview of TOEFL Reading Question Types</ArticleHeading>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800">
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Question Type</th>
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Factual Information</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Tests understanding of details in the passage</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/50">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Vocabulary in Context</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Tests the meaning of words based on context</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Inference</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Tests understanding of implied information</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/50">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Sentence Simplification</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Tests ability to understand complex sentences</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Insert Sentence</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Tests understanding of paragraph structure</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/50">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Summary</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Tests ability to identify main ideas</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Question Type 1 */}
      <ArticleHeading>1. Factual Information Questions</ArticleHeading>

      <ArticleParagraph>
        Factual questions ask about information that is <strong>directly stated in the passage</strong>.
      </ArticleParagraph>

      <ArticleParagraph>
        These are the most common TOEFL Reading questions.
      </ArticleParagraph>

      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-slate-400">
        <p className="font-semibold mb-3 text-slate-900 dark:text-slate-100">Example question:</p>
        <p className="text-slate-700 dark:text-slate-300 mb-4">According to the passage, why did early feathers develop?</p>
        <ul className="space-y-1 text-slate-700 dark:text-slate-300">
          <li>A) For flight</li>
          <li>B) For insulation</li>
          <li>C) For hunting</li>
          <li>D) For migration</li>
        </ul>
        <p className="mt-4 text-green-600 dark:text-green-400 font-semibold">Correct answer: B</p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
        <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Strategy:</p>
        <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
          <li>Look for keywords in the question</li>
          <li>Scan the passage for the same keywords</li>
          <li>Read the surrounding sentence carefully</li>
        </ul>
      </div>

      {/* Question Type 2 */}
      <ArticleHeading>2. Vocabulary in Context Questions</ArticleHeading>

      <ArticleParagraph>
        These questions ask for the meaning of a word based on the sentence in which it appears.
      </ArticleParagraph>

      <ArticleParagraph>
        You must choose the answer that is closest in meaning.
      </ArticleParagraph>

      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-slate-400">
        <p className="font-semibold mb-3 text-slate-900 dark:text-slate-100">Example:</p>
        <p className="text-slate-700 dark:text-slate-300 mb-4">The word <strong>"significant"</strong> in the passage is closest in meaning to:</p>
        <ul className="space-y-1 text-slate-700 dark:text-slate-300">
          <li>A) important</li>
          <li>B) small</li>
          <li>C) accidental</li>
          <li>D) uncertain</li>
        </ul>
        <p className="mt-4 text-green-600 dark:text-green-400 font-semibold">Correct answer: A</p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
        <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Strategy:</p>
        <p className="text-slate-700 dark:text-slate-300">
          Try replacing the word with each option and see which one makes the sentence logical.
        </p>
      </div>

      {/* Question Type 3 */}
      <ArticleHeading>3. Inference Questions</ArticleHeading>

      <ArticleParagraph>
        Inference questions require you to understand information that is <strong>implied but not directly stated</strong>.
      </ArticleParagraph>

      <ArticleParagraph>
        You must read between the lines.
      </ArticleParagraph>

      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-slate-400">
        <p className="font-semibold mb-3 text-slate-900 dark:text-slate-100">Example:</p>
        <p className="text-slate-700 dark:text-slate-300 mb-4">What can be inferred about early bird feathers?</p>
        <ul className="space-y-1 text-slate-700 dark:text-slate-300">
          <li>A) They were used for temperature control</li>
          <li>B) They evolved only after birds learned to fly</li>
          <li>C) They were rare among dinosaurs</li>
          <li>D) They appeared in modern birds</li>
        </ul>
        <p className="mt-4 text-green-600 dark:text-green-400 font-semibold">Correct answer: A</p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
        <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Strategy:</p>
        <p className="text-slate-700 dark:text-slate-300">
          Look for logical conclusions based on the information in the passage.
        </p>
      </div>

      {/* Question Type 4 */}
      <ArticleHeading>4. Sentence Simplification Questions</ArticleHeading>

      <ArticleParagraph>
        These questions test your ability to understand complex academic sentences.
      </ArticleParagraph>

      <ArticleParagraph>
        You must choose the answer that expresses the same meaning as the original sentence.
      </ArticleParagraph>

      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-slate-400">
        <p className="font-semibold mb-3 text-slate-900 dark:text-slate-100">Original sentence:</p>
        <p className="text-slate-700 dark:text-slate-300 italic mb-4">
          Scientists believe that feathers evolved initially for insulation before they later developed aerodynamic functions.
        </p>
        <p className="font-semibold mb-2 text-slate-900 dark:text-slate-100">Possible answer:</p>
        <p className="text-slate-700 dark:text-slate-300">
          Feathers first evolved to keep animals warm and were later used for flight.
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
        <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Strategy:</p>
        <p className="text-slate-700 dark:text-slate-300">
          Focus on the main idea of the sentence rather than every detail.
        </p>
      </div>

      {/* Question Type 5 */}
      <ArticleHeading>5. Insert Sentence Questions</ArticleHeading>

      <ArticleParagraph>
        In this question type, you must choose the correct location in the paragraph where a sentence should be inserted.
      </ArticleParagraph>

      <ArticleParagraph>
        This tests your understanding of paragraph organization and logical flow.
      </ArticleParagraph>

      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-slate-400">
        <p className="font-semibold mb-3 text-slate-900 dark:text-slate-100">You will see markers like this in the paragraph:</p>
        <p className="text-slate-700 dark:text-slate-300 font-mono">
          [ A ]<br />
          [ B ]<br />
          [ C ]<br />
          [ D ]
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
        <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Strategy:</p>
        <p className="text-slate-700 dark:text-slate-300 mb-2">Look for words that connect ideas, such as:</p>
        <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
          <li>however</li>
          <li>therefore</li>
          <li>for example</li>
          <li>in contrast</li>
        </ul>
      </div>

      {/* Question Type 6 */}
      <ArticleHeading>6. Summary Questions</ArticleHeading>

      <ArticleParagraph>
        Summary questions usually appear at the end of a passage.
      </ArticleParagraph>

      <ArticleParagraph>
        You must choose the <strong>three statements that best summarize the main ideas</strong>.
      </ArticleParagraph>

      <ArticleParagraph>
        These questions are worth <strong>2 points</strong>.
      </ArticleParagraph>

      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-slate-400">
        <p className="font-semibold mb-3 text-slate-900 dark:text-slate-100">Example instructions:</p>
        <p className="text-slate-700 dark:text-slate-300 italic">
          Select THREE statements that express the most important ideas in the passage.
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
        <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Strategy:</p>
        <p className="text-slate-700 dark:text-slate-300">
          Choose answers that represent the main ideas rather than minor details.
        </p>
      </div>

      {/* Hardest Questions */}
      <ArticleHeading>Which TOEFL Reading Questions Are the Hardest?</ArticleHeading>

      <ArticleParagraph>
        Many students find these questions the most difficult:
      </ArticleParagraph>

      <BulletList items={[
        'Inference questions',
        'Sentence insertion questions',
        'Summary questions'
      ]} />

      <ArticleParagraph>
        These questions require deeper understanding of the passage structure.
      </ArticleParagraph>

      {/* Best Way to Practice */}
      <ArticleHeading>Best Way to Practice TOEFL Reading Questions</ArticleHeading>

      <ArticleParagraph>
        To improve quickly:
      </ArticleParagraph>

      <BulletList items={[
        'Practice with academic texts',
        'Learn each question type',
        'Analyze why answers are correct or incorrect',
        'Time yourself while practicing'
      ]} />

      <ArticleParagraph>
        Consistent practice helps you recognize patterns in TOEFL questions.
      </ArticleParagraph>

      {/* FAQs */}
      <ArticleHeading>TOEFL Reading FAQs</ArticleHeading>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-900 dark:text-slate-100">How many questions are in TOEFL Reading?</h3>
      <ArticleParagraph>
        The TOEFL Reading section includes <strong>20 questions</strong> based on two academic passages.
      </ArticleParagraph>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-900 dark:text-slate-100">What is the most common TOEFL Reading question type?</h3>
      <ArticleParagraph>
        Factual information questions appear most frequently in the TOEFL Reading section.
      </ArticleParagraph>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-900 dark:text-slate-100">How can I answer TOEFL Reading questions faster?</h3>
      <ArticleParagraph>
        Use skimming and scanning techniques to locate relevant information quickly.
      </ArticleParagraph>

      {/* Final Thoughts */}
      <ArticleHeading>Final Thoughts</ArticleHeading>

      <ArticleParagraph>
        Understanding the <strong>TOEFL Reading question types</strong> is one of the best ways to improve your TOEFL score.
      </ArticleParagraph>

      <ArticleParagraph>
        When you recognize the question type, you can apply the correct strategy and answer more efficiently.
      </ArticleParagraph>

      <ArticleParagraph>
        Practice regularly and treat each reading passage like a short academic article.
      </ArticleParagraph>

      {/* Related TOEFL Reading Guides */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8">
        <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
          Continue Your TOEFL Reading Preparation
        </h3>
        <ul className="space-y-2">
          <li>
            <Link to="/toefl/toefl-reading/toefl-reading-section-explained" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              → TOEFL Reading Section Explained: Format, Question Types, and Tips
            </Link>
          </li>
          <li>
            <Link to="/toefl/toefl-reading/toefl-reading-strategies" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              → TOEFL Reading Strategies: 10 Proven Tips to Score Higher
            </Link>
          </li>
          <li>
            <Link to="/toefl/toefl-reading/toefl-reading-time-management" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              → TOEFL Reading Time Management: How to Finish on Time
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TOEFLReadingQuestionTypesPage;
