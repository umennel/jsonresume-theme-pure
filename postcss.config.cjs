const resolve = require("path").resolve;

module.exports = {
  plugins: {
    tailwindcss: {
      config: resolve(__dirname, "tailwind.config.cjs"),
    },
    autoprefixer: {},
  },
}
