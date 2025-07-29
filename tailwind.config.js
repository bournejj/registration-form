/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', 'sans-serif'],
      },
      colors: {
        everwayBlue: {
          DEFAULT: '#2B66C1',
        },
      },
    },
  },
  plugins: [],
}

