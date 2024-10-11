module.exports = {
  extends: ["mantine", "plugin:@next/next/recommended"],
  plugins: [],
  overrides: [],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/extensions": "off",
    "arrow-body-style": "off",
    "prefer-destructuring": "off",
    "single-quote": "off",
    "@typescript-eslint/quotes": "off",
  },
};
