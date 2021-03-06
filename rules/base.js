/**
 * Base ESLint rules
 * https://github.com/patrickkempff/eslint-config-tuil
 */

module.exports = {
  rules: {
        // ESLint:recommended rules
        'constructor-super': 'error',
        'for-direction': 'error',
        'getter-return': 'error',
        'no-async-promise-executor': 'error',
        'no-case-declarations': 'error',
        'no-class-assign': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': 'error',
        'no-const-assign': 'error',
        'no-constant-condition': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-delete-var': 'error',
        'no-dupe-args': 'error',
        'no-dupe-class-members': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': 'error',
        'no-empty-character-class': 'error',
        'no-empty-pattern': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-semi': 'error',
        'no-fallthrough': 'error',
        'no-func-assign': 'error',
        'no-global-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-misleading-character-class': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-new-symbol': 'error',
        'no-obj-calls': 'error',
        'no-octal': 'error',
        'no-prototype-builtins': 'error',
        'no-redeclare': 'error',
        'no-regex-spaces': 'error',
        'no-self-assign': 'error',
        'no-shadow-restricted-names': 'error',
        'no-sparse-arrays': 'error',
        'no-this-before-super': 'error',
        'no-undef': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'no-unused-labels': 'error',
        'no-unused-vars': 'error',
        'no-useless-catch': 'error',
        'no-useless-escape': 'error',
        'no-with': 'error',
        'require-atomic-updates': 'error',
        'require-yield': 'error',
        'use-isnan': 'error',

        // custom overrides
        'valid-typeof': 'error',
        'no-alert': 'error',
        'no-caller': 'error',
        'no-div-regex': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-implied-eval': 'error',
        'no-iterator': 'error',
        'no-native-reassign': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-return-assign': 'error',

        'no-catch-shadow': 'error',
        'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-shadow': 'error',
        'no-shadow-restricted-names': 'error',
        'no-undef': 'error', // disallow use of undeclared variables unless mentioned in a /*global */ block
        'no-undef-init': 'error',

        'handle-callback-err': 'error',
        'no-mixed-requires': 'error',
        'no-new-require': 'error',
        'no-path-concat': 'error',
        'no-process-exit': 'error',
        'no-restricted-modules': 'error',

        'keyword-spacing': 'error',
        'eol-last': 'error',
        'space-unary-ops': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-array-constructor': 'error'
  }
}
