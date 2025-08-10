module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    // Disable the problematic rule
    '@typescript-eslint/func-call-spacing': 'off',
    "react-native/no-inline-styles": "off",
  },
};