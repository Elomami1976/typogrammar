import React from 'react';

interface ExamBadgeStripProps {
  label?: string;
}

const exams: { name: string; sub?: string; logoText: string; tone: string }[] = [
  { name: 'IELTS', sub: 'Academic & General', logoText: 'IELTS', tone: 'text-blue-700 dark:text-blue-300' },
  { name: 'TOEFL iBT', sub: '2026 format', logoText: 'TOEFL', tone: 'text-emerald-700 dark:text-emerald-300' },
  { name: 'Cambridge', sub: 'B1–C2', logoText: 'CAMBRIDGE', tone: 'text-rose-700 dark:text-rose-300' },
  { name: 'PTE Academic', sub: 'Pearson', logoText: 'PTE', tone: 'text-violet-700 dark:text-violet-300' },
  { name: 'Duolingo English', sub: 'DET', logoText: 'DUOLINGO', tone: 'text-teal-700 dark:text-teal-300' },
];

/**
 * Monochrome "exam wordmarks" strip — establishes authority without
 * needing real logo files. Designed for the homepage trust section.
 */
const ExamBadgeStrip: React.FC<ExamBadgeStripProps> = ({
  label = 'Built for the exams that matter',
}) => {
  return (
    <section
      aria-label="Exam coverage"
      className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 backdrop-blur px-5 sm:px-8 py-6"
    >
      <p className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-5">
        {label}
      </p>
      <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
        {exams.map((e) => (
          <li
            key={e.name}
            className="group flex flex-col items-center text-center select-none"
            title={e.name}
          >
            <span
              className={`font-heading font-extrabold tracking-[0.22em] text-base sm:text-lg ${e.tone} opacity-80 group-hover:opacity-100 transition-opacity`}
            >
              {e.logoText}
            </span>
            {e.sub && (
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mt-0.5">
                {e.sub}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExamBadgeStrip;
