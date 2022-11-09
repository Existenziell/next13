/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['Atlas-Typewriter' ],
      // },
      colors: {
        'brand': 'var(--color-brand)',
        'brand-dark': 'var(--color-brand-dark)',
        'cta': 'var(--color-cta)',
        'detail': 'var(--color-detail)',
        'detail-dark': 'var(--color-detail-dark)',
      },
    },
  },
  plugins: [],
}
