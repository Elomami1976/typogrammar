import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  as?: 'h2' | 'h3';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  as: Tag = 'h2',
}) => (
  <header
    className={`mb-8 ${align === 'center' ? 'text-center' : 'text-left'}`}
  >
    {eyebrow && (
      <p className="mb-2 font-heading text-xs font-bold uppercase tracking-[0.18em] text-red-600 dark:text-red-500">
        {eyebrow}
      </p>
    )}
    <Tag className="font-heading text-2xl font-extrabold leading-tight text-slate-900 dark:text-slate-100 md:text-3xl">
      {title}
      <span
        aria-hidden="true"
        className={`mt-3 block h-[3px] w-12 bg-red-600 ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </Tag>
    {description && (
      <p className="mt-4 max-w-2xl font-body text-base text-slate-600 dark:text-slate-300 md:text-lg">
        {description}
      </p>
    )}
  </header>
);

export default SectionHeading;
