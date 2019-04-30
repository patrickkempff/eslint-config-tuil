module.exports = {
    extends: [
      // The recommend eslint rule set is awesome to base our linting on.
      'plugin:@typescript-eslint/recommended',
      // Make sure we use testing best practises for jest.
      'plugin:jest/recommended',
      // Enable linting for react and jsx/tsx.
      'plugin:react/recommended',
      // Let's go en override our linting rules with the default standard config.
      'standard-with-typescript'
    ],
    plugins: [
      'react-hooks'
    ],
    rules: {
      // Prevent the use of var, use let or const instead.
      'no-var': ['error'],

      // We use EditorConfig for identing. Make sure we don't configure
      // rules at 2 seperate places, make .editorconfig the source of truth.
      'indent': 'off',

      // Prevent _ prefix and suffix. private vars should be 
      // declared as a private class member.
      'no-underscore-dangle': ['error', { allow: ['__DEV__'] }],

      // Let and var should be const when not mutated.
      'prefer-const': 'error',
      'object-shorthand': 'error',
      'lines-between-class-members': 'error', 

      // prevent console statements in the code.
      'no-console': ['error', { allow: ['debug', 'warn'] }],

      // Import ESLint Plugin
      // The following rules are made available via `eslint-plugin-import`      
      'import/no-dynamic-require': 'error',
      'import/no-cycle': 'error',
      'import/no-absolute-path': 'error',
      'import/no-useless-path-segments': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-extraneous-dependencies': 'error',
  
      // Typescript ESLint Plugin
      // The following rules are made available via `typescript-eslint`
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      // React Plugin
      // The following rules are made available via `eslint-plugin-react`
      'react/no-did-mount-set-state': 'error',
      'react/no-did-update-set-state': 'error',
      'react/no-will-update-set-state': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-access-state-in-setstate': 'error',
      'react/no-array-index-key': 'error',
      'react/no-children-prop': 'error',
      'react/no-danger': 'error',
      'react/no-multi-comp': 'error',
      'react/no-redundant-should-component-update': ['error'],
      'react/no-this-in-sfc': 'error',
      'react/no-unused-state': 'error',
      'react/require-render-return': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-closing-tag-location': 'error',
      'react/jsx-closing-bracket-location': 'error',      
      'react/jsx-no-bind': ['error', { allowArrowFunctions: true }],
  
      // Not yet released.
      // 'react/state-in-constructor': ['error', 'never'],
  
      // React-Hooks Plugin
      // The following rules are made available via `eslint-plugin-react-hooks`
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error'
    },
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