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
  const pageUrl = 'https://typogrammar.com/ielts/vocabulary/band-9';
  const lastUpdated = '2026-02-25';
  const datePublished = '2025-06-15';
  
  usePageMetadata({
    title: 'IELTS Band 9 Vocabulary List 2026: 25 Sophisticated Academic Words for Top Scores | Typogrammar',
    description: 'Free IELTS Band 9 vocabulary list with sophisticated academic words, precise meanings, and expert usage tips. Achieve 9.0 in Lexical Resource with nuanced, examiner-level vocabulary.',
    ogTitle: 'IELTS Band 9 Vocabulary List 2026: Sophisticated Words for Top Scores',
    ogDescription: 'Master 25 Band 9 IELTS words showing complete control, nuance, and appropriateness. Learn sophisticated vocabulary used sparingly and precisely for maximum impact.',
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 py-12 px-4">
      {/* GEO Meta Tags */}
      <meta name="geo.region" content="Global" />
      <meta name="language" content="English" />
      
      {/* Article Schema */}
      <SchemaMarkup
        type="Article"
        data={{
          headline: 'IELTS Band 9 Vocabulary List 2026: 25 Sophisticated Academic Words for Top Scores',
          description: 'Free IELTS Band 9 vocabulary list with sophisticated academic words, precise meanings, and expert usage tips. Achieve 9.0 in Lexical Resource with nuanced, examiner-level vocabulary.',
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
        <div className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-slate-700 dark:to-slate-600 border-l-4 border-emerald-600 p-6 rounded-lg mb-8 shadow-md">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What is IELTS Band 9 Vocabulary?</h2>
          <p className="text-slate-800 dark:text-slate-200 leading-relaxed mb-4">
            <strong>Band 9 vocabulary</strong> demonstrates complete control, sophisticated nuance, and perfect appropriateness in formal academic contexts. These words are used sparingly and precisely-quality over quantity-showing examiner-level mastery.
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Quick Answer: What does Band 9 Lexical Resource require?</h3>
            <p className="text-slate-700 dark:text-slate-300">Band 9 requires "full flexibility" and "precision" with "very natural and sophisticated control." You need virtually <strong>no errors</strong> in vocabulary use, with every word choice feeling natural and appropriate to context.</p>
          </div>
        </div>

        {/* Long-tail Keyword Section: Band 9 Truth */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Truth About Band 9 Vocabulary</h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-3 p-4 bg-emerald-50 dark:bg-slate-700 rounded-lg">
              <span className="text-emerald-500 text-xl">🎯</span>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">Band 9 is NOT about using complex words</h3>
                <p>It's about using <strong>exactly the right word</strong> in every context. A simple word used perfectly scores higher than a complex word used awkwardly.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-emerald-50 dark:bg-slate-700 rounded-lg">
              <span className="text-emerald-500 text-xl">🔮</span>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">Less is more at Band 9</h3>
                <p>Use 2-3 sophisticated words per essay, not 10. Band 9 candidates know when <strong>not</strong> to use advanced vocabulary.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-emerald-50 dark:bg-slate-700 rounded-lg">
              <span className="text-emerald-500 text-xl">📚</span>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">Native-speaker intuition</h3>
                <p>Band 9 vocabulary sounds like it was written by an educated native speaker-natural, flowing, and without any vocabulary "showing off."</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Header */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
              BAND 9
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              IELTS Vocabulary Band 9 List (2026)
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
            IELTS Band 9 vocabulary is not about complexity, but about <strong>control, nuance, and appropriateness</strong>.
            This page presents 25 high-level words used selectively and accurately in top-scoring Writing Task 2 essays and confident Speaking answers.
          </ArticleParagraph>
          
          <ArticleParagraph>
            These words should be used <strong>carefully and sparingly</strong>.
          </ArticleParagraph>
          
          {/* GEO Optimization - International Traffic */}
          <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              This IELTS vocabulary guide is designed for international test-takers preparing for IELTS exams in the UK, Canada, Australia, UAE, India, and other countries. We use neutral global English suitable for all IELTS regions.
            </p>
          </div>
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

          <div className="mt-6 p-4 bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 rounded-lg">
            <p className="text-slate-700 dark:text-slate-300">
              💡 <strong>Band 9 Tip:</strong> Use these words sparingly. Quality over quantity. One well-placed advanced word is better than several forced ones.
            </p>
          </div>
        </div>

        {/* Navigation to Previous Band */}
        <div className="mt-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl shadow-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-3">Master the Foundation First</h3>
          <p className="text-teal-100 mb-6">
            Before using Band 9 vocabulary, ensure you've mastered <strong>Band 8 precision and control</strong>. Building a strong foundation is essential for natural, sophisticated language use.
          </p>
          <Link
            to="/ielts/vocabulary/band-8/"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl"
          >
            ← Review Band 8 Vocabulary
          </Link>
        </div>

        {/* Complete Your Journey */}
        <div className="mt-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">🏆 Complete Your IELTS Vocabulary Journey</h3>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-6">Review all band levels to ensure comprehensive mastery</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/ielts/vocabulary/band-6/" className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg text-center font-bold transition-colors">
              Band 6
            </Link>
            <Link to="/ielts/vocabulary/band-7/" className="bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-lg text-center font-bold transition-colors">
              Band 7
            </Link>
            <Link to="/ielts/vocabulary/band-8/" className="bg-teal-500 hover:bg-teal-600 text-white p-4 rounded-lg text-center font-bold transition-colors">
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
            <Link to="/ielts/mixed-essay-types-ielts/" className="p-4 border-2 border-emerald-200 dark:border-emerald-800 rounded-lg hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors">
              <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2">Mixed Essay Types</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Handle complex IELTS essay questions</p>
            </Link>
            <Link to="/ielts/two-part-question-essay-ielts/" className="p-4 border-2 border-teal-200 dark:border-teal-800 rounded-lg hover:border-teal-400 dark:hover:border-teal-600 transition-colors">
              <h4 className="font-bold text-teal-600 dark:text-teal-400 mb-2">Two-Part Question Essays</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Address multiple prompts effectively</p>
            </Link>
            <Link to="/writing/how-to-vary-sentence-structure/" className="p-4 border-2 border-indigo-200 dark:border-indigo-800 rounded-lg hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors">
              <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Varying Sentence Structure</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Create sophisticated, varied sentences</p>
            </Link>
            <Link to="/essay-types/" className="p-4 border-2 border-slate-200 dark:border-slate-700 rounded-lg hover:border-slate-400 dark:hover:border-slate-600 transition-colors">
              <h4 className="font-bold text-slate-600 dark:text-slate-400 mb-2">Complete Essay Types Guide</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Master all academic essay formats</p>
            </Link>
          </div>
        </div>

        {/* Visible FAQ Section */}
        <div className="mt-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Frequently Asked Questions: IELTS Band 9 Vocabulary
          </h2>
          
          <div className="space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-700 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">What is Band 9 vocabulary in IELTS?</h3>
              <p className="text-slate-700 dark:text-slate-300">Band 9 vocabulary demonstrates sophisticated control, nuance, and appropriateness. Words like "exacerbate," "mitigate," "paradigm," and "nuanced" are used sparingly and precisely in formal academic contexts. Band 9 is about quality and natural usage, not complexity.</p>
            </div>
            
            <div className="border-b border-slate-200 dark:border-slate-700 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">How many Band 9 words should I use in my IELTS essay?</h3>
              <p className="text-slate-700 dark:text-slate-300">Use only 2-3 Band 9 words per IELTS essay. These sophisticated terms should feel natural and appropriate in context. Overusing them sounds forced and unnatural. Focus on precision-one perfectly placed Band 9 word demonstrates true mastery.</p>
            </div>
            
            <div className="border-b border-slate-200 dark:border-slate-700 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Do I need Band 9 vocabulary to get Band 9 in IELTS?</h3>
              <p className="text-slate-700 dark:text-slate-300">Not necessarily. Band 9 requires flawless grammar, perfect coherence, full task achievement, and natural language use. You can achieve Band 9 with mostly Band 7-8 vocabulary used perfectly. Band 9 words are bonus points when used appropriately, not requirements.</p>
            </div>
            
            <div className="border-b border-slate-200 dark:border-slate-700 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">What is the difference between Band 8 and Band 9 vocabulary?</h3>
              <p className="text-slate-700 dark:text-slate-300">Band 8 shows "wide range" with "rare errors," while Band 9 shows "full flexibility" with "no noticeable errors." Band 9 vocabulary feels completely natural-as if written by an educated native speaker. The difference is subtle but involves perfect register awareness and absolute precision.</p>
            </div>
            
            <div className="border-b border-slate-200 dark:border-slate-700 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">How can I learn Band 9 vocabulary naturally?</h3>
              <p className="text-slate-700 dark:text-slate-300">Read extensively-academic journals, quality newspapers (The Economist, Guardian), and published essays. Note how sophisticated vocabulary is used sparingly. Practice writing and get native speaker feedback. Focus on learning when NOT to use advanced words as much as when to use them.</p>
            </div>
            
            <div className="pb-2">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Is Band 9 vocabulary achievable for non-native speakers?</h3>
              <p className="text-slate-700 dark:text-slate-300">Absolutely! Many non-native speakers achieve Band 9 through extensive reading, practice, and feedback. The key is developing an intuitive sense for natural vocabulary use-this comes from exposure to quality English, not memorizing word lists.</p>
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
                name: 'What is Band 9 vocabulary in IELTS?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Band 9 vocabulary demonstrates sophisticated control, nuance, and appropriateness. Words like exacerbate, mitigate, paradigm, and nuanced are used sparingly and precisely in formal academic contexts. Band 9 is about quality and natural usage, not complexity.'
                }
              },
              {
                '@type': 'Question',
                name: 'How many Band 9 words should I use in my essay?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use only 2-3 Band 9 words per IELTS essay. These sophisticated terms should feel natural and appropriate in context. Overusing them sounds forced and unnatural. Focus on precision-one perfectly placed Band 9 word demonstrates true mastery.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do I need Band 9 vocabulary to get Band 9 in IELTS?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Not necessarily. Band 9 requires flawless grammar, perfect coherence, full task achievement, and natural language use. You can achieve Band 9 with mostly Band 7-8 vocabulary used perfectly. Band 9 words are bonus points when used appropriately, not requirements.'
                }
              },
              {
                '@type': 'Question',
                name: 'What is the difference between Band 8 and Band 9 vocabulary?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Band 8 shows wide range with rare errors, while Band 9 shows full flexibility with no noticeable errors. Band 9 vocabulary feels completely natural-as if written by an educated native speaker. The difference is subtle but involves perfect register awareness and absolute precision.'
                }
              },
              {
                '@type': 'Question',
                name: 'How can I learn Band 9 vocabulary naturally?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Read extensively-academic journals, quality newspapers (The Economist, Guardian), and published essays. Note how sophisticated vocabulary is used sparingly. Practice writing and get native speaker feedback. Focus on learning when NOT to use advanced words as much as when to use them.'
                }
              },
              {
                '@type': 'Question',
                name: 'Is Band 9 vocabulary achievable for non-native speakers?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely! Many non-native speakers achieve Band 9 through extensive reading, practice, and feedback. The key is developing an intuitive sense for natural vocabulary use-this comes from exposure to quality English, not memorizing word lists.'
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
