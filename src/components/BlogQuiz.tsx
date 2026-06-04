import React, { useState } from 'react';

export interface BlogQuizQuestion {
  question: string;
  options: string[];
  correct: number; // 0-indexed
  explanation: string;
}

interface BlogQuizProps {
  title?: string;
  questions: BlogQuizQuestion[];
}

const BlogQuiz: React.FC<BlogQuizProps> = ({ title = 'Quick Quiz', questions }) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [finished, setFinished] = useState(false);

  const q = questions[current];
  const isAnswered = selected !== null;
  const score = answers.filter((a, i) => a === questions[i].correct).length;

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    const updated = [...answers];
    updated[current] = idx;
    setSelected(idx);
    setAnswers(updated);
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      const next = current + 1;
      setCurrent(next);
      setSelected(answers[next]);
    } else {
      setFinished(true);
    }
  };

  const handleRetake = () => {
    setCurrent(0);
    setSelected(null);
    setAnswers(Array(questions.length).fill(null));
    setFinished(false);
  };

  const getOptionStyle = (idx: number) => {
    if (!isAnswered) {
      return 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer';
    }
    if (idx === q.correct) {
      return 'border-green-500 bg-green-50 dark:bg-green-900/20 cursor-default';
    }
    if (idx === selected && idx !== q.correct) {
      return 'border-red-500 bg-red-50 dark:bg-red-900/20 cursor-default';
    }
    return 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 opacity-60 cursor-default';
  };

  const getOptionIcon = (idx: number) => {
    if (!isAnswered) return null;
    if (idx === q.correct) return <span className="text-green-600 dark:text-green-400 font-bold ml-2">✓</span>;
    if (idx === selected && idx !== q.correct) return <span className="text-red-600 dark:text-red-400 font-bold ml-2">✗</span>;
    return null;
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    const msg =
      pct === 100 ? 'Perfect score! You clearly understand connected speech in English.' :
      pct >= 80  ? 'Great job! You have a solid grasp of fast English listening.' :
      pct >= 60  ? 'Good effort. Review the sections above to strengthen your understanding.' :
                   'Keep going! Re-read the article and try again.';
    const color = pct >= 80 ? 'green' : pct >= 60 ? 'yellow' : 'red';

    return (
      <div className={`border-2 rounded-xl p-7 my-8 text-center bg-${color}-50 dark:bg-${color}-900/20 border-${color}-300 dark:border-${color}-700`}>
        <p className="text-5xl font-extrabold text-slate-800 dark:text-slate-100 mb-2">
          {score} / {questions.length}
        </p>
        <p className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-1">{pct}% correct</p>
        <p className="text-slate-600 dark:text-slate-400 mb-6">{msg}</p>
        <button
          onClick={handleRetake}
          className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden my-8 shadow-sm">
      {/* Header */}
      <div className="bg-blue-600 dark:bg-blue-700 px-6 py-4 flex items-center justify-between">
        <span className="text-white font-bold text-lg">🧠 {title}</span>
        <span className="text-blue-200 text-sm">
          Question {current + 1} of {questions.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-slate-200 dark:bg-slate-700">
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${((current + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="p-6 bg-white dark:bg-slate-800/50">
        <p className="text-slate-800 dark:text-slate-100 font-semibold text-base mb-5">
          {q.question}
        </p>

        <div className="space-y-3">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={`w-full text-left border-2 rounded-lg px-4 py-3 text-sm transition-all duration-150 flex items-center justify-between ${getOptionStyle(idx)}`}
            >
              <span className="text-slate-700 dark:text-slate-200">
                <span className="font-semibold text-blue-600 dark:text-blue-400 mr-2">
                  {String.fromCharCode(65 + idx)}.
                </span>
                {opt}
              </span>
              {getOptionIcon(idx)}
            </button>
          ))}
        </div>

        {/* Explanation */}
        {isAnswered && (
          <div className={`mt-5 p-4 rounded-lg text-sm ${selected === q.correct ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300' : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300'}`}>
            <strong>{selected === q.correct ? '✓ Correct!' : '✗ Not quite.'}</strong> {q.explanation}
          </div>
        )}

        {/* Next button */}
        {isAnswered && (
          <div className="mt-5 text-right">
            <button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors"
            >
              {current < questions.length - 1 ? 'Next Question →' : 'See Results'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogQuiz;
