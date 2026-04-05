import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Core React vendor — loaded first, cached forever
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router-dom') || id.includes('node_modules/scheduler')) {
            return 'react-vendor';
          }
          // Large content constants — only loaded when user navigates to those sections
          if (id.includes('src/constants/grammarTopics')) return 'content-grammar';
          if (id.includes('src/constants/quizData') || id.includes('src/constants/additionalQuizQuestions')) return 'content-quiz';
          if (id.includes('src/constants/blogPosts')) return 'content-blog';
          if (id.includes('src/constants/irregularVerbs') || id.includes('src/constants/phrasalVerbs') || id.includes('src/constants/idioms') || id.includes('src/constants/confusedWords') || id.includes('src/constants/homophones') || id.includes('src/constants/collocations')) return 'content-vocab';
          if (id.includes('src/constants/')) return 'content-misc';
        },
        // Optimize chunk naming for better caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Optimize chunk size (blog content is intentionally large - lazy loaded)
    chunkSizeWarningLimit: 1500,
    // Use esbuild for faster minification with aggressive settings
    minify: 'esbuild',
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Modern target for smaller bundle
    target: 'es2020',
    // Optimize assets
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    reportCompressedSize: false, // Faster builds
    // Enable source maps only in development
    sourcemap: false,
  },
  // Optimize development experience
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  // Handle client-side routing in preview mode
  preview: {
    port: 4173,
    strictPort: false,
  },
})
