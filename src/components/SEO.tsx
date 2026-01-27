import React, { useEffect } from 'react';
import { buildSeoMeta, SeoInput } from '../seo/buildSeoMeta';

/**
 * Global SEO Component - Renders all meta tags, canonical, and JSON-LD
 * Use this in Layout.tsx to apply SEO to all pages automatically
 * 
 * This component checks if usePageMetadata hook has set custom values
 * and only applies defaults if no custom values exist.
 */
export const SEO: React.FC<SeoInput> = (props) => {
  const seoData = buildSeoMeta(props);

  useEffect(() => {
    // Helper to check if a meta tag was set by usePageMetadata (has content)
    const hasCustomValue = (selector: string) => {
      const el = document.querySelector(selector);
      return el && el.getAttribute('content');
    };

    const hasCustomCanonical = () => {
      const el = document.querySelector('link[rel="canonical"]');
      return el && el.getAttribute('href');
    };

    // Always update title on route change (global SEO)
    document.title = seoData.title;

    // Always update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seoData.description);

    // Always update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', seoData.canonicalUrl);

    // Always update robots meta
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', seoData.robots);

    // Helper to set/update meta tag
    const setMeta = (property: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      const selector = `meta[${attr}="${property}"]`;
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Always set Open Graph tags (these are not typically set by usePageMetadata)
    setMeta('og:title', seoData.og.title, true);
    setMeta('og:description', seoData.og.description, true);
    setMeta('og:url', seoData.og.url, true);
    setMeta('og:image', seoData.og.image, true);
    setMeta('og:site_name', seoData.og.siteName, true);
    setMeta('og:locale', seoData.og.locale, true);
    setMeta('og:type', seoData.og.type, true);

    // Always set Twitter Card tags (these are not typically set by usePageMetadata)
    setMeta('twitter:card', seoData.twitter.card);
    setMeta('twitter:title', seoData.twitter.title);
    setMeta('twitter:description', seoData.twitter.description);
    setMeta('twitter:image', seoData.twitter.image);

    // Remove old JSON-LD scripts added by SEO component
    document.querySelectorAll('script[type="application/ld+json"][data-seo="true"]').forEach(script => {
      script.remove();
    });

    // Add new JSON-LD scripts
    seoData.jsonLd.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo', 'true');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    // Cleanup function (optional - not strictly needed for SPA)
    return () => {
      // We don't remove meta tags on unmount since we're replacing them
      // with new values on each route change
    };
  }, [props.path, props.title, props.description, props.ogImage, props.noindex]);

  // This component doesn't render anything visible
  return null;
};

export default SEO;
