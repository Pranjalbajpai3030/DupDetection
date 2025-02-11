/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mocha: '#9C6B53',
        blush: '#F5C6C6',
        darkBrown: '#6B4F4F',
        offWhite: '#FAF3F0',
        charcoal: '#3E3E3E',
      },
    },
  },
  plugins: [],
};