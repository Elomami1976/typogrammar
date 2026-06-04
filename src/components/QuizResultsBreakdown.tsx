import React from 'react';
import { Link } from 'react-router-dom';

export interface BreakdownAnswer {
  questionId: number;
  tense: string;
  difficulty: string;
  correct: boolean;
}

interface TenseGroup {
  tense: string;
  total: number;
  correct: number;
  topicLink?: { to: string; label: string };
}

interface QuizResultsBreakdownProps {
  answers: BreakdownAnswer[];
  /** Map from tense label → recommended topic */
  topicMap?: Record<string, { to: string; label: string }>;
  /** Called when user clicks the "Practice wrong only" button */
  onReviewWrong?: () => void;
  hasWrong?: boolean;
}

/**
 * QuizResultsBreakdown — turns a flat answer log into an actionable
 * "weak areas" view with deep links to recommended lessons.
 */
const QuizResultsBreakdown: React.FC<QuizResultsBreakdownProps> = ({
  answers,
  topicMap = {},
  onReviewWrong,
  hasWrong = false,
}) => {
  const grouped: TenseGroup[] = React.useMemo(() => {
    const map = new Map<string, TenseGroup>();
    answers.forEach((a) => {
      const g = map.get(a.tense) || {
        tense: a.tense,
        total: 0,
        correct: 0,
        topicLink: topicMap[a.tense],
      };
      g.total += 1;
      if (a.correct) g.correct += 1;
      map.set(a.tense, g);
    });
    return Array.from(map.values()).sort((a, b) => {
      // Weakest first
      const aPct = a.correct / a.total;
      const bPct = b.correct / b.total;
      return aPct - bPct;
    });
  }, [answers, topicMap]);

  const weakAreas = grouped.filter((g) => g.correct / g.total < 0.7);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-lg border border-slate-200 dark:border-slate-700">
      <h3 className="font-heading text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
        Your Performance by Tense
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-5">
        {weakAreas.length > 0
          ? `Focus on these ${weakAreas.length} weak ${weakAreas.length === 1 ? 'area' : 'areas'} to boost your score next time.`
          : 'Great balance across tenses — keep practicing to maintain accuracy.'}
      </p>

      <div className="space-y-3">
        {grouped.map((g) => {
          const pct = Math.round((g.correct / g.total) * 100);
          const barColor = pct >= 80 ? 'bg-green-500' : pct >= 60 ? 'bg-amber-500' : 'bg-red-500';
          return (
            <div
              key={g.tense}
              className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40"
            >
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-semibold text-slate-800 dark:text-slate-100 text-sm md:text-base truncate">
                    {g.tense}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 ml-2">
                    {g.correct}/{g.total} ({pct}%)
                  </span>
                </div>
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className={`h-full ${barColor} transition-all`} style={{ width: `${pct}%` }} />
                </div>
              </div>
              {g.topicLink && pct < 80 && (
                <Link
                  to={g.topicLink.to}
                  className="flex-shrink-0 text-xs md:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline whitespace-nowrap"
                >
                  Review lesson →
                </Link>
              )}
            </div>
          );
        })}
      </div>

      {hasWrong && onReviewWrong && (
        <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={onReviewWrong}
            className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-5 rounded-lg transition-colors"
          >
            Review My Wrong Answers
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizResultsBreakdown;
