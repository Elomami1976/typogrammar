import React, { useEffect, useMemo } from 'react';

/**
 * AIAnswerBox
 * -----------
 * A visually-distinct "direct answer" block placed at the TOP of a page.
 *
 * Why: AI answer engines (ChatGPT, Perplexity, Google AI Overviews, Claude,
 * Gemini) extract short, self-contained definitions to cite. Pages that
 * begin with a clean 2–4 sentence answer + structured data get cited far
 * more often than pages that bury the answer below intros.
 *
 * What it emits:
 *   - Semantic <section role="doc-abstract"> with itemscope DefinedTerm
 *   - JSON-LD: DefinedTerm + (optional) Question/Answer FAQ entries
 *
 * Usage:
 *   <AIAnswerBox
 *     term="Present Perfect Tense"
 *     answer="The present perfect is formed with have/has + past participle..."
 *     keyFacts={[
 *       'Formula: have/has + past participle',
 *       'Use: actions linking past to present',
 *       'Time markers: just, already, yet, ever, never, since, for',
 *     ]}
 *     faqs={[
 *       { q: 'When do we use the present perfect?', a: 'For past actions...' },
 *     ]}
 *   />
 */
export interface AIAnswerBoxFAQ {
  q: string;
  a: string;
}

export interface AIAnswerBoxProps {
  /** The thing being defined, e.g. "Present Perfect Tense". */
  term: string;
  /** A 2–4 sentence plain-language definition. This is what AI engines quote. */
  answer: string;
  /** Optional short bullet facts (formula, use, examples). */
  keyFacts?: string[];
  /** Optional FAQ items rendered as Q/A and embedded as FAQPage JSON-LD. */
  faqs?: AIAnswerBoxFAQ[];
  /** Optional source URL (defaults to current page). */
  url?: string;
}

const AIAnswerBox: React.FC<AIAnswerBoxProps> = ({
  term,
  answer,
  keyFacts = [],
  faqs = [],
  url,
}) => {
  const pageUrl = useMemo(
    () => url || (typeof window !== 'undefined' ? window.location.href : ''),
    [url]
  );

  // Inject JSON-LD: DefinedTerm + optional FAQPage.
  useEffect(() => {
    const scripts: HTMLScriptElement[] = [];

    const definedTerm = {
      '@context': 'https://schema.org',
      '@type': 'DefinedTerm',
      name: term,
      description: answer,
      inDefinedTermSet: 'https://typogrammar.com/grammar-guide',
      url: pageUrl,
    };
    const s1 = document.createElement('script');
    s1.type = 'application/ld+json';
    s1.text = JSON.stringify(definedTerm);
    document.head.appendChild(s1);
    scripts.push(s1);

    if (faqs.length > 0) {
      const faqPage = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      };
      const s2 = document.createElement('script');
      s2.type = 'application/ld+json';
      s2.text = JSON.stringify(faqPage);
      document.head.appendChild(s2);
      scripts.push(s2);
    }

    return () => {
      scripts.forEach((s) => {
        if (s.parentNode) s.parentNode.removeChild(s);
      });
    };
  }, [term, answer, faqs, pageUrl]);

  return (
    <section
      role="doc-abstract"
      aria-label={`Quick answer: ${term}`}
      itemScope
      itemType="https://schema.org/DefinedTerm"
      className="mb-8 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-6 dark:border-blue-400 dark:bg-slate-800/60"
    >
      <div className="mb-2 flex items-center gap-2">
        <span className="inline-flex items-center rounded-full bg-blue-500 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-white">
          Quick Answer
        </span>
        <h2
          itemProp="name"
          className="m-0 text-lg font-bold text-slate-900 dark:text-slate-100"
        >
          {term}
        </h2>
      </div>

      <p
        itemProp="description"
        className="m-0 text-base leading-relaxed text-slate-800 dark:text-slate-200"
      >
        {answer}
      </p>

      {keyFacts.length > 0 && (
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-300">
          {keyFacts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>
      )}

      {faqs.length > 0 && (
        <div className="mt-5 border-t border-blue-200 pt-4 dark:border-slate-700">
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400">
            Frequently Asked
          </h3>
          <dl className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i}>
                <dt className="font-semibold text-slate-900 dark:text-slate-100">
                  {f.q}
                </dt>
                <dd className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      <link itemProp="url" href={pageUrl} />
    </section>
  );
};

export default AIAnswerBox;
