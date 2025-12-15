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
    },
  },
  plugins: [],
}
