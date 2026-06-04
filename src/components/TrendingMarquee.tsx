import React from 'react';
import { Link } from 'react-router-dom';

export interface MarqueeItem {
  label: string;
  to: string;
  /** Optional emoji/icon (1-2 chars). */
  icon?: string;
}

interface TrendingMarqueeProps {
  items: MarqueeItem[];
  /** Optional kicker label e.g. "Trending now" */
  kicker?: string;
  /** Animation duration in seconds (default 40). Larger = slower. */
  durationSec?: number;
}

/**
 * Infinitely scrolling chip marquee. Doubles the item list and animates
 * a translateX(-50%) loop, so the seam is invisible. Pauses on hover.
 *
 * Each chip is a real <Link>, giving every visible row of the marquee
 * meaningful internal-link value for SEO + UX.
 */
const TrendingMarquee: React.FC<TrendingMarqueeProps> = ({
  items,
  kicker = 'Trending searches',
  durationSec = 40,
}) => {
  // Double the array so we can loop seamlessly.
  const doubled = [...items, ...items];

  return (
    <section
      aria-label={kicker}
      className="relative overflow-hidden rounded-2xl bg-slate-50 dark:bg-slate-900/60 ring-1 ring-slate-200 dark:ring-slate-800 py-4"
    >
      {/* gradient fades on the edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-slate-50 dark:from-slate-900/80 to-transparent z-10" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-slate-50 dark:from-slate-900/80 to-transparent z-10" aria-hidden="true" />

      {kicker && (
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-20 text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60 px-2">
          {kicker}
        </div>
      )}

      <div className="marquee-track flex w-max gap-3 pt-5" style={{ animationDuration: `${durationSec}s` }}>
        {doubled.map((item, i) => (
          <Link
            key={`${item.label}-${i}`}
            to={item.to}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 ring-1 ring-slate-200 dark:ring-slate-700 hover:ring-teal-400 hover:text-teal-700 dark:hover:text-teal-300 dark:hover:ring-teal-500/50 px-4 py-2 rounded-full transition-colors whitespace-nowrap"
          >
            {item.icon && <span className="text-base leading-none" aria-hidden="true">{item.icon}</span>}
            {item.label}
          </Link>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .marquee-track {
          animation-name: marquee-scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; flex-wrap: wrap; }
        }
      `}</style>
    </section>
  );
};

export default TrendingMarquee;
