import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f5f5',
          100: '#e9e9e9',
          200: '#d9d9d9',
          300: '#c4c4c4',
          400: '#9e9e9e',
          500: '#7b7b7b',
          600: '#555555',
          700: '#434343',
          800: '#262626',
          900: '#171717',
          950: '#0d0d0d',
        },
        gold: {
          50: '#fbf7e9',
          100: '#f7efc3',
          200: '#f2e49d',
          300: '#edd976',
          400: '#e9cf50',
          500: '#e4c52a',
          600: '#d4b520',
          700: '#b39518',
          800: '#927615',
          900: '#715c11',
          950: '#3f330a',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('./src/assets/hero-limo.jpg')",
      },
    },
  },
  plugins: [],
}

export default config