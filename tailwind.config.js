/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0D0D0D',
        'card-background': '#404040',
        'text-primary': '#D9D9D9',
        'text-secondary': '#BFBFBF',
        'accent-primary': '#737373',
        'accent-secondary': '#404040',
        'dark-purple': '#2a004f',
      },
    },
  },
  plugins: [],
};