import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading } from '../components/ArticleComponents';

const IELTSTestsPage: React.FC = () => {
  usePageMetadata({
    title: 'IELTS Practice Tests – Listening, Reading, Writing, Speaking | TypoGrammar',
    description: 'Free IELTS practice tests for all four skills: Listening, Reading, Writing, and Speaking. Improve your IELTS band score with TypoGrammar.'
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
        IELTS Practice Tests
      </h1>

      <ArticleParagraph>
        Practice all four IELTS skills with our free mock tests. Each test follows the official IELTS format
        to help you prepare effectively for your exam.
      </ArticleParagraph>

      {/* Listening Tests Section */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-6">
        <ArticleHeading>🎧 Listening Tests</ArticleHeading>
        <ArticleParagraph>
          Practice IELTS Listening with video-based mock tests. Each section includes questions and answer keys.
        </ArticleParagraph>
        
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
            Mock Test 1
          </h3>
          <div className="space-y-2">
            <Link
              to="/ielts/tests/listening/mock-test-1/section-1"
              className="block p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200"
            >
              <span className="font-semibold text-blue-900 dark:text-blue-300">
                Section 1 – Questions 1–4
              </span>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Social conversation: Course enrollment inquiry
              </p>
            </Link>
            
            <div className="p-4 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-lg opacity-60">
              <span className="font-semibold text-slate-600 dark:text-slate-400">
                Section 2 – Coming Soon
              </span>
              <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                Social monologue
              </p>
            </div>
            
            <div className="p-4 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-lg opacity-60">
              <span className="font-semibold text-slate-600 dark:text-slate-400">
                Section 3 – Coming Soon
              </span>
              <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                Academic conversation
              </p>
            </div>
            
            <div className="p-4 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-lg opacity-60">
              <span className="font-semibold text-slate-600 dark:text-slate-400">
                Section 4 – Coming Soon
              </span>
              <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                Academic monologue
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reading Tests Section */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-6">
        <ArticleHeading>📖 Reading Tests</ArticleHeading>
        <ArticleParagraph>
          Coming soon: IELTS Academic and General Training reading practice tests.
        </ArticleParagraph>
      </div>

      {/* Writing Tests Section */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-6">
        <ArticleHeading>✍️ Writing Tests</ArticleHeading>
        <ArticleParagraph>
          Check out our comprehensive <Link to="/ielts/ielts-writing-task-2-essay-types" className="text-blue-600 hover:underline dark:text-blue-400">
            IELTS Writing Task 2 guide
          </Link> with essay types, sample answers, and band descriptors.
        </ArticleParagraph>
      </div>

      {/* Speaking Tests Section */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-6">
        <ArticleHeading>🗣️ Speaking Tests</ArticleHeading>
        <ArticleParagraph>
          Coming soon: IELTS Speaking practice with sample questions for all three parts.
        </ArticleParagraph>
      </div>

      {/* Additional Resources */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-4">
          📚 More IELTS Resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link to="/ielts/vocabulary/band-7" className="text-blue-600 hover:underline dark:text-blue-400">
              IELTS Vocabulary by Band Score
            </Link>
          </li>
          <li>
            <Link to="/ielts/academic-vocabulary-book" className="text-blue-600 hover:underline dark:text-blue-400">
              Free IELTS Vocabulary Book (PDF)
            </Link>
          </li>
          <li>
            <Link to="/ielts/ielts-writing-task-2-essay-types" className="text-blue-600 hover:underline dark:text-blue-400">
              IELTS Writing Task 2 Essay Types
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IELTSTestsPage;
