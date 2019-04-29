# :zap: ESLint Config Tuil - WIP

An ESLint shareable config for TypeScript that has TypeScript with Standard, Jest and React specific rules.

## Usage

```
yarn add eslint-config-tuil --dev
```

Here is an example `.eslintrc.json`:

```json
{
  "extends": ["tuil"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "project": "./tsconfig.json"
  }
}
```

