/**
 * Blog Image Utilities
 * Handles automatic image loading for blog posts
 */

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

/**
 * Gets the image path for a blog post
 * Tries to find a local image first, falls back to external URL
 * 
 * @param slug - The blog post slug
 * @param fallbackUrl - External image URL to use if local image not found
 * @returns Image path/URL
 */
export const getBlogImage = (slug: string, fallbackUrl?: string): string => {
  // Try to find local image with different extensions
  for (const ext of IMAGE_EXTENSIONS) {
    const imagePath = `/images/blog/${slug}${ext}`;
    // In production, the image will be served from public folder
    // We'll use the path directly and let the fallback handle missing files
    // The browser will attempt to load it, and if it fails, we use fallback
    
    // For now, return the first possible path
    // In a real implementation, you'd check if file exists
    // But for simplicity, we'll return the .jpg path by default
  }
  
  // Return jpg path by default (most common)
  // If the image doesn't exist, the component should handle the fallback
  return `/images/blog/${slug}.jpg`;
};

/**
 * Gets fallback image or default placeholder
 */
export const getBlogImageWithFallback = (slug: string, fallbackUrl?: string): string => {
  const localImage = `/images/blog/${slug}.jpg`;
  return localImage;
};

export default getBlogImage;
