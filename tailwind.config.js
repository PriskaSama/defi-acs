/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-port': "url('/src/assets/img/bg-portfolio.svg')",
        'bg-compet':"url('/src/assets/img/bg-compet.svg')",
        'bg-portfolio':"url('/src/assets/img/bg-section-portfolio.svg')",
      }
    },
  },
  plugins: [],
}
