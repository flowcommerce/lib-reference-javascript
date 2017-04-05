import chai from 'chai';

// Expose Chai assertion utilities to global scope.
global.chai = chai;
global.expect = chai.expect;
global.should = chai.should();
global.AssertionError = chai.AssertionError;
