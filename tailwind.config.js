/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-UFJ': '#174287',
      },
      backgroundImage:{
        'ufj': "url('/src/assets/header-banner.png')",
      }
    }, 
  },
  plugins: [],
}

