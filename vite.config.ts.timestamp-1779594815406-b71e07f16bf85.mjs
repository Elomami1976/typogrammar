// vite.config.ts
import { defineConfig } from "file:///C:/Users/tarik/Desktop/typogrammar_-an-english-learning-hub/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/tarik/Desktop/typogrammar_-an-english-learning-hub/node_modules/@vitejs/plugin-react/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [react()],
  build: {
    // Enable code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom") || id.includes("node_modules/react-router-dom") || id.includes("node_modules/scheduler")) {
            return "react-vendor";
          }
          if (id.includes("src/constants/grammarTopics")) return "content-grammar";
          if (id.includes("src/constants/quizData") || id.includes("src/constants/additionalQuizQuestions")) return "content-quiz";
          if (id.includes("src/constants/blogPosts")) return "content-blog";
          if (id.includes("src/constants/irregularVerbs") || id.includes("src/constants/phrasalVerbs") || id.includes("src/constants/idioms") || id.includes("src/constants/confusedWords") || id.includes("src/constants/homophones") || id.includes("src/constants/collocations")) return "content-vocab";
          if (id.includes("src/constants/")) return "content-misc";
        },
        // Optimize chunk naming for better caching
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]"
      }
    },
    // Optimize chunk size (blog content is intentionally large - lazy loaded)
    chunkSizeWarningLimit: 1500,
    // Use esbuild for faster minification with aggressive settings
    minify: "esbuild",
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Modern target for smaller bundle
    target: "es2020",
    // Optimize assets
    assetsInlineLimit: 4096,
    // Inline assets smaller than 4kb
    reportCompressedSize: false,
    // Faster builds
    // Enable source maps only in development
    sourcemap: false
  },
  // Optimize development experience
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"]
  },
  // Handle client-side routing in preview mode
  preview: {
    port: 4173,
    strictPort: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx0YXJpa1xcXFxEZXNrdG9wXFxcXHR5cG9ncmFtbWFyXy1hbi1lbmdsaXNoLWxlYXJuaW5nLWh1YlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdGFyaWtcXFxcRGVza3RvcFxcXFx0eXBvZ3JhbW1hcl8tYW4tZW5nbGlzaC1sZWFybmluZy1odWJcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3RhcmlrL0Rlc2t0b3AvdHlwb2dyYW1tYXJfLWFuLWVuZ2xpc2gtbGVhcm5pbmctaHViL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgYnVpbGQ6IHtcbiAgICAvLyBFbmFibGUgY29kZSBzcGxpdHRpbmcgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcbiAgICAgICAgICAvLyBDb3JlIFJlYWN0IHZlbmRvciwgbG9hZGVkIGZpcnN0LCBjYWNoZWQgZm9yZXZlclxuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzL3JlYWN0JykgfHwgaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcy9yZWFjdC1kb20nKSB8fCBpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20nKSB8fCBpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzL3NjaGVkdWxlcicpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3JlYWN0LXZlbmRvcic7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIExhcmdlIGNvbnRlbnQgY29uc3RhbnRzLCBvbmx5IGxvYWRlZCB3aGVuIHVzZXIgbmF2aWdhdGVzIHRvIHRob3NlIHNlY3Rpb25zXG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdzcmMvY29uc3RhbnRzL2dyYW1tYXJUb3BpY3MnKSkgcmV0dXJuICdjb250ZW50LWdyYW1tYXInO1xuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnc3JjL2NvbnN0YW50cy9xdWl6RGF0YScpIHx8IGlkLmluY2x1ZGVzKCdzcmMvY29uc3RhbnRzL2FkZGl0aW9uYWxRdWl6UXVlc3Rpb25zJykpIHJldHVybiAnY29udGVudC1xdWl6JztcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ3NyYy9jb25zdGFudHMvYmxvZ1Bvc3RzJykpIHJldHVybiAnY29udGVudC1ibG9nJztcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ3NyYy9jb25zdGFudHMvaXJyZWd1bGFyVmVyYnMnKSB8fCBpZC5pbmNsdWRlcygnc3JjL2NvbnN0YW50cy9waHJhc2FsVmVyYnMnKSB8fCBpZC5pbmNsdWRlcygnc3JjL2NvbnN0YW50cy9pZGlvbXMnKSB8fCBpZC5pbmNsdWRlcygnc3JjL2NvbnN0YW50cy9jb25mdXNlZFdvcmRzJykgfHwgaWQuaW5jbHVkZXMoJ3NyYy9jb25zdGFudHMvaG9tb3Bob25lcycpIHx8IGlkLmluY2x1ZGVzKCdzcmMvY29uc3RhbnRzL2NvbGxvY2F0aW9ucycpKSByZXR1cm4gJ2NvbnRlbnQtdm9jYWInO1xuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnc3JjL2NvbnN0YW50cy8nKSkgcmV0dXJuICdjb250ZW50LW1pc2MnO1xuICAgICAgICB9LFxuICAgICAgICAvLyBPcHRpbWl6ZSBjaHVuayBuYW1pbmcgZm9yIGJldHRlciBjYWNoaW5nXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiAnYXNzZXRzL1tuYW1lXS1baGFzaF0uanMnLFxuICAgICAgICBlbnRyeUZpbGVOYW1lczogJ2Fzc2V0cy9bbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdhc3NldHMvW25hbWVdLVtoYXNoXS5bZXh0XScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gT3B0aW1pemUgY2h1bmsgc2l6ZSAoYmxvZyBjb250ZW50IGlzIGludGVudGlvbmFsbHkgbGFyZ2UgLSBsYXp5IGxvYWRlZClcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDE1MDAsXG4gICAgLy8gVXNlIGVzYnVpbGQgZm9yIGZhc3RlciBtaW5pZmljYXRpb24gd2l0aCBhZ2dyZXNzaXZlIHNldHRpbmdzXG4gICAgbWluaWZ5OiAnZXNidWlsZCcsXG4gICAgLy8gRW5hYmxlIENTUyBjb2RlIHNwbGl0dGluZ1xuICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcbiAgICAvLyBNb2Rlcm4gdGFyZ2V0IGZvciBzbWFsbGVyIGJ1bmRsZVxuICAgIHRhcmdldDogJ2VzMjAyMCcsXG4gICAgLy8gT3B0aW1pemUgYXNzZXRzXG4gICAgYXNzZXRzSW5saW5lTGltaXQ6IDQwOTYsIC8vIElubGluZSBhc3NldHMgc21hbGxlciB0aGFuIDRrYlxuICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiBmYWxzZSwgLy8gRmFzdGVyIGJ1aWxkc1xuICAgIC8vIEVuYWJsZSBzb3VyY2UgbWFwcyBvbmx5IGluIGRldmVsb3BtZW50XG4gICAgc291cmNlbWFwOiBmYWxzZSxcbiAgfSxcbiAgLy8gT3B0aW1pemUgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZVxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbScsICdyZWFjdC1yb3V0ZXItZG9tJ10sXG4gIH0sXG4gIC8vIEhhbmRsZSBjbGllbnQtc2lkZSByb3V0aW5nIGluIHByZXZpZXcgbW9kZVxuICBwcmV2aWV3OiB7XG4gICAgcG9ydDogNDE3MyxcbiAgICBzdHJpY3RQb3J0OiBmYWxzZSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZXLFNBQVMsb0JBQW9CO0FBQzFZLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsT0FBTztBQUFBO0FBQUEsSUFFTCxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixhQUFhLElBQUk7QUFFZixjQUFJLEdBQUcsU0FBUyxvQkFBb0IsS0FBSyxHQUFHLFNBQVMsd0JBQXdCLEtBQUssR0FBRyxTQUFTLCtCQUErQixLQUFLLEdBQUcsU0FBUyx3QkFBd0IsR0FBRztBQUN2SyxtQkFBTztBQUFBLFVBQ1Q7QUFFQSxjQUFJLEdBQUcsU0FBUyw2QkFBNkIsRUFBRyxRQUFPO0FBQ3ZELGNBQUksR0FBRyxTQUFTLHdCQUF3QixLQUFLLEdBQUcsU0FBUyx1Q0FBdUMsRUFBRyxRQUFPO0FBQzFHLGNBQUksR0FBRyxTQUFTLHlCQUF5QixFQUFHLFFBQU87QUFDbkQsY0FBSSxHQUFHLFNBQVMsOEJBQThCLEtBQUssR0FBRyxTQUFTLDRCQUE0QixLQUFLLEdBQUcsU0FBUyxzQkFBc0IsS0FBSyxHQUFHLFNBQVMsNkJBQTZCLEtBQUssR0FBRyxTQUFTLDBCQUEwQixLQUFLLEdBQUcsU0FBUyw0QkFBNEIsRUFBRyxRQUFPO0FBQ2xSLGNBQUksR0FBRyxTQUFTLGdCQUFnQixFQUFHLFFBQU87QUFBQSxRQUM1QztBQUFBO0FBQUEsUUFFQSxnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsdUJBQXVCO0FBQUE7QUFBQSxJQUV2QixRQUFRO0FBQUE7QUFBQSxJQUVSLGNBQWM7QUFBQTtBQUFBLElBRWQsUUFBUTtBQUFBO0FBQUEsSUFFUixtQkFBbUI7QUFBQTtBQUFBLElBQ25CLHNCQUFzQjtBQUFBO0FBQUE7QUFBQSxJQUV0QixXQUFXO0FBQUEsRUFDYjtBQUFBO0FBQUEsRUFFQSxjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsU0FBUyxhQUFhLGtCQUFrQjtBQUFBLEVBQ3BEO0FBQUE7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxFQUNkO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
