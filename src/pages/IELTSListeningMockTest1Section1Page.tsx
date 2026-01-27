import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading } from '../components/ArticleComponents';
import SchemaMarkup from '../components/SchemaMarkup';

interface Question {
  id: number;
  question: string;
  options: { label: string; text: string }[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: 'What type of IELTS course is the student interested in?',
    options: [
      { label: 'A', text: 'Full-time course' },
      { label: 'B', text: 'Weekend course' },
      { label: 'C', text: 'Part-time course' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 2,
    question: 'When do the classes usually take place?',
    options: [
      { label: 'A', text: 'In the morning' },
      { label: 'B', text: 'In the afternoon' },
      { label: 'C', text: 'In the evening' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 3,
    question: 'Where are the classes held?',
    options: [
      { label: 'A', text: 'On the main university campus' },
      { label: 'B', text: 'At the City Center campus near the train station' },
      { label: 'C', text: 'At an online learning center' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 4,
    question: 'How much does the IELTS preparation course cost?',
    options: [
      { label: 'A', text: '$450' },
      { label: 'B', text: '$580' },
      { label: 'C', text: '$600' }
    ],
    correctAnswer: 'B'
  }
];

const faqData = [
  {
    question: 'Is this an official IELTS test?',
    answer: 'No. This is an IELTS-style practice created by TypoGrammar.'
  },
  {
    question: 'Can I replay the audio?',
    answer: 'You can, but for best exam practice, listen once only.'
  },
  {
    question: 'Is this for Academic or General Training?',
    answer: 'Section 1 format is suitable for both.'
  },
  {
    question: 'How many questions are in IELTS Listening Section 1?',
    answer: 'Usually 10 in the real exam. This page covers Questions 1–4.'
  }
];

const IELTSListeningMockTest1Section1Page: React.FC = () => {
  const [showAnswers, setShowAnswers] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});

  usePageMetadata({
    title: 'IELTS Listening Practice – Mock Test 1 Section 1 (Questions 1–4) | TypoGrammar',
    description: 'Practice IELTS Listening Section 1. Watch the video, answer questions 1–4, then check your answers. Free IELTS practice on TypoGrammar.'
  });

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqData.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'IELTS Listening – Mock Test 1 (Section 1) | Questions 1–4',
    'description': 'Practice IELTS Listening Section 1. Watch the video, answer questions 1–4, then check your answers. Free IELTS practice on TypoGrammar.',
    'url': 'https://typogrammar.com/ielts/tests/listening/mock-test-1/section-1',
    'author': {
      '@type': 'Organization',
      'name': 'TypoGrammar'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'TypoGrammar',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://typogrammar.com/logo.png'
      }
    },
    'datePublished': '2026-01-25',
    'dateModified': '2026-01-25'
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup type="FAQPage" data={faqSchema} />
      <SchemaMarkup type="Article" data={articleSchema} />

      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-slate-600 dark:text-slate-400">
        <Link to="/ielts/tests" className="hover:text-blue-600 dark:hover:text-blue-400">
          IELTS Tests
        </Link>
        {' '}/{' '}
        <span className="text-slate-900 dark:text-slate-100">Mock Test 1 – Section 1</span>
      </nav>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
        IELTS Listening – Mock Test 1 (Section 1) | Questions 1–4
      </h1>

      {/* Instructions Card */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-4">
          📋 Instructions
        </h2>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>You will hear the recording once only.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>Try not to pause or replay for best practice.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>Answer Questions 1–4 after listening.</span>
          </li>
        </ul>
      </div>

      {/* YouTube Embed */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
          🎧 Listening Audio
        </h2>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/qF-vMQUiuNA?rel=0&modestbranding=1&fs=1"
            title="IELTS Listening Mock Test 1 Section 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Questions Section */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
          Questions 1–4
        </h2>
        <p className="text-slate-700 dark:text-slate-300 mb-6">
          Choose the correct letter, <strong>A, B, or C</strong>.
        </p>

        {questions.map((q, index) => (
          <div key={q.id} className="mb-8">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
              {q.id}. {q.question}
            </h3>
            <div className="space-y-2 ml-4">
              {q.options.map(option => {
                const isSelected = userAnswers[q.id] === option.label;
                const isCorrect = option.label === q.correctAnswer;
                const showCorrectAnswer = showAnswers && isCorrect;
                const showWrongAnswer = showAnswers && isSelected && !isCorrect;
                
                return (
                  <button
                    key={option.label}
                    onClick={() => setUserAnswers(prev => ({ ...prev, [q.id]: option.label }))}
                    disabled={showAnswers}
                    className={`w-full text-left flex items-start p-3 rounded-md border transition-all duration-200 ${
                      showCorrectAnswer
                        ? 'bg-green-50 dark:bg-green-900/20 border-green-500 dark:border-green-600'
                        : showWrongAnswer
                        ? 'bg-red-50 dark:bg-red-900/20 border-red-500 dark:border-red-600'
                        : isSelected
                        ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500 dark:border-blue-600'
                        : 'bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700'
                    } ${!showAnswers ? 'cursor-pointer' : 'cursor-default'}`}
                  >
                    <span className={`font-semibold mr-3 ${
                      showCorrectAnswer ? 'text-green-700 dark:text-green-400' :
                      showWrongAnswer ? 'text-red-700 dark:text-red-400' :
                      isSelected ? 'text-blue-700 dark:text-blue-400' :
                      'text-slate-900 dark:text-white'
                    }`}>
                      {option.label}.
                    </span>
                    <span className={`flex-1 ${
                      showCorrectAnswer ? 'text-green-700 dark:text-green-300' :
                      showWrongAnswer ? 'text-red-700 dark:text-red-300' :
                      'text-slate-700 dark:text-slate-300'
                    }`}>
                      {option.text}
                    </span>
                    {isSelected && !showAnswers && (
                      <span className="ml-auto text-blue-600 dark:text-blue-400 font-semibold">
                        ✓
                      </span>
                    )}
                    {showCorrectAnswer && (
                      <span className="ml-auto text-green-600 dark:text-green-400 font-semibold">
                        ✓ Correct
                      </span>
                    )}
                    {showWrongAnswer && (
                      <span className="ml-auto text-red-600 dark:text-red-400 font-semibold">
                        ✗ Wrong
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Answer Toggle Button */}
        <button
          onClick={() => setShowAnswers(!showAnswers)}
          className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          {showAnswers ? '🔒 Hide Answers' : '🔓 Check My Answers'}
        </button>

        {/* Answer Key and Score */}
        {showAnswers && (
          <div className="mt-6 space-y-4">
            {/* Score Display */}
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">
                📊 Your Score
              </h3>
              <p className="text-2xl font-bold text-blue-900 dark:text-blue-300">
                {Object.keys(userAnswers).filter(qId => userAnswers[parseInt(qId)] === questions.find(q => q.id === parseInt(qId))?.correctAnswer).length} / {questions.length}
              </p>
              {Object.keys(userAnswers).length < questions.length && (
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                  You haven't answered all questions yet.
                </p>
              )}
            </div>
            
            {/* Answer Key */}
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-3">
                ✅ Answer Key
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-900 dark:text-slate-100">
                {questions.map(q => (
                  <div key={q.id} className="text-center">
                    <span className="font-semibold">Q{q.id}:</span> {q.correctAnswer}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
        <ArticleHeading>Frequently Asked Questions</ArticleHeading>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {faq.question}
              </h3>
              <ArticleParagraph>{faq.answer}</ArticleParagraph>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <Link
          to="/ielts/tests"
          className="w-full md:w-auto px-6 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-semibold rounded-lg transition-colors duration-200 text-center"
        >
          ← Back to IELTS Tests
        </Link>
        <button
          disabled
          className="w-full md:w-auto px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 font-semibold rounded-lg cursor-not-allowed"
        >
          Next: Section 2 → (Coming Soon)
        </button>
      </div>
    </div>
  );
};

export default IELTSListeningMockTest1Section1Page;
