import React from 'react';
import { Link } from 'react-router-dom';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface EducatorsBreadcrumbProps {
  items: BreadcrumbItem[];
}

const SITE = 'https://typogrammar.com';

const EducatorsBreadcrumb: React.FC<EducatorsBreadcrumbProps> = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="mb-5 font-body text-sm text-slate-600 dark:text-slate-400"
      >
        <ol className="flex flex-wrap items-center gap-1">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={`${item.label}-${idx}`} className="flex items-center gap-1">
                {item.href && !isLast ? (
                  <Link
                    to={item.href}
                    className="hover:text-red-600 dark:hover:text-red-500"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-slate-900 dark:text-slate-100">
                    {item.label}
                  </span>
                )}
                {!isLast && <span aria-hidden="true" className="text-slate-400">›</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default EducatorsBreadcrumb;
