/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors:{
        primary:"#002b5b",
        text1:"#36c6c0",
        secondary:"#19406a",
        blue3:"#8094ad",


      }
    },
  },
  plugins: [],
}

