/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    fontFamily: {
      "roboto": ['"Roboto"', "cursive"],
      "babylonica": ['"Babylonica"', "cursive"],
      "marck-script": ['"Marck Script"', "cursive"],
    },
    container: {
      center: true,
    },
  },

  plugins: [],
};
