/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
       'Montserrat':['Montserrat','sans-serif'],
       'OpenSans':['Open Sans','sans-serif'],
    },
    screens:{
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        blob:"blob 7s infinite"
      },
      keyframes:{
        blob:{
          "0%":{
            transform:"translate(0px, 0px) scale(1)",
          },
          "33%":{
            transform:"translate(30px, -50px) scale(1.1)"
          },
          "66%":{
            transform:"translate(-20px, 20px) scale(0.9)"
          },
          "100%":{
            transform:"translate(0px, 0px) scale(1)"
          }
        }
      }
    },
  },
  plugins: [require("daisyui")],
}