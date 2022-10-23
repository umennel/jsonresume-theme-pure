const
  handlebars = require("vite-plugin-handlebars"),
  viteSingleFile = require("vite-plugin-singlefile").viteSingleFile,
  resolve = require("path").resolve;

module.exports = (resume) => ({
    root: resolve(__dirname),
    plugins: [
      handlebars({
        partialDirectory: resolve(__dirname, "src/partials"),
        context: {
          resume: resume,
        },
        helpers: {
          decapitalize: (str) => str.toLowerCase(),
          month: (str) => ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][new Date(str).getMonth()],
          year: (str) => new Date(str).getFullYear(),
          localDate: (str) => new Date(str).toLocaleDateString("uk"),
        },
      }),
      viteSingleFile(),
    ],
  });
