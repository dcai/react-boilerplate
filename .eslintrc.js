module.exports = {
  root: true,
  env: {
    mocha: true,
    jest: true,
    node: true,
    browser: true,
    es2021: true,
  },
  globals: {
    process: true,
    JSX: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsdoc/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      files: ["**/*.js", "**/*.jsx"],
    },
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  rules: {
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "jsdoc/require-param-description": 0,
    "jsdoc/require-returns-description": 0,
    "react/prop-types": 0,
  },
};
