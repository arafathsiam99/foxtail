/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"IBM Plex Sans"', ...fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
