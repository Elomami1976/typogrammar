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
  { word: 'substantial', meaning: 'large or important', example: 'A substantial amount was invested.', commonMistake: 'Overuse', upgradeTip: 'Use selectively' },
  { word: 'inevitable', meaning: 'unavoidable', example: 'Automation is inevitable.', commonMistake: 'Wrong context', upgradeTip: 'Use logically' },
  { word: 'perspective', meaning: 'a way of thinking', example: 'From a global perspective…', commonMistake: 'Informal use', upgradeTip: 'Use academically' },
  { word: 'allocate', meaning: 'distribute resources', example: 'Funds were allocated efficiently.', commonMistake: 'Wrong object', upgradeTip: 'Money/time' },
  { word: 'perceive', meaning: 'see or understand', example: 'This is perceived as unfair.', commonMistake: 'Tense misuse', upgradeTip: 'Use passive' },
  { word: 'reinforce', meaning: 'strengthen', example: 'This reinforces social inequality.', commonMistake: 'Vague subject', upgradeTip: 'Specify' },
  { word: 'constrain', meaning: 'limit', example: 'Budgets constrain development.', commonMistake: 'Wrong tone', upgradeTip: 'Formal only' },
  { word: 'diminish', meaning: 'reduce gradually', example: 'Trust has diminished over time.', commonMistake: 'Wrong tense', upgradeTip: 'Often present perfect' },
  { word: 'implement', meaning: 'put into action', example: 'Policies were implemented successfully.', commonMistake: 'Spelling', upgradeTip: 'Check carefully' },
  { word: 'prevalent', meaning: 'common', example: 'This issue is prevalent in cities.', commonMistake: 'Wrong context', upgradeTip: 'Formal only' },
  { word: 'advocate', meaning: 'support publicly', example: 'Experts advocate reform.', commonMistake: 'Informal speaking', upgradeTip: 'Writing only' },
  { word: 'allocate', meaning: 'assign', example: 'Resources are allocated fairly.', commonMistake: 'Repetition', upgradeTip: 'Vary verbs' },
  { word: 'notion', meaning: 'idea or belief', example: 'This challenges the notion that…', commonMistake: 'Too abstract', upgradeTip: 'Explain briefly' },
  { word: 'undermine', meaning: 'weaken', example: 'This may undermine trust.', commonMistake: 'Wrong object', upgradeTip: 'Abstract nouns' },
  { word: 'facilitate', meaning: 'make easier', example: 'Technology facilitates learning.', commonMistake: 'Overuse', upgradeTip: 'Use when precise' },
  { word: 'discrepancy', meaning: 'difference', example: 'There is a discrepancy between data.', commonMistake: 'Countability', upgradeTip: 'Singular/plural' },
  { word: 'adverse', meaning: 'harmful', example: 'Adverse effects were reported.', commonMistake: 'Missing noun', upgradeTip: 'Pair with noun' },
  { word: 'compliance', meaning: 'following rules', example: 'Compliance is mandatory.', commonMistake: 'Wrong verb', upgradeTip: '*comply with*' },
  { word: 'incentive', meaning: 'motivation', example: 'Financial incentives encourage work.', commonMistake: 'Informal tone', upgradeTip: 'Academic context' },
  { word: 'resilience', meaning: 'ability to recover', example: 'Communities showed resilience.', commonMistake: 'Vague', upgradeTip: 'Add context' },
  { word: 'scope', meaning: 'range', example: 'The scope of the study is limited.', commonMistake: 'Overgeneral', upgradeTip: 'Define scope' },
  { word: 'viable', meaning: 'workable', example: 'This is a viable solution.', commonMistake: 'Informal speaking', upgradeTip: 'Writing focus' },
  { word: 'robust', meaning: 'strong', example: 'A robust system is needed.', commonMistake: 'Overuse', upgradeTip: 'Use carefully' },
  { word: 'explicit', meaning: 'clearly stated', example: 'Instructions were explicit.', commonMistake: 'Informal', upgradeTip: 'Academic only' },
  { word: 'ambiguous', meaning: 'unclear', example: 'The statement is ambiguous.', commonMistake: 'Wrong register', upgradeTip: 'Formal usage' },
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
    question: 'Which sentence uses "mitigate" correctly?',
    type: 'multiple-choice',
    options: [
      'The policy mitigates the problem completely',
      'The policy helps mitigate potential risks',
      'The policy mitigate risks',
      'The policy is mitigating by risks'
    ],
    correctAnswer: 1,
  },
  {
    question: 'Choose the best word: "The issue is ___ in developing countries."',
    type: 'fill-blank',
    correctAnswer: 'prevalent',
  },
  {
    question: 'Which context suits "advocate" best?',
    type: 'multiple-choice',
    options: ['Casual conversation', 'Informal chat', 'Academic writing', 'Daily texting'],
    correctAnswer: 2,
  },
];

const IELTSVocabularyBand8Page: React.FC = () => {
  usePageMetadata({
    title: 'IELTS Vocabulary Band 8: Advanced Words with Examples & Mini Quiz | TypoGrammar',
    description: 'Explore 25 advanced IELTS Band 8 vocabulary words with precise meanings, formal examples, common mistakes, and a quiz for high-scoring candidates.',
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 dark:from-slate-900 dark:to-slate-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
              BAND 8
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              IELTS Vocabulary – Band 8
            </h1>
          </div>
          
          <ArticleParagraph>
            IELTS Band 8 vocabulary demonstrates <strong>precision, control, and appropriate register</strong>.
            This page includes 25 advanced words frequently used in high-scoring Task 2 essays and well-developed speaking responses.
          </ArticleParagraph>
          
          <ArticleParagraph>
            These words are not advanced because they are "big", but because they are <strong>used accurately and naturally</strong>.
          </ArticleParagraph>
        </div>

        {/* Table Context */}
        <div className="bg-orange-50 dark:bg-slate-700 border-l-4 border-orange-500 p-6 rounded-lg mb-8">
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3">
            📊 <strong>The vocabulary below helps you:</strong>
          </p>
          <ul className="list-disc list-inside text-slate-700 dark:text-slate-200 space-y-1 ml-4">
            <li>Express complex ideas clearly</li>
            <li>Avoid vague language</li>
            <li>Show examiner-level control</li>
          </ul>
        </div>

        {/* Vocabulary Table */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-orange-500 to-amber-600 text-white">
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
                    className="border-b border-slate-200 dark:border-slate-700 hover:bg-orange-50 dark:hover:bg-slate-700 transition-colors"
                  >
                    <td className="px-6 py-4 font-bold text-orange-600 dark:text-orange-400">
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
          <ArticleHeading>IELTS Band 8 Vocabulary Quiz</ArticleHeading>
          
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
                            ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                            : 'border-slate-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600'
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
                          className="w-5 h-5 text-orange-500"
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
                      className="w-full px-4 py-3 border-2 border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:border-orange-500 focus:outline-none disabled:bg-slate-100 dark:disabled:bg-slate-800"
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
              className="mt-8 w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl"
            >
              Submit Quiz
            </button>
          ) : (
            <div className="mt-8">
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-slate-700 dark:to-slate-600 p-6 rounded-xl mb-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Your Score: {score} / {quizQuestions.length}
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  {score === quizQuestions.length
                    ? '🎉 Excellent! You have mastered Band 8 vocabulary!'
                    : score >= 2
                    ? '👏 Well done! You are approaching Band 8 level.'
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
            to="/ielts/vocabulary/band-7"
            className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl shadow-xl p-6 text-white hover:from-purple-600 hover:to-indigo-700 transition-all"
          >
            <div className="text-sm font-semibold mb-2 opacity-90">← Previous Level</div>
            <h3 className="text-xl font-bold mb-2">Band 7 Vocabulary</h3>
            <p className="text-purple-100 text-sm">Review academic range words</p>
          </Link>
          
          <Link
            to="/ielts/vocabulary/band-9"
            className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl shadow-xl p-6 text-white hover:from-emerald-600 hover:to-teal-700 transition-all"
          >
            <div className="text-sm font-semibold mb-2 opacity-90 text-right">Next Level →</div>
            <h3 className="text-xl font-bold mb-2 text-right">Band 9 Vocabulary</h3>
            <p className="text-emerald-100 text-sm text-right">Achieve examiner-level sophistication</p>
          </Link>
        </div>

        {/* Internal Links Section */}
        <div className="mt-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Advanced IELTS Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/ielts/vocabulary/band-9" className="p-4 border-2 border-emerald-200 dark:border-emerald-800 rounded-lg hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors">
              <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2">Band 9 Sophisticated Vocabulary</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Master the highest level words</p>
            </Link>
            <Link to="/ielts/advantages-disadvantages-essay-ielts" className="p-4 border-2 border-orange-200 dark:border-orange-800 rounded-lg hover:border-orange-400 dark:hover:border-orange-600 transition-colors">
              <h4 className="font-bold text-orange-600 dark:text-orange-400 mb-2">Advantages/Disadvantages Essays</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Write balanced analytical essays</p>
            </Link>
            <Link to="/writing/how-to-build-an-argument" className="p-4 border-2 border-indigo-200 dark:border-indigo-800 rounded-lg hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors">
              <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Building Strong Arguments</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Structure persuasive academic arguments</p>
            </Link>
            <Link to="/reading/how-to-read-critically" className="p-4 border-2 border-slate-200 dark:border-slate-700 rounded-lg hover:border-slate-400 dark:hover:border-slate-600 transition-colors">
              <h4 className="font-bold text-slate-600 dark:text-slate-400 mb-2">Critical Reading Skills</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Analyze texts for deeper understanding</p>
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
                name: 'What is Band 8 vocabulary in IELTS?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Band 8 vocabulary shows precision, control, and appropriate register. Words like "substantial", "inevitable", "perceive", and "facilitate" are not just "big words"—they are used accurately in formal academic contexts to express complex ideas with clarity and sophistication.'
                }
              },
              {
                '@type': 'Question',
                name: 'How many Band 8 words should I use in IELTS Writing?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use 3-5 Band 8 words naturally per essay. Overusing advanced vocabulary can sound forced. Focus on accuracy and appropriateness—one well-placed Band 8 word is better than several incorrectly used advanced terms.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can Band 8 vocabulary alone get me Band 8 in IELTS?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Band 8 requires excellent grammar accuracy, coherence, cohesion, and task achievement in addition to vocabulary. Advanced words must be combined with sophisticated sentence structures, logical organization, and fully developed ideas to achieve Band 8 overall.'
                }
              }
            ]
          }}
        />
      </div>
    </div>
  );
};

export default IELTSVocabularyBand8Page;
