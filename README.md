# jsonresume-theme-pure
A pure JSON Resume theme, using a modern Javascript dev stack (vite, tailwindCSS)

Demo deployed on Netlify: https://tiny-hummingbird-69b970.netlify.app/

Suitable for European CV:
 * Personal information like date of birth and profile image (sigh, we are not there yet...)
 * European date format

## Quick Start

1. Clone the `resumed` local theme example template with [degit](https://github.com/Rich-Harris/degit)
2. Copy or link the content of this repo as a subdirectory
3. Modify the file package.json in the local theme example template to look like this:
```json
{
  "private": true,
  "type": "module",
  "scripts": {
    "init": "resumed init",
    "start": "resumed --theme jsonresume-theme-pure"
  },
  "dependencies": {
    "jsonresume-theme-pure": "file:./jsonresume-theme-pure",
    "resumed": "^3.0.0"
  }
}
```
4. Install dependencies, create and render resume:
```sh
npx degit rbardini/resumed/examples/with-local-theme
npm install
npm run init
npm start
```