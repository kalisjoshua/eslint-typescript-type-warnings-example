module.exports = {
  'env': {
    'node': true,
  },
  'extends': [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2020,
    'project': [
      './tsconfig.json',
    ],
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'root': true,
};
