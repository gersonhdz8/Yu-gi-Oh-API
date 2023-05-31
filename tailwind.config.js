/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./public/*.{html,js}"],
  theme: {
    extend: {      
      backgroundImage:{
        "fondoCarta":"url('/images/fondoCarta.jpg')",
        "fondoCarta2":"url('/images/fondoCarta2.jpg')",
        "fondoCarta3":"url('/images/fondoCarta3.jpg')",                 

      },
    }
  },
  plugins: [],
}

