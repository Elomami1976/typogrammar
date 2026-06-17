import React from 'react';
import { Link } from 'react-router-dom';

interface EmptyAuthorsStateProps {
  /** Number of skeleton card slots to render. */
  slots?: number;
}

/**
 * Shown on /educators and /authors while the contributor roster is being
 * onboarded. Demonstrates the card layout without inventing fake identities,
 * so the page never publishes fictional educators (protects E-E-A-T).
 */
const EmptyAuthorsState: React.FC<EmptyAuthorsStateProps> = ({ slots = 12 }) => (
  <div>
    <div className="mb-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center dark:border-slate-600 dark:bg-slate-800/40 md:p-8">
      <p className="font-heading text-lg font-bold text-slate-900 dark:text-slate-100">
        Our founding contributors are being onboarded
      </p>
      <p className="mx-auto mt-2 max-w-2xl font-body text-sm text-slate-600 dark:text-slate-300 md:text-base">
        We're currently verifying the first cohort of educators. Profiles
        appear here as soon as each contributor has signed the contributor
        agreement and been added to the network.
      </p>
      <Link
        to="/contributor-guidelines/"
        className="mt-5 inline-flex items-center justify-center rounded-lg border border-slate-900 bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-900 hover:text-white dark:border-slate-100 dark:bg-transparent dark:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900"
      >
        Become a contributor
      </Link>
    </div>

    <ul
      aria-hidden="true"
      className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4"
    >
      {Array.from({ length: slots }).map((_, i) => (
        <li
          key={i}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800/40"
        >
          <div className="aspect-square w-full bg-slate-100 dark:bg-slate-700" />
          <div className="space-y-2 p-4">
            <div className="h-3 w-2/3 rounded bg-slate-200 dark:bg-slate-700" />
            <div className="h-3 w-1/2 rounded bg-slate-200 dark:bg-slate-700" />
            <div className="mt-3 h-8 w-full rounded bg-slate-100 dark:bg-slate-700/70" />
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default EmptyAuthorsState;
