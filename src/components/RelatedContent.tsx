import React from 'react';
import { Link } from 'react-router-dom';

export interface RelatedContentItem {
  to: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  /** Tag like "Quiz", "Lesson", "PDF", "Tool", "Article" */
  badge?: string;
  /** Estimated time / value, e.g. "5 min read" */
  meta?: string;
}

interface RelatedContentProps {
  title?: string;
  description?: string;
  items: RelatedContentItem[];
  /** When true uses a single-column compact list. Default is responsive grid. */
  compact?: boolean;
}

const badgeClasses: Record<string, string> = {
  Quiz: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  Lesson: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  Article: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  PDF: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
  Tool: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  Practice: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
};

/**
 * RelatedContent — universal "Continue Learning" rail.
 * Goal: keep users on-site after they finish a page (engagement / dwell time).
 */
const RelatedContent: React.FC<RelatedContentProps> = ({
  title = 'Continue Learning',
  description,
  items,
  compact = false,
}) => {
  if (!items || items.length === 0) return null;

  return (
    <aside
      aria-label={title}
      className="my-12 p-6 md:p-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 rounded-2xl border border-blue-100 dark:border-slate-700 shadow-sm"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600 text-white shadow-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </span>
        <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">
          {title}
        </h2>
      </div>
      {description && (
        <p className="text-slate-600 dark:text-slate-400 mb-5 text-sm md:text-base">{description}</p>
      )}

      <div
        className={
          compact
            ? 'flex flex-col gap-3'
            : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
        }
      >
        {items.map((item, idx) => (
          <Link
            key={`${item.to}-${idx}`}
            to={item.to}
            className="group relative flex items-start gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 hover:shadow-md transition-all duration-200"
          >
            {item.icon && (
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                {item.icon}
              </div>
            )}
            <div className="flex-1 min-w-0">
              {item.badge && (
                <span
                  className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-1.5 ${
                    badgeClasses[item.badge] || 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                  }`}
                >
                  {item.badge}
                </span>
              )}
              <p className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                {item.title}
              </p>
              {item.subtitle && (
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{item.subtitle}</p>
              )}
              {item.meta && (
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">{item.meta}</p>
              )}
            </div>
            <svg
              className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default RelatedContent;
