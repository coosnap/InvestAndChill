/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [import('@tailwindcss/typography')],
  theme: {
    screens: {
      vm: '240px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#FFF8DC',
        second: '#F3E5AB',
        third: '#AAD6FA',
        fourth: '#C5F6FA',
      },
      backgroundColor: {
        primary: '#FFF8DC',
        second: '#F3E5AB',
        third: '#AAD6FA',
        fourth: '#00264B',
      },
    },
  },
};
