# Blog Image System - Complete Guide

## Overview
The blog image system automatically loads local images from `public/images/blog/` and falls back to external URLs if local images are not found.

## How It Works

### 1. Automatic Image Loading
- The `BlogImage` component tries to load images in this order:
  1. `/images/blog/{post-slug}.jpg`
  2. `/images/blog/{post-slug}.png`
  3. `/images/blog/{post-slug}.webp`
  4. `/images/blog/{post-slug}.jpeg`
  5. Falls back to external URL from `blogPosts.tsx`

### 2. Adding Images to Blog Posts

**Step 1: Find the post slug**
- Each blog post has a unique slug (e.g., `mastering-subject-verb-agreement`)
- See `IMAGE-NAMES.txt` for a complete list of all blog post slugs

**Step 2: Name your image file**
- Use the exact slug as the filename
- Add supported extension: `.jpg`, `.png`, `.webp`, or `.jpeg`
- Example: `mastering-subject-verb-agreement.jpg`

**Step 3: Place image in folder**
- Put the image in: `public/images/blog/`
- That's it! No code changes needed

### 3. Image Guidelines

**Dimensions:**
- Recommended: 1200x630px (optimal for social media and blog display)
- Minimum: 800x400px
- Aspect ratio: 16:9 or close to it

**File Size:**
- Keep under 500KB for fast loading
- Use compression tools if needed (TinyPNG, ImageOptim, etc.)

**Format Priority:**
1. **WebP** - Best compression and quality (use if supported)
2. **JPEG** - Standard choice for photos
3. **PNG** - For images with text or transparency needs

**Content:**
- Use relevant, high-quality images
- Ensure proper licensing (own images or licensed stock photos)
- Avoid copyrighted material without permission

### 4. Examples

**Good example:**
```
File: public/images/blog/mastering-subject-verb-agreement.jpg
Size: 1200x630px, 280KB
Format: JPEG
Content: Educational graphic about grammar
```

**Also works:**
```
File: public/images/blog/mastering-subject-verb-agreement.webp
Size: 1200x630px, 150KB
Format: WebP
Content: Same image, better compression
```

### 5. Fallback Behavior

If you don't add a local image:
- The system will use the external URL from `blogPosts.tsx`
- No broken images - it's safe to migrate images gradually
- You can start by adding images for your most important posts

### 6. Testing Your Images

**After adding an image:**
1. Refresh the blog page (`/blog`)
2. Check if the image loads correctly
3. Click on the post to see full-size image
4. Test on mobile and desktop

**If image doesn't load:**
- Check filename matches slug exactly
- Verify file extension is correct
- Ensure file is in `public/images/blog/` folder
- Check browser console for errors

### 7. Bulk Adding Images

To add multiple images at once:
```bash
# Copy all your images to the blog folder
cp your-images/*.jpg public/images/blog/

# Make sure they're named correctly (use IMAGE-NAMES.txt as reference)
```

### 8. Technical Details

**Component:** `src/components/BlogImage.tsx`
- Handles automatic format detection
- Provides error handling and fallbacks
- Supports lazy loading for performance

**Used in:**
- `src/pages/BlogPage.tsx` - Blog listing page
- `src/pages/BlogPostPage.tsx` - Individual post pages

**No changes needed in:**
- `src/constants/blogPosts.tsx` - Keep existing external URLs as fallbacks

## Quick Start Checklist

- [ ] Find your post slug from `IMAGE-NAMES.txt`
- [ ] Prepare your image (1200x630px, <500KB)
- [ ] Name it: `{slug}.jpg` (or .png, .webp)
- [ ] Copy to: `public/images/blog/`
- [ ] Refresh browser to see the change
- [ ] ✅ Done!

## Support

If you encounter issues:
1. Check filename exactly matches slug
2. Verify file is in correct folder
3. Try different format (.jpg, .png, .webp)
4. Clear browser cache
5. Check browser console for errors

---

**Last Updated:** December 20, 2025
**System Version:** 1.0
