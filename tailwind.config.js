/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        dark: {
          DEFAULT: '#1a1a1a',
          100: '#2d2d2d',
          200: '#4a4a4a',
          300: '#666666',
          400: '#858585',
          500: '#a3a3a3',
          600: '#c2c2c2',
          700: '#e0e0e0',
          800: '#f5f5f5',
          900: '#ffffff',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 