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
  { word: 'important', meaning: 'having great value or influence', example: 'Education plays an important role in society.', commonMistake: 'Overusing it', upgradeTip: 'Replace with *significant*' },
  { word: 'increase', meaning: 'to become larger in number or amount', example: 'The population increased rapidly.', commonMistake: 'No adverb', upgradeTip: 'Add *steadily / sharply*' },
  { word: 'problem', meaning: 'a difficult situation', example: 'Pollution is a serious problem.', commonMistake: 'Too general', upgradeTip: 'Use *issue*' },
  { word: 'help', meaning: 'to make something easier', example: 'Technology helps people communicate.', commonMistake: 'Informal tone', upgradeTip: 'Use *assist* in writing' },
  { word: 'improve', meaning: 'to make something better', example: 'This policy can improve living standards.', commonMistake: 'No object', upgradeTip: 'Specify what improves' },
  { word: 'change', meaning: 'to become different', example: 'Social attitudes have changed over time.', commonMistake: 'Too vague', upgradeTip: 'Use *shift*' },
  { word: 'reason', meaning: 'a cause or explanation', example: 'One reason is the lack of awareness.', commonMistake: 'Weak linking', upgradeTip: 'Use *due to*' },
  { word: 'result', meaning: 'an outcome', example: 'This leads to positive results.', commonMistake: 'Repetition', upgradeTip: 'Use *outcome*' },
  { word: 'effect', meaning: 'a change caused by something', example: 'It has a negative effect on health.', commonMistake: 'Confused with affect', upgradeTip: 'Use *impact*' },
  { word: 'solution', meaning: 'a way to solve a problem', example: 'Education is a possible solution.', commonMistake: 'Too simple', upgradeTip: 'Use *long-term solution*' },
  { word: 'support', meaning: 'to help or encourage', example: 'The government should support families.', commonMistake: 'Informal', upgradeTip: 'Use *provide support for*' },
  { word: 'allow', meaning: 'to let something happen', example: 'This allows people to save time.', commonMistake: 'Missing subject', upgradeTip: 'Use *enable*' },
  { word: 'need', meaning: 'require something', example: 'People need access to healthcare.', commonMistake: 'Informal', upgradeTip: 'Use *require*' },
  { word: 'use', meaning: 'to employ something', example: 'Many students use the internet.', commonMistake: 'Too basic', upgradeTip: 'Use *utilise*' },
  { word: 'spend', meaning: 'to use time or money', example: 'People spend more time online.', commonMistake: 'No preposition', upgradeTip: 'Use *expend* (formal)' },
  { word: 'cause', meaning: 'to make something happen', example: 'This causes stress among workers.', commonMistake: 'Overuse', upgradeTip: 'Use *lead to*' },
  { word: 'popular', meaning: 'liked by many people', example: 'Online learning is popular nowadays.', commonMistake: 'Informal tone', upgradeTip: 'Use *widely accepted*' },
  { word: 'easy', meaning: 'not difficult', example: 'This makes life easier.', commonMistake: 'Too basic', upgradeTip: 'Use *convenient*' },
  { word: 'difficult', meaning: 'hard to do', example: 'It is difficult to solve.', commonMistake: 'Repetition', upgradeTip: 'Use *challenging*' },
  { word: 'different', meaning: 'not the same', example: 'People have different opinions.', commonMistake: 'Overuse', upgradeTip: 'Use *diverse*' },
  { word: 'important issue', meaning: 'a serious topic', example: 'Climate change is an important issue.', commonMistake: 'Wordy', upgradeTip: 'Use *key issue*' },
  { word: 'improve skills', meaning: 'develop abilities', example: 'Students can improve skills through practice.', commonMistake: 'Vague', upgradeTip: 'Specify the skill' },
  { word: 'future', meaning: 'time ahead', example: 'This will affect the future.', commonMistake: 'Too broad', upgradeTip: 'Use *long-term future*' },
  { word: 'good', meaning: 'positive', example: 'This is a good idea.', commonMistake: 'Very weak', upgradeTip: 'Use *beneficial*' },
  { word: 'bad', meaning: 'negative', example: 'This has bad effects.', commonMistake: 'Informal', upgradeTip: 'Use *harmful*' },
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
    question: 'Choose the best replacement for "good" in formal writing:',
    type: 'multiple-choice',
    options: ['nice', 'okay', 'beneficial', 'fun'],
    correctAnswer: 2,
  },
  {
    question: 'Fill the gap: The government should ___ more money in education.',
    type: 'fill-blank',
    correctAnswer: 'invest',
  },
  {
    question: 'Which word is more formal than "help"?',
    type: 'multiple-choice',
    options: ['fix', 'assist', 'do', 'give'],
    correctAnswer: 1,
  },
];

const IELTSVocabularyBand6Page: React.FC = () => {
  const pageUrl = 'https://typogrammar.com/ielts/vocabulary/band-6';
  const lastUpdated = '2026-02-25';
  const datePublished = '2025-06-15';
  
  usePageMetadata({
    title: 'IELTS Band 6 Vocabulary List 2026: 25 Essential Words with Meanings, Examples & PDF | Typogrammar',
    description: 'Free IELTS Band 6 vocabulary list with meanings, example sentences, common mistakes & upgrade tips. Learn essential academic words to improve lexical resource score from 5.5 to 6.5 in Writing Task 2 and Speaking.',
    ogTitle: 'IELTS Band 6 Vocabulary List 2026: Essential Words for Writing & Speaking',
    ogDescription: 'Master 25 essential IELTS Band 6 words with clear meanings, IELTS-style examples, and tips to avoid common mistakes. Free vocabulary list for international test-takers.',
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 py-12 px-4">
      {/* GEO Meta Tags */}
      <meta name="geo.region" content="Global" />
      <meta name="language" content="English" />
      
      {/* Article Schema */}
      <SchemaMarkup
        type="Article"
        data={{
          headline: 'IELTS Band 6 Vocabulary List 2026: 25 Essential Words with Meanings & Examples',
          description: 'Free IELTS Band 6 vocabulary list with meanings, example sentences, common mistakes & upgrade tips. Learn essential academic words to improve lexical resource score in Writing and Speaking.',
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
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-slate-700 dark:to-slate-600 border-l-4 border-blue-600 p-6 rounded-lg mb-8 shadow-md">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What is IELTS Band 6 Vocabulary?</h2>
          <p className="text-slate-800 dark:text-slate-200 leading-relaxed mb-4">
            <strong>Band 6 vocabulary</strong> consists of essential academic words that demonstrate competent English beyond basic level. These words help you score 6.0-6.5 in IELTS Lexical Resource by avoiding repetition, expressing ideas clearly, and using appropriate academic register.
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Quick Answer: How many Band 6 words do I need?</h3>
            <p className="text-slate-700 dark:text-slate-300">Learn <strong>20-30 Band 6 words</strong> actively (use in writing) and recognize 50+ passively. Focus on accuracy over quantity-correctly using 5-8 Band 6 words per essay is better than forcing 15 incorrectly.</p>
          </div>
        </div>

        {/* Long-tail Keyword Section: How to Improve */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">How to Improve IELTS Vocabulary from Band 5.5 to Band 6.5</h2>
          <ol className="space-y-3 text-slate-700 dark:text-slate-300">
            <li className="flex gap-3"><span className="bg-blue-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold flex-shrink-0">1</span><span><strong>Replace basic words:</strong> Instead of "good," use "beneficial"; instead of "bad," use "harmful" or "detrimental."</span></li>
            <li className="flex gap-3"><span className="bg-blue-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold flex-shrink-0">2</span><span><strong>Learn word families:</strong> Study "effect" (noun), "effective" (adjective), "effectively" (adverb), "effectiveness" (noun).</span></li>
            <li className="flex gap-3"><span className="bg-blue-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold flex-shrink-0">3</span><span><strong>Use collocations:</strong> Learn natural pairs like "raise awareness," "conduct research," "implement policies."</span></li>
            <li className="flex gap-3"><span className="bg-blue-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold flex-shrink-0">4</span><span><strong>Practice in context:</strong> Write 5 sentences daily using new vocabulary in IELTS-style examples.</span></li>
            <li className="flex gap-3"><span className="bg-blue-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold flex-shrink-0">5</span><span><strong>Review mistakes:</strong> Keep a vocabulary error log and review common usage errors weekly.</span></li>
          </ol>
        </div>
        
        {/* Header */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
              BAND 6
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              IELTS Vocabulary Band 6 List (2026)
            </h1>
          </div>
          
          {/* E-E-A-T Signals */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/></svg>
              By <Link to="/about/" className="text-blue-600 dark:text-blue-400 hover:underline">Typogrammar Team</Link>
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
            This page contains <strong>25 essential IELTS Band 6 vocabulary words</strong> designed for learners aiming to move beyond basic English.
            Each word includes a clear meaning in English, an IELTS-style example sentence, a common learner mistake, and a short upgrade tip to help you improve accuracy in Writing and Speaking.
          </ArticleParagraph>
          
          <ArticleParagraph>
            This list is suitable for <strong>IELTS Academic and General Training</strong> candidates worldwide.
          </ArticleParagraph>
          
          {/* GEO Optimization - International Traffic */}
          <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              This IELTS vocabulary guide is designed for international test-takers preparing for IELTS exams in the UK, Canada, Australia, UAE, India, and other countries. We use neutral global English suitable for all IELTS regions.
            </p>
          </div>
        </div>

        {/* Table Context */}
        <div className="bg-blue-50 dark:bg-slate-700 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            📊 <strong>Table Context:</strong> The table below focuses on high-frequency, safe vocabulary that IELTS examiners expect Band 6 candidates to use correctly and consistently.
          </p>
        </div>

        {/* Vocabulary Table */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Word</th>
                  <th className="px-6 py-4 text-left font-semibold">Meaning (English)</th>
                  <th className="px-6 py-4 text-left font-semibold">Example (IELTS style)</th>
                  <th className="px-6 py-4 text-left font-semibold">Common Mistake</th>
                  <th className="px-6 py-4 text-left font-semibold">Upgrade Tip</th>
                </tr>
              </thead>
              <tbody>
                {vocabularyData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
                  >
                    <td className="px-6 py-4 font-bold text-blue-600 dark:text-blue-400">
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
          <ArticleHeading>Quick Check: IELTS Band 6 Vocabulary Quiz</ArticleHeading>
          
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
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                            : 'border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600'
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
                          className="w-5 h-5 text-blue-500"
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
                      className="w-full px-4 py-3 border-2 border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none disabled:bg-slate-100 dark:disabled:bg-slate-800"
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
              className="mt-8 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
            >
              Submit Quiz
            </button>
          ) : (
            <div className="mt-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 p-6 rounded-xl mb-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Your Score: {score} / {quizQuestions.length}
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  {score >= 2
                    ? '🎉 Great job! You are using Band 6 vocabulary correctly.'
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

          <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded-lg">
            <p className="text-slate-700 dark:text-slate-300">
              👉 <strong>Tip:</strong> If you score 2/3 or more, you are using Band 6 vocabulary correctly.
            </p>
          </div>
        </div>

        {/* Navigation to Next Band */}
        <div className="mt-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl shadow-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-3">Ready for the Next Level?</h3>
          <p className="text-purple-100 mb-6">
            Once you master Band 6 vocabulary, challenge yourself with <strong>Band 7 academic words</strong> to improve your score and sound more sophisticated.
          </p>
          <Link
            to="/ielts/vocabulary/band-7/"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl"
          >
            Continue to Band 7 Vocabulary →
          </Link>
        </div>

        {/* Internal Links Section */}
        <div className="mt-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Explore More IELTS Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/ielts/vocabulary/band-7/" className="p-4 border-2 border-purple-200 dark:border-purple-800 rounded-lg hover:border-purple-400 dark:hover:border-purple-600 transition-colors">
              <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-2">Band 7 Vocabulary</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Learn academic words for higher IELTS scores</p>
            </Link>
            <Link to="/ielts/ielts-writing-task-2-essay-types/" className="p-4 border-2 border-blue-200 dark:border-blue-800 rounded-lg hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
              <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">IELTS Writing Task 2 Guide</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Master essay structures and strategies</p>
            </Link>
            <Link to="/ielts/opinion-essay-ielts-band-7-9/" className="p-4 border-2 border-indigo-200 dark:border-indigo-800 rounded-lg hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors">
              <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Opinion Essays for IELTS</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Write persuasive essays that score Band 7-9</p>
            </Link>
            <Link to="/grammar-guide/" className="p-4 border-2 border-slate-200 dark:border-slate-700 rounded-lg hover:border-slate-400 dark:hover:border-slate-600 transition-colors">
              <h4 className="font-bold text-slate-600 dark:text-slate-400 mb-2">Grammar Guide</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Comprehensive English grammar lessons</p>
            </Link>
          </div>
        </div>

        {/* Visible FAQ Section */}
        <div className="mt-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Frequently Asked Questions: IELTS Band 6 Vocabulary
          </h2>
          
          <div className="space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-700 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">What is IELTS Band 6 vocabulary?</h3>
              <p className="text-slate-700 dark:text-slate-300">IELTS Band 6 vocabulary consists of essential words that demonstrate competent English usage beyond basic level. These words help you avoid repetition, express ideas more clearly, and sound more academic in Writing Task 2 essays and Speaking responses. Examples include "significant," "impact," "contribute," and "provide."</p>
            </div>
            
            <div className="border-b border-slate-200 dark:border-slate-700 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">How many Band 6 words should I use in my IELTS essay?</h3>
              <p className="text-slate-700 dark:text-slate-300">Focus on using 5-10 Band 6 vocabulary words naturally throughout your IELTS essay. Quality matters more than quantity-use words accurately and in appropriate contexts rather than forcing advanced vocabulary. A well-placed "essential" is better than five misused "advanced" words.</p>
            </div>
            
            <div className="border-b border-slate-200 dark:border-slate-700 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">How long does it take to learn Band 6 vocabulary for IELTS?</h3>
              <p className="text-slate-700 dark:text-slate-300">Most learners can master Band 6 vocabulary in 2-4 weeks with daily practice. Study 5-7 words per day, practice using them in sentences, and review common mistakes to achieve fluency with these essential IELTS words.</p>
            </div>
            
            <div className="border-b border-slate-200 dark:border-slate-700 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">What is the difference between Band 5.5 and Band 6 vocabulary?</h3>
              <p className="text-slate-700 dark:text-slate-300">Band 5.5 vocabulary is basic and often repetitive ("very good," "very big"), while Band 6 vocabulary shows more range and accuracy ("beneficial," "considerable"). Band 6 demonstrates you can avoid simple errors and use some less common vocabulary with occasional awkwardness.</p>
            </div>
            
            <div className="border-b border-slate-200 dark:border-slate-700 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Can I download this IELTS Band 6 vocabulary list as PDF?</h3>
              <p className="text-slate-700 dark:text-slate-300">You can print this page directly from your browser (Ctrl+P or Cmd+P) and save it as PDF. The vocabulary table and all examples will be included in the printout for offline study.</p>
            </div>
            
            <div className="pb-2">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Is Band 6 vocabulary enough for IELTS Academic or General Training?</h3>
              <p className="text-slate-700 dark:text-slate-300">Band 6 vocabulary is sufficient for many university entry requirements (which often require 6.0-6.5). For higher scores (7.0+), you'll need to also master Band 7-8 vocabulary. Both Academic and General Training use the same vocabulary scoring criteria.</p>
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
                name: 'What is IELTS Band 6 vocabulary?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'IELTS Band 6 vocabulary consists of essential words that demonstrate competent English usage beyond basic level. These words help you avoid repetition, express ideas more clearly, and sound more academic in Writing Task 2 essays and Speaking responses. Examples include significant, impact, contribute, and provide.'
                }
              },
              {
                '@type': 'Question',
                name: 'How many Band 6 words should I use in my IELTS essay?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Focus on using 5-10 Band 6 vocabulary words naturally throughout your IELTS essay. Quality matters more than quantity-use words accurately and in appropriate contexts rather than forcing advanced vocabulary.'
                }
              },
              {
                '@type': 'Question',
                name: 'How long does it take to learn Band 6 vocabulary for IELTS?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most learners can master Band 6 vocabulary in 2-4 weeks with daily practice. Study 5-7 words per day, practice using them in sentences, and review common mistakes to achieve fluency with these essential IELTS words.'
                }
              },
              {
                '@type': 'Question',
                name: 'What is the difference between Band 5.5 and Band 6 vocabulary?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Band 5.5 vocabulary is basic and often repetitive (very good, very big), while Band 6 vocabulary shows more range and accuracy (beneficial, considerable). Band 6 demonstrates you can avoid simple errors and use some less common vocabulary with occasional awkwardness.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can I download this IELTS Band 6 vocabulary list as PDF?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You can print this page directly from your browser (Ctrl+P or Cmd+P) and save it as PDF. The vocabulary table and all examples will be included in the printout for offline study.'
                }
              },
              {
                '@type': 'Question',
                name: 'Is Band 6 vocabulary enough for IELTS Academic or General Training?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Band 6 vocabulary is sufficient for many university entry requirements (which often require 6.0-6.5). For higher scores (7.0+), you will need to also master Band 7-8 vocabulary. Both Academic and General Training use the same vocabulary scoring criteria.'
                }
              }
            ]
          }}
        />
      </div>
    </div>
  );
};

export default IELTSVocabularyBand6Page;
