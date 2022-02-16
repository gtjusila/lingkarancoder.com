const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Martel Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'blue-navy': '#012840',
        'orange-accent': '#F79B4D',
        'blue-hero': '#3E3F74',
      },
    },
  },
  plugins: [],
};
