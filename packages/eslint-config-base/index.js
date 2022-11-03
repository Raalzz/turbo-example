const OFF = 0;
const ERROR = 2;

module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    // this config enables eslint-plugin-import to resolve JavaScript and TypeScript files
    // https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/config/typescript.js
    // Some rules provided by eslint-plugin-import e.g. `import/no-duplicates` don't work without it
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended"
  ],
  plugins: ["import"],
  rules: {
    "no-console": ERROR
  }
};
