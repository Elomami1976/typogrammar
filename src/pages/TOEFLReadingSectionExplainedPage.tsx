import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, BulletList } from '../components/ArticleComponents';

const TOEFLReadingSectionExplainedPage: React.FC = () => {
  usePageMetadata({
    title: 'TOEFL Reading Section Explained: Format, Question Types, and Tips | TypoGrammar',
    description: 'Learn everything about the TOEFL Reading section: format, question types, scoring, timing, and strategies to improve your TOEFL reading score.'
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many passages are in TOEFL Reading?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The TOEFL iBT Reading section contains 2 academic passages with a total of 20 questions."
        }
      },
      {
        "@type": "Question",
        "name": "How long is the TOEFL Reading section?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The section lasts 35 minutes."
        }
      },
      {
        "@type": "Question",
        "name": "Is TOEFL Reading difficult?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The difficulty level is similar to university textbooks. Strong vocabulary and reading speed make the section much easier."
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
        TOEFL Reading Section Explained
      </h1>

      <ArticleParagraph>
        The <strong>TOEFL Reading section</strong> is the first part of the TOEFL iBT exam. It measures how well you understand academic texts similar to those used in university courses.
      </ArticleParagraph>

      <ArticleParagraph>
        In this guide, you will learn:
      </ArticleParagraph>

      <BulletList items={[
        'TOEFL Reading format',
        'Number of passages and questions',
        'Question types',
        'Scoring system',
        'Proven strategies to improve your score'
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
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Number of passages</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">2 academic passages</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/50">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Questions per passage</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">10 questions</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Total questions</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">20 questions</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/50">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Time limit</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">35 minutes</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Score range</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">0–30 points</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/50">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Text difficulty</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">University-level academic texts</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ArticleParagraph>
        Each passage is around <strong>700 words long</strong> and covers topics such as biology, history, psychology, or environmental science.
      </ArticleParagraph>

      <ArticleParagraph>
        You do <strong>not need prior knowledge</strong> of the topic. Everything you need to answer the questions appears in the passage.
      </ArticleParagraph>

      {/* Purpose Section */}
      <ArticleHeading>Purpose of the TOEFL Reading Section</ArticleHeading>

      <ArticleParagraph>
        Universities want to know if international students can understand academic materials such as:
      </ArticleParagraph>

      <BulletList items={[
        'Textbooks',
        'Research articles',
        'Lecture notes',
        'Scholarly essays'
      ]} />

      <ArticleParagraph>
        The reading section evaluates your ability to:
      </ArticleParagraph>

      <BulletList items={[
        'Understand the main idea',
        'Identify important details',
        'Recognize vocabulary in context',
        'Understand sentence structure',
        'Make logical inferences'
      ]} />

      {/* Example Passage */}
      <ArticleHeading>TOEFL Reading Passage Example</ArticleHeading>

      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-slate-400">
        <p className="font-semibold mb-3 text-slate-900 dark:text-slate-100">Example topic: The Evolution of Birds</p>
        <p className="text-slate-700 dark:text-slate-300 italic">
          Scientists believe that birds evolved from small dinosaurs known as theropods. Evidence from fossil discoveries suggests that feathers originally developed for insulation before they were used for flight.
        </p>
      </div>

      <ArticleParagraph>
        You will read passages similar to this and answer questions based on the information.
      </ArticleParagraph>

      {/* Question Types */}
      <ArticleHeading>Types of TOEFL Reading Questions</ArticleHeading>

      <ArticleParagraph>
        The TOEFL Reading section uses several question types.
      </ArticleParagraph>

      {/* Question Type 1 */}
      <h3 className="text-xl font-semibold mt-8 mb-4 text-slate-900 dark:text-slate-100">1. Factual Information Questions</h3>

      <ArticleParagraph>
        These questions ask about details directly stated in the passage.
      </ArticleParagraph>

      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-slate-400">
        <p className="font-semibold mb-3 text-slate-900 dark:text-slate-100">Example:</p>
        <p className="text-slate-700 dark:text-slate-300 mb-4">What does the passage say about feathers?</p>
        <ul className="space-y-1 text-slate-700 dark:text-slate-300">
          <li>A) They were originally used for insulation</li>
          <li>B) They first appeared in mammals</li>
          <li>C) They evolved after birds learned to fly</li>
          <li>D) They are unique to modern birds</li>
        </ul>
        <p className="mt-4 text-green-600 dark:text-green-400 font-semibold">Correct answer: A</p>
      </div>

      {/* Question Type 2 */}
      <h3 className="text-xl font-semibold mt-8 mb-4 text-slate-900 dark:text-slate-100">2. Vocabulary Questions</h3>

      <ArticleParagraph>
        You must determine the meaning of a word using context.
      </ArticleParagraph>

      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-slate-400">
        <p className="font-semibold mb-3 text-slate-900 dark:text-slate-100">Example:</p>
        <p className="text-slate-700 dark:text-slate-300 mb-4">The word <strong>"evolved"</strong> in the passage is closest in meaning to:</p>
        <ul className="space-y-1 text-slate-700 dark:text-slate-300">
          <li>A) changed gradually</li>
          <li>B) disappeared</li>
          <li>C) failed</li>
          <li>D) expanded quickly</li>
        </ul>
        <p className="mt-4 text-green-600 dark:text-green-400 font-semibold">Correct answer: A</p>
      </div>

      {/* Question Type 3 */}
      <h3 className="text-xl font-semibold mt-8 mb-4 text-slate-900 dark:text-slate-100">3. Inference Questions</h3>

      <ArticleParagraph>
        These questions require you to understand information that is implied but not directly stated.
      </ArticleParagraph>

      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-slate-400">
        <p className="font-semibold mb-3 text-slate-900 dark:text-slate-100">Example:</p>
        <p className="text-slate-700 dark:text-slate-300 mb-4">What can be inferred about early feathers?</p>
        <ul className="space-y-1 text-slate-700 dark:text-slate-300">
          <li>A) They helped birds fly immediately</li>
          <li>B) They served another function before flight</li>
          <li>C) They appeared only after birds evolved</li>
          <li>D) They were used for hunting</li>
        </ul>
        <p className="mt-4 text-green-600 dark:text-green-400 font-semibold">Correct answer: B</p>
      </div>

      {/* Question Type 4 */}
      <h3 className="text-xl font-semibold mt-8 mb-4 text-slate-900 dark:text-slate-100">4. Sentence Simplification Questions</h3>

      <ArticleParagraph>
        You must choose the sentence that best expresses the same meaning as a complex sentence.
      </ArticleParagraph>

      {/* Question Type 5 */}
      <h3 className="text-xl font-semibold mt-8 mb-4 text-slate-900 dark:text-slate-100">5. Summary Questions</h3>

      <ArticleParagraph>
        You choose the three statements that best summarize the passage. These questions are worth <strong>2 points</strong>.
      </ArticleParagraph>

      {/* Scoring Section */}
      <ArticleHeading>TOEFL Reading Scoring</ArticleHeading>

      <ArticleParagraph>
        Each correct answer contributes to your raw score, which is converted into a <strong>scaled score from 0 to 30</strong>.
      </ArticleParagraph>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800">
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Raw Score</th>
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Scaled Score (Approx.)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">20</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">30</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/50">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">17–19</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">25–29</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">14–16</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">20–24</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/50">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">10–13</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">15–19</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Below 10</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Below 15</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ArticleParagraph>
        A strong TOEFL Reading score for top universities is typically <strong>22–26+</strong>.
      </ArticleParagraph>

      {/* Common Problems */}
      <ArticleHeading>Common Problems Students Face</ArticleHeading>

      <ArticleParagraph>
        Many test-takers struggle with:
      </ArticleParagraph>

      <BulletList items={[
        'Running out of time',
        'Reading every word too slowly',
        'Difficult academic vocabulary',
        'Overthinking answers'
      ]} />

      <ArticleParagraph>
        Understanding the question types helps solve most of these problems.
      </ArticleParagraph>

      {/* Strategies */}
      <ArticleHeading>Best TOEFL Reading Strategies</ArticleHeading>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-4">
        <p className="font-semibold text-slate-900 dark:text-slate-100">1. Skim the passage first</p>
        <p className="text-slate-700 dark:text-slate-300">Read the first sentence of each paragraph to understand the topic.</p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-4">
        <p className="font-semibold text-slate-900 dark:text-slate-100">2. Focus on the question</p>
        <p className="text-slate-700 dark:text-slate-300">Read the question carefully before searching the passage.</p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-4">
        <p className="font-semibold text-slate-900 dark:text-slate-100">3. Use context for vocabulary</p>
        <p className="text-slate-700 dark:text-slate-300">Do not panic if you do not know a word.</p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-4">
        <p className="font-semibold text-slate-900 dark:text-slate-100">4. Manage your time</p>
        <p className="text-slate-700 dark:text-slate-300">Spend about <strong>17 minutes per passage</strong>.</p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-4">
        <p className="font-semibold text-slate-900 dark:text-slate-100">5. Eliminate wrong answers</p>
        <p className="text-slate-700 dark:text-slate-300">Often two options are clearly incorrect.</p>
      </div>

      {/* How to Improve */}
      <ArticleHeading>How to Improve Your TOEFL Reading Score</ArticleHeading>

      <ArticleParagraph>
        To improve quickly, practice reading academic materials such as:
      </ArticleParagraph>

      <BulletList items={[
        'Scientific articles',
        'History texts',
        'Psychology essays',
        'University lecture materials'
      ]} />

      <ArticleParagraph>
        Also practice with TOEFL-style questions regularly.
      </ArticleParagraph>

      {/* FAQs */}
      <ArticleHeading>TOEFL Reading FAQs</ArticleHeading>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-900 dark:text-slate-100">How many passages are in TOEFL Reading?</h3>
      <ArticleParagraph>
        The TOEFL iBT Reading section contains <strong>2 academic passages</strong> with a total of <strong>20 questions</strong>.
      </ArticleParagraph>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-900 dark:text-slate-100">How long is the TOEFL Reading section?</h3>
      <ArticleParagraph>
        The section lasts <strong>35 minutes</strong>.
      </ArticleParagraph>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-900 dark:text-slate-100">Is TOEFL Reading difficult?</h3>
      <ArticleParagraph>
        The difficulty level is similar to university textbooks. Strong vocabulary and reading speed make the section much easier.
      </ArticleParagraph>

      {/* Final Thoughts */}
      <ArticleHeading>Final Thoughts</ArticleHeading>

      <ArticleParagraph>
        The <strong>TOEFL Reading section</strong> tests your ability to understand academic texts quickly and accurately.
      </ArticleParagraph>

      <ArticleParagraph>
        If you learn the question types, practice regularly, and improve your vocabulary, you can significantly increase your TOEFL score.
      </ArticleParagraph>

      <ArticleParagraph>
        Start practicing today and treat each passage like a short academic article rather than a difficult exam.
      </ArticleParagraph>

      {/* Related TOEFL Reading Guides */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8">
        <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
          Continue Your TOEFL Reading Preparation
        </h3>
        <ul className="space-y-2">
          <li>
            <Link to="/toefl/toefl-reading/toefl-reading-strategies" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              → TOEFL Reading Strategies: 10 Proven Tips to Score Higher
            </Link>
          </li>
          <li>
            <Link to="/toefl/toefl-reading/toefl-reading-question-types" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              → TOEFL Reading Question Types: Complete Guide with Examples
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

export default TOEFLReadingSectionExplainedPage;
