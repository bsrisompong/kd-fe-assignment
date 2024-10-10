module.exports = {
  extends: ['mantine'],
  plugins: [],
  overrides: [],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'arrow-body-style': 'off',
  },
};
