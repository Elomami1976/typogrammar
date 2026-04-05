/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Lato', 'system-ui', 'sans-serif'],
        body: ['Merriweather', 'Georgia', 'serif'],
        code: ['Courier New', 'monospace'],
      },
      // ── Indigo Pro palette ────────────────────────────────────────────────
      // Remapping Tailwind's "blue" → indigo values so all existing
      // blue-* utility classes now render as premium indigo across the site.
      colors: {
        blue: {
          50:  '#eef2ff',  // indigo-50
          100: '#e0e7ff',  // indigo-100
          200: '#c7d2fe',  // indigo-200
          300: '#a5b4fc',  // indigo-300
          400: '#818cf8',  // indigo-400
          500: '#6366f1',  // indigo-500
          600: '#4f46e5',  // indigo-600  ← primary brand
          700: '#4338ca',  // indigo-700  ← primary hover
          800: '#3730a3',  // indigo-800
          900: '#312e81',  // indigo-900
          950: '#1e1b4b',  // indigo-950  ← deep heading text
        },
        // Accent violet used for subtle backgrounds
        violet: {
          50:  '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
      },
    },
  },
  plugins: [],
}
