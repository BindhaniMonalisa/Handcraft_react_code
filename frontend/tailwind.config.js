/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Poppins","sans-serif"],
        cursive: ["Pacifico", "Sriracha", "cursive"],
        cursive2: ["Sriracha", "cursive"],
      },
      colors:{
        primary:"#29a4b3",
        secondary:"#0d5861",
        brandDark:"#053e45",
      },
      container:{
        center: true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem",
        }
      }
    },
  },
  plugins: [],
}

