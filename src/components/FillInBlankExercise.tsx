import React, { useState } from 'react';

interface FillInBlankQuestion {
  sentence: string; // Use {{blank}} as placeholder, e.g., "She {{blank}} to school every day."
  correctAnswer: string;
  hint?: string;
  explanation?: string;
}

interface FillInBlankExerciseProps {
  title: string;
  questions: FillInBlankQuestion[];
  onComplete?: (score: number, total: number) => void;
}

const FillInBlankExercise: React.FC<FillInBlankExerciseProps> = ({ 
  title, 
  questions, 
  onComplete 
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>(Array(questions.length).fill(''));
  const [showResults, setShowResults] = useState(false);
  const [checkedAnswers, setCheckedAnswers] = useState<boolean[]>(Array(questions.length).fill(false));

  const question = questions[currentQuestion];

  // Split sentence by {{blank}} placeholder
  const sentenceParts = question.sentence.split('{{blank}}');

  const handleInputChange = (value: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = value;
    setUserAnswers(newAnswers);
  };

  const checkAnswer = () => {
    const newChecked = [...checkedAnswers];
    newChecked[currentQuestion] = true;
    setCheckedAnswers(newChecked);
  };

  const isCorrect = () => {
    return userAnswers[currentQuestion].trim().toLowerCase() === 
           question.correctAnswer.trim().toLowerCase();
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // All questions completed
      const score = userAnswers.reduce((acc, answer, idx) => {
        return acc + (answer.trim().toLowerCase() === questions[idx].correctAnswer.trim().toLowerCase() ? 1 : 0);
      }, 0);
      setShowResults(true);
      if (onComplete) {
        onComplete(score, questions.length);
      }
    }
  };

  const reset = () => {
    setCurrentQuestion(0);
    setUserAnswers(Array(questions.length).fill(''));
    setShowResults(false);
    setCheckedAnswers(Array(questions.length).fill(false));
  };

  const score = userAnswers.reduce((acc, answer, idx) => {
    return acc + (answer.trim().toLowerCase() === questions[idx].correctAnswer.trim().toLowerCase() ? 1 : 0);
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
              ? '🎉 Perfect score! Excellent work!' 
              : score >= questions.length * 0.7 
                ? '👍 Good job! Keep practicing!' 
                : '📚 Keep studying and try again!'}
          </p>
        </div>

        {/* Review all answers */}
        <div className="space-y-4 mb-6">
          {questions.map((q, idx) => {
            const userAnswer = userAnswers[idx];
            const correct = userAnswer.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
            return (
              <div key={idx} className="border border-slate-300 dark:border-slate-600 rounded-lg p-4">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  Question {idx + 1}
                </p>
                <p className="text-lg text-slate-900 dark:text-slate-100 mb-2">
                  {q.sentence.replace('{{blank}}', `___${userAnswer || '(empty)'}___`)}
                </p>
                <div className={`text-sm font-semibold ${correct ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {correct ? '✅ Correct!' : `❌ Incorrect. Correct answer: ${q.correctAnswer}`}
                </div>
                {!correct && q.explanation && (
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                    {q.explanation}
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
        <p className="text-lg text-slate-900 dark:text-slate-100 mb-4">
          {sentenceParts[0]}
          <input
            type="text"
            value={userAnswers[currentQuestion]}
            onChange={(e) => handleInputChange(e.target.value)}
            disabled={checkedAnswers[currentQuestion]}
            className="mx-2 px-3 py-1 border-b-2 border-blue-600 dark:border-blue-400 bg-transparent focus:outline-none focus:border-blue-700 dark:focus:border-blue-300 text-center min-w-[120px] disabled:bg-slate-100 dark:disabled:bg-slate-700"
            placeholder="type answer"
          />
          {sentenceParts[1]}
        </p>

        {checkedAnswers[currentQuestion] && (
          <div className={`p-4 rounded-lg ${isCorrect() ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'}`}>
            <p className={`font-semibold ${isCorrect() ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'}`}>
              {isCorrect() ? '✅ Correct!' : `❌ Incorrect. The correct answer is: ${question.correctAnswer}`}
            </p>
            {!isCorrect() && question.explanation && (
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
                {question.explanation}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="flex gap-3">
        {!checkedAnswers[currentQuestion] ? (
          <button
            onClick={checkAnswer}
            disabled={!userAnswers[currentQuestion].trim()}
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

export default FillInBlankExercise;
