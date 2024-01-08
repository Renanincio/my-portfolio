/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{tsx,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'header': '0px 0px 20px rgba(0, 0, 0, 0.1)',
        'navBox': '0px 0px 20px rgba(168, 168, 168, 0.15)',
        'skills': '0 0 25px #fef4f5'
      },
      transition: {
        'footer': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)'
      }
    },
  },
  plugins: [],
};
