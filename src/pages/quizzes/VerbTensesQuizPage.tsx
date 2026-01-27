import React, { useState, useEffect } from 'react';
import usePageMetadata from '../../hooks/usePageMetadata';
import { useLanguage } from '../../contexts/LanguageContext';
import GoogleAd from '../../components/GoogleAd';
import ShareButtons from '../../components/ShareButtons';
import quizData from '../../quiz-data/verb-tenses-quiz-50.json';

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

  const data = quizData as QuizData;

  usePageMetadata({
    title: data.title,
    description: data.description,
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

      {/* SEO Meta Tags */}
      <head>
        <link rel="canonical" href="https://typogrammar.com/quizzes/verb-tenses-quiz" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:url" content="https://typogrammar.com/quizzes/verb-tenses-quiz" />
        <meta property="og:site_name" content="TypoGrammar" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.description} />
      </head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
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
          <GoogleAd adSlot="1234567890" />
        </div>

        {/* Questions */}
        <div className="space-y-8">
          {data.questions.map((question, index) => {
            const isChecked = checkedQuestions[question.id];
            const selectedAnswer = selectedAnswers[question.id];
            const isCorrect = selectedAnswer === question.correct;

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
          <GoogleAd adSlot="9876543210" />
        </div>
      </section>

      {/* Results Section */}
      {showResults && (
        <section id="results-section" className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 text-white py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Your Results</h2>
            <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-2xl p-8 shadow-2xl">
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
          </div>
        </section>
      )}

      {/* Educational Content Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            What This Verb Tense Quiz Covers
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
            This comprehensive quiz tests your understanding of all major English verb tenses. Master these tenses to improve your <a href="/ielts" className="text-blue-600 dark:text-blue-400 hover:underline">IELTS</a> and <a href="/toefl" className="text-blue-600 dark:text-blue-400 hover:underline">TOEFL</a> scores.
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
                Visit <a href="/what-is-typogrammar" className="text-blue-600 dark:text-blue-400 hover:underline">TypoGrammar</a> regularly for grammar lessons, quizzes, and exercises to strengthen your understanding of English verb tenses.
              </p>
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
                href="/what-is-typogrammar"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                About TypoGrammar
              </a>
              <a
                href="/ielts/ielts-writing-task-2-essay-types"
                className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                IELTS Preparation
              </a>
              <a
                href="/grammar-guide"
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
