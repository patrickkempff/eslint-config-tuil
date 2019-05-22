
/**
 * ESLint Comments Plugin
 * https://github.com/mysticatea/eslint-plugin-eslint-comments
 *
 * These rules are made available via `eslint-plugin-eslint-comments`
 */

module.exports = {
  plugins: ['eslint-comments'],
  rules: {
    // ESLint Comments Plugin
    // The following rules are made available via `eslint-plugin-eslint-comments`
    // All rules: https://mysticatea.github.io/eslint-plugin-eslint-comments/rule
    'eslint-comments/no-aggregating-enable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',

    // 'eslint-comments/disable-enable-pair': 'error',
    // 'eslint-comments/no-use': 'error',
  }
}
