import React from 'react';
import { Link } from 'react-router-dom';
import { ContributorAuthor, getArticlesByAuthor } from '../../constants/educators';
import VerifiedBadge from './VerifiedBadge';

interface AuthorCardProps {
  author: ContributorAuthor;
  /** When true, shows the LinkedIn icon next to the View Profile button. */
  showLinkedIn?: boolean;
  /** When true, shows the article count under the title. */
  showArticleCount?: boolean;
}

const AuthorCard: React.FC<AuthorCardProps> = ({
  author,
  showLinkedIn = true,
  showArticleCount = true,
}) => {
  const articleCount = showArticleCount ? getArticlesByAuthor(author.slug).length : 0;
  const profileUrl = `/author/${author.slug}/`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-slate-600">
      <Link
        to={profileUrl}
        className="block aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-700"
        aria-label={`View ${author.fullName}'s profile`}
      >
        <img
          src={author.photo}
          alt={`${author.fullName} - ${author.title}`}
          width={400}
          height={400}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          {author.foundingContributor && (
            <span className="inline-flex items-center rounded-full border border-slate-900 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-900 dark:border-slate-200 dark:text-slate-100">
              Founding
            </span>
          )}
          <VerifiedBadge size="sm" />
        </div>

        <h3 className="font-heading text-lg font-bold leading-snug text-slate-900 dark:text-slate-100">
          <Link
            to={profileUrl}
            className="hover:text-red-600 dark:hover:text-red-500"
          >
            {author.fullName}
          </Link>
        </h3>
        <p className="mt-1 font-body text-sm text-slate-600 dark:text-slate-400">
          {author.title}
        </p>

        {showArticleCount && (
          <p className="mt-3 font-body text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {articleCount === 1 ? '1 article' : `${articleCount} articles`}
          </p>
        )}

        <div className="mt-4 flex flex-1 items-end gap-2">
          <Link
            to={profileUrl}
            className="inline-flex flex-1 items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-600 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-red-600 dark:hover:text-white"
          >
            View Profile
          </Link>
          {showLinkedIn && author.linkedinUrl && (
            <a
              href={author.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${author.fullName} on LinkedIn`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 text-slate-700 transition-colors hover:border-red-600 hover:text-red-600 dark:border-slate-600 dark:text-slate-300 dark:hover:border-red-500 dark:hover:text-red-500"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.76c1.4-2.59 7-2.78 7 2.48V19z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default AuthorCard;
