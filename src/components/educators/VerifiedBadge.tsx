import React from 'react';

interface VerifiedBadgeProps {
  size?: 'sm' | 'md';
}

const VerifiedBadge: React.FC<VerifiedBadgeProps> = ({ size = 'md' }) => {
  const isSm = size === 'sm';
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-red-600 font-semibold uppercase tracking-wide text-white shadow-sm ring-1 ring-red-700/40 ${
        isSm ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs'
      }`}
      title="Verified TypoGrammar Educator"
    >
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        className={isSm ? 'h-3 w-3' : 'h-3.5 w-3.5'}
      >
        <path
          fillRule="evenodd"
          d="M10 1.5l2.25 1.65 2.78-.25.65 2.72L17.85 7.4 17.6 10l1.65 2.25-2.72.65-.25 2.78-2.72.65L12 17.85 9.75 16.2l-2.78.25-.65-2.72L4.15 12.6 4.4 10 2.75 7.75 5.47 7.1l.25-2.78 2.72-.65L10 1.5zm-.85 11.16l5.06-5.06-1.41-1.41-3.65 3.65-1.4-1.4-1.42 1.41 2.82 2.81z"
          clipRule="evenodd"
        />
      </svg>
      Verified Educator
    </span>
  );
};

export default VerifiedBadge;
