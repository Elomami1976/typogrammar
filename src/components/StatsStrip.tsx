import React, { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  /** Label below the number */
  label: string;
  /** Suffix appended to the formatted number, e.g. "+", "k", "%". */
  suffix?: string;
  /** Prefix before the number, e.g. "$" */
  prefix?: string;
  /** Decimal places (default 0) */
  decimals?: number;
  /** Optional sub-text/caption shown smaller under label */
  sub?: string;
  /** Tailwind text color class for the number */
  color?: string;
}

interface StatsStripProps {
  stats: Stat[];
  /** Heading kicker e.g. "Trusted by serious learners" */
  kicker?: string;
  /** Animation duration ms */
  durationMs?: number;
}

/**
 * Animated count-up stats strip. Numbers animate from 0 to target the first
 * time the strip enters the viewport. Pure CSS + IntersectionObserver, no deps.
 */
const StatsStrip: React.FC<StatsStripProps> = ({ stats, kicker, durationMs = 1400 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === 'undefined') {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-label={kicker || 'Key stats'}
      className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 px-6 sm:px-10 py-10 sm:py-12"
    >
      {/* subtle radial background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] dark:opacity-[0.12]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(20,184,166,0.6), transparent 40%), radial-gradient(circle at 80% 80%, rgba(37,99,235,0.6), transparent 40%)',
        }}
      />

      {kicker && (
        <p className="relative z-10 text-center text-xs font-bold tracking-widest uppercase text-teal-600 dark:text-teal-400 mb-6">
          {kicker}
        </p>
      )}

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 text-center">
        {stats.map((s, i) => (
          <div
            key={i}
            className="relative md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:h-12 md:after:w-px md:after:bg-slate-200 dark:md:after:bg-slate-800 md:last:after:hidden"
          >
            <div
              className={`font-heading font-extrabold tabular-nums tracking-tight text-4xl sm:text-5xl mb-2 ${
                s.color || 'text-blue-700 dark:text-white'
              }`}
            >
              {s.prefix}
              <CountUp target={s.value} active={active} durationMs={durationMs} decimals={s.decimals ?? 0} />
              {s.suffix}
            </div>
            <div className="text-sm font-semibold text-slate-700 dark:text-slate-200">{s.label}</div>
            {s.sub && (
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{s.sub}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

interface CountUpProps {
  target: number;
  active: boolean;
  durationMs: number;
  decimals: number;
}

const CountUp: React.FC<CountUpProps> = ({ target, active, durationMs, decimals }) => {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const elapsed = t - start;
      const progress = Math.min(1, elapsed / durationMs);
      // ease-out cubic for nicer feel
      const eased = 1 - Math.pow(1 - progress, 3);
      setN(target * eased);
      if (progress < 1) raf = requestAnimationFrame(step);
      else setN(target);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, durationMs]);

  const formatted =
    decimals > 0
      ? n.toFixed(decimals)
      : Math.round(n).toLocaleString('en-US');
  return <span>{formatted}</span>;
};

export default StatsStrip;
