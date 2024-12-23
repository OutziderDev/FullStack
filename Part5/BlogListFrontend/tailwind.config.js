/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {

      boxShadow:{
        'botton':'0px 4px 2px -1px rgba(0, 0, 0, 0.1)'
      },
      keyframes:{
        fadeIn:{
          '0%':{
            opacity:0
          },
          '100%':{
            opacity:1
          }
        },
      },
      animation:{
        fadeIn: 'fadeIn 0.5s ease-in'
      }
    },
  },
  plugins: [],
}