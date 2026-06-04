import React, { useEffect, useState } from 'react';

interface ScrollProgressProps {
  /** Tailwind classes for the bar gradient */
  barClassName?: string;
  /** Bar height in px (default 3) */
  height?: number;
}

/**
 * Slim top-of-viewport scroll progress bar. Updates a CSS scaleX value via
 * rAF-throttled scroll listener — no layout thrash. Fixed-positioned with a
 * high z-index so it floats above all page content but below modals.
 */
const ScrollProgress: React.FC<ScrollProgressProps> = ({
  barClassName = 'bg-gradient-to-r from-teal-400 via-blue-500 to-violet-500',
  height = 3,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? Math.min(1, Math.max(0, scrolled / max)) : 0;
        setProgress(pct);
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      style={{ height: `${height}px` }}
    >
      <div
        className={`h-full origin-left ${barClassName}`}
        style={{
          transform: `scaleX(${progress})`,
          transition: 'transform 80ms linear',
        }}
      />
    </div>
  );
};

export default ScrollProgress;
