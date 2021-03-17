const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    colors: {
      red: { ...colors.red, 200: '#fabea7', 100: '#fbe2e5' },
      gray: { ...colors.coolGray, 400: '#9cada4', 500: '#767c77' },
      blue: { ...colors.blue, 300: '#9fd8df' },
      white: colors.white,
      black: colors.black,
    },
    extend: {
      gridTemplateRows: {
        9: 'repeat(9, minmax(0, 1fr))',
      },
      gridRowEnd: {
        9: '9',
        10: '10',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
