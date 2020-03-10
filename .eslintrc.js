module.exports = {
  'env': {
    'jest': true,
    'node': true,
  },
  'extends': [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'project': ['./tsconfig.json'],
    'tsconfigRootDir': __dirname,
  },
  'plugins': [
    '@typescript-eslint',
    'jest',
  ],
  'root': true,
};
