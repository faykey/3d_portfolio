/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "rgb(0,0,0,0.7)",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        myc     : '#00366b',
        "black-100": "#12063b",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/black.jpg')",
      },
    },
  },
  plugins: [],
};