import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export interface MiniQuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface MiniQuizProps {
  title?: string;
  intro?: string;
  questions: MiniQuizQuestion[];
  /** CTA shown after all questions answered */
  cta?: { to: string; label: string; subtitle?: string };
}

/**
 * MiniQuiz — tiny inline 2–4 question quiz to drop into blog posts,
 * PDF download pages, etc. Designed to add interactive dwell time.
 */
const MiniQuiz: React.FC<MiniQuizProps> = ({ title, intro, questions, cta }) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  if (!questions || questions.length === 0) return null;

  const q = questions[current];

  const handleCheck = () => {
    if (selected === null) return;
    setAnswered(true);
    if (selected === q.correctAnswer) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setDone(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setDone(false);
  };

  return (
    <section
      aria-label={title || 'Quick check'}
      className="my-10 p-6 md:p-8 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 rounded-2xl border border-purple-100 dark:border-slate-700 shadow-sm"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-purple-600 text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </span>
        <div>
          <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">
            {title || 'Quick Check: Test What You Just Learned'}
          </h2>
          {intro && <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">{intro}</p>}
        </div>
      </div>

      {!done ? (
        <>
          <div className="flex justify-between items-center text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3 mt-4">
            <span>
              Question {current + 1} of {questions.length}
            </span>
            <span>Score: {score}</span>
          </div>
          <p className="text-lg font-medium text-slate-800 dark:text-slate-100 mb-4">{q.question}</p>
          <div className="space-y-2.5">
            {q.options.map((opt, i) => {
              let cls =
                'border-slate-200 bg-white hover:border-purple-400 hover:bg-purple-50 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-700';
              if (answered) {
                if (i === q.correctAnswer)
                  cls = 'border-green-500 bg-green-50 text-green-800 dark:bg-green-900/40 dark:text-green-200';
                else if (i === selected)
                  cls = 'border-red-500 bg-red-50 text-red-800 dark:bg-red-900/40 dark:text-red-200';
                else cls = 'border-slate-200 bg-slate-50 text-slate-500 dark:bg-slate-800 dark:border-slate-700';
              } else if (i === selected) {
                cls = 'border-purple-500 bg-purple-50 dark:bg-purple-900/40';
              }
              return (
                <button
                  key={i}
                  type="button"
                  disabled={answered}
                  onClick={() => setSelected(i)}
                  className={`w-full text-left p-3.5 rounded-lg border-2 transition-all text-base font-medium ${cls} ${
                    !answered ? 'cursor-pointer' : 'cursor-default'
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {answered && q.explanation && (
            <div
              className={`mt-4 p-3.5 rounded-lg text-sm ${
                selected === q.correctAnswer
                  ? 'bg-green-50 border border-green-200 text-green-800 dark:bg-green-900/30 dark:border-green-800 dark:text-green-200'
                  : 'bg-amber-50 border border-amber-200 text-amber-800 dark:bg-amber-900/30 dark:border-amber-800 dark:text-amber-200'
              }`}
            >
              <strong>{selected === q.correctAnswer ? 'Correct!' : 'Not quite.'}</strong> {q.explanation}
            </div>
          )}

          <div className="mt-5 flex justify-end">
            {!answered ? (
              <button
                type="button"
                onClick={handleCheck}
                disabled={selected === null}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 px-5 rounded-lg disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
              >
                Check Answer
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-5 rounded-lg transition-colors"
              >
                {current < questions.length - 1 ? 'Next Question' : 'See Result'}
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="text-center py-4">
          <p className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-300 mb-2">
            {score} / {questions.length}
          </p>
          <p className="text-slate-700 dark:text-slate-300 mb-5">
            {score === questions.length
              ? 'Perfect score — you nailed it!'
              : score >= Math.ceil(questions.length / 2)
              ? 'Nice work. Keep practicing to lock it in.'
              : 'Good attempt. Review the lesson and try again.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={handleRestart}
              className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 font-semibold py-2.5 px-5 rounded-lg transition-colors"
            >
              Retry Quiz
            </button>
            {cta && (
              <Link
                to={cta.to}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 px-5 rounded-lg transition-colors"
              >
                {cta.label}
              </Link>
            )}
          </div>
          {cta?.subtitle && (
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">{cta.subtitle}</p>
          )}
        </div>
      )}
    </section>
  );
};

export default MiniQuiz;
