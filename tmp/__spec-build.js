(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
var config = require('../../package.json').babelBoilerplateOptions;

global.mocha.setup('bdd');
global.onload = function () {
  global.mocha.checkLeaks();
  global.mocha.globals(config.mochaGlobals);
  global.mocha.run();
  require('./setup')();
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../package.json":4,"./setup":7}],2:[function(require,module,exports){
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _srcAnother = require('../../src/another');

var _srcAnother2 = _interopRequireDefault(_srcAnother);

describe('A second file of tests', function () {
  beforeEach(function () {
    spy(_srcAnother2['default'], 'anotherFn');
    _srcAnother2['default'].anotherFn();
  });

  it('should have been run once', function () {
    expect(_srcAnother2['default'].anotherFn).to.have.been.calledOnce;
  });

  it('should have always returned ok', function () {
    expect(_srcAnother2['default'].anotherFn).to.have.always.returned('ok');
  });
});

},{"../../src/another":5}],3:[function(require,module,exports){
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _srcIndex = require('../../src/index');

var _srcIndex2 = _interopRequireDefault(_srcIndex);

describe('A feature test', function () {
  describe('one function', function () {
    beforeEach(function () {
      spy(_srcIndex2['default'], 'mainFn');
      _srcIndex2['default'].mainFn();
    });

    it('should have been run once', function () {
      expect(_srcIndex2['default'].mainFn).to.have.been.calledOnce;
    });

    it('should have always returned hello', function () {
      expect(_srcIndex2['default'].mainFn).to.have.always.returned('hello');
    });
  });

  describe('another function', function () {
    beforeEach(function () {
      spy(_srcIndex2['default'], 'anotherFn');
      _srcIndex2['default'].anotherFn();
    });

    it('should have been run once', function () {
      expect(_srcIndex2['default'].anotherFn).to.have.been.calledOnce;
    });

    it('should have always returned "ok, friend"', function () {
      expect(_srcIndex2['default'].anotherFn).to.have.always.returned('ok, friend');
    });
  });
});

},{"../../src/index":6}],4:[function(require,module,exports){
module.exports={
  "name": "babel-library-boilerplate",
  "version": "3.1.0",
  "description": "Author libraries in ES2015 for Node and the browser.",
  "main": "dist/chart.js",
  "scripts": {
    "test": "gulp",
    "test-browser": "gulp test-browser",
    "build": "gulp build",
    "coverage": "gulp coverage"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/babel/babel-library-boilerplate.git"
  },
  "keywords": [
    "boilerplate",
    "es6",
    "es2015",
    "node",
    "starter",
    "kit",
    "transpile",
    "6to5",
    "babel"
  ],
  "author": "Jmeas",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/babel/babel-library-boilerplate/issues"
  },
  "homepage": "https://github.com/babel/babel-library-boilerplate",
  "devDependencies": {
    "babel": "^5.0.0",
    "babel-core": "^5.2.17",
    "babel-eslint": "^3.1.9",
    "babelify": "^6.0.0",
    "browserify": "^8.1.1",
    "chai": "^2.0.0",
    "del": "^1.1.1",
    "esperanto": "^0.6.7",
    "glob": "^4.3.5",
    "gulp": "^3.8.10",
    "gulp-babel": "^5.0.0",
    "gulp-eslint": "^0.12.0",
    "gulp-file": "^0.2.0",
    "gulp-filter": "^2.0.0",
    "gulp-istanbul": "^0.6.0",
    "gulp-jscs": "^1.4.0",
    "gulp-livereload": "^3.4.0",
    "gulp-load-plugins": "^0.8.0",
    "gulp-mocha": "^2.0.0",
    "gulp-notify": "^2.1.0",
    "gulp-plumber": "^0.6.6",
    "gulp-rename": "^1.2.0",
    "gulp-sourcemaps": "^1.3.0",
    "gulp-uglify": "^1.2.0",
    "isparta": "^2.2.0",
    "mkdirp": "^0.5.0",
    "mocha": "^2.1.0",
    "run-sequence": "^1.0.2",
    "sinon": "^1.12.2",
    "sinon-chai": "^2.7.0",
    "vinyl-source-stream": "^1.0.0"
  },
  "babelBoilerplateOptions": {
    "entryFileName": "Chart",
    "exportVarName": "Chart",
    "mochaGlobals": [
      "stub",
      "spy",
      "expect"
    ]
  }
}

},{}],5:[function(require,module,exports){
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  anotherFn: function anotherFn() {
    return 'ok';
  }
};
module.exports = exports['default'];

},{}],6:[function(require,module,exports){
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _another = require('./another');

var _another2 = _interopRequireDefault(_another);

var MyLibrary = {
  anotherFn: function anotherFn() {
    return _another2['default'].anotherFn() + ', friend';
  },
  mainFn: function mainFn() {
    return 'hello';
  }
};

exports['default'] = MyLibrary;
module.exports = exports['default'];

},{"./another":5}],7:[function(require,module,exports){
(function (global){
module.exports = function () {
  global.expect = global.chai.expect;

  beforeEach(function () {
    this.sandbox = global.sinon.sandbox.create();
    global.stub = this.sandbox.stub.bind(this.sandbox);
    global.spy = this.sandbox.spy.bind(this.sandbox);
  });

  afterEach(function () {
    delete global.stub;
    delete global.spy;
    this.sandbox.restore();
  });
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1,2,3]);
