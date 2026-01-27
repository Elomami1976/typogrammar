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
  { word: 'exacerbate', meaning: 'make worse', example: 'This may exacerbate inequality.', commonMistake: 'Informal use', upgradeTip: 'Task 2 only' },
  { word: 'meticulous', meaning: 'very careful', example: 'The study was meticulously conducted.', commonMistake: 'Speaking misuse', upgradeTip: 'Writing focus' },
  { word: 'pervasive', meaning: 'widespread', example: 'Technology is pervasive in society.', commonMistake: 'Wrong collocation', upgradeTip: 'Abstract nouns' },
  { word: 'unequivocal', meaning: 'completely clear', example: 'The evidence is unequivocal.', commonMistake: 'Overuse', upgradeTip: 'Use rarely' },
  { word: 'mitigate', meaning: 'reduce harm', example: 'Measures were taken to mitigate risks.', commonMistake: 'Missing object', upgradeTip: 'Specify risk' },
  { word: 'paramount', meaning: 'most important', example: 'Safety is of paramount importance.', commonMistake: 'Word order', upgradeTip: 'Fixed phrase' },
  { word: 'inherent', meaning: 'existing naturally', example: 'Risk is inherent in innovation.', commonMistake: 'Wrong noun', upgradeTip: 'Abstract only' },
  { word: 'empirical', meaning: 'based on observation', example: 'Empirical data supports this.', commonMistake: 'Informal misuse', upgradeTip: 'Academic only' },
  { word: 'conjecture', meaning: 'guess without proof', example: 'This remains conjecture.', commonMistake: 'Verb/noun confusion', upgradeTip: 'Mostly noun' },
  { word: 'discrepancy', meaning: 'lack of agreement', example: 'A discrepancy emerged in results.', commonMistake: 'Repetition', upgradeTip: 'Vary phrasing' },
  { word: 'autonomy', meaning: 'independence', example: 'Learners value autonomy.', commonMistake: 'Informal', upgradeTip: 'Formal writing' },
  { word: 'paradigm', meaning: 'model or pattern', example: 'This represents a paradigm shift.', commonMistake: 'Buzzword abuse', upgradeTip: 'Use carefully' },
  { word: 'salient', meaning: 'most noticeable', example: 'A salient feature is cost.', commonMistake: 'Rare misuse', upgradeTip: 'Highlight key point' },
  { word: 'nuanced', meaning: 'subtly different', example: 'A nuanced argument was presented.', commonMistake: 'Speaking misuse', upgradeTip: 'Writing focus' },
  { word: 'rectify', meaning: 'correct', example: 'Errors must be rectified.', commonMistake: 'Informal context', upgradeTip: 'Formal only' },
  { word: 'tangible', meaning: 'real and measurable', example: 'Tangible benefits were observed.', commonMistake: 'Abstract misuse', upgradeTip: 'Use precisely' },
  { word: 'reconcile', meaning: 'bring together', example: 'It is hard to reconcile these views.', commonMistake: 'Wrong object', upgradeTip: 'Two ideas' },
  { word: 'pervasive', meaning: 'existing everywhere', example: 'Surveillance is pervasive.', commonMistake: 'Repetition', upgradeTip: 'Avoid duplication' },
  { word: 'conjectural', meaning: 'based on guess', example: 'Conclusions remain conjectural.', commonMistake: 'Overcomplex', upgradeTip: 'Use sparingly' },
  { word: 'stratified', meaning: 'divided into levels', example: 'Society is stratified.', commonMistake: 'Wrong context', upgradeTip: 'Social topics' },
  { word: 'implicit', meaning: 'implied, not stated', example: 'Bias can be implicit.', commonMistake: 'Confusion', upgradeTip: 'vs explicit' },
  { word: 'corroborate', meaning: 'confirm', example: 'Data corroborates findings.', commonMistake: 'Verb agreement', upgradeTip: 'Check tense' },
  { word: 'epistemic', meaning: 'related to knowledge', example: 'Epistemic uncertainty exists.', commonMistake: 'Too technical', upgradeTip: 'Rare use' },
  { word: 'multifaceted', meaning: 'having many aspects', example: 'This is a multifaceted issue.', commonMistake: 'Overuse', upgradeTip: 'Use once per essay' },
  { word: 'transcend', meaning: 'go beyond', example: 'Technology transcends borders.', commonMistake: 'Informal misuse', upgradeTip: 'Abstract only' },
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
    question: 'Which sentence uses "exacerbate" correctly?',
    type: 'multiple-choice',
    options: [
      'This exacerbates good results',
      'This exacerbates the problem of inequality',
      'This exacerbates to inequality',
      'This is exacerbating good'
    ],
    correctAnswer: 1,
  },
  {
    question: 'Choose the correct phrase:',
    type: 'multiple-choice',
    options: ['paramount role', 'paramount importance', 'importance paramount', 'most paramount'],
    correctAnswer: 1,
  },
  {
    question: 'Which word best replaces "very careful"?',
    type: 'multiple-choice',
    options: ['attentive', 'precise', 'meticulous', 'cautious'],
    correctAnswer: 2,
  },
];

const IELTSVocabularyBand9Page: React.FC = () => {
  usePageMetadata({
    title: 'IELTS Vocabulary Band 9: High-Level Words, Examples & Examiner-Style Quiz | TypoGrammar',
    description: 'Learn 25 sophisticated IELTS Band 9 vocabulary words with precise meanings, academic examples, common errors, and a quiz for top scorers.',
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
              BAND 9
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              IELTS Vocabulary – Band 9
            </h1>
          </div>
          
          <ArticleParagraph>
            IELTS Band 9 vocabulary is not about complexity, but about <strong>control, nuance, and appropriateness</strong>.
            This page presents 25 high-level words used selectively and accurately in top-scoring Writing Task 2 essays and confident Speaking answers.
          </ArticleParagraph>
          
          <ArticleParagraph>
            These words should be used <strong>carefully and sparingly</strong>.
          </ArticleParagraph>
        </div>

        {/* Table Context */}
        <div className="bg-emerald-50 dark:bg-slate-700 border-l-4 border-emerald-500 p-6 rounded-lg mb-8">
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3">
            📊 <strong>This list focuses on:</strong>
          </p>
          <ul className="list-disc list-inside text-slate-700 dark:text-slate-200 space-y-1 ml-4">
            <li>Abstract ideas</li>
            <li>Academic arguments</li>
            <li>Formal tone and nuance</li>
          </ul>
        </div>

        {/* Vocabulary Table */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
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
                    className="border-b border-slate-200 dark:border-slate-700 hover:bg-emerald-50 dark:hover:bg-slate-700 transition-colors"
                  >
                    <td className="px-6 py-4 font-bold text-emerald-600 dark:text-emerald-400">
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
          <ArticleHeading>IELTS Band 9 Vocabulary Quiz (Examiner Level)</ArticleHeading>
          
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
                            ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                            : 'border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600'
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
                          className="w-5 h-5 text-emerald-500"
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
                      className="w-full px-4 py-3 border-2 border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none disabled:bg-slate-100 dark:disabled:bg-slate-800"
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
              className="mt-8 w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl"
            >
              Submit Quiz
            </button>
          ) : (
            <div className="mt-8">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-slate-700 dark:to-slate-600 p-6 rounded-xl mb-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Your Score: {score} / {quizQuestions.length}
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  {score === quizQuestions.length
                    ? '🏆 Outstanding! You have achieved Band 9 vocabulary mastery!'
                    : score >= 2
                    ? '💎 Excellent! You are approaching Band 9 excellence.'
                    : '📖 Keep studying! Review the words above and practice again.'}
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

          <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-lg">
            <p className="text-slate-700 dark:text-slate-300">
              💡 <strong>Band 9 Tip:</strong> Use these words sparingly. Quality over quantity. One well-placed advanced word is better than several forced ones.
            </p>
          </div>
        </div>

        {/* Navigation to Previous Band */}
        <div className="mt-8 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl shadow-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-3">Master the Foundation First</h3>
          <p className="text-orange-100 mb-6">
            Before using Band 9 vocabulary, ensure you've mastered <strong>Band 8 precision and control</strong>. Building a strong foundation is essential for natural, sophisticated language use.
          </p>
          <Link
            to="/ielts/vocabulary/band-8"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl"
          >
            ← Review Band 8 Vocabulary
          </Link>
        </div>

        {/* Complete Your Journey */}
        <div className="mt-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">🏆 Complete Your IELTS Vocabulary Journey</h3>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-6">Review all band levels to ensure comprehensive mastery</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/ielts/vocabulary/band-6" className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg text-center font-bold transition-colors">
              Band 6
            </Link>
            <Link to="/ielts/vocabulary/band-7" className="bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-lg text-center font-bold transition-colors">
              Band 7
            </Link>
            <Link to="/ielts/vocabulary/band-8" className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-lg text-center font-bold transition-colors">
              Band 8
            </Link>
            <div className="bg-emerald-500 text-white p-4 rounded-lg text-center font-bold opacity-50 cursor-default">
              Band 9 ✓
            </div>
          </div>
        </div>

        {/* Internal Links Section */}
        <div className="mt-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Expert-Level IELTS Preparation</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/ielts/mixed-essay-types-ielts" className="p-4 border-2 border-emerald-200 dark:border-emerald-800 rounded-lg hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors">
              <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2">Mixed Essay Types</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Handle complex IELTS essay questions</p>
            </Link>
            <Link to="/ielts/two-part-question-essay-ielts" className="p-4 border-2 border-teal-200 dark:border-teal-800 rounded-lg hover:border-teal-400 dark:hover:border-teal-600 transition-colors">
              <h4 className="font-bold text-teal-600 dark:text-teal-400 mb-2">Two-Part Question Essays</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Address multiple prompts effectively</p>
            </Link>
            <Link to="/writing/how-to-vary-sentence-structure" className="p-4 border-2 border-indigo-200 dark:border-indigo-800 rounded-lg hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors">
              <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Varying Sentence Structure</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Create sophisticated, varied sentences</p>
            </Link>
            <Link to="/essay-types" className="p-4 border-2 border-slate-200 dark:border-slate-700 rounded-lg hover:border-slate-400 dark:hover:border-slate-600 transition-colors">
              <h4 className="font-bold text-slate-600 dark:text-slate-400 mb-2">Complete Essay Types Guide</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Master all academic essay formats</p>
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
                name: 'What is Band 9 vocabulary in IELTS?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Band 9 vocabulary demonstrates sophisticated control, nuance, and appropriateness. Words like "exacerbate", "mitigate", "paradigm", and "nuanced" are used sparingly and precisely in formal academic contexts. Band 9 is about quality and natural usage, not complexity.'
                }
              },
              {
                '@type': 'Question',
                name: 'How many Band 9 words should I use in my essay?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use only 2-3 Band 9 words per IELTS essay. These sophisticated terms should feel natural and appropriate in context. Overusing them sounds forced and unnatural. Focus on precision—one perfectly placed Band 9 word demonstrates true mastery.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do I need Band 9 vocabulary to get Band 9 in IELTS?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Not necessarily. Band 9 requires flawless grammar, perfect coherence, full task achievement, and natural language use. You can achieve Band 9 with mostly Band 7-8 vocabulary used perfectly. Band 9 words are bonus points when used appropriately, not requirements.'
                }
              }
            ]
          }}
        />
      </div>
    </div>
  );
};

export default IELTSVocabularyBand9Page;
