module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    semi: ['error', 'always', { omitLastInOneLineBlock: false }], // https://eslint.org/docs/latest/rules/semi
    'comma-dangle': ['error', 'never'], // https://eslint.org/docs/latest/rules/comma-dangle
    quotes: ['error', 'single'], // https://eslint.org/docs/latest/rules/quotes
  },
};
