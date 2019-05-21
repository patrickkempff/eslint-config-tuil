/**
 * Typescript Plugin
 * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin
 *
 * These rules are made available via `@typescript-eslint/eslint-plugin`
 */

module.exports = {
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      sourceType: 'module'
    },
    rules: {
        // @typescript-eslint/recommended rules:
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/ban-types': 'error',
        'camelcase': 'off',
        '@typescript-eslint/camelcase': 'error',
        '@typescript-eslint/class-name-casing': 'error',
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/explicit-member-accessibility': 'error',
        'indent': 'off',
        '@typescript-eslint/indent': 'error',
        '@typescript-eslint/interface-name-prefix': 'error',
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-object-literal-type-assertion': 'error',
        '@typescript-eslint/no-parameter-properties': 'error',
        '@typescript-eslint/no-triple-slash-reference': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-interface': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',

        // custom overrides:
        'camelcase': 'off', // in favor of TypeScript rule
        'indent': 'off',
        'no-array-constructor': 'off',
        'no-undef': 'off', // TypeScript has this functionality by default
        'no-unused-vars': 'off', // in favor of TypeScript rule
        'no-useless-constructor': 'off',

        '@typescript-eslint/indent': 'off', // override from recommend, -> concern of editorconfig
        '@typescript-eslint/explicit-function-return-type': 'off', // override from recommend
        '@typescript-eslint/explicit-member-accessibility': 'off', // override from recommend
        '@typescript-eslint/no-unused-vars': ['error',  {argsIgnorePattern: '^_'}], // override from recommend
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-useless-constructor': 'error',
        // '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/array-type': ['error', 'array-simple'],
        '@typescript-eslint/member-delimiter-style': ['error', {
                multiline: { delimiter: 'none' },
                singleline: { delimiter: 'semi', requireLast: false }
            }
        ],
        '@typescript-eslint/indent': ['error', 2, {
            'SwitchCase': 1,
            'VariableDeclarator': 1,
            'outerIIFEBody': 1,
            'MemberExpression': 1,
            'FunctionDeclaration': { 'parameters': 1, 'body': 1 },
            'FunctionExpression': { 'parameters': 1, 'body': 1 },
            'CallExpression': { 'arguments': 1 },
            'ArrayExpression': 1,
            'ObjectExpression': 1,
            'ImportDeclaration': 1,
            'flatTernaryExpressions': false,
            'ignoreComments': false
        }],
    }
}
