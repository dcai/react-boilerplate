module.exports = {
  root: true,
  plugins: ["react", "prettier", "jsdoc"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsdoc/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
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
  rules: {
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "jsdoc/require-jsdoc": 1,
    "jsdoc/require-param-description": 0,
    "jsdoc/require-returns-description": 0,
    "react/prop-types": 0,
  },
};
