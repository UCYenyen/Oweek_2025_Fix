/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        '3xl': { 'raw': '((max-width: 1920x) and (max-height: 1080px))' },
        '4xl': { 'raw': '((max-width: 2560x) and (max-height: 1140px))' },
      },
      fontFamily: {
        'sans': ['Roboto', 'system-ui', 'sans-serif'],
        'lettertype': ['Lettertype', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

