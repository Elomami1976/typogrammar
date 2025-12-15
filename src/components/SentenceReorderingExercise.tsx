import React, { useState } from 'react';

interface ReorderQuestion {
  scrambledWords: string[];
  correctOrder: string; // The correct sentence
  hint?: string;
}

interface SentenceReorderingExerciseProps {
  title: string;
  questions: ReorderQuestion[];
  onComplete?: (score: number, total: number) => void;
}

const SentenceReorderingExercise: React.FC<SentenceReorderingExerciseProps> = ({
  title,
  questions,
  onComplete
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userOrder, setUserOrder] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>(questions[0].scrambledWords);
  const [showResults, setShowResults] = useState(false);
  const [checkedAnswers, setCheckedAnswers] = useState<boolean[]>(Array(questions.length).fill(false));
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(''));

  const question = questions[currentQuestion];

  const addWord = (word: string, index: number) => {
    setUserOrder([...userOrder, word]);
    setAvailableWords(availableWords.filter((_, i) => i !== index));
  };

  const removeWord = (index: number) => {
    const word = userOrder[index];
    setUserOrder(userOrder.filter((_, i) => i !== index));
    setAvailableWords([...availableWords, word]);
  };

  const checkAnswer = () => {
    const userSentence = userOrder.join(' ');
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = userSentence;
    setAnswers(newAnswers);
    
    const newChecked = [...checkedAnswers];
    newChecked[currentQuestion] = true;
    setCheckedAnswers(newChecked);
  };

  const isCorrect = () => {
    const userSentence = userOrder.join(' ').toLowerCase().trim();
    const correctSentence = question.correctOrder.toLowerCase().trim();
    return userSentence === correctSentence;
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      const nextIdx = currentQuestion + 1;
      setCurrentQuestion(nextIdx);
      setUserOrder([]);
      setAvailableWords(questions[nextIdx].scrambledWords);
    } else {
      const score = answers.reduce((acc, answer, idx) => {
        const correct = answer.toLowerCase().trim() === questions[idx].correctOrder.toLowerCase().trim();
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
    setUserOrder([]);
    setAvailableWords(questions[0].scrambledWords);
    setShowResults(false);
    setCheckedAnswers(Array(questions.length).fill(false));
    setAnswers(Array(questions.length).fill(''));
  };

  const score = answers.reduce((acc, answer, idx) => {
    const correct = answer.toLowerCase().trim() === questions[idx].correctOrder.toLowerCase().trim();
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
              ? '🎉 Perfect! All sentences correct!' 
              : score >= questions.length * 0.7 
                ? '👍 Well done! Good work!' 
                : '📚 Keep practicing!'}
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {questions.map((q, idx) => {
            const userAnswer = answers[idx];
            const correct = userAnswer.toLowerCase().trim() === q.correctOrder.toLowerCase().trim();
            return (
              <div key={idx} className="border border-slate-300 dark:border-slate-600 rounded-lg p-4">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Question {idx + 1}</p>
                <p className="text-lg text-slate-900 dark:text-slate-100 mb-2">
                  <strong>Your answer:</strong> {userAnswer || '(empty)'}
                </p>
                <div className={`text-sm font-semibold ${correct ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {correct ? '✅ Correct!' : `❌ Correct order: ${q.correctOrder}`}
                </div>
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

      <p className="text-lg text-slate-900 dark:text-slate-100 mb-4 font-semibold">
        Arrange the words to form a correct sentence:
      </p>

      {/* User's ordered sentence */}
      <div className="min-h-[80px] bg-slate-50 dark:bg-slate-900 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-4 mb-4">
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Your sentence:</p>
        <div className="flex flex-wrap gap-2">
          {userOrder.length === 0 ? (
            <span className="text-slate-400 dark:text-slate-500 italic">Click words below to build your sentence...</span>
          ) : (
            userOrder.map((word, idx) => (
              <button
                key={idx}
                onClick={() => removeWord(idx)}
                disabled={checkedAnswers[currentQuestion]}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md font-medium transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed dark:disabled:bg-slate-600"
              >
                {word}
              </button>
            ))
          )}
        </div>
      </div>

      {/* Available words */}
      <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mb-4">
        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Available words:</p>
        <div className="flex flex-wrap gap-2">
          {availableWords.map((word, idx) => (
            <button
              key={idx}
              onClick={() => addWord(word, idx)}
              disabled={checkedAnswers[currentQuestion]}
              className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-3 py-2 rounded-md font-medium transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed dark:bg-slate-600 dark:hover:bg-slate-500 dark:text-slate-100 dark:disabled:bg-slate-600"
            >
              {word}
            </button>
          ))}
        </div>
      </div>

      {checkedAnswers[currentQuestion] && (
        <div className={`p-4 rounded-lg mb-4 ${isCorrect() ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'}`}>
          <p className={`font-semibold ${isCorrect() ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'}`}>
            {isCorrect() ? '✅ Correct sentence!' : `❌ Incorrect. Correct order: ${question.correctOrder}`}
          </p>
        </div>
      )}

      <div className="flex gap-3">
        {!checkedAnswers[currentQuestion] ? (
          <button
            onClick={checkAnswer}
            disabled={userOrder.length === 0}
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

export default SentenceReorderingExercise;
