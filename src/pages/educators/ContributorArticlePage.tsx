import React from 'react';
import { Link, useParams } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import EducatorsBreadcrumb from '../../components/educators/EducatorsBreadcrumb';
import VerifiedBadge from '../../components/educators/VerifiedBadge';
import {
  getArticleBySlug,
  getAuthorBySlug,
} from '../../constants/educators';

const SITE = 'https://typogrammar.com';

const formatDate = (iso: string): string => {
  try {
    return new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return iso;
  }
};

const ArticleNotFound: React.FC = () => {
  usePageMetadata({
    title: 'Article Not Found | TypoGrammar Educators Network',
    description: 'This contributor article is not available. Browse all published contributor articles.',
    robots: 'noindex, follow',
  });
  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800/40 md:p-12">
      <p className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-red-600 dark:text-red-500">
        404 - Article not found
      </p>
      <h1 className="mt-2 font-heading text-3xl font-extrabold text-slate-900 dark:text-slate-100">
        We couldn't find that article
      </h1>
      <p className="mt-3 font-body text-slate-600 dark:text-slate-300">
        The article may have moved, or the URL may be incorrect.
      </p>
      <Link
        to="/contributor-articles/"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-600 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-red-600 dark:hover:text-white"
      >
        Browse all contributor articles
      </Link>
    </div>
  );
};

const ContributorArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <ArticleNotFound />;
  }

  const author = getAuthorBySlug(article.authorSlug);
  const ArticleContent = article.content;

  const articleUrl = `${SITE}/contributor-articles/${article.slug}/`;
  const imageUrl = article.featuredImage.startsWith('http')
    ? article.featuredImage
    : `${SITE}${article.featuredImage}`;

  usePageMetadata({
    title:
      article.seo?.title ?? `${article.title} | TypoGrammar Educators Network`,
    description: article.seo?.description ?? article.excerpt,
    canonical: articleUrl,
    ogType: 'article',
    ogImage: article.seo?.ogImage ?? imageUrl,
    twitterCard: 'summary_large_image',
  });

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: imageUrl,
    datePublished: article.publishDate,
    dateModified: article.modifiedDate ?? article.publishDate,
    mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
    author: author
      ? {
          '@type': 'Person',
          name: author.fullName,
          jobTitle: author.title,
          url: `${SITE}/author/${author.slug}/`,
          ...(author.linkedinUrl ? { sameAs: [author.linkedinUrl] } : {}),
        }
      : {
          '@type': 'Organization',
          name: 'TypoGrammar Editorial Team',
          url: SITE,
        },
    publisher: {
      '@type': 'Organization',
      name: 'TypoGrammar',
      url: SITE,
      logo: { '@type': 'ImageObject', url: `${SITE}/logo.png` },
    },
  };

  return (
    <div className="mx-auto max-w-3xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <EducatorsBreadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Educators Network', href: '/educators/' },
          { label: 'Articles', href: '/contributor-articles/' },
          { label: article.title },
        ]}
      />

      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800/40 md:p-10">
        {/* TOP SECTION */}
        <header className="mb-8">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-red-600 dark:text-red-500">
            Contributor article
          </p>
          <h1 className="mt-2 font-heading text-3xl font-extrabold leading-tight text-slate-900 dark:text-slate-100 md:text-4xl">
            {article.title}
          </h1>

          {author && (
            <div className="mt-6 flex flex-wrap items-center gap-4 border-y border-slate-200 py-4 dark:border-slate-700">
              <Link
                to={`/author/${author.slug}/`}
                className="flex items-center gap-3"
                aria-label={`Author: ${author.fullName}`}
              >
                <img
                  src={author.photo}
                  alt={author.fullName}
                  width={56}
                  height={56}
                  className="h-12 w-12 rounded-full object-cover ring-1 ring-slate-200 dark:ring-slate-600"
                />
                <span className="font-body text-sm leading-tight">
                  <span className="block font-semibold text-slate-900 hover:text-red-600 dark:text-slate-100 dark:hover:text-red-500">
                    Written by {author.fullName}
                  </span>
                  <span className="block text-slate-500 dark:text-slate-400">
                    {author.title}
                  </span>
                </span>
              </Link>
              <span className="text-slate-300 dark:text-slate-600" aria-hidden="true">|</span>
              <span className="font-body text-sm text-slate-600 dark:text-slate-300">
                {formatDate(article.publishDate)}
              </span>
              <span className="text-slate-300 dark:text-slate-600" aria-hidden="true">|</span>
              <span className="font-body text-sm text-slate-600 dark:text-slate-300">
                {article.readingTime} min read
              </span>
            </div>
          )}
        </header>

        {/* FEATURED IMAGE */}
        <figure className="-mx-6 mb-8 md:-mx-10">
          <img
            src={article.featuredImage}
            alt={article.title}
            width={1200}
            height={630}
            loading="eager"
            decoding="async"
            className="w-full object-cover"
          />
        </figure>

        {/* ARTICLE CONTENT */}
        <div className="prose-contributor font-body text-lg leading-relaxed text-slate-800 dark:text-slate-200">
          <ArticleContent />
        </div>

        {/* REFERENCES */}
        {article.references && article.references.length > 0 && (
          <section className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-700">
            <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-slate-100">
              References
              <span aria-hidden="true" className="mt-2 block h-[3px] w-10 bg-red-600" />
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-body text-sm text-slate-700 dark:text-slate-300">
              {article.references.map((ref, idx) => (
                <li key={idx}>
                  {ref.url ? (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-900 underline decoration-red-500 underline-offset-2 hover:text-red-600 dark:text-slate-100 dark:hover:text-red-500"
                    >
                      {ref.citation}
                    </a>
                  ) : (
                    ref.citation
                  )}
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* ABOUT THE AUTHOR */}
        {author && (
          <aside className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900/40 md:p-8">
            <p className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.18em] text-red-600 dark:text-red-500">
              About the author
            </p>
            <div className="flex flex-col gap-5 sm:flex-row">
              <Link to={`/author/${author.slug}/`} className="flex-shrink-0">
                <img
                  src={author.photo}
                  alt={author.fullName}
                  width={120}
                  height={120}
                  className="h-24 w-24 rounded-2xl object-cover ring-1 ring-slate-200 dark:ring-slate-600"
                />
              </Link>
              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <VerifiedBadge size="sm" />
                  {author.foundingContributor && (
                    <span className="inline-flex items-center rounded-full border border-slate-900 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-900 dark:border-slate-200 dark:text-slate-100">
                      Founding
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-slate-100">
                  <Link
                    to={`/author/${author.slug}/`}
                    className="hover:text-red-600 dark:hover:text-red-500"
                  >
                    {author.fullName}
                  </Link>
                </h3>
                <p className="mt-1 font-body text-sm text-slate-600 dark:text-slate-300">
                  {author.title}
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {author.bio.split(/\n\s*\n/)[0]}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Link
                    to={`/author/${author.slug}/`}
                    className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-red-600 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-red-600 dark:hover:text-white"
                  >
                    View full profile
                  </Link>
                  {author.linkedinUrl && (
                    <a
                      href={author.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:border-red-600 hover:text-red-600 dark:border-slate-600 dark:bg-transparent dark:text-slate-200 dark:hover:border-red-500 dark:hover:text-red-500"
                    >
                      LinkedIn
                    </a>
                  )}
                  {author.websiteUrl && (
                    <a
                      href={author.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:border-red-600 hover:text-red-600 dark:border-slate-600 dark:bg-transparent dark:text-slate-200 dark:hover:border-red-500 dark:hover:text-red-500"
                    >
                      Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          </aside>
        )}
      </article>
    </div>
  );
};

export default ContributorArticlePage;
