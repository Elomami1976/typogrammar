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
          // Split vendor code into separate chunk - loaded once, cached forever
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
        // Optimize chunk naming for better caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 500,
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
