/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Cores da sua base
        background: '#0D0D0D',
        'card-background': '#404040',
        'text-primary': '#D9D9D9',
        'text-secondary': '#BFBFBF',
        'accent-primary': '#737373',
        'accent-secondary': '#404040',
        'dark-purple': '#2a004f',

        // Cores adicionadas para os novos estilos
        'stat-card': '#271C35',
        'bar-track': 'rgba(26, 17, 38, 0.7)',
        'grad-purple-from': '#8B5CF6',
        'grad-purple-to': '#6D28D9',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'text-shadow-pulse': {
          '0%': { textShadow: '0 0 0px rgba(145, 70, 255, 0)' },
          '50%': { textShadow: '0 0 15px rgba(145, 70, 255, 0.8)' },
          '100%': { textShadow: '0 0 0px rgba(145, 70, 255, 0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'text-shadow-pulse': 'text-shadow-pulse 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};