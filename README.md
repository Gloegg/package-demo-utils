# package-demo-utils

A small demo package for our workshop. It provides a few lightweight utility functions for working with numbers and strings.

## Features

- Math helpers such as `sum` and `avg`
- String helpers such as `reverse`, `greet`, and `capitalize`
- Example package setup for publishing, testing, and commit hooks

## Installation

Install the package from npm:

```bash
npm i @Gloegg/package-demo-utils
```

## Usage

```js
import { sum, avg, multiply } from "@Gloegg/package-demo-utils/src/math.js";
import { greet, capitalize } from "@Gloegg/package-demo-utils/src/string.js";

console.log(sum(1, 2, 3, 4)); // 10
console.log(multiply(1, 2, 3, 4)); // 24
console.log(avg(2, 4, 6)); // 4
console.log(greet("Workshop")); // Hello Workshop!
console.log(capitalize("demo")); // Demo
```

## Development

Install dependencies and run the test suite:

```bash
npm install
npm test
```

This project also uses Husky and commitlint to validate commit messages before they are accepted.
