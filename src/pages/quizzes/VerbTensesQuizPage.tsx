import React, { useState, useEffect } from 'react';
import usePageMetadata from '../../hooks/usePageMetadata';
import { useLanguage } from '../../contexts/LanguageContext';
import GoogleAd from '../../components/GoogleAd';
import ShareButtons from '../../components/ShareButtons';
import quizData from '../../quiz-data/verb-tenses-quiz-50.json';
import QuizResultsBreakdown from '../../components/QuizResultsBreakdown';
import RelatedContent from '../../components/RelatedContent';

// Map quiz tense labels → recommended grammar topic page
const TENSE_TOPIC_MAP: Record<string, { to: string; label: string }> = {
  'Present Simple': { to: '/topics/present-simple/', label: 'Present Simple Tense' },
  'Present Continuous': { to: '/topics/present-progressive/', label: 'Present Progressive' },
  'Past Simple': { to: '/topics/past-simple/', label: 'Past Simple Tense' },
  'Past Continuous': { to: '/topics/past-progressive/', label: 'Past Progressive' },
  'Past Continuous vs Past Simple': { to: '/topics/past-progressive/', label: 'Past Progressive' },
  'Present Perfect': { to: '/topics/present-perfect/', label: 'Present Perfect Tense' },
  'Present Perfect vs Past Simple': { to: '/topics/present-perfect/', label: 'Present Perfect Tense' },
  'Present Perfect Continuous': { to: '/topics/present-perfect-progressive/', label: 'Present Perfect Progressive' },
  'Present Perfect Continuous vs Present Perfect': { to: '/topics/present-perfect-progressive/', label: 'Present Perfect Progressive' },
  'Past Perfect': { to: '/topics/past-perfect/', label: 'Past Perfect Tense' },
  'Past Perfect Continuous': { to: '/topics/past-perfect-progressive/', label: 'Past Perfect Progressive' },
  'Future (will)': { to: '/topics/future-simple/', label: 'Future Simple Tense' },
  'Future (going to)': { to: '/topics/future-simple/', label: 'Future Simple Tense' },
  'Future (Present Continuous)': { to: '/topics/present-progressive/', label: 'Present Progressive' },
  'Future Continuous': { to: '/topics/future-progressive/', label: 'Future Progressive' },
  'Future Perfect': { to: '/topics/future-perfect/', label: 'Future Perfect Tense' },
  'Mixed Conditionals': { to: '/grammar-guide/', label: 'Conditionals (Grammar Guide)' },
};

interface QuizQuestion {
  id: number;
  tense: string;
  difficulty: string;
  sentence: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correct: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

interface QuizData {
  slug: string;
  title: string;
  description: string;
  levelBreakdown: {
    easy: number;
    medium: number;
    hard: number;
  };
  questions: QuizQuestion[];
}

const VerbTensesQuizPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [checkedQuestions, setCheckedQuestions] = useState<{ [key: number]: boolean }>({});
  const [showAllAnswers, setShowAllAnswers] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [filterWrongOnly, setFilterWrongOnly] = useState(false);

  const data = quizData as QuizData;

  usePageMetadata({
    title: 'Free Verb Tenses Quiz 2026: 50 Questions with Answers & Explanations | TypoGrammar',
    description: 'Free English verb tenses quiz with 50 multiple-choice questions, instant scoring, and detailed explanations. Practice all 12 tenses for IELTS, TOEFL, Cambridge exams & ESL learners.',
    ogTitle: 'Free Verb Tenses Quiz: 50 Questions with Answers for IELTS & ESL',
    ogDescription: 'Test your English verb tenses with this free 50-question quiz. Includes answers and explanations covering all 12 tenses from present simple to future perfect.',
    ogType: 'website',
    ogUrl: 'https://typogrammar.com/quizzes/verb-tenses-quiz',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Free Verb Tenses Quiz: 50 Questions with Answers for IELTS & ESL',
    twitterDescription: 'Test your English verb tenses with this free 50-question quiz. Includes answers and explanations covering all 12 tenses from present simple to future perfect.'
  });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAnswerSelect = (questionId: number, option: string) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: option });
  };

  const handleCheckAnswer = (questionId: number) => {
    setCheckedQuestions({ ...checkedQuestions, [questionId]: true });
  };

  const handleShowAllAnswers = () => {
    const allChecked: { [key: number]: boolean } = {};
    data.questions.forEach(q => {
      allChecked[q.id] = true;
    });
    setCheckedQuestions(allChecked);
    setShowAllAnswers(true);
  };

  const calculateScore = () => {
    let correct = 0;
    data.questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correct) {
        correct++;
      }
    });
    setScore(correct);
    setShowResults(true);
    
    // Scroll to results
    setTimeout(() => {
      document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const getScoreMessage = (score: number, total: number): string => {
    const percentage = (score / total) * 100;
    if (percentage <= 40) {
      return "Keep practicing! You're building a foundation. Review the tenses and try again.";
    } else if (percentage <= 70) {
      return "Good progress! You're improving your verb tense knowledge. Focus on the areas you missed.";
    } else if (percentage <= 90) {
      return "Strong performance! You have a solid understanding of English verb tenses.";
    } else {
      return "Excellent work! You have mastered verb tenses. Your grammar skills are outstanding!";
    }
  };

  const scrollToQuiz = () => {
    document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Generate JSON-LD Schema
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://typogrammar.com/quizzes/verb-tenses-quiz",
        "url": "https://typogrammar.com/quizzes/verb-tenses-quiz",
        "name": data.title,
        "description": data.description,
        "isPartOf": {
          "@type": "WebSite",
          "name": "TypoGrammar",
          "url": "https://typogrammar.com"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://typogrammar.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Quizzes",
              "item": "https://typogrammar.com/quizzes"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Verb Tenses Quiz",
              "item": "https://typogrammar.com/quizzes/verb-tenses-quiz"
            }
          ]
        }
      },
      {
        "@type": "Quiz",
        "name": "Free Verb Tenses Quiz: 50 Questions with Answers & Explanations",
        "description": "Test your English verb tenses with 50 multiple-choice questions covering all 12 tenses. Includes answers and detailed explanations for IELTS, TOEFL, and ESL learners.",
        "url": "https://typogrammar.com/quizzes/verb-tenses-quiz/",
        "educationalLevel": "intermediate",
        "numberOfQuestions": 50,
        "timeRequired": "PT30M",
        "inLanguage": "en",
        "isAccessibleForFree": true,
        "provider": {
          "@type": "Organization",
          "name": "TypoGrammar",
          "url": "https://typogrammar.com"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What verb tenses are covered in this quiz?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "This quiz covers all major English verb tenses including Present Simple, Present Continuous, Past Simple, Past Continuous, Present Perfect, Present Perfect Continuous, Past Perfect, Future (will, going to), and Future Continuous. It includes 50 questions with varying difficulty levels suitable for IELTS, TOEFL, and ESL learners."
            }
          },
          {
            "@type": "Question",
            "name": "Is this verb tenses quiz free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, this verb tenses quiz is completely free. It includes 50 multiple-choice questions with detailed explanations for each answer. You can take it as many times as you want without any registration or payment required."
            }
          },
          {
            "@type": "Question",
            "name": "How can I improve my verb tense accuracy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To improve verb tense accuracy: 1) Study the rules and time markers for each tense, 2) Practice regularly with exercises and quizzes, 3) Read English texts and notice how tenses are used in context, 4) Write sentences using different tenses, and 5) Review your mistakes and understand why the correct answer is right."
            }
          },
          {
            "@type": "Question",
            "name": "What level is this verb tenses quiz suitable for?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "This quiz is designed for intermediate to advanced English learners. It includes easy (20 questions), medium (20 questions), and hard (10 questions) levels. It's particularly useful for students preparing for IELTS, TOEFL, or other standardized English tests, as well as ESL learners wanting to master verb tenses."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* SEO Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Featured Snippet Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-8 text-left">
            <h2 className="text-lg font-bold mb-2">What is this verb tenses quiz?</h2>
            <p className="text-blue-100 mb-3">
              A <strong className="text-white">free 50-question multiple-choice quiz</strong> testing all 12 English verb tenses from present simple to future perfect continuous. Each question includes detailed explanations to help you learn from mistakes.
            </p>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-sm"><strong>Quick Stats:</strong> 20 easy + 20 medium + 10 hard questions • Instant scoring • Suitable for IELTS Band 5-7+ / TOEFL / Cambridge B1-C1</p>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Verb Tenses Quiz: 50 Questions (Free)
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100">
            Master English verb tenses with this comprehensive quiz designed for IELTS, TOEFL, and ESL learners.
          </p>
          <p className="text-lg mb-8 text-blue-100">
            Test your knowledge with 50 carefully crafted questions covering all major tenses, from beginner to advanced level. Each question includes detailed explanations to help you learn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToQuiz}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Quiz Now
            </button>
            <div className="text-blue-100 text-sm">
              <span className="block font-semibold">📊 {data.questions.length} Questions</span>
              <span className="block">Easy: {data.levelBreakdown.easy} | Medium: {data.levelBreakdown.medium} | Hard: {data.levelBreakdown.hard}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz-section" className="max-w-4xl mx-auto py-12 px-4">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-slate-700 dark:text-slate-300">
            <span className="text-lg font-semibold">Progress: </span>
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {Object.keys(checkedQuestions).length} / {data.questions.length}
            </span>
            <span className="text-sm ml-2">questions checked</span>
          </div>
          <button
            onClick={handleShowAllAnswers}
            className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-6 py-2 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors font-semibold"
          >
            {showAllAnswers ? '✓ All Answers Shown' : 'Show All Answers'}
          </button>
        </div>

        {/* Google Ad */}
        <div className="my-8">
          <GoogleAd adSlot="6406598038" />
        </div>

        {/* Wrong-answer filter banner (shown after results) */}
        {showResults && (
          <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 dark:bg-amber-900/20 dark:border-amber-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-sm text-amber-900 dark:text-amber-200">
              <strong>Targeted review mode.</strong>{' '}
              {filterWrongOnly
                ? 'Showing only questions you got wrong. Study these to improve fastest.'
                : 'Hide correct answers and focus only on the questions you missed.'}
            </p>
            <button
              type="button"
              onClick={() => setFilterWrongOnly((v) => !v)}
              className="flex-shrink-0 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              {filterWrongOnly ? 'Show all questions' : 'Show wrong only'}
            </button>
          </div>
        )}

        {/* Questions */}
        <div className="space-y-8">
          {data.questions.map((question, index) => {
            const isChecked = checkedQuestions[question.id];
            const selectedAnswer = selectedAnswers[question.id];
            const isCorrect = selectedAnswer === question.correct;
            // When in "wrong only" mode after results, hide correct/unanswered questions
            if (showResults && filterWrongOnly && (isCorrect || !selectedAnswer)) {
              return null;
            }

            return (
              <div
                key={question.id}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all"
              >
                {/* Question Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
                        Question {index + 1}
                      </span>
                      <span className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full">
                        {question.tense}
                      </span>
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-medium ${
                          question.difficulty === 'easy'
                            ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                            : question.difficulty === 'medium'
                            ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                            : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                        }`}
                      >
                        {question.difficulty}
                      </span>
                    </div>
                    <p className="text-lg font-medium text-slate-800 dark:text-slate-100">
                      {question.sentence}
                    </p>
                  </div>
                </div>

                {/* Options */}
                <fieldset className="space-y-3 mb-4">
                  <legend className="sr-only">Answer options for question {index + 1}</legend>
                  {Object.entries(question.options).map(([key, value]) => {
                    const optionKey = key as 'A' | 'B' | 'C' | 'D';
                    const isSelected = selectedAnswer === optionKey;
                    const isCorrectOption = optionKey === question.correct;
                    
                    let optionClass = 'bg-slate-50 dark:bg-slate-700 border-slate-300 dark:border-slate-600';
                    
                    if (isChecked) {
                      if (isCorrectOption) {
                        optionClass = 'bg-green-100 dark:bg-green-900 border-green-500 dark:border-green-600';
                      } else if (isSelected && !isCorrect) {
                        optionClass = 'bg-red-100 dark:bg-red-900 border-red-500 dark:border-red-600';
                      }
                    } else if (isSelected) {
                      optionClass = 'bg-blue-100 dark:bg-blue-900 border-blue-500 dark:border-blue-600';
                    }

                    return (
                      <label
                        key={optionKey}
                        className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${optionClass} ${
                          isChecked ? 'cursor-default' : 'hover:border-blue-400 dark:hover:border-blue-500'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={optionKey}
                          checked={isSelected}
                          onChange={() => !isChecked && handleAnswerSelect(question.id, optionKey)}
                          disabled={isChecked}
                          className="w-5 h-5 text-blue-600 mr-3"
                        />
                        <span className="font-semibold text-slate-700 dark:text-slate-300 mr-2">
                          {optionKey}.
                        </span>
                        <span className="text-slate-800 dark:text-slate-100">{value}</span>
                        {isChecked && isCorrectOption && (
                          <span className="ml-auto text-green-600 dark:text-green-400 font-bold">✓</span>
                        )}
                        {isChecked && isSelected && !isCorrect && (
                          <span className="ml-auto text-red-600 dark:text-red-400 font-bold">✗</span>
                        )}
                      </label>
                    );
                  })}
                </fieldset>

                {/* Check Button */}
                {!isChecked && (
                  <button
                    onClick={() => handleCheckAnswer(question.id)}
                    disabled={!selectedAnswer}
                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                      selectedAnswer
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-slate-300 dark:bg-slate-600 text-slate-500 dark:text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    Check Answer
                  </button>
                )}

                {/* Explanation */}
                {isChecked && (
                  <div
                    className={`mt-4 p-4 rounded-lg ${
                      isCorrect
                        ? 'bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800'
                        : 'bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800'
                    }`}
                  >
                    <p className={`font-semibold mb-2 ${isCorrect ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'}`}>
                      {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300">
                      <strong>Correct Answer: {question.correct}</strong>
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 mt-2">
                      <strong>Explanation:</strong> {question.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Calculate Score Button */}
        <div className="mt-12 text-center">
          <button
            onClick={calculateScore}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-4 rounded-lg font-bold text-xl transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Calculate My Score
          </button>
        </div>

        {/* Google Ad */}
        <div className="my-8">
          <GoogleAd adSlot="6406598038" />
        </div>
      </section>

      {/* Results Section */}
      {showResults && (
        <section id="results-section" className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">Your Results</h2>
            <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-2xl p-8 shadow-2xl text-center mb-6">
              <div className="text-6xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                {score} / {data.questions.length}
              </div>
              <div className="text-2xl font-semibold mb-4">
                {Math.round((score / data.questions.length) * 100)}% Correct
              </div>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                {getScoreMessage(score, data.questions.length)}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    setSelectedAnswers({});
                    setCheckedQuestions({});
                    setShowAllAnswers(false);
                    setShowResults(false);
                    setFilterWrongOnly(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Retake Quiz
                </button>
                <ShareButtons
                  url="https://typogrammar.com/quizzes/verb-tenses-quiz"
                  title={`I scored ${score}/${data.questions.length} on the TypoGrammar Verb Tenses Quiz!`}
                />
              </div>
            </div>

            {/* Per-tense weak-area breakdown */}
            <QuizResultsBreakdown
              answers={data.questions.map((q) => ({
                questionId: q.id,
                tense: q.tense,
                difficulty: q.difficulty,
                correct: selectedAnswers[q.id] === q.correct,
              }))}
              topicMap={TENSE_TOPIC_MAP}
              hasWrong={score < data.questions.length}
              onReviewWrong={() => {
                setFilterWrongOnly(true);
                setTimeout(() => {
                  document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
            />
          </div>
        </section>
      )}

      {/* Continue Learning rail — shown always to maximize engagement */}
      <div className="max-w-4xl mx-auto px-4">
        <RelatedContent
          title="Continue Learning"
          description="Recommended next steps to lock in everything you just practiced."
          items={[
            {
              to: '/grammar/verb-tenses/',
              title: 'Verb Tenses Hub: All 12 Tenses Explained',
              subtitle: 'Master each tense with examples, timelines, and rules.',
              badge: 'Lesson',
              meta: '15 min',
            },
            {
              to: '/topics/present-perfect/',
              title: 'Present Perfect Tense',
              subtitle: 'The #1 tense ESL learners struggle with — clear up the confusion.',
              badge: 'Lesson',
              meta: '8 min',
            },
            {
              to: '/ielts/english-grammar-pdf/',
              title: 'Free English Grammar PDF',
              subtitle: 'Download the complete workbook with exercises.',
              badge: 'PDF',
              meta: 'Free',
            },
            {
              to: '/grammar-checker/',
              title: 'Free Grammar Checker',
              subtitle: 'Paste any sentence and get instant corrections.',
              badge: 'Tool',
              meta: 'No signup',
            },
            {
              to: '/blog/common-grammar-mistakes-in-english/',
              title: '50 Common Grammar Mistakes',
              subtitle: 'See the errors 94% of learners make — and how to fix them.',
              badge: 'Article',
              meta: '12 min read',
            },
            {
              to: '/quizzes/verb-tenses-quiz/',
              title: 'Retake This Quiz',
              subtitle: 'Try again to beat your score.',
              badge: 'Quiz',
              meta: '50 questions',
            },
          ]}
        />
      </div>

      {/* Educational Content Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            What This Verb Tense Quiz Covers
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
            This comprehensive quiz tests your understanding of all major English verb tenses. Master these tenses to improve your <a href="/ielts/" className="text-blue-600 dark:text-blue-400 hover:underline">IELTS</a> and <a href="/toefl/" className="text-blue-600 dark:text-blue-400 hover:underline">TOEFL</a> scores.
          </p>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300 mb-8">
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
              <span><strong>Present Simple</strong> - For habits, facts, and routines</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
              <span><strong>Present Continuous</strong> - For actions happening now or temporary situations</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
              <span><strong>Past Simple</strong> - For completed actions in the past</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
              <span><strong>Past Continuous</strong> - For actions in progress in the past</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
              <span><strong>Present Perfect</strong> - For past actions with present relevance</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
              <span><strong>Present Perfect Continuous</strong> - For ongoing actions with duration</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
              <span><strong>Past Perfect</strong> - For actions before other past actions</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
              <span><strong>Future Tenses</strong> - Will, going to, and present continuous for plans</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
              <span><strong>Advanced Tenses</strong> - Future perfect, past perfect continuous, and mixed conditionals</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 mt-12">
            How to Improve Your Verb Tenses
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4">
              <h3 className="font-bold text-xl mb-2">1. Learn Time Markers</h3>
              <p>
                Each tense has specific time markers: "yesterday" (past simple), "since" (present perfect), "right now" (present continuous). Recognizing these helps you choose the correct tense.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4">
              <h3 className="font-bold text-xl mb-2">2. Practice Daily</h3>
              <p>
                Write sentences using different tenses every day. Keep a journal in English and focus on using a variety of tenses naturally.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4">
              <h3 className="font-bold text-xl mb-2">3. Read Authentic English Texts</h3>
              <p>
                Read news articles, novels, and blogs to see how native speakers use tenses in context. Pay attention to how different tenses create meaning.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4">
              <h3 className="font-bold text-xl mb-2">4. Review Your Mistakes</h3>
              <p>
                When you make an error, write down the correct form and explanation. Create flashcards for tenses you find difficult.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4">
              <h3 className="font-bold text-xl mb-2">5. Use Online Resources</h3>
              <p>
                Visit <a href="/what-is-typogrammar/" className="text-blue-600 dark:text-blue-400 hover:underline">TypoGrammar</a> regularly for grammar lessons, quizzes, and exercises to strengthen your understanding of English verb tenses.
              </p>
            </div>
          </div>
          
          {/* Visible FAQ Section */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 mt-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Frequently Asked Questions: Verb Tenses Quiz
            </h2>
            
            <div className="space-y-6 text-left">
              <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What verb tenses are covered in this quiz?</h3>
                <p className="text-slate-700 dark:text-slate-300">This quiz covers all major English verb tenses including Present Simple, Present Continuous, Past Simple, Past Continuous, Present Perfect, Present Perfect Continuous, Past Perfect, Future (will, going to), and Future Continuous. It includes 50 questions with varying difficulty levels suitable for IELTS, TOEFL, and ESL learners.</p>
              </div>
              
              <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Is this verb tenses quiz free?</h3>
                <p className="text-slate-700 dark:text-slate-300">Yes, this verb tenses quiz is completely free. It includes 50 multiple-choice questions with detailed explanations for each answer. You can take it as many times as you want without any registration or payment required.</p>
              </div>
              
              <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">How can I improve my verb tense accuracy?</h3>
                <p className="text-slate-700 dark:text-slate-300">To improve verb tense accuracy: 1) Study the rules and time markers for each tense, 2) Practice regularly with exercises and quizzes, 3) Read English texts and notice how tenses are used in context, 4) Write sentences using different tenses, and 5) Review your mistakes and understand why the correct answer is right.</p>
              </div>
              
              <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What level is this verb tenses quiz suitable for?</h3>
                <p className="text-slate-700 dark:text-slate-300">This quiz is designed for intermediate to advanced English learners. It includes easy (20 questions), medium (20 questions), and hard (10 questions) levels. It's particularly useful for students preparing for IELTS, TOEFL, or other standardized English tests, as well as ESL learners wanting to master verb tenses.</p>
              </div>
              
              <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Can I retake the quiz to improve my score?</h3>
                <p className="text-slate-700 dark:text-slate-300">Yes! You can retake this quiz unlimited times. Each attempt helps reinforce your understanding. We recommend reviewing the explanations for wrong answers before retaking to maximize learning.</p>
              </div>
              
              <div className="pb-2">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Which tenses are hardest for English learners?</h3>
                <p className="text-slate-700 dark:text-slate-300">Most learners struggle with Present Perfect vs Past Simple, Past Perfect usage, and distinguishing Future forms (will vs going to vs present continuous for future). This quiz includes targeted questions on these challenging areas with detailed explanations.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Ready to Continue Learning?
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Explore more grammar topics, practice exercises, and quizzes on TypoGrammar to master English grammar.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/what-is-typogrammar/"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                About TypoGrammar
              </a>
              <a
                href="/ielts/ielts-writing-task-2-essay-types/"
                className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                IELTS Preparation
              </a>
              <a
                href="/grammar-guide/"
                className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Browse All Topics
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="text-center py-8 text-slate-600 dark:text-slate-400">
        <p className="text-lg">
          <strong>www.typogrammar.com</strong> - Your Free English Grammar Learning Hub
        </p>
      </footer>
    </div>
  );
};

export default VerbTensesQuizPage;
