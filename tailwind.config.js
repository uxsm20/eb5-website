/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6ff',
          100: '#e0ecff',
          200: '#c0d9ff',
          300: '#91bfff',
          400: '#609bff',
          500: '#3b76ff',
          600: '#1e4fff',
          700: '#1239ff',
          800: '#132def',
          900: '#1628cc',
        }
      }
    },
  },
  plugins: [],
};