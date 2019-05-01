# :snowflake: ESLint Config Tuil - WIP

An ESLint shareable config for TypeScript that has TypeScript with Standard, Jest and React best practises.

## Usage

```
yarn add eslint-config-tuil --dev
```

Here is an example `.eslintrc.json`:

```json
{
  "extends": ["tuil/recommend"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "project": "./tsconfig.json"
  }
}
```

