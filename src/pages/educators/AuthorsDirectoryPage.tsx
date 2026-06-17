import React, { useMemo, useState } from 'react';
import usePageMetadata from '../../hooks/usePageMetadata';
import EducatorsBanner from '../../components/educators/EducatorsBanner';
import SectionHeading from '../../components/educators/SectionHeading';
import AuthorCard from '../../components/educators/AuthorCard';
import EmptyAuthorsState from '../../components/educators/EmptyAuthorsState';
import EducatorsBreadcrumb from '../../components/educators/EducatorsBreadcrumb';
import {
  EDUCATORS,
  EXPERTISE_TAGS,
  Expertise,
  NETWORK_BANNER,
} from '../../constants/educators';

const SITE = 'https://typogrammar.com';

const AuthorsDirectoryPage: React.FC = () => {
  usePageMetadata({
    title: 'Meet Our Educators | TypoGrammar Authors Directory',
    description:
      'Browse the full directory of verified English teachers, IELTS trainers, linguists, and language professionals contributing to TypoGrammar.',
    ogType: 'website',
    ogImage: `${SITE}${NETWORK_BANNER}`,
    twitterCard: 'summary_large_image',
  });

  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<Expertise | 'All'>('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return EDUCATORS.filter((a) => {
      const matchesQuery =
        !q ||
        a.fullName.toLowerCase().includes(q) ||
        a.title.toLowerCase().includes(q);
      const matchesFilter =
        activeFilter === 'All' || a.expertise.includes(activeFilter);
      return matchesQuery && matchesFilter;
    });
  }, [query, activeFilter]);

  return (
    <div className="mx-auto max-w-6xl">
      <EducatorsBreadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Educators Network', href: '/educators/' },
          { label: 'Authors' },
        ]}
      />

      <EducatorsBanner
        compact
        eyebrow="Authors directory"
        title="Meet Our Educators"
        subtitle="The verified teachers, examiners, linguists, and language professionals behind the TypoGrammar Educators Network."
      />

      <SectionHeading
        eyebrow={`${EDUCATORS.length} contributor${EDUCATORS.length === 1 ? '' : 's'}`}
        title="Browse the network"
        description="Search by name or filter by area of expertise."
      />

      {/* Controls */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <label className="relative block md:w-80">
          <span className="sr-only">Search authors by name</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name..."
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 pl-10 font-body text-sm text-slate-900 placeholder:text-slate-400 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
          />
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="absolute left-3 top-3 h-4 w-4 text-slate-400"
          >
            <path
              fillRule="evenodd"
              d="M9 3a6 6 0 104.47 10.03l3.25 3.25a1 1 0 001.42-1.42l-3.25-3.25A6 6 0 009 3zm-4 6a4 4 0 118 0 4 4 0 01-8 0z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        <div className="flex flex-wrap gap-2">
          {(['All', ...EXPERTISE_TAGS] as const).map((tag) => {
            const active = activeFilter === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveFilter(tag as Expertise | 'All')}
                className={`rounded-full border px-3.5 py-1.5 font-body text-xs font-semibold transition-colors ${
                  active
                    ? 'border-red-600 bg-red-600 text-white'
                    : 'border-slate-300 bg-white text-slate-700 hover:border-slate-900 hover:text-slate-900 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-300 dark:hover:text-slate-100'
                }`}
                aria-pressed={active}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      {EDUCATORS.length === 0 ? (
        <EmptyAuthorsState slots={12} />
      ) : filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center dark:border-slate-600 dark:bg-slate-800/40">
          <p className="font-body text-slate-600 dark:text-slate-300">
            No contributors match your search.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((author) => (
            <AuthorCard key={author.slug} author={author} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthorsDirectoryPage;
