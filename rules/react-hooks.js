/**
 * React-Hooks Plugin
 * https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
 *
 * These rules are made available via `eslint-plugin-react-hooks`
 */

module.exports = {
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error'
  }
}
