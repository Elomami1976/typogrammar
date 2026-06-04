import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface LastVisitedTopic {
  id: string;
  title: string;
  category: string;
}

interface ContinueLearningProps {
  /** Greeting line shown above the title, e.g. "Welcome back" */
  greeting?: string;
  /** CTA button label */
  ctaLabel?: string;
  /** Link prefix used to build the topic URL (default `/topics/`) */
  topicLinkPrefix?: string;
}

/**
 * Slim "Welcome back" / Continue Learning banner.
 *
 * Reads `lastVisitedTopic` from localStorage (set by TopicPage when the user
 * opens any grammar topic) and renders a personalized resume card on the
 * homepage. Renders nothing on the user's first visit, so it never adds
 * empty space for new visitors.
 */
const ContinueLearning: React.FC<ContinueLearningProps> = ({
  greeting = 'Welcome back',
  ctaLabel = 'Continue lesson',
  topicLinkPrefix = '/topics/',
}) => {
  const [topic, setTopic] = useState<LastVisitedTopic | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('lastVisitedTopic');
      if (!raw) return;
      const parsed = JSON.parse(raw) as LastVisitedTopic;
      if (parsed && parsed.id && parsed.title) setTopic(parsed);
    } catch {
      // ignore malformed localStorage value
    }
  }, []);

  if (!topic || dismissed) return null;

  return (
    <section
      aria-label="Continue learning"
      className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal-50 via-white to-blue-50 dark:from-teal-950/40 dark:via-slate-900 dark:to-blue-950/40 ring-1 ring-teal-200/70 dark:ring-teal-800/50 px-5 sm:px-7 py-5"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        {/* Avatar / icon */}
        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-teal-600 text-white shadow-sm shadow-teal-900/20 ring-1 ring-teal-700/40">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 8v4l3 2" />
            <circle cx="12" cy="12" r="9" />
          </svg>
        </div>

        {/* Copy */}
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-widest text-teal-700 dark:text-teal-300 mb-0.5">
            {greeting}
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-sm leading-snug">
            Pick up where you left off:{' '}
            <span className="font-bold text-slate-900 dark:text-white">{topic.title}</span>
            {topic.category && (
              <span className="ml-2 inline-block text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {topic.category}
              </span>
            )}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            to={`${topicLinkPrefix}${topic.id}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold transition-colors shadow-sm shadow-teal-900/20 whitespace-nowrap"
          >
            {ctaLabel}
            <svg className="w-3.5 h-3.5 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss"
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M4.28 3.22a.75.75 0 00-1.06 1.06L8.94 10l-5.72 5.72a.75.75 0 101.06 1.06L10 11.06l5.72 5.72a.75.75 0 101.06-1.06L11.06 10l5.72-5.72a.75.75 0 00-1.06-1.06L10 8.94 4.28 3.22z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContinueLearning;
