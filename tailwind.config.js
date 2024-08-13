/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sapphire: {
          50: '#EBF8FF',
          100: '#D1EEFC',
          200: '#A7D8F0',
          300: '#7CC1E4',
          400: '#55AAD4',
          500: '#2E86C1', // You can customize this hex value
          600: '#227ABF',
          700: '#1A659B',
          800: '#144F75',
          900: '#0F3B55',
        },
      },
    },
  },
  plugins: [],
};  

