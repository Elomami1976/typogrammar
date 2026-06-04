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
      // ── TypoGrammar Brand Palette ─────────────────────────────────────────
      // Dominant brand:  #235784  (deep teal-blue, authority)        → blue-600
      // Secondary:       #40A8C4  (bright cyan-teal, cards/accents)  → teal-500
      // Accent / CTA:    #F7AA00  (warm amber, sparingly on buttons) → amber-500
      // Surface / bg:    #EEF6F7  (pale cyan-tinted off-white)       → surface-50
      //
      // We remap the default Tailwind blue/teal/amber scales so that existing
      // utility classes (bg-blue-600, text-teal-500, hover:bg-amber-600, …)
      // automatically render with the new brand colors site-wide.
      colors: {
        // ── Surface / Background ─────────────────────────────────────────
        surface: {
          50:  '#eef6f7',   // primary page background
          100: '#e2eef0',
          200: '#cee0e3',
          300: '#a8c6cb',
          400: '#7fa8af',
          500: '#5b8b94',
          600: '#446e76',
          700: '#36575e',
          800: '#2a4348',
          900: '#1f3236',
        },

        // ── Dominant brand: anchored on #235784 (blue-600) ───────────────
        blue: {
          50:  '#eef5fb',
          100: '#d4e5f1',
          200: '#a9cce3',
          300: '#7eb2d4',
          400: '#5398c5',
          500: '#2d7eb0',
          600: '#235784',  // ← PRIMARY brand
          700: '#1b4569',  // ← brand hover (darker)
          800: '#143450',
          900: '#0e2438',  // deep authority headings
          950: '#06151f',
        },

        // ── Secondary: anchored on #40A8C4 (teal-500) ────────────────────
        teal: {
          50:  '#eefafd',
          100: '#d8f1f7',
          200: '#b1e3ef',
          300: '#7fcfe1',
          400: '#57b8d2',
          500: '#40a8c4',  // ← SECONDARY brand
          600: '#2e8da7',  // ← secondary hover
          700: '#266f86',
          800: '#20596c',
          900: '#1b4658',
          950: '#0d2c39',
        },

        // ── Accent CTA: anchored on #F7AA00 (amber-500) ──────────────────
        amber: {
          50:  '#fff8e8',
          100: '#ffeec3',
          200: '#ffdc88',
          300: '#ffc54a',
          400: '#ffb31f',
          500: '#f7aa00',  // ← ACCENT (use sparingly on primary CTAs)
          600: '#d68f00',  // ← accent hover
          700: '#ad7000',
          800: '#8a5800',
          900: '#6e4602',
          950: '#422600',
        },

        // Tertiary accent retained for category/option color-coding
        // (kept untouched so blog category badges remain distinguishable).
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
