/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    fontFamily: {
      roboto: ['"Roboto"', "cursive"],
      babylonica: ['"Babylonica"', "cursive"],
      "Caveat-Brush": ['"Caveat Brush"', "cursive"],
    },
    container: {
      center: true,
    },
  },

  plugins: [],
};
