import { useEffect } from 'react';

interface BlogMetadataProps {
  title: string;
  description: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  image?: string;
  url: string;
  category?: string;
  tags?: string[];
}

const BlogMetadata: React.FC<BlogMetadataProps> = ({
  title,
  description,
  author = 'TypoGrammar Team',
  publishedDate,
  modifiedDate,
  image = 'https://typogrammar.com/og-image.jpg',
  url,
  category,
  tags = []
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, useProperty = false) => {
      const attribute = useProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('author', author);
    if (category) updateMetaTag('article:section', category);
    if (tags.length > 0) updateMetaTag('keywords', tags.join(', '));

    // Open Graph
    updateMetaTag('og:type', 'article', true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:site_name', 'TypoGrammar', true);
    if (publishedDate) updateMetaTag('article:published_time', publishedDate, true);
    if (modifiedDate) updateMetaTag('article:modified_time', modifiedDate, true);
    if (author) updateMetaTag('article:author', author, true);

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:url', url);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, author, publishedDate, modifiedDate, image, url, category, tags]);

  return null;
};

export default BlogMetadata;
