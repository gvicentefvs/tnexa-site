/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          900: '#05070A',
          800: '#0D1117',
          700: '#171D26',
        },
        blue: {
          400: '#4C9FFF',
          500: '#2F80ED',
          600: '#1B5FD1',
        },
        aqua: {
          400: '#4FF0C7',
          500: '#2FE0B0',
          600: '#16C79A',
        },
        ink: {
          100: '#F4F6F8',
          300: '#C7CED6',
          500: '#8B95A1',
        },
      },
      fontFamily: {
        display: ['"Chakra Petch"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'app-gradient': 'linear-gradient(180deg, #05070A 0%, #0D1117 45%, #171D26 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px 0 rgba(47,224,176,0.35)' },
          '50%': { boxShadow: '0 0 34px 8px rgba(47,224,176,0.55)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        glow: 'glow 2.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
