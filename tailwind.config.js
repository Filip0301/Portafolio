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
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['Menlo', 'monospace'],
      },
      colors: {
        brand: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          DEFAULT: '#2563EB', // blue-600
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#1e3a8a',
        },
        surface: {
          DEFAULT: '#0a0a0f',
          100: '#111118',
          200: '#18181f',
          300: '#1e1e28',
          400: '#26263a',
          500: '#2e2e47',
        },
        muted: {
          DEFAULT: '#6b7280',
          light: '#9ca3af',
          dark:  '#4b5563',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.08)',
          hover:   'rgba(6,182,212,0.3)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
      },
      animation: {
        'fade-in':      'fadeIn 0.6s ease-out forwards',
        'slide-up':     'slideUp 0.6s ease-out forwards',
        'slide-up-delay': 'slideUp 0.6s ease-out 0.2s forwards',
        'glow-pulse':   'glowPulse 3s ease-in-out infinite',
        'float':        'float 6s ease-in-out infinite',
        'type-cursor':  'typeCursor 1s step-end infinite',
        'spin-slow':    'spin 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%'   : { opacity: '0' },
          '100%' : { opacity: '1' },
        },
        slideUp: {
          '0%'   : { opacity: '0', transform: 'translateY(24px)' },
          '100%' : { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%' : { boxShadow: '0 0 20px rgba(6,182,212,0.2)' },
          '50%'      : { boxShadow: '0 0 40px rgba(6,182,212,0.4)' },
        },
        float: {
          '0%, 100%' : { transform: 'translateY(0)' },
          '50%'      : { transform: 'translateY(-8px)' },
        },
        typeCursor: {
          '0%, 100%' : { opacity: '1' },
          '50%'      : { opacity: '0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};