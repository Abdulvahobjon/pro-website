/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
          black:{
            '200':'#1F2224',
            '300':'#1E1E1E',
            '400':'#17191B',
            '700':'#000000'
          },
          'white-300':'#E0E0FF99',
        },
      spacing: {
        '18': '72px',
      },
      fontFamily:{
        'montserrat':['Montserrat', "sans-serif"]
      }

    },
  },
  plugins: [],
}

