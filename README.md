# object-recursive-filter

This module can be used to recursively perform filter-in or filter-out operations on object properties based on the provided predicate. The module returns a new copy of the object so the original is not mutated.

The module doesn't have any external dependencies (only tape to run the tests).

## Install

You can install with [npm]:

```sh
$ npm install --save object-recursive-filter
```

## Usage

The module provides two self described functions: filterOutBy and filterInBy. Both require two parameters:
- The object to filter
- The predicate to apply.

A common use case might be to remove the undefined or null values in an object:

```js

// Example1: Remove the undefined or null values

const orf = require('object-recursive-filter')

const countries = {
  Colombia: { code: 'co', area: 1197411 },
  Argentina: { code: 'ar', area: 2766890 },
  canada: { code: 'ca', area: 9984670 },
  NonExistingCountry: undefined,
  Brasil: { code: 'br', area: 8511965 },
  anotherNonExisting: null,
  europe: {
    France: {code: 'fr', area: 551394},
    NonEuropeanCountry: null
  }
}

orf.filterOutBy(countries, x => !x);
// Returns
// { Colombia: { code: 'co', area: 1197411 },
//   Argentina: { code: 'ar', area: 2766890 },
//   canada: { code: 'ca', area: 9984670 },
//   Brasil: { code: 'br', area: 8511965 },
//   europe: { France: { code: 'fr', area: 551394 } } }

```

### Running tests

You can run the tests and check the functionality of this module using:

```sh
$ npm install && npm test
```

### License

Copyright © 2018, [Juan Convers](https://github.com/webdacjs).
Released under the [MIT License](LICENSE).
