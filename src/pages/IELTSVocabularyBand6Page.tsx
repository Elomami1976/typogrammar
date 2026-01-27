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
  usePageMetadata({
    title: 'IELTS Vocabulary Band 6: 25 Essential Words with Examples & Quiz | TypoGrammar',
    description: 'Learn 25 essential IELTS Band 6 vocabulary words with clear meanings, example sentences, common mistakes, and a short quiz to improve your IELTS score.',
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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
              BAND 6
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              IELTS Vocabulary – Band 6
            </h1>
          </div>
          
          <ArticleParagraph>
            This page contains <strong>25 essential IELTS Band 6 vocabulary words</strong> designed for learners aiming to move beyond basic English.
            Each word includes a clear meaning in English, an IELTS-style example sentence, a common learner mistake, and a short upgrade tip to help you improve accuracy in Writing and Speaking.
          </ArticleParagraph>
          
          <ArticleParagraph>
            This list is suitable for <strong>IELTS Academic and General Training</strong> candidates worldwide.
          </ArticleParagraph>
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
            to="/ielts/vocabulary/band-7"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl"
          >
            Continue to Band 7 Vocabulary →
          </Link>
        </div>

        {/* Internal Links Section */}
        <div className="mt-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Explore More IELTS Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/ielts/vocabulary/band-7" className="p-4 border-2 border-purple-200 dark:border-purple-800 rounded-lg hover:border-purple-400 dark:hover:border-purple-600 transition-colors">
              <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-2">Band 7 Vocabulary</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Learn academic words for higher IELTS scores</p>
            </Link>
            <Link to="/ielts/ielts-writing-task-2-essay-types" className="p-4 border-2 border-blue-200 dark:border-blue-800 rounded-lg hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
              <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">IELTS Writing Task 2 Guide</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Master essay structures and strategies</p>
            </Link>
            <Link to="/ielts/opinion-essay-ielts-band-7-9" className="p-4 border-2 border-indigo-200 dark:border-indigo-800 rounded-lg hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors">
              <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Opinion Essays for IELTS</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Write persuasive essays that score Band 7-9</p>
            </Link>
            <Link to="/grammar-guide" className="p-4 border-2 border-slate-200 dark:border-slate-700 rounded-lg hover:border-slate-400 dark:hover:border-slate-600 transition-colors">
              <h4 className="font-bold text-slate-600 dark:text-slate-400 mb-2">Grammar Guide</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Comprehensive English grammar lessons</p>
            </Link>
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
                  text: 'IELTS Band 6 vocabulary consists of essential words that demonstrate competent English usage beyond basic level. These words help you avoid repetition, express ideas more clearly, and sound more academic in Writing Task 2 essays and Speaking responses.'
                }
              },
              {
                '@type': 'Question',
                name: 'How many Band 6 words should I use in my IELTS essay?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Focus on using 5-10 Band 6 vocabulary words naturally throughout your IELTS essay. Quality matters more than quantity—use words accurately and in appropriate contexts rather than forcing advanced vocabulary.'
                }
              },
              {
                '@type': 'Question',
                name: 'How long does it take to learn Band 6 vocabulary?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most learners can master Band 6 vocabulary in 2-4 weeks with daily practice. Study 5-7 words per day, practice using them in sentences, and review common mistakes to achieve fluency with these essential IELTS words.'
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
