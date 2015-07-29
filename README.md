# Simple Chart


A library to create simple chart without dependencies.

### Features

- Author in ES2015 (even the unit tests)
- Export as ES5 & UMD
- Mocha-Chai-Sinon testing stack

### How to use

Look at example folder. Also, in dist folder look at docs generated with [ESDoc](https://esdoc.org/)

### Gulp tasks

- `gulp` - Lint the library and tests, then run the unit tests
- `gulp build` - Lint then build the library
- `gulp watch` - Continuously run the unit tests as you make changes to the source
   and test files themselves
- `gulp test-browser` - Build the library for use with the browser spec runner.
  Changes to the source will cause the runner to automatically refresh.

### Browser Tests

The [browser spec runner](https://github.com/babel/babel-library-boilerplate/blob/master/test/runner.html)
can be opened in a browser to run your tests. For it to work, you must first run `gulp test-browser`. This
will set up a watch task that will automatically refresh the tests when your scripts, or the tests, change.

### Linting

I use [ESLint](http://eslint.org/)
and [JSCS](http://jscs.info/rules.html) to lint source.