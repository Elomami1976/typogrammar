import React, { useState } from 'react';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface QuizComponentProps {
  title: string;
  questions: QuizQuestion[];
}

const QuizComponent: React.FC<QuizComponentProps> = ({ title, questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(
    new Array(questions.length).fill(false)
  );

  const handleAnswerClick = (answerIndex: number) => {
    if (answeredQuestions[currentQuestion]) return;
    
    setSelectedAnswer(answerIndex);
    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestion] = true;
    setAnsweredQuestions(newAnswered);

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Array(questions.length).fill(false));
  };

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700">
        <div className="text-center">
          <h3 className="font-heading text-3xl font-bold text-slate-900 mb-4 dark:text-slate-100">
            Quiz Complete!
          </h3>
          <div className="my-8">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <div className="text-center">
                <div className="text-4xl font-bold">{percentage}%</div>
                <div className="text-sm">Score</div>
              </div>
            </div>
          </div>
          <p className="font-body text-xl text-slate-700 mb-6 dark:text-slate-300">
            You got <strong>{score}</strong> out of <strong>{questions.length}</strong> questions correct!
          </p>
          {percentage >= 80 && (
            <p className="font-body text-lg text-green-600 mb-6 dark:text-green-400">
              🎉 Excellent work! You've mastered this topic!
            </p>
          )}
          {percentage >= 60 && percentage < 80 && (
            <p className="font-body text-lg text-blue-600 mb-6 dark:text-blue-400">
              👍 Good job! Keep practicing to improve your score.
            </p>
          )}
          {percentage < 60 && (
            <p className="font-body text-lg text-orange-600 mb-6 dark:text-orange-400">
              📚 Keep studying! Review the material and try again.
            </p>
          )}
          <button
            onClick={resetQuiz}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isAnswered = answeredQuestions[currentQuestion];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-slate-100">
            {title}
          </h3>
          <span className="font-body text-sm text-slate-500 dark:text-slate-400">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-slate-700">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300 dark:bg-blue-500"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-8">
        <h4 className="font-body text-lg font-semibold text-slate-800 mb-6 dark:text-slate-200">
          {question.question}
        </h4>
        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isCorrect = index === question.correctAnswer;
            const isSelected = index === selectedAnswer;
            
            let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ";
            
            if (!isAnswered) {
              buttonClass += "border-slate-300 hover:border-blue-400 hover:bg-blue-50 dark:border-slate-600 dark:hover:border-blue-500 dark:hover:bg-blue-900/20";
            } else if (isSelected && isCorrect) {
              buttonClass += "border-green-500 bg-green-50 dark:border-green-400 dark:bg-green-900/20";
            } else if (isSelected && !isCorrect) {
              buttonClass += "border-red-500 bg-red-50 dark:border-red-400 dark:bg-red-900/20";
            } else if (isCorrect) {
              buttonClass += "border-green-500 bg-green-50 dark:border-green-400 dark:bg-green-900/20";
            } else {
              buttonClass += "border-slate-300 dark:border-slate-600";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={isAnswered}
                className={buttonClass}
              >
                <div className="flex items-center justify-between">
                  <span className="font-body text-slate-800 dark:text-slate-200">{option}</span>
                  {isAnswered && (
                    <>
                      {isCorrect && (
                        <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                      {isSelected && !isCorrect && (
                        <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {isAnswered && question.explanation && (
        <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded dark:bg-blue-900/20 dark:border-blue-500">
          <p className="font-body text-sm text-slate-700 dark:text-slate-300">
            <strong>Explanation:</strong> {question.explanation}
          </p>
        </div>
      )}

      {isAnswered && (
        <div className="flex justify-end">
          <button
            onClick={handleNextQuestion}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
