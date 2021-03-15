const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    colors: {
      red: { ...colors.red, 200: '#fabea7', 100: '#fbe2e5' },
      gray: { ...colors.coolGray, 400: '#9cada4', 500: '#767c77' },
    },
    extend: {
      gridTemplateRows: {
        9: 'repeat(9, minmax(0, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
