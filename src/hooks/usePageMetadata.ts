import { useEffect } from 'react';

interface PageMetadata {
  title?: string;
  description?: string;
  canonical?: string;
  robots?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

const SITE_URL = 'https://typogrammar.com';
const DESCRIPTION_SELECTOR = 'meta[name="description"]';
const ROBOTS_SELECTOR = 'meta[name="robots"]';
const CANONICAL_SELECTOR = 'link[rel="canonical"]';
const MAX_DESCRIPTION_LENGTH = 160;

// Truncate at the last word boundary before the limit so descriptions stay
// readable and SEO/AI-agent validators don't flag "Meta description too long".
const truncateDescription = (text: string): string => {
  const trimmed = text.trim().replace(/\s+/g, ' ');
  if (trimmed.length <= MAX_DESCRIPTION_LENGTH) return trimmed;
  const cut = trimmed.slice(0, MAX_DESCRIPTION_LENGTH - 1);
  const lastSpace = cut.lastIndexOf(' ');
  const base = lastSpace > 100 ? cut.slice(0, lastSpace) : cut;
  return base.replace(/[\s,;:.\-]+$/, '') + '…';
};

/**
 * Normalize URL path for canonical:
 * - Add trailing slash (except root)
 * - Remove query parameters and hash fragments
 * - Ensure consistent format (matches buildSeoMeta.ts convention)
 */
const normalizeCanonicalPath = (path: string): string => {
  // Remove query params and hash
  let cleanPath = path.split('?')[0].split('#')[0];
  // Add trailing slash (but keep root / as-is)
  if (cleanPath === '/') return cleanPath;
  if (!cleanPath.endsWith('/')) {
    cleanPath = cleanPath + '/';
  }
  return cleanPath;
};

/**
 * Normalize a full canonical URL: strip query/hash and ensure trailing slash
 * on the path. This keeps all canonicals consistent with the sitemap and avoids
 * "Alternate page with proper canonical tag" issues in Google Search Console.
 */
const normalizeCanonicalUrl = (rawUrl: string): string => {
  try {
    const u = new URL(rawUrl);
    u.search = '';
    u.hash = '';
    if (u.pathname !== '/' && !u.pathname.endsWith('/')) {
      u.pathname = u.pathname + '/';
    }
    return u.toString();
  } catch {
    // Fallback for non-absolute URLs: strip query/hash and append slash
    const noQuery = rawUrl.split('?')[0].split('#')[0];
    if (noQuery.endsWith('/')) return noQuery;
    return noQuery + '/';
  }
};

// Helper function to set or update a meta tag
const setMetaTag = (property: string, content: string, isProperty = false) => {
  const selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
  let meta = document.querySelector<HTMLMetaElement>(selector);
  if (!meta) {
    meta = document.createElement('meta');
    if (isProperty) {
      meta.setAttribute('property', property);
    } else {
      meta.setAttribute('name', property);
    }
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
  return meta;
};

// Helper function to remove a meta tag
const removeMetaTag = (property: string, isProperty = false) => {
  const selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
  const meta = document.querySelector<HTMLMetaElement>(selector);
  if (meta) {
    document.head.removeChild(meta);
  }
};

export default function usePageMetadata({ 
  title, 
  description, 
  canonical, 
  robots,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage,
  ogType,
  twitterCard,
  twitterTitle,
  twitterDescription,
  twitterImage
}: PageMetadata) {
  useEffect(() => {
    const previousTitle = document.title;
    const descriptionEl = document.querySelector<HTMLMetaElement>(DESCRIPTION_SELECTOR);
    const previousDescription = descriptionEl?.getAttribute('content') ?? undefined;
    const robotsEl = document.querySelector<HTMLMetaElement>(ROBOTS_SELECTOR);
    const previousRobots = robotsEl?.getAttribute('content') ?? undefined;
    const canonicalEl = document.querySelector<HTMLLinkElement>(CANONICAL_SELECTOR);
    const previousCanonical = canonicalEl?.getAttribute('href') ?? undefined;

    if (title) {
      document.title = title;
    }

    if (description) {
      let meta = descriptionEl;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', truncateDescription(description));
    }

    // Always set canonical URL - use provided value or auto-generate from current path.
    // Always normalize to a trailing-slash form so it matches the sitemap URLs
    // and prevents "Alternate page with proper canonical tag" duplicates in GSC.
    const normalizedPath = normalizeCanonicalPath(window.location.pathname);
    const canonicalUrl = canonical
      ? normalizeCanonicalUrl(canonical)
      : `${SITE_URL}${normalizedPath}`;
    let link = canonicalEl;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);

    // Also update og:url if not explicitly set
    if (!ogUrl) {
      setMetaTag('og:url', canonicalUrl, true);
    }

    // Set robots meta tag (default to index,follow if not specified)
    const robotsContent = robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    let robotsMeta = robotsEl;
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', robotsContent);

    // Set Open Graph meta tags
    if (ogTitle) setMetaTag('og:title', ogTitle, true);
    if (ogDescription) setMetaTag('og:description', truncateDescription(ogDescription), true);
    if (ogUrl) setMetaTag('og:url', normalizeCanonicalUrl(ogUrl), true);
    if (ogImage) setMetaTag('og:image', ogImage, true);
    if (ogType) setMetaTag('og:type', ogType, true);

    // Set Twitter Card meta tags
    if (twitterCard) setMetaTag('twitter:card', twitterCard);
    if (twitterTitle) setMetaTag('twitter:title', twitterTitle);
    if (twitterDescription) setMetaTag('twitter:description', truncateDescription(twitterDescription));
    if (twitterImage) setMetaTag('twitter:image', twitterImage);

    return () => {
      if (title) {
        document.title = previousTitle;
      }
      if (description) {
        const meta = document.querySelector<HTMLMetaElement>(DESCRIPTION_SELECTOR);
        if (meta) {
          if (previousDescription !== undefined) {
            meta.setAttribute('content', previousDescription);
          } else {
            document.head.removeChild(meta);
          }
        }
      }
      // Always restore previous canonical (since we always set one now)
      const link = document.querySelector<HTMLLinkElement>(CANONICAL_SELECTOR);
      if (link && previousCanonical !== undefined) {
        link.setAttribute('href', previousCanonical);
      }
      if (robots) {
        const meta = document.querySelector<HTMLMetaElement>(ROBOTS_SELECTOR);
        if (meta) {
          if (previousRobots !== undefined) {
            meta.setAttribute('content', previousRobots);
          } else {
            document.head.removeChild(meta);
          }
        }
      }
      
      // Remove Open Graph tags
      if (ogTitle) removeMetaTag('og:title', true);
      if (ogDescription) removeMetaTag('og:description', true);
      if (ogUrl) removeMetaTag('og:url', true);
      if (ogImage) removeMetaTag('og:image', true);
      if (ogType) removeMetaTag('og:type', true);
      
      // Remove Twitter Card tags
      if (twitterCard) removeMetaTag('twitter:card');
      if (twitterTitle) removeMetaTag('twitter:title');
      if (twitterDescription) removeMetaTag('twitter:description');
      if (twitterImage) removeMetaTag('twitter:image');
    };
  }, [title, description, canonical, robots, ogTitle, ogDescription, ogUrl, ogImage, ogType, twitterCard, twitterTitle, twitterDescription, twitterImage]);
}
