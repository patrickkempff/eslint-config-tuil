/**
 * Jest Plugin
 * https://github.com/jest-community/eslint-plugin-jest
 *
 * These rules are made available via `eslint-plugin-jest`
 */

module.exports = {
  plugins: ['jest'],
  env: {
    'jest/globals': true,
  },
  rules: {
    // jest:recommend rules:
    'jest/no-alias-methods': 'warn',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/no-jest-import': 'error',
    'jest/no-jasmine-globals': 'warn',
    'jest/no-test-prefixes': 'error',
    'jest/valid-describe': 'error',
    'jest/valid-expect': 'error',
    'jest/valid-expect-in-promise': 'error'
  }
}
