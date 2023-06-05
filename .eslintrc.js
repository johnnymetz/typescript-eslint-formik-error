module.exports = {
  root: true,
  extends: [
    // Full config: https://github.com/xojs/eslint-config-xo-typescript/blob/main/index.js
    'xo-typescript',
  ],
  rules: {
    '@typescript-eslint/indent': 'off',
    // '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
  },
};
