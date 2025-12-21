import React, { useState } from 'react';

interface BlogImageProps {
  slug: string;
  fallbackUrl?: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

/**
 * BlogImage Component
 * Automatically tries to load local images from /images/blog/{slug}.{ext}
 * Falls back to external URL if provided, or shows placeholder
 * 
 * Supported formats: .jpg, .jpeg, .png, .webp
 */
const BlogImage: React.FC<BlogImageProps> = ({ 
  slug, 
  fallbackUrl, 
  alt, 
  className = '', 
  loading = 'lazy' 
}) => {
  const [imageSrc, setImageSrc] = useState<string>(`/images/blog/${slug}.jpg`);
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    if (!hasError) {
      // First error: try .png
      if (imageSrc.endsWith('.jpg')) {
        setImageSrc(`/images/blog/${slug}.png`);
        return;
      }
      
      // Second error: try .webp
      if (imageSrc.endsWith('.png')) {
        setImageSrc(`/images/blog/${slug}.webp`);
        return;
      }
      
      // Third error: try .jpeg
      if (imageSrc.endsWith('.webp')) {
        setImageSrc(`/images/blog/${slug}.jpeg`);
        return;
      }
      
      // Final fallback: use external URL or show nothing
      if (fallbackUrl) {
        setImageSrc(fallbackUrl);
      } else {
        setHasError(true);
      }
    }
  };

  // Don't render if all attempts failed and no fallback
  if (hasError && !fallbackUrl) {
    return null;
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading={loading}
      onError={handleImageError}
    />
  );
};

export default BlogImage;
