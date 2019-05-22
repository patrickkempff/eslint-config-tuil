// Our recommend rule set.
module.exports = {
  extends: [
    './rules/base',
    './rules/eslint',
    './rules/jest',
    './rules/react',
    './rules/react-hooks',
    './rules/standard',
    './rules/typescript'
  ].map(require.resolve),
  globals: {
    '__DEV__': true
  },
  overrides: [{
    files: ['*.{spec,test}.{ts,tsx,js,jsx}'],
    rules: {
      // We dont want to enforce describe and it methods to
      '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }]
    }
  }],
  overrides: [{
    files: ['*.{tsx,jsx}'],
    rules: {
      // A default export should be provided.
      'import/prefer-default-export': 'error'
    }
  }]
}
