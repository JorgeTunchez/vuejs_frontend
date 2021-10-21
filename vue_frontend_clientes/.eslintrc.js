module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "linebreak-style": 0,
    "eol-last": 0,
    "no-multiple-empty-lines": [2, {max: 2, maxEOF: 10}],
    'max-len': ["error", { "code": 250 }],
    "quotes": [0, "double"]
  },
};
