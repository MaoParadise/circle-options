module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      },
      translate: {
        '2/2': '200%',
        '3/3': '300%',
       }
       ,
       rotate: {
        'custom': '27deg',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
