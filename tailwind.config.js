/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        omnes: ['Omnes', 'sans-serif'],
      },
      colors: {
        primary: '#2B7FFF', // matches your SVG blue
        secondary: '#34A853', // optional dashboard accent
      },
    },
  },
  plugins: [],
};
