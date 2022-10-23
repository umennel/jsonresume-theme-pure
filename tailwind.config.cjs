/** @type {import('tailwindcss').Config} */
const resolve = require("path").resolve;

module.exports = {
  content: [
    resolve(__dirname, "./index.html"),
    resolve(__dirname, "./src/**/*.{hbs,html,js}"),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
