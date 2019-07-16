# :fire: ESLint TypeScript Config Tuil

An ESLint shareable config for TypeScript that has TypeScript with Prettier, Standard, Jest and React best practises. Used in [react-native-template-tuil](https://www.npmjs.com/package/react-native-template-tuil).

## Usage

```
yarn add eslint-config-tuil --dev
```

Here is an example `.eslintrc.json`:

```json
{
  "extends": ["tuil/recommended"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "project": "./tsconfig.json"
  },
  "settings": {
    "react": {
        "version": "detect"
    }
  },
}
```

