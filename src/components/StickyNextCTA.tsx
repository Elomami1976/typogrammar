import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface StickyNextCTAProps {
  to: string;
  label: string;
  subtitle?: string;
  /** Show after this scroll percentage (0–100). Default 55. */
  threshold?: number;
}

/**
 * StickyNextCTA — floating "Up next" pill that appears once the user
 * has scrolled past `threshold` percent of the page. Encourages users
 * to continue to the next lesson/post and increases dwell time.
 */
const StickyNextCTA: React.FC<StickyNextCTAProps> = ({
  to,
  label,
  subtitle = 'Up next',
  threshold = 55,
}) => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const pct = height > 0 ? (top / height) * 100 : 0;
      setVisible(pct >= threshold && pct < 98);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  if (dismissed || !visible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-40 max-w-xs animate-fade-in print:hidden"
      role="complementary"
      aria-label="Continue to next lesson"
    >
      <div className="relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl p-4 pr-10">
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="absolute top-1.5 right-1.5 p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <p className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
          {subtitle}
        </p>
        <Link
          to={to}
          className="group flex items-center justify-between gap-3 text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <span className="font-semibold leading-snug text-sm md:text-base line-clamp-2">{label}</span>
          <svg
            className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default StickyNextCTA;
