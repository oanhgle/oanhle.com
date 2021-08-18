module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      margin: {
        '17': '4.35rem',
        'small': '18rem',
      },
      textColor: {
        'primary': '#b1a6c4',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      },
      backgroundColor: theme => ({
        'primary': '#b1a6c4',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      }),
      
    },
    variants: {
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
       },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
