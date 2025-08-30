/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        }
      },
      backgroundColor: {
        'light': '#FEFEFE',
        'dark': '#0f172a',
        'light-secondary': '#f8fafc',
        'dark-secondary': '#1e293b',
      },
      textColor: {
        'light': '#1f2937',
        'dark': '#f1f5f9',
        'light-secondary': '#6b7280',
        'dark-secondary': '#94a3b8',
      },
      borderColor: {
        'light': '#e2e8f0',
        'dark': '#334155',
      }
    },
  },
  plugins: [],
}