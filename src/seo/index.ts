/**
 * SEO System Index - Central export point for all SEO utilities
 * 
 * USAGE:
 * 
 * 1. Global SEO (already wired in Layout.tsx):
 *    - Automatically applied to all pages
 *    - Uses location.pathname to generate SEO
 *    - Falls back to humanized slug if no custom data
 * 
 * 2. Per-page overrides (TWO methods):
 * 
 *    A. Use existing usePageMetadata hook (backward compatible):
 *       import usePageMetadata from '../hooks/usePageMetadata';
 *       usePageMetadata({ title: 'Custom Title', description: '...' });
 * 
 *    B. Add to pageSeoMap.json (no code changes):
 *       {
 *         "/your-path": {
 *           "title": "Custom Title",
 *           "description": "Custom description"
 *         }
 *       }
 * 
 * 3. Adding FAQ or Article schema:
 *    - Update page component to pass data to SEO via context or prop
 *    - Or extend pageSeoMap.json to support FAQ/article data
 */

export { seoDefaults } from './seoDefaults';
export { humanizeSlug } from './humanizeSlug';
export { buildSeoMeta } from './buildSeoMeta';
export type { SeoInput, SeoOutput } from './buildSeoMeta';
