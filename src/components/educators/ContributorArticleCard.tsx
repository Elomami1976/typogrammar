import React from 'react';
import { Link } from 'react-router-dom';
import {
  ContributorArticle,
  getAuthorBySlug,
} from '../../constants/educators';

interface ContributorArticleCardProps {
  article: ContributorArticle;
  /** Compact horizontal variant used in author profile lists. */
  compact?: boolean;
}

const formatDate = (iso: string): string => {
  try {
    return new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return iso;
  }
};

const ContributorArticleCard: React.FC<ContributorArticleCardProps> = ({
  article,
  compact = false,
}) => {
  const author = getAuthorBySlug(article.authorSlug);
  const url = `/contributor-articles/${article.slug}/`;

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-slate-600 ${
        compact ? '' : ''
      }`}
    >
      <Link
        to={url}
        className="block aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-700"
        aria-label={article.title}
      >
        <img
          src={article.featuredImage}
          alt={article.title}
          width={1200}
          height={675}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-bold leading-snug text-slate-900 dark:text-slate-100 md:text-xl">
          <Link to={url} className="hover:text-red-600 dark:hover:text-red-500">
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 font-body text-sm text-slate-600 dark:text-slate-400">
          {article.excerpt}
        </p>

        <div className="mt-4 flex flex-1 items-end gap-3">
          {author && (
            <Link
              to={`/author/${author.slug}/`}
              className="flex items-center gap-2 group/author"
              aria-label={`Author: ${author.fullName}`}
            >
              <img
                src={author.photo}
                alt=""
                width={36}
                height={36}
                loading="lazy"
                decoding="async"
                className="h-9 w-9 rounded-full object-cover ring-1 ring-slate-200 dark:ring-slate-600"
              />
              <span className="font-body text-xs leading-tight">
                <span className="block font-semibold text-slate-900 group-hover/author:text-red-600 dark:text-slate-100 dark:group-hover/author:text-red-500">
                  {author.fullName}
                </span>
                <span className="block text-slate-500 dark:text-slate-400">
                  {formatDate(article.publishDate)} · {article.readingTime} min read
                </span>
              </span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ContributorArticleCard;
