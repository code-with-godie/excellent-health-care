/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        golden: '#fd7100',
        bg_main: '#151c2c',
        bgSoft: '#182237',
        textSoft: '#b7bac1',
        semi_black: 'rgba(0, 0, 0, 0.463)',
      },
    },
  },
  plugins: [],
};
