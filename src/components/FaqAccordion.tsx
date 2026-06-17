import React, { useState } from 'react';

export interface FaqItem {
  q: string;
  a: React.ReactNode;
}

interface FaqAccordionProps {
  items: FaqItem[];
  /** Optional kicker label */
  kicker?: string;
  /** Optional title */
  title?: string;
  /** Optional subtitle/intro */
  subtitle?: string;
}

/**
 * Single-open accordion FAQ. Renders FAQPage JSON-LD inline for SEO.
 * Click anywhere on the question row to expand; chevron rotates smoothly.
 */
const FaqAccordion: React.FC<FaqAccordionProps> = ({
  items,
  kicker = 'FAQ',
  title = 'Frequently asked questions',
  subtitle,
}) => {
  const [open, setOpen] = useState<number | null>(0);

  // Build FAQPage JSON-LD. Convert ReactNode answers to plain strings best-effort.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: typeof it.a === 'string' ? it.a : extractText(it.a),
      },
    })),
  };

  return (
    <section aria-label={title}>
      <div className="max-w-3xl mb-10">
        {kicker && (
          <p className="text-xs font-semibold tracking-widest uppercase text-teal-600 dark:text-teal-400 mb-3">
            {kicker}
          </p>
        )}
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">{subtitle}</p>
        )}
      </div>

      <div className="max-w-3xl divide-y divide-slate-200 dark:divide-slate-800 rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={i}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-5 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
              >
                <span className="font-heading text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {it.q}
                </span>
                <span
                  className={`flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full ring-1 transition-all duration-300 ${
                    isOpen
                      ? 'bg-teal-600 ring-teal-600 text-white rotate-180'
                      : 'bg-slate-100 dark:bg-slate-800 ring-slate-200 dark:ring-slate-700 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>

              <div
                className="grid transition-all duration-300 ease-out"
                style={{
                  gridTemplateRows: isOpen ? '1fr' : '0fr',
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="overflow-hidden">
                  <div className="px-5 sm:px-6 pb-6 text-slate-700 dark:text-slate-300 text-[15px] leading-relaxed">
                    {it.a}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
};

// Best-effort plain-text extractor for ReactNode answers (for JSON-LD only).
function extractText(node: React.ReactNode): string {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractText).join(' ');
  if (typeof node === 'object' && 'props' in (node as object)) {
    return extractText((node as React.ReactElement).props?.children);
  }
  return '';
}

export default FaqAccordion;
