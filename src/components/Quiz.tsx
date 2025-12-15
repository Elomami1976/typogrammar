
import React, { useState } from 'react';
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
  };

  if (showScore) {
    const percentage = Math.round((score / quizData.questions.length) * 100);
    return (
      <div className="text-center p-8 bg-slate-50 rounded-lg border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
        <h3 className="font-heading text-3xl font-bold text-slate-800 mb-4 dark:text-slate-200">Quiz Complete!</h3>
        <p className="font-body text-xl text-slate-600 mb-6 dark:text-slate-400">
          You got <span className="font-bold text-blue-600 dark:text-blue-400">{score}</span> out of <span className="font-bold text-blue-600 dark:text-blue-400">{quizData.questions.length}</span> correct! ({percentage}%)
        </p>
        <button
          onClick={handleRetakeQuiz}
          className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-offset-slate-800"
        >
          Retake Quiz
        </button>
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