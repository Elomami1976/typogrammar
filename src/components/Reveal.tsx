import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  /** Animation delay in ms (useful for staggering siblings). */
  delay?: number;
  /** Tailwind classes appended to the wrapper. */
  className?: string;
  /** Animation distance in px (default 24). */
  offset?: number;
  /** IntersectionObserver threshold (default 0.15). */
  threshold?: number;
  /** If true (default), only animates the first time the element enters the viewport. */
  once?: boolean;
  /** Optional element tag (defaults to div). */
  as?: 'div' | 'section' | 'article' | 'li';
}

/**
 * Lightweight scroll-reveal wrapper. Fades + slides children in when they
 * scroll into view. Uses IntersectionObserver — no animation libraries.
 *
 * Falls back to immediately visible if IntersectionObserver is unavailable
 * or `prefers-reduced-motion` is set.
 */
const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className = '',
  offset = 24,
  threshold = 0.15,
  once = true,
  as: Tag = 'div',
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Respect reduced motion preference
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined' || !ref.current) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  const style: React.CSSProperties = {
    transitionDelay: `${delay}ms`,
    transform: visible ? 'translate3d(0,0,0)' : `translate3d(0,${offset}px,0)`,
    opacity: visible ? 1 : 0,
    transitionProperty: 'opacity, transform',
    transitionDuration: '700ms',
    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
    willChange: 'opacity, transform',
  };

  return React.createElement(
    Tag,
    { ref: ref as React.RefObject<HTMLElement>, style, className },
    children,
  );
};

export default Reveal;
