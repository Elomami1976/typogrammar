import { seoDefaults } from './seoDefaults';
import { humanizeSlug } from './humanizeSlug';
import pageSeoMap from './pageSeoMap.json';

export interface SeoInput {
  path: string;
  title?: string;
  description?: string;
  ogImage?: string;
  noindex?: boolean;
  faq?: Array<{ question: string; answer: string }>;
  article?: {
    headline?: string;
    datePublished?: string;
    dateModified?: string;
    author?: string;
  };
}

export interface SeoOutput {
  title: string;
  description: string;
  canonicalUrl: string;
  robots: string;
  og: {
    title: string;
    description: string;
    url: string;
    image: string;
    siteName: string;
    locale: string;
    type: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    image: string;
  };
  jsonLd: Array<Record<string, any>>;
}

/**
 * Build comprehensive SEO metadata for any page
 */
export function buildSeoMeta(input: SeoInput): SeoOutput {
  const { path, title, description, ogImage, noindex, faq, article } = input;

  // Check if page has custom overrides in pageSeoMap
  const pageOverrides = (pageSeoMap as Record<string, any>)[path] || {};

  // Build canonical URL
  const canonicalUrl = seoDefaults.siteUrl + path;

  // Build title
  let finalTitle = title || pageOverrides.title || humanizeSlug(path);
  if (!finalTitle.includes(seoDefaults.siteName)) {
    finalTitle += seoDefaults.brandSuffix;
  }

  // Build description
  let finalDescription =
    description ||
    pageOverrides.description ||
    `Learn ${humanizeSlug(path).toLowerCase()} with clear explanations, examples, and practice for IELTS & TOEFL.`;

  // Truncate description to 150-160 characters if too long
  if (finalDescription.length > 160) {
    finalDescription = finalDescription.substring(0, 157) + '...';
  }

  // Robots meta
  const robots = noindex ? 'noindex,nofollow' : 'index,follow';

  // OG Image
  const finalOgImage = ogImage || pageOverrides.ogImage || seoDefaults.defaultOgImage;
  const fullOgImage = finalOgImage.startsWith('http')
    ? finalOgImage
    : seoDefaults.siteUrl + finalOgImage;

  // Open Graph
  const og = {
    title: finalTitle,
    description: finalDescription,
    url: canonicalUrl,
    image: fullOgImage,
    siteName: seoDefaults.siteName,
    locale: seoDefaults.locale,
    type: article ? 'article' : 'website'
  };

  // Twitter Card
  const twitter = {
    card: 'summary_large_image',
    title: finalTitle,
    description: finalDescription,
    image: fullOgImage
  };

  // JSON-LD: Always include WebSite + Organization
  const jsonLd: Array<Record<string, any>> = [];

  // WebSite Schema
  jsonLd.push({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: seoDefaults.siteName,
    url: seoDefaults.siteUrl,
    description: seoDefaults.defaultDescription,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${seoDefaults.siteUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  });

  // Organization Schema
  jsonLd.push({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: seoDefaults.organization.name,
    url: seoDefaults.organization.url,
    logo: seoDefaults.organization.logo,
    description: seoDefaults.organization.description
  });

  // FAQ Schema (only if faq exists and has at least 2 questions)
  if (faq && faq.length >= 2) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    });
  }

  // Article Schema (only if article data provided)
  if (article) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.headline || finalTitle,
      datePublished: article.datePublished,
      dateModified: article.dateModified || article.datePublished,
      author: {
        '@type': 'Person',
        name: article.author || 'TypoGrammar Team'
      },
      publisher: {
        '@type': 'Organization',
        name: seoDefaults.organization.name,
        logo: {
          '@type': 'ImageObject',
          url: seoDefaults.organization.logo
        }
      },
      image: fullOgImage,
      url: canonicalUrl
    });
  }

  return {
    title: finalTitle,
    description: finalDescription,
    canonicalUrl,
    robots,
    og,
    twitter,
    jsonLd
  };
}
