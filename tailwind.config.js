/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./**/*.html"
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    fontFamily:{
      'primary': ["EB Garamond", ...defaultTheme.fontFamily.serif],
      'secondary': ["Poppins", ...defaultTheme.fontFamily.sans],
     
      
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1180px',
    },
    extend: {
      colors:{
        'primary' : '#B68C5A',
        'secondary' : '#F73859',
        'heading' : '#000',
        'text' : '#3E4549',
        'paragraph' : '#333',
      }
    },
  },
  plugins: [],
}

