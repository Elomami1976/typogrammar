
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Quiz as QuizType } from '../types';

interface QuizProps {
  quizData: QuizType;
  onQuizComplete: (quizId: string, score: number, total: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ quizData, onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState<Array<{ index: number; chosen: number }>>([]);
  const [reviewMode, setReviewMode] = useState(false);

  if (!quizData || !quizData.questions || quizData.questions.length === 0) {
    return (
      <div className="p-6 md:p-8 bg-slate-50 rounded-xl border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
        <p className="font-body text-slate-600 dark:text-slate-400">This topic does not have a quiz available yet.</p>
      </div>
    );
  }

  const currentQuestion = quizData.questions[currentQuestionIndex];

  const handleAnswerSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;

    setIsAnswered(true);
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(prevScore => prevScore + 1);
    } else {
      setWrongAnswers(prev => [...prev, { index: currentQuestionIndex, chosen: selectedAnswer }]);
    }
  };
  
  const handleFinishQuiz = () => {
    // Score is updated in handleCheckAnswer, so we can just pass the final score.
    onQuizComplete(quizData.topicId, score, quizData.questions.length);
    setShowScore(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      handleFinishQuiz();
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setShowScore(false);
    setWrongAnswers([]);
    setReviewMode(false);
  };

  if (showScore) {
    const percentage = Math.round((score / quizData.questions.length) * 100);

    if (reviewMode && wrongAnswers.length > 0) {
      return (
        <div className="p-6 md:p-8 bg-slate-50 rounded-xl border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
          <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
            <h3 className="font-heading text-2xl font-bold text-slate-800 dark:text-slate-200">
              Review: Your {wrongAnswers.length} Missed {wrongAnswers.length === 1 ? 'Question' : 'Questions'}
            </h3>
            <button
              onClick={() => setReviewMode(false)}
              className="text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
            >
              ← Back to results
            </button>
          </div>
          <div className="space-y-6">
            {wrongAnswers.map(({ index, chosen }) => {
              const q = quizData.questions[index];
              return (
                <div key={index} className="p-4 bg-white dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-600">
                  <p className="font-semibold text-slate-800 dark:text-slate-100 mb-3">{q.question}</p>
                  <p className="text-sm text-red-700 dark:text-red-300 mb-1">
                    <span className="font-bold">Your answer:</span> {q.options[chosen]}
                  </p>
                  <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                    <span className="font-bold">Correct answer:</span> {q.options[q.correctAnswer]}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 italic">{q.explanation}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleRetakeQuiz}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Retake Full Quiz
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="text-center p-8 bg-slate-50 rounded-lg border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
        <h3 className="font-heading text-3xl font-bold text-slate-800 mb-4 dark:text-slate-200">Quiz Complete!</h3>
        <p className="font-body text-xl text-slate-600 mb-6 dark:text-slate-400">
          You got <span className="font-bold text-blue-600 dark:text-blue-400">{score}</span> out of <span className="font-bold text-blue-600 dark:text-blue-400">{quizData.questions.length}</span> correct! ({percentage}%)
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <button
            onClick={handleRetakeQuiz}
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-offset-slate-800"
          >
            Retake Quiz
          </button>
          {wrongAnswers.length > 0 && (
            <button
              onClick={() => setReviewMode(true)}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition-colors text-lg"
            >
              Review {wrongAnswers.length} Missed {wrongAnswers.length === 1 ? 'Question' : 'Questions'}
            </button>
          )}
        </div>
        <div className="text-left bg-white dark:bg-slate-700/40 p-5 rounded-xl border border-slate-200 dark:border-slate-600">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
            Recommended next
          </p>
          <div className="space-y-2">
            <Link
              to="/quizzes/verb-tenses-quiz/"
              className="flex items-center justify-between gap-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-600 transition-colors"
            >
              <span className="font-semibold text-slate-800 dark:text-slate-100">Free 50-Question Verb Tenses Quiz</span>
              <span className="text-blue-600 dark:text-blue-400">→</span>
            </Link>
            <Link
              to="/grammar-checker/"
              className="flex items-center justify-between gap-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-600 transition-colors"
            >
              <span className="font-semibold text-slate-800 dark:text-slate-100">Try the Free Grammar Checker</span>
              <span className="text-blue-600 dark:text-blue-400">→</span>
            </Link>
            <Link
              to="/ielts/english-grammar-pdf/"
              className="flex items-center justify-between gap-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-600 transition-colors"
            >
              <span className="font-semibold text-slate-800 dark:text-slate-100">Download Free Grammar PDF</span>
              <span className="text-blue-600 dark:text-blue-400">→</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 bg-slate-50 rounded-xl border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-heading text-2xl font-bold text-slate-800 dark:text-slate-200">{quizData.title}</h3>
        <p className="font-body text-slate-500 dark:text-slate-400">Question {currentQuestionIndex + 1} of {quizData.questions.length}</p>
      </div>

      <div>
        <p className="font-body text-xl text-slate-700 mb-6 dark:text-slate-300">{currentQuestion.question}</p>
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => {
            let optionClass = 'bg-white hover:bg-blue-50 dark:bg-slate-700 dark:hover:bg-slate-600';
            if (isAnswered) {
              if (index === currentQuestion.correctAnswer) {
                optionClass = 'bg-green-100 text-green-800 border-green-500 dark:bg-green-900/50 dark:text-green-300 dark:border-green-600';
              } else if (index === selectedAnswer) {
                optionClass = 'bg-red-100 text-red-800 border-red-500 dark:bg-red-900/50 dark:text-red-300 dark:border-red-600';
              } else {
                optionClass = 'bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400';
              }
            } else if (index === selectedAnswer) {
              optionClass = 'bg-blue-100 border-blue-500 dark:bg-blue-900/50 dark:border-blue-500';
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={isAnswered}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 text-lg font-medium ${optionClass} ${!isAnswered ? 'cursor-pointer' : 'cursor-default'}`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      {isAnswered && (() => {
        const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
        const correctAnswerText = currentQuestion.options[currentQuestion.correctAnswer];

        if (isCorrect) {
          return (
            <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-400 rounded-r-lg text-green-800 dark:bg-green-900/30 dark:border-green-500 dark:text-green-300">
              <p className="font-bold">Correct!</p>
              <p className="mt-1">{currentQuestion.explanation}</p>
            </div>
          );
        } else {
          return (
            <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-lg text-red-800 dark:bg-red-900/30 dark:border-red-500 dark:text-red-300">
              <p className="font-bold">Not quite. The correct answer was: "{correctAnswerText}"</p>
              <p className="mt-2">{currentQuestion.explanation}</p>
            </div>
          );
        }
      })()}

      <div className="mt-8 flex justify-end">
        {!isAnswered ? (
          <button
            onClick={handleCheckAnswer}
            disabled={selectedAnswer === null}
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-lg disabled:bg-slate-400 disabled:cursor-not-allowed dark:bg-blue-500 dark:hover:bg-blue-600 dark:disabled:bg-slate-600"
          >
            Check Answer
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors text-lg dark:bg-green-500 dark:hover:bg-green-600"
          >
            {currentQuestionIndex < quizData.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;