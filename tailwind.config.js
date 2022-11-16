/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // https://www.modularscale.com/?1&rem&1.25
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.262rem', // This one is out of line, but I want a super small spacing.
      1: '0.512rem',
      2: '0.64rem',
      3: '0.8rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.563rem',
      7: '1.953rem',
      8: '2.441rem',
      9: '3.052rem',
      10: '3.815rem',
      11: '4.768rem',
      12: '5.96rem',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#378acd',
          dark: '0073b9',
          50: '#80cfff',
          100: '#80cfff',
          200: '#80cfff',
          300: '#4dbbff',
          400: '#1aa8ff',
          500: '#008fe6',
          600: '#006fb3',
          700: '#004f80',
          800: '#00304d',
          900: '#00101a',
        },
        accent: {
          DEFAULT: '#db770b',
          dark: '#c73d00',
        },
        background: {
          DEFAULT: '#f8fafb',
          dark: '#171a1c',
        },
        surface: {
          DEFAULT: '#fefefe',
          dark: '#22272a',
        },
        border: {
          DEFAULT: '#b6bdc226',
          dark: 'b7bcbf26',
        },
        text: {
          DEFAULT: '#364149',
          dark: '#d3dadf',
        },
      },
    },
  },
  plugins: [],
}
