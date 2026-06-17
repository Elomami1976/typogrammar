import React from 'react';
import { NETWORK_BANNER } from '../../constants/educators';

interface EducatorsBannerProps {
  /** Optional override of the on-banner eyebrow label. */
  eyebrow?: string;
  /** Optional headline overlaid on the banner. */
  title?: string;
  /** Optional supporting line under the headline. */
  subtitle?: string;
  /** Compact variant (used on inner pages) - shorter height. */
  compact?: boolean;
}

const EducatorsBanner: React.FC<EducatorsBannerProps> = ({
  eyebrow,
  title,
  subtitle,
  compact = false,
}) => {
  return (
    <section
      aria-label="TypoGrammar Educators Network"
      className={`relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-lg dark:border-slate-700 ${
        compact ? 'mb-8' : 'mb-10'
      }`}
    >
      <img
        src={NETWORK_BANNER}
        alt="TypoGrammar Educators Network"
        width={1200}
        height={compact ? 300 : 400}
        loading="eager"
        decoding="async"
        className={`w-full object-cover ${
          compact ? 'h-40 md:h-56' : 'h-56 md:h-72 lg:h-[360px]'
        }`}
      />
      {(eyebrow || title || subtitle) && (
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-black/35 to-transparent">
          <div className="w-full px-6 pb-6 md:px-10 md:pb-10">
            {eyebrow && (
              <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                {eyebrow}
              </p>
            )}
            {title && (
              <h1 className="font-heading text-2xl font-extrabold leading-tight text-white drop-shadow md:text-4xl">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="mt-2 max-w-3xl font-body text-sm text-slate-100/90 md:text-base">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default EducatorsBanner;
