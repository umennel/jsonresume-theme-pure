import handlebars from "vite-plugin-handlebars";
import { resolve } from "path";
import { readFileSync } from "fs";
import { defineConfig } from "vite";

function getResume () {
  try {
    const resume = readFileSync(resolve(__dirname, "resume.json"));
    return JSON.parse(resume);
  } catch (e) {
    const resume = readFileSync(resolve(__dirname, "sample.resume.json"));
    return JSON.parse(resume);
  }
};

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
      context: {
        resume: getResume(),
      },
      helpers: {
        decapitalize: (str) => str.toLowerCase(),
        month: (str) => ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][new Date(str).getMonth()],
        year: (str) => new Date(str).getFullYear(),
        localDate: (str) => new Date(str).toLocaleDateString("uk"),
      },
    }),
  ],
});
