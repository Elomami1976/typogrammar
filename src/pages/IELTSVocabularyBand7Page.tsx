import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading } from '../components/ArticleComponents';
import { useLanguage } from '../contexts/LanguageContext';
import SchemaMarkup from '../components/SchemaMarkup';

interface VocabularyItem {
  word: string;
  meaning: string;
  example: string;
  commonMistake: string;
  upgradeTip: string;
}

const vocabularyData: VocabularyItem[] = [
  { word: 'significant', meaning: 'important or noticeable', example: 'There has been a significant rise in costs.', commonMistake: 'No data', upgradeTip: 'Add numbers' },
  { word: 'contribute', meaning: 'to help cause something', example: 'This contributes to economic growth.', commonMistake: 'Missing "to"', upgradeTip: 'Use *contribute to*' },
  { word: 'factor', meaning: 'an element influencing a result', example: 'One key factor is education.', commonMistake: 'Overgeneral', upgradeTip: 'Specify' },
  { word: 'benefit', meaning: 'an advantage', example: 'This policy brings several benefits.', commonMistake: 'Verb/noun confusion', upgradeTip: 'Use correctly' },
  { word: 'impact', meaning: 'strong effect', example: 'Technology has a major impact on society.', commonMistake: 'Overuse', upgradeTip: 'Add adjective' },
  { word: 'access', meaning: 'ability to use', example: 'Many lack access to clean water.', commonMistake: 'Wrong preposition', upgradeTip: '*access to*' },
  { word: 'maintain', meaning: 'keep at same level', example: 'It is hard to maintain quality.', commonMistake: 'Tense issues', upgradeTip: 'Use present simple' },
  { word: 'reduce', meaning: 'make smaller', example: 'This can reduce pollution.', commonMistake: 'No object', upgradeTip: 'Specify' },
  { word: 'awareness', meaning: 'knowledge or understanding', example: 'Public awareness is increasing.', commonMistake: 'Vague', upgradeTip: 'Say *of what*' },
  { word: 'approach', meaning: 'a method', example: 'This is a practical approach.', commonMistake: 'Informal use', upgradeTip: 'Use academically' },
  { word: 'measure', meaning: 'an action taken', example: 'Strict measures were introduced.', commonMistake: 'Singular/plural', upgradeTip: 'Often plural' },
  { word: 'tend', meaning: 'usually do something', example: 'People tend to rely on technology.', commonMistake: 'Missing "to"', upgradeTip: 'Use *tend to*' },
  { word: 'provide', meaning: 'give something', example: 'The school provides resources.', commonMistake: 'Informal context', upgradeTip: 'Use in formal writing' },
  { word: 'affect', meaning: 'influence', example: 'This may affect productivity.', commonMistake: 'Confused with effect', upgradeTip: 'Verb vs noun' },
  { word: 'outcome', meaning: 'final result', example: 'The outcome was positive.', commonMistake: 'Repetition', upgradeTip: 'Use variety' },
  { word: 'invest', meaning: 'put money/time into', example: 'Governments should invest in education.', commonMistake: 'Wrong preposition', upgradeTip: '*invest in*' },
  { word: 'decline', meaning: 'decrease', example: 'Birth rates continue to decline.', commonMistake: 'Wrong tense', upgradeTip: 'Use present perfect' },
  { word: 'concern', meaning: 'a worry', example: 'This raises serious concerns.', commonMistake: 'Singular misuse', upgradeTip: 'Often plural' },
  { word: 'policy', meaning: 'official plan', example: 'This policy was implemented.', commonMistake: 'Informal usage', upgradeTip: 'Keep academic' },
  { word: 'demand', meaning: 'need or desire', example: 'There is high demand for housing.', commonMistake: 'Article errors', upgradeTip: 'Watch "a/the"' },
  { word: 'supply', meaning: 'amount available', example: 'Supply cannot meet demand.', commonMistake: 'Countability', upgradeTip: 'Usually uncountable' },
  { word: 'issue', meaning: 'important topic', example: 'This is a pressing issue.', commonMistake: 'Too general', upgradeTip: 'Add adjective' },
  { word: 'limit', meaning: 'restrict', example: 'Laws limit freedom.', commonMistake: 'Missing object', upgradeTip: 'Specify' },
  { word: 'trend', meaning: 'general direction', example: 'A growing trend is remote work.', commonMistake: 'Vague', upgradeTip: 'Explain trend' },
  { word: 'evidence', meaning: 'proof', example: 'There is strong evidence to support this.', commonMistake: 'Countability', upgradeTip: 'Uncountable' },
];

interface QuizQuestion {
  question: string;
  type: 'multiple-choice' | 'fill-blank';
  options?: string[];
  correctAnswer: string | number;
  userAnswer?: string | number;
}

const quizQuestions: QuizQuestion[] = [
  {
    question: 'Which sentence uses "impact" correctly?',
    type: 'multiple-choice',
    options: [
      'Technology impacts to society',
      'Technology has a significant impact on society',
      'Technology is impact society',
      'Technology impact society'
    ],
    correctAnswer: 1,
  },
  {
    question: 'Choose the correct phrase:',
    type: 'multiple-choice',
    options: ['access of education', 'access for education', 'access to education', 'access education'],
    correctAnswer: 2,
  },
  {
    question: 'Which word fits best? "Public ___ of climate change is increasing."',
    type: 'multiple-choice',
    options: ['knowledge', 'attention', 'awareness', 'opinion'],
    correctAnswer: 2,
  },
];

const IELTSVocabularyBand7Page: React.FC = () => {
  const pageUrl = 'https://typogrammar.com/ielts/vocabulary/band-7';
  const lastUpdated = '2026-02-25';
  const datePublished = '2025-06-15';
  
  usePageMetadata({
    title: 'IELTS Band 7 Vocabulary List 2026: 25 Academic Words with Meanings, Examples & Tips | Typogrammar',
    description: 'Free IELTS Band 7 vocabulary list with meanings, collocations, example sentences & common mistakes. Learn academic words to achieve 7.0+ in Lexical Resource for Writing Task 2 and Speaking.',
    ogTitle: 'IELTS Band 7 Vocabulary List 2026: Academic Words for Writing & Speaking',
    ogDescription: 'Master 25 IELTS Band 7 academic words with clear meanings, natural collocations, and tips to avoid common mistakes. Target 7.0-7.5 in Lexical Resource.',
    ogType: 'article',
    ogUrl: pageUrl,
  });

  const { t } = useLanguage();
  const [quizAnswers, setQuizAnswers] = useState<(string | number | null)[]>(Array(quizQuestions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [fillBlankAnswers, setFillBlankAnswers] = useState<{ [key: number]: string }>({});

  const handleMultipleChoice = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = optionIndex;
    setQuizAnswers(newAnswers);
  };

  const handleFillBlank = (questionIndex: number, value: string) => {
    setFillBlankAnswers(prev => ({ ...prev, [questionIndex]: value }));
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = value.trim().toLowerCase();
    setQuizAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleRetake = () => {
    setQuizAnswers(Array(quizQuestions.length).fill(null));
    setFillBlankAnswers({});
    setShowResults(false);
  };

  const calculateScore = () => {
    let correct = 0;
    quizQuestions.forEach((q, index) => {
      const userAnswer = quizAnswers[index];
      if (q.type === 'multiple-choice' && userAnswer === q.correctAnswer) {
        correct++;
      } else if (q.type === 'fill-blank' && typeof userAnswer === 'string') {
        if (userAnswer === (q.correctAnswer as string).toLowerCase()) {
          correct++;
        }
      }
    });
    return correct;
  };

  const score = calculateScore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 py-12 px-4">
      {/* GEO Meta Tags */}
      <meta name="geo.region" content="Global" />
      <meta name="language" content="English" />
      
      {/* Article Schema */}
      <SchemaMarkup
        type="Article"
        data={{
          headline: 'IELTS Band 7 Vocabulary List 2026: 25 Academic Words with Meanings & Examples',
          description: 'Free IELTS Band 7 vocabulary list with meanings, collocations, example sentences & common mistakes. Learn academic words to achieve 7.0+ in Lexical Resource.',
          author: {
            '@type': 'Organization',
            name: 'Typogrammar',
            url: 'https://typogrammar.com/about'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Typogrammar',
            url: 'https://typogrammar.com'
          },
          datePublished: datePublished,
          dateModified: lastUpdated,
          mainEntityOfPage: pageUrl
        }}
      />
      
      <div className="max-w-6xl mx-auto">
        {/* Featured Snippet Box - Quick Answer */}
        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-slate-700 dark:to-slate-600 border-l-4 border-purple-600 p-6 rounded-lg mb-8 shadow-md">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What is IELTS Band 7 Vocabulary?</h2>
          <p className="text-slate-800 dark:text-slate-200 leading-relaxed mb-4">
            <strong>Band 7 vocabulary</strong> demonstrates academic-level language with precision, range, and awareness of formal register. These words show examiners you can express complex ideas naturally without sounding forced or unnatural.
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Quick Answer: What score do Band 7 words get?</h3>
            <p className="text-slate-700 dark:text-slate-300">Using Band 7 vocabulary correctly can boost your Lexical Resource score to <strong>7.0-7.5</strong>. You need to show "sufficient range" and "awareness of style and collocation" with only "occasional errors in word choice."</p>
          </div>
        </div>

        {/* Long-tail Keyword Section: Key Differences */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Band 7 vs Band 6 Vocabulary: Key Differences</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-purple-100 dark:bg-slate-700">
                  <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">Criteria</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">Band 6</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">Band 7</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Range</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">Adequate range</td>
                  <td className="px-4 py-3 text-purple-600 dark:text-purple-400">Sufficient range for flexibility</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Style Awareness</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">Limited awareness</td>
                  <td className="px-4 py-3 text-purple-600 dark:text-purple-400">Awareness of style and collocation</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Less Common Words</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">Some attempts</td>
                  <td className="px-4 py-3 text-purple-600 dark:text-purple-400">Uses less common items skillfully</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Errors</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">Some errors in word choice/formation</td>
                  <td className="px-4 py-3 text-purple-600 dark:text-purple-400">Occasional errors only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Header */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
              BAND 7
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              IELTS Vocabulary Band 7 List (2026)
            </h1>
          </div>
          
          {/* E-E-A-T Signals */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/></svg>
              By <Link to="/about" className="text-blue-600 dark:text-blue-400 hover:underline">Typogrammar Team</Link>
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/></svg>
              Updated: {lastUpdated}
            </span>
            <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              Reviewed by IELTS Expert
            </span>
          </div>
          
          <ArticleParagraph>
            This page features <strong>25 IELTS Band 7 vocabulary words</strong> commonly used in Task 2 essays and formal speaking answers.
            Band 7 vocabulary shows range, accuracy, and awareness of academic tone, without sounding unnatural or forced.
          </ArticleParagraph>
          
          <ArticleParagraph>
            All examples are written in natural <strong>IELTS style</strong>, suitable for international test-takers.
          </ArticleParagraph>
          
          {/* GEO Optimization - International Traffic */}
          <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              This IELTS vocabulary guide is designed for international test-takers preparing for IELTS exams in the UK, Canada, Australia, UAE, India, and other countries. We use neutral global English suitable for all IELTS regions.
            </p>
          </div>
        </div>

        {/* Table Context */}
        <div className="bg-purple-50 dark:bg-slate-700 border-l-4 border-purple-500 p-6 rounded-lg mb-8">
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3">
            📊 <strong>The words below help you:</strong>
          </p>
          <ul className="list-disc list-inside text-slate-700 dark:text-slate-200 space-y-1 ml-4">
            <li>Avoid repetition</li>
            <li>Sound more academic</li>
            <li>Express ideas clearly and logically</li>
          </ul>
        </div>

        {/* Vocabulary Table */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Word</th>
                  <th className="px-6 py-4 text-left font-semibold">Meaning (English)</th>
                  <th className="px-6 py-4 text-left font-semibold">Example</th>
                  <th className="px-6 py-4 text-left font-semibold">Common Mistake</th>
                  <th className="px-6 py-4 text-left font-semibold">Upgrade Tip</th>
                </tr>
              </thead>
              <tbody>
                {vocabularyData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-200 dark:border-slate-700 hover:bg-purple-50 dark:hover:bg-slate-700 transition-colors"
                  >
                    <td className="px-6 py-4 font-bold text-purple-600 dark:text-purple-400">
                      {item.word}
                    </td>
                    <td className="px-6 py-4 text-slate-700 dark:text-slate-300">
                      {item.meaning}
                    </td>
                    <td className="px-6 py-4 text-slate-700 dark:text-slate-300 italic">
                      "{item.example}"
                    </td>
                    <td className="px-6 py-4 text-red-600 dark:text-red-400">
                      {item.commonMistake}
                    </td>
                    <td className="px-6 py-4 text-green-600 dark:text-green-400">
                      {item.upgradeTip}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quiz Section */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
          <ArticleHeading>IELTS Band 7 Vocabulary Quiz</ArticleHeading>
          
          <div className="space-y-6 mt-6">
            {quizQuestions.map((q, qIndex) => (
              <div key={qIndex} className="border-b border-slate-200 dark:border-slate-700 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Question {qIndex + 1}: {q.question}
                </h3>
                
                {q.type === 'multiple-choice' && q.options ? (
                  <div className="space-y-3">
                    {q.options.map((option, oIndex) => (
                      <label
                        key={oIndex}
                        className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          quizAnswers[qIndex] === oIndex
                            ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                            : 'border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600'
                        } ${
                          showResults && oIndex === q.correctAnswer
                            ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                            : ''
                        } ${
                          showResults && quizAnswers[qIndex] === oIndex && oIndex !== q.correctAnswer
                            ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                            : ''
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${qIndex}`}
                          checked={quizAnswers[qIndex] === oIndex}
                          onChange={() => handleMultipleChoice(qIndex, oIndex)}
                          disabled={showResults}
                          className="w-5 h-5 text-purple-500"
                        />
                        <span className="text-slate-700 dark:text-slate-300 font-medium">
                          {String.fromCharCode(65 + oIndex)}) {option}
                          {showResults && oIndex === q.correctAnswer && ' ✅'}
                        </span>
                      </label>
                    ))}
                  </div>
                ) : (
                  <div>
                    <input
                      type="text"
                      value={fillBlankAnswers[qIndex] || ''}
                      onChange={(e) => handleFillBlank(qIndex, e.target.value)}
                      disabled={showResults}
                      placeholder="Type your answer here..."
                      className="w-full px-4 py-3 border-2 border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:border-purple-500 focus:outline-none disabled:bg-slate-100 dark:disabled:bg-slate-800"
                    />
                    {showResults && (
                      <p className={`mt-2 font-medium ${
                        quizAnswers[qIndex] === (q.correctAnswer as string).toLowerCase()
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-red-600 dark:text-red-400'
                      }`}>
                        {quizAnswers[qIndex] === (q.correctAnswer as string).toLowerCase()
                          ? `✅ Correct! The answer is "${q.correctAnswer}"`
                          : `❌ Incorrect. The correct answer is "${q.correctAnswer}"`}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {!showResults ? (
            <button
              onClick={handleSubmit}
              className="mt-8 w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
            >
              Submit Quiz
            </button>
          ) : (
            <div className="mt-8">
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 p-6 rounded-xl mb-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Your Score: {score} / {quizQuestions.length}
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  {score === quizQuestions.length
                    ? '🎉 Perfect score! You have mastered Band 7 vocabulary!'
                    : score >= 2
                    ? '👍 Good job! You are on track to Band 7.'
                    : '📚 Keep practicing! Review the words above and try again.'}
                </p>
              </div>
              <button
                onClick={handleRetake}
                className="w-full bg-slate-600 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Retake Quiz
              </button>
            </div>
          )}
        </div>

        {/* Navigation to Other Bands */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Link
            to="/ielts/vocabulary/band-6"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-xl p-6 text-white hover:from-blue-600 hover:to-indigo-700 transition-all"
          >
            <div className="text-sm font-semibold mb-2 opacity-90">← Previous Level</div>
            <h3 className="text-xl font-bold mb-2">Band 6 Vocabulary</h3>
            <p className="text-blue-100 text-sm">Review essential foundational words</p>
          </Link>
          
          <Link
            to="/ielts/vocabulary/band-8"
            className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl shadow-xl p-6 text-white hover:from-orange-600 hover:to-amber-700 transition-all"
          >
            <div className="text-sm font-semibold mb-2 opacity-90 text-right">Next Level →</div>
            <h3 className="text-xl font-bold mb-2 text-right">Band 8 Vocabulary</h3>
            <p className="text-orange-100 text-sm text-right">Master advanced precision words</p>
          </Link>
        </div>

        {/* Internal Links Section */}
        <div className="mt-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Related IELTS Preparation</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/ielts/vocabulary/band-8" className="p-4 border-2 border-orange-200 dark:border-orange-800 rounded-lg hover:border-orange-400 dark:hover:border-orange-600 transition-colors">
              <h4 className="font-bold text-orange-600 dark:text-orange-400 mb-2">Band 8 Advanced Vocabulary</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Take your vocabulary to examiner level</p>
            </Link>
            <Link to="/ielts/discussion-essay-ielts-band-7-9" className="p-4 border-2 border-purple-200 dark:border-purple-800 rounded-lg hover:border-purple-400 dark:hover:border-purple-600 transition-colors">
              <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-2">Discussion Essays</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Write balanced essays for Band 7-9</p>
            </Link>
            <Link to="/writing/how-to-paraphrase" className="p-4 border-2 border-indigo-200 dark:border-indigo-800 rounded-lg hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors">
              <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Paraphrasing Skills</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Learn to rephrase effectively for IELTS</p>
            </Link>
            <Link to="/vocabulary/collocations" className="p-4 border-2 border-slate-200 dark:border-slate-700 rounded-lg hover:border-slate-400 dark:hover:border-slate-600 transition-colors">
              <h4 className="font-bold text-slate-600 dark:text-slate-400 mb-2">Common Collocations</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Natural word combinations for fluency</p>
            </Link>
          </div>
        </div>

        {/* Visible FAQ Section */}
        <div className="mt-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Frequently Asked Questions: IELTS Band 7 Vocabulary
          </h2>
          
          <div className="space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-700 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">What makes Band 7 vocabulary different from Band 6?</h3>
              <p className="text-slate-700 dark:text-slate-300">Band 7 vocabulary demonstrates greater range, precision, and awareness of academic tone. While Band 6 words are essential, Band 7 words like "contribute," "impact," and "outcome" show sophistication without sounding forced or unnatural in IELTS essays. Band 7 also requires correct collocations.</p>
            </div>
            
            <div className="border-b border-slate-200 dark:border-slate-700 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Can I get Band 7 in IELTS using only these 25 words?</h3>
              <p className="text-slate-700 dark:text-slate-300">These 25 words are a strong foundation for Band 7, but you also need excellent grammar, coherence, and task achievement. Use these words naturally alongside proper sentence structures and clear organization. Vocabulary alone is only 25% of your Writing score.</p>
            </div>
            
            <div className="border-b border-slate-200 dark:border-slate-700 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">How do I avoid sounding unnatural with Band 7 vocabulary?</h3>
              <p className="text-slate-700 dark:text-slate-300">Practice using Band 7 words in context, not isolation. Focus on common collocations like "significant impact," "contribute to," and "raise awareness." Read sample Band 7-9 essays to see how these words fit naturally into academic writing.</p>
            </div>
            
            <div className="border-b border-slate-200 dark:border-slate-700 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">What are the most important Band 7 collocations for IELTS?</h3>
              <p className="text-slate-700 dark:text-slate-300">Key Band 7 collocations include: "exert influence," "pose a threat," "gain access to," "draw conclusions," "raise awareness," "conduct research," "reach a consensus," and "implement policies." Focus on learning words with their natural partners.</p>
            </div>
            
            <div className="border-b border-slate-200 dark:border-slate-700 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">How long does it take to improve from Band 6 to Band 7 vocabulary?</h3>
              <p className="text-slate-700 dark:text-slate-300">With focused daily practice, most learners improve vocabulary from Band 6 to Band 7 in 4-8 weeks. Study 3-5 new words daily, practice writing paragraphs using them, and review collocations and common errors regularly.</p>
            </div>
            
            <div className="pb-2">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Is Band 7 vocabulary the same for IELTS Academic and General Training?</h3>
              <p className="text-slate-700 dark:text-slate-300">Yes, the vocabulary scoring criteria are identical for both IELTS Academic and General Training. The same Band 7 words work for both tests. The difference is in the topics and tasks, not the vocabulary standards.</p>
            </div>
          </div>
        </div>

        {/* FAQ Schema */}
        <SchemaMarkup
          type="FAQPage"
          data={{
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What makes Band 7 vocabulary different from Band 6?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Band 7 vocabulary demonstrates greater range, precision, and awareness of academic tone. While Band 6 words are essential, Band 7 words like contribute, impact, and outcome show sophistication without sounding forced or unnatural in IELTS essays.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can I get Band 7 using only these 25 words?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'These 25 words are a strong foundation for Band 7, but you also need good grammar, coherence, and task achievement. Use these words naturally alongside proper sentence structures and clear organization to reach Band 7 in IELTS Writing and Speaking.'
                }
              },
              {
                '@type': 'Question',
                name: 'How do I avoid sounding unnatural with Band 7 vocabulary?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Practice using Band 7 words in context, not isolation. Focus on common collocations like significant impact, contribute to, and raise awareness. Read sample Band 7-9 essays to see how these words fit naturally into academic writing.'
                }
              },
              {
                '@type': 'Question',
                name: 'What are the most important Band 7 collocations for IELTS?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Key Band 7 collocations include: exert influence, pose a threat, gain access to, draw conclusions, raise awareness, conduct research, reach a consensus, and implement policies. Focus on learning words with their natural partners.'
                }
              },
              {
                '@type': 'Question',
                name: 'How long does it take to improve from Band 6 to Band 7 vocabulary?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'With focused daily practice, most learners improve vocabulary from Band 6 to Band 7 in 4-8 weeks. Study 3-5 new words daily, practice writing paragraphs using them, and review collocations and common errors regularly.'
                }
              },
              {
                '@type': 'Question',
                name: 'Is Band 7 vocabulary the same for IELTS Academic and General Training?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, the vocabulary scoring criteria are identical for both IELTS Academic and General Training. The same Band 7 words work for both tests. The difference is in the topics and tasks, not the vocabulary standards.'
                }
              }
            ]
          }}
        />
      </div>
    </div>
  );
};

export default IELTSVocabularyBand7Page;
