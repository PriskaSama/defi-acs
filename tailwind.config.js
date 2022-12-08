/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "green-saber": "#2FF924",
      "dark-grey": "#202020",
      "grey": "#BFBFBF",
      "orange": "#F87F28",
      "dark-red": "#BB2323",
    },
    extend: {
      backgroundImage: {
        "stars": "url('./src/assets/img/bg-portfolio.svg')",
      }
    },
  },
  plugins: [],
}