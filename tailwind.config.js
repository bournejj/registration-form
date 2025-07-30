/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', 'sans-serif'],
      },
      lineHeight: {
        '150px': '150px',
      },
      colors: {
        everwayBlue: {
          DEFAULT: '#2B66C1',
        },
        everywayBlack: '#101828'
      },
    },
  },
  plugins: [],
}

