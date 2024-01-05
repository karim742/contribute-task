/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        headerShadow: '-1px 1px 20px #6d6d6d3b',
      },
    },
  },
  plugins: [],
};
