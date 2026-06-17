import React, { useMemo, useState } from 'react';
import usePageMetadata from '../../hooks/usePageMetadata';
import EducatorsBanner from '../../components/educators/EducatorsBanner';
import SectionHeading from '../../components/educators/SectionHeading';
import ContributorArticleCard from '../../components/educators/ContributorArticleCard';
import EducatorsBreadcrumb from '../../components/educators/EducatorsBreadcrumb';
import {
  CONTRIBUTOR_ARTICLES,
  EDUCATORS,
  NETWORK_BANNER,
} from '../../constants/educators';
import { Link } from 'react-router-dom';

const SITE = 'https://typogrammar.com';

const ContributorArticlesPage: React.FC = () => {
  usePageMetadata({
    title: 'Contributor Articles | TypoGrammar Educators Network',
    description:
      'Original English-language articles written by verified TypoGrammar educators - teachers, IELTS trainers, linguists, and language professionals.',
    ogType: 'website',
    ogImage: `${SITE}${NETWORK_BANNER}`,
    twitterCard: 'summary_large_image',
  });

  const [query, setQuery] = useState('');
  const [author, setAuthor] = useState<string>('All');

  const articles = useMemo(() => {
    const q = query.trim().toLowerCase();
    return [...CONTRIBUTOR_ARTICLES]
      .sort((a, b) => (a.publishDate > b.publishDate ? -1 : 1))
      .filter((a) => {
        const matchesQuery =
          !q ||
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q);
        const matchesAuthor = author === 'All' || a.authorSlug === author;
        return matchesQuery && matchesAuthor;
      });
  }, [query, author]);

  return (
    <div className="mx-auto max-w-6xl">
      <EducatorsBreadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Educators Network', href: '/educators/' },
          { label: 'Contributor Articles' },
        ]}
      />

      <EducatorsBanner
        compact
        eyebrow="Network publication"
        title="Contributor Articles"
        subtitle="Original, author-written English-language articles from the TypoGrammar Educators Network."
      />

      <SectionHeading
        eyebrow={`${CONTRIBUTOR_ARTICLES.length} article${CONTRIBUTOR_ARTICLES.length === 1 ? '' : 's'}`}
        title="Latest from our educators"
      />

      {/* Controls */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <label className="relative block md:w-80">
          <span className="sr-only">Search articles</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 pl-10 font-body text-sm text-slate-900 placeholder:text-slate-400 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
          />
          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="absolute left-3 top-3 h-4 w-4 text-slate-400">
            <path fillRule="evenodd" d="M9 3a6 6 0 104.47 10.03l3.25 3.25a1 1 0 001.42-1.42l-3.25-3.25A6 6 0 009 3zm-4 6a4 4 0 118 0 4 4 0 01-8 0z" clipRule="evenodd" />
          </svg>
        </label>

        {EDUCATORS.length > 0 && (
          <label className="md:w-64">
            <span className="sr-only">Filter by author</span>
            <select
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 font-body text-sm text-slate-900 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
            >
              <option value="All">All authors</option>
              {EDUCATORS.map((a) => (
                <option key={a.slug} value={a.slug}>
                  {a.fullName}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>

      {articles.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ContributorArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center dark:border-slate-600 dark:bg-slate-800/40">
          <p className="font-heading text-lg font-bold text-slate-900 dark:text-slate-100">
            No contributor articles published yet
          </p>
          <p className="mx-auto mt-2 max-w-2xl font-body text-sm text-slate-600 dark:text-slate-300">
            The first original articles from our founding educators will appear
            here as soon as they're published.
          </p>
          <Link
            to="/contributor-guidelines/"
            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-slate-900 bg-white px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-100 dark:bg-transparent dark:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900"
          >
            Become a contributor
          </Link>
        </div>
      )}
    </div>
  );
};

export default ContributorArticlesPage;
