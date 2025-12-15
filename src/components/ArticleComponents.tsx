
import React from 'react';

export const ArticleParagraph = ({ children }: { children?: React.ReactNode }) => (
  <p className="font-body text-slate-700 leading-relaxed mb-6 text-lg dark:text-slate-300">{children}</p>
);

export const ArticleHeading = ({ children }: { children?: React.ReactNode }) => (
  <h3 className="font-heading text-3xl font-bold text-slate-800 mt-10 mb-5 border-b-2 border-slate-200 pb-3 dark:text-slate-200 dark:border-slate-700">{children}</h3>
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