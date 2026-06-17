import React from 'react';
import { Link, useParams } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import EducatorsBanner from '../../components/educators/EducatorsBanner';
import VerifiedBadge from '../../components/educators/VerifiedBadge';
import ContributorArticleCard from '../../components/educators/ContributorArticleCard';
import EducatorsBreadcrumb from '../../components/educators/EducatorsBreadcrumb';
import {
  getArticlesByAuthor,
  getAuthorBySlug,
  NETWORK_BANNER,
} from '../../constants/educators';

const SITE = 'https://typogrammar.com';

const AuthorNotFound: React.FC = () => {
  usePageMetadata({
    title: 'Author Not Found | TypoGrammar Educators Network',
    description: 'This contributor profile is not available. Browse our verified educators directory.',
    robots: 'noindex, follow',
  });
  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800/40 md:p-12">
      <p className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-red-600 dark:text-red-500">
        404 - Profile not found
      </p>
      <h1 className="mt-2 font-heading text-3xl font-extrabold text-slate-900 dark:text-slate-100">
        We couldn't find that contributor
      </h1>
      <p className="mt-3 font-body text-slate-600 dark:text-slate-300">
        The profile may have moved, or the URL may be incorrect.
      </p>
      <Link
        to="/authors/"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-600 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-red-600 dark:hover:text-white"
      >
        Browse all educators
      </Link>
    </div>
  );
};

const AuthorProfilePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const author = slug ? getAuthorBySlug(slug) : undefined;

  if (!author) {
    return <AuthorNotFound />;
  }

  const articles = getArticlesByAuthor(author.slug);
  const profileUrl = `${SITE}/author/${author.slug}/`;
  const photoUrl = author.photo.startsWith('http')
    ? author.photo
    : `${SITE}${author.photo}`;

  usePageMetadata({
    title: `${author.fullName} - ${author.title} | TypoGrammar Educators`,
    description: author.bio.slice(0, 155),
    canonical: profileUrl,
    ogType: 'profile',
    ogImage: photoUrl,
    twitterCard: 'summary_large_image',
  });

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.fullName,
    jobTitle: author.title,
    description: author.bio,
    image: photoUrl,
    url: profileUrl,
    ...(author.linkedinUrl || author.websiteUrl
      ? {
          sameAs: [author.linkedinUrl, author.websiteUrl].filter(Boolean),
        }
      : {}),
    ...(author.country ? { nationality: author.country } : {}),
    knowsAbout: author.expertise,
    affiliation: {
      '@type': 'Organization',
      name: 'TypoGrammar',
      url: SITE,
    },
  };

  return (
    <div className="mx-auto max-w-5xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <EducatorsBreadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Educators Network', href: '/educators/' },
          { label: 'Authors', href: '/authors/' },
          { label: author.fullName },
        ]}
      />

      <EducatorsBanner compact />

      {/* Profile header */}
      <section className="-mt-4 mb-10 grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800/60 md:grid-cols-[200px,1fr] md:gap-8 md:p-8">
        <div className="mx-auto md:mx-0">
          <img
            src={author.photo}
            alt={`${author.fullName} - ${author.title}`}
            width={400}
            height={400}
            loading="eager"
            decoding="async"
            className="h-40 w-40 rounded-2xl object-cover ring-2 ring-slate-200 dark:ring-slate-600 md:h-48 md:w-48"
          />
        </div>

        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            {author.foundingContributor && (
              <span className="inline-flex items-center rounded-full border border-slate-900 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-900 dark:border-slate-200 dark:text-slate-100">
                Founding Contributor
              </span>
            )}
            <VerifiedBadge />
            <span className="font-body text-xs text-slate-500 dark:text-slate-400">
              TypoGrammar Contributor
            </span>
          </div>

          <h1 className="font-heading text-3xl font-extrabold leading-tight text-slate-900 dark:text-slate-100 md:text-4xl">
            {author.fullName}
          </h1>
          <p className="mt-1 font-body text-base text-slate-600 dark:text-slate-300">
            {author.title}
            {author.country ? ` · ${author.country}` : ''}
          </p>

          {author.expertise.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {author.expertise.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-slate-300 bg-slate-50 px-2.5 py-0.5 font-body text-xs text-slate-700 dark:border-slate-600 dark:bg-slate-700/50 dark:text-slate-200"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {author.linkedinUrl && (
              <a
                href={author.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-600 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-red-600 dark:hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.76c1.4-2.59 7-2.78 7 2.48V19z" />
                </svg>
                LinkedIn
              </a>
            )}
            {author.websiteUrl && (
              <a
                href={author.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-900 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-900 hover:text-white dark:border-slate-100 dark:bg-transparent dark:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900"
              >
                Personal website
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="mb-12 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800/40 md:p-8">
        <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-slate-100">
          About {author.fullName.split(' ')[0]}
          <span aria-hidden="true" className="mt-3 block h-[3px] w-12 bg-red-600" />
        </h2>
        <div className="mt-5 space-y-4 font-body text-base leading-relaxed text-slate-700 dark:text-slate-300">
          {author.bio
            .split(/\n\s*\n/)
            .map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
        </div>
      </section>

      {/* Articles */}
      <section className="mb-10">
        <h2 className="mb-6 font-heading text-2xl font-bold text-slate-900 dark:text-slate-100">
          Articles by {author.fullName.split(' ')[0]}
          <span aria-hidden="true" className="mt-3 block h-[3px] w-12 bg-red-600" />
        </h2>

        {articles.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ContributorArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-slate-600 dark:bg-slate-800/40">
            <p className="font-body text-slate-600 dark:text-slate-300">
              {author.fullName} hasn't published any articles in the
              network yet. New articles will appear here.
            </p>
            <Link
              to="/contributor-articles/"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-slate-900 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-100 dark:bg-transparent dark:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900"
            >
              Browse all contributor articles
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default AuthorProfilePage;
