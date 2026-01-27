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
  usePageMetadata({
    title: 'IELTS Vocabulary Band 7: Academic Words, Examples & Practice Quiz | TypoGrammar',
    description: 'Master IELTS Band 7 vocabulary with 25 academic words, clear meanings, example sentences, common mistakes, and a short quiz to boost your score.',
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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
              BAND 7
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              IELTS Vocabulary – Band 7
            </h1>
          </div>
          
          <ArticleParagraph>
            This page features <strong>25 IELTS Band 7 vocabulary words</strong> commonly used in Task 2 essays and formal speaking answers.
            Band 7 vocabulary shows range, accuracy, and awareness of academic tone, without sounding unnatural or forced.
          </ArticleParagraph>
          
          <ArticleParagraph>
            All examples are written in natural <strong>IELTS style</strong>, suitable for international test-takers.
          </ArticleParagraph>
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
                  text: 'Band 7 vocabulary demonstrates greater range, precision, and awareness of academic tone. While Band 6 words are essential, Band 7 words like "contribute", "impact", and "outcome" show sophistication without sounding forced or unnatural in IELTS essays.'
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
                  text: 'Practice using Band 7 words in context, not isolation. Focus on common collocations like "significant impact", "contribute to", and "raise awareness". Read sample Band 7-9 essays to see how these words fit naturally into academic writing.'
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
