module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': 'off',
    'comma-dangle': 'off',
    'import/extensions': 'off',
    'no-plusplus': 'off',
    'no-console': 'off',
    'indent': ['error', 2],
    'vue/script-indent': ['error', 2, { 'baseIndent': 1 }],
  },
  overrides: [
    {
      'files': ['*.vue'],
      'rules': {
        'indent': 'off'
      }
    }
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
};
