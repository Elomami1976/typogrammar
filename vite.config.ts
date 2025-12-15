import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code into separate chunk
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Split large content files
          'blog-content': ['./src/constants/blogPosts'],
          'grammar-content': ['./src/constants/grammarTopics'],
          'quiz-data': ['./src/constants/quizData', './src/constants/additionalQuizQuestions'],
          'vocabulary': ['./src/constants/irregularVerbs', './src/constants/phrasalVerbs', './src/constants/idioms', './src/constants/confusedWords'],
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 500,
    // Use esbuild for faster minification
    minify: 'esbuild',
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Set target for better browser support
    target: 'es2015',
  },
  // Handle client-side routing in preview mode
  preview: {
    port: 4173,
    strictPort: false,
  },
})
