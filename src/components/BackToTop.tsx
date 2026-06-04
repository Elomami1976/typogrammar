import React, { useEffect, useState } from 'react';

interface BackToTopProps {
  /** Show after this many px of scroll (default 600). */
  threshold?: number;
}

/**
 * Floating "back to top" button with a circular progress ring that fills
 * as the user scrolls. Appears after the threshold is passed. Smooth
 * scrolls to top on click.
 */
const BackToTop: React.FC<BackToTopProps> = ({ threshold = 600 }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? Math.min(1, Math.max(0, scrolled / max)) : 0;
        setProgress(pct);
        setVisible(scrolled > threshold);
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [threshold]);

  // SVG ring math
  const size = 48;
  const stroke = 3;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - progress);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-6 left-6 z-40 group inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-700 shadow-lg shadow-slate-900/15 hover:shadow-xl hover:ring-teal-300 dark:hover:ring-teal-500/50 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {/* progress ring */}
      <svg className="absolute inset-0" width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="currentColor"
          className="text-slate-200 dark:text-slate-800"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="currentColor"
          className="text-teal-500"
          strokeWidth={stroke}
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: 'stroke-dashoffset 80ms linear' }}
        />
      </svg>
      <svg
        className="relative w-4 h-4 text-slate-700 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.66l-3.97 3.97a.75.75 0 11-1.06-1.06l5.25-5.25a.75.75 0 011.06 0l5.25 5.25a.75.75 0 11-1.06 1.06L10.75 5.66V16.25A.75.75 0 0110 17z" clipRule="evenodd" />
      </svg>
    </button>
  );
};

export default BackToTop;
