/**
 * Convert URL slug/path into human-readable title
 * 
 * Examples:
 * - "/blog/ielts-vs-toefl-which-test-easier-better-2026" -> "IELTS vs TOEFL Which Test Easier Better 2026"
 * - "/ielts/vocabulary/band-8" -> "IELTS Vocabulary Band 8"
 * - "/topics/present-simple" -> "Present Simple"
 */
export function humanizeSlug(path: string): string {
  // Remove leading/trailing slashes and extract last segment if path has multiple parts
  const cleanPath = path.replace(/^\/|\/$/g, '');
  const segments = cleanPath.split('/');
  
  // Use the last meaningful segment (skip empty ones)
  const lastSegment = segments.filter(s => s.length > 0).pop() || cleanPath;
  
  // Replace hyphens and underscores with spaces
  let humanized = lastSegment.replace(/[-_]/g, ' ');
  
  // Title case each word, but keep certain acronyms uppercase
  const acronyms = ['IELTS', 'TOEFL', 'AI', 'FAQ', 'SEO', 'API', 'HTML', 'CSS', 'JS', 'UK', 'US', 'USA'];
  const preserveUppercase = new Set(acronyms.map(a => a.toLowerCase()));
  
  humanized = humanized
    .split(' ')
    .map(word => {
      if (!word) return '';
      
      // Check if it's an acronym (case-insensitive check)
      const lowerWord = word.toLowerCase();
      if (preserveUppercase.has(lowerWord)) {
        // Find the matching acronym with correct casing
        const acronym = acronyms.find(a => a.toLowerCase() === lowerWord);
        return acronym || word.toUpperCase();
      }
      
      // Check if word contains numbers (like "band-8" -> "Band 8")
      if (/\d/.test(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      
      // Regular title case
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
  
  return humanized;
}
