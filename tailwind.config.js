/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "poppins" : ['poppins'],
        "caveat" : ['caveat']
      },
      colors : {
        "ungu" : '#BEADFA',
        "unguMuda" : '#E8E1FF'
      }
    },
  },
  plugins: [],
}

