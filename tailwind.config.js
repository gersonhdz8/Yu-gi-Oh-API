/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}","./public/*.{html,js}","./public/card-home/*.{html,js}"],
  theme: {
    extend: {      
      backgroundImage:{
        "fondoCarta":"url('/images/fondoCarta.jpg')",
        "fondoCarta2":"url('/images/fondoCarta2.jpg')",
        "fondoCarta3":"url('/images/fondoCarta3.jpg')",
        "fondoMain":"url('/images/fondoMain.jpg')",          

      },
    }
  },
  plugins: [],
}

