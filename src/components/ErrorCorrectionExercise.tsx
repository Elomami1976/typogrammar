import React, { useState } from 'react';

interface ErrorQuestion {
  incorrectSentence: string;
  correctSentence: string;
  errorExplanation: string;
  hint?: string;
}

interface ErrorCorrectionExerciseProps {
  title: string;
  questions: ErrorQuestion[];
  onComplete?: (score: number, total: number) => void;
}

const ErrorCorrectionExercise: React.FC<ErrorCorrectionExerciseProps> = ({
  title,
  questions,
  onComplete
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [checkedAnswers, setCheckedAnswers] = useState<boolean[]>(Array(questions.length).fill(false));
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(''));

  const question = questions[currentQuestion];

  const checkAnswer = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = userAnswer;
    setAnswers(newAnswers);
    
    const newChecked = [...checkedAnswers];
    newChecked[currentQuestion] = true;
    setCheckedAnswers(newChecked);
  };

  const isCorrect = () => {
    return userAnswer.trim().toLowerCase() === question.correctSentence.trim().toLowerCase();
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer('');
    } else {
      const score = answers.reduce((acc, answer, idx) => {
        const correct = answer.trim().toLowerCase() === questions[idx].correctSentence.trim().toLowerCase();
        return acc + (correct ? 1 : 0);
      }, 0);
      setShowResults(true);
      if (onComplete) {
        onComplete(score, questions.length);
      }
    }
  };

  const reset = () => {
    setCurrentQuestion(0);
    setUserAnswer('');
    setShowResults(false);
    setCheckedAnswers(Array(questions.length).fill(false));
    setAnswers(Array(questions.length).fill(''));
  };

  const score = answers.reduce((acc, answer, idx) => {
    const correct = answer.trim().toLowerCase() === questions[idx].correctSentence.trim().toLowerCase();
    return acc + (correct ? 1 : 0);
  }, 0);

  if (showResults) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 my-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          {title} - Results
        </h3>
        <div className="text-center mb-6">
          <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            {score} / {questions.length}
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            {score === questions.length 
              ? '🎉 Perfect! All errors corrected!' 
              : score >= questions.length * 0.7 
                ? '👍 Great job!' 
                : '📚 Review and try again!'}
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {questions.map((q, idx) => {
            const userAns = answers[idx];
            const correct = userAns.trim().toLowerCase() === q.correctSentence.trim().toLowerCase();
            return (
              <div key={idx} className="border border-slate-300 dark:border-slate-600 rounded-lg p-4">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Question {idx + 1}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                  <strong>Incorrect:</strong> {q.incorrectSentence}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                  <strong>Your answer:</strong> {userAns || '(empty)'}
                </p>
                <div className={`text-sm font-semibold ${correct ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {correct ? '✅ Correct!' : `❌ Correct: ${q.correctSentence}`}
                </div>
                {!correct && (
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                    <strong>Explanation:</strong> {q.errorExplanation}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <button
          onClick={reset}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 my-6">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
        {title}
      </h3>
      
      <div className="mb-4">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Question {currentQuestion + 1} of {questions.length}
        </p>
        <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full mt-2">
          <div 
            className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {question.hint && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mb-4">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            💡 <strong>Hint:</strong> {question.hint}
          </p>
        </div>
      )}

      <div className="mb-6">
        <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
          Incorrect sentence:
        </p>
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
          <p className="text-lg text-red-800 dark:text-red-300 font-medium">
            ❌ {question.incorrectSentence}
          </p>
        </div>
        
        <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 mt-6 mb-2">
          Write the corrected sentence:
        </p>
        <textarea
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          disabled={checkedAnswers[currentQuestion]}
          placeholder="Type the corrected sentence here..."
          rows={3}
          className="w-full px-4 py-3 border-2 border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 disabled:bg-slate-100 dark:disabled:bg-slate-800"
        />
      </div>

      {checkedAnswers[currentQuestion] && (
        <div className={`p-4 rounded-lg mb-4 ${isCorrect() ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'}`}>
          <p className={`font-semibold ${isCorrect() ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'}`}>
            {isCorrect() ? '✅ Correct!' : `❌ Incorrect. Correct sentence: ${question.correctSentence}`}
          </p>
          {!isCorrect() && (
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              <strong>Explanation:</strong> {question.errorExplanation}
            </p>
          )}
        </div>
      )}

      <div className="flex gap-3">
        {!checkedAnswers[currentQuestion] ? (
          <button
            onClick={checkAnswer}
            disabled={!userAnswer.trim()}
            className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Check Answer
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            {currentQuestion < questions.length - 1 ? 'Next Question →' : 'See Results'}
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorCorrectionExercise;
