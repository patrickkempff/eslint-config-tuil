/**
 * React Plugin
 * https://github.com/yannickcr/eslint-plugin-react
 *
 * These rules are made available via `eslint-plugin-react`
 */

module.exports = {
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // react:recommend rules:
    'react/display-name': 'error',
    'react/jsx-key': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-render-return-value': 'error',
    'react/no-string-refs': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'off',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',

    // custom overrides:
    'jsx-quotes': ['error', 'prefer-single'], // ESLint own rules

    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-access-state-in-setstate': 'error',

    'react/no-array-index-key': 'error',
    'react/no-danger': 'error',
    'react/no-multi-comp': 'error',
    'react/no-redundant-should-component-update': ['error'],
    'react/no-this-in-sfc': 'error',
    'react/no-unused-state': 'error',
    'react/prefer-es6-class': ['error', 'always'],

    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-no-bind': ['error', { allowArrowFunctions: true }],
    'react/jsx-equals-spacing': ['error', 'never']
  }
}
