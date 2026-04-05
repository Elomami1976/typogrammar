
import React, { useState, useCallback } from 'react';

export const ArticleParagraph = ({ children }: { children?: React.ReactNode }) => (
  <p className="font-body text-slate-700 leading-relaxed mb-6 text-lg dark:text-slate-300">{children}</p>
);

interface ArticleHeadingProps {
  children?: React.ReactNode;
  id?: string;
}

export const ArticleHeading: React.FC<ArticleHeadingProps> = ({ children, id }) => (
  <h3 id={id} className="font-heading text-3xl font-bold text-slate-800 mt-10 mb-5 border-b-2 border-slate-200 pb-3 dark:text-slate-200 dark:border-slate-700">{children}</h3>
);

export const InlineCode = ({ children }: { children?: React.ReactNode }) => (
  <code className="font-code bg-blue-100 text-blue-800 font-semibold px-2 py-1 rounded-md text-sm dark:bg-blue-900/50 dark:text-blue-300">{children}</code>
);

export const CodeBlock = ({ children }: { children?: React.ReactNode }) => (
  <pre className="font-code bg-slate-900 text-slate-100 p-4 rounded-lg my-6 overflow-x-auto text-base dark:bg-slate-800 dark:text-slate-200">
    <code>{children}</code>
  </pre>
);

export const ExampleList: React.FC<{ items: string[] }> = ({ items }) => (
    <ul className="list-disc list-inside space-y-3 pl-4 my-4">
        {items.map((item, index) => (
            <li key={index} className="font-body text-slate-600 text-lg dark:text-slate-400">
                <InlineCode>{item}</InlineCode>
            </li>
        ))}
    </ul>
);

export const BulletList: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
    <ul className="list-disc list-inside space-y-3 pl-4 my-6">
        {items.map((item, index) => (
            <li key={index} className="font-body text-slate-700 leading-relaxed text-lg dark:text-slate-300">
                {item}
            </li>
        ))}
    </ul>
);

// ─── Callout Box Components ───────────────────────────────────────────────────

/** Green callout — use for correct examples */
export const CorrectExample: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-4 my-4 dark:bg-green-900/20 dark:border-green-400">
    <div className="flex items-start gap-3">
      <span className="text-green-600 dark:text-green-400 font-bold text-sm mt-0.5 flex-shrink-0 uppercase tracking-wide">✓ Correct</span>
      <div className="text-green-900 dark:text-green-100 text-base leading-relaxed">{children}</div>
    </div>
  </div>
);

/** Red callout — use for incorrect examples */
export const IncorrectExample: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4 my-4 dark:bg-red-900/20 dark:border-red-400">
    <div className="flex items-start gap-3">
      <span className="text-red-600 dark:text-red-400 font-bold text-sm mt-0.5 flex-shrink-0 uppercase tracking-wide">✗ Incorrect</span>
      <div className="text-red-900 dark:text-red-100 text-base leading-relaxed">{children}</div>
    </div>
  </div>
);

/** Amber callout — use for tips and memory tricks */
export const TipBox: React.FC<{ children: React.ReactNode; title?: string }> = ({ children, title = 'Tip' }) => (
  <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4 my-4 dark:bg-amber-900/20 dark:border-amber-400">
    <div className="flex items-start gap-3">
      <span className="text-amber-600 dark:text-amber-400 text-lg flex-shrink-0" aria-hidden="true">💡</span>
      <div>
        <p className="font-bold text-amber-900 dark:text-amber-100 text-sm uppercase tracking-wide mb-1">{title}</p>
        <div className="text-amber-900 dark:text-amber-100 text-base leading-relaxed">{children}</div>
      </div>
    </div>
  </div>
);

/** Blue callout — use for important notes and key rules */
export const NoteBox: React.FC<{ children: React.ReactNode; title?: string }> = ({ children, title = 'Note' }) => (
  <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-4 dark:bg-blue-900/20 dark:border-blue-400">
    <div className="flex items-start gap-3">
      <span className="text-blue-600 dark:text-blue-400 text-lg flex-shrink-0" aria-hidden="true">📌</span>
      <div>
        <p className="font-bold text-blue-900 dark:text-blue-100 text-sm uppercase tracking-wide mb-1">{title}</p>
        <div className="text-blue-900 dark:text-blue-100 text-base leading-relaxed">{children}</div>
      </div>
    </div>
  </div>
);

/** Example sentence with copy-to-clipboard button */
export const CopyableCode: React.FC<{ children: string }> = ({ children }) => {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }, [children]);

  return (
    <span className="inline-flex items-center gap-1.5 group">
      <code className="font-code bg-blue-100 text-blue-800 font-semibold px-2 py-1 rounded-md text-sm dark:bg-blue-900/50 dark:text-blue-300">
        {children}
      </code>
      <button
        onClick={copy}
        type="button"
        aria-label="Copy example"
        className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity p-0.5 rounded text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
      >
        {copied ? (
          <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      </button>
    </span>
  );
};

