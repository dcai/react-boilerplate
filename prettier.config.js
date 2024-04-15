// prettier.config.js or .prettierrc.js

/** @type {import("prettier").Config} */
module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  endOfLine: "lf",
  singleQuote: false,
  jsxSingleQuote: false,
  printWidth: 80,
  useTabs: false,
  quoteProps: "preserve",
  overrides: [
    {
      files: ["*.json", ".prettierrc"],
      options: {
        parser: "json",
        tabWidth: 2,
      },
    },
    {
      files: ["*.gql", "*.graphql"],
      options: {
        parser: "graphql",
        tabWidth: 2,
      },
    },
    {
      files: ["*.yaml", "*.yml"],
      options: {
        parser: "yaml",
        singleQuote: false,
        tabWidth: 4,
      },
    },
    {
      files: ["install.conf.yaml"],
      options: {
        singleQuote: false,
        tabWidth: 2,
      },
    },
  ],
};
