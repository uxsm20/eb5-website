import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#c2dfff',
          300: '#94c8ff',
          400: '#5aa3ff',
          500: '#1966CB',
          600: '#1558b7',
          700: '#114a9e',
          800: '#0e3c80',
          900: '#0b2e62',
          950: '#081d44',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            h1: {
              color: '#111827',
              fontWeight: '800',
            },
            h2: {
              color: '#111827',
              fontWeight: '700',
            },
            h3: {
              color: '#111827',
              fontWeight: '600',
            },
            'ul > li': {
              paddingLeft: '1.5em',
            },
            'ul > li::before': {
              backgroundColor: '#0284c7',
            },
            strong: {
              color: '#111827',
            },
            a: {
              color: '#0284c7',
              '&:hover': {
                color: '#0369a1',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
}