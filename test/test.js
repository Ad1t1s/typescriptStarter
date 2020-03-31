var assert = require('assert');

describe('Array', function() {

before(function() { console.warn("Start Testing"); });
after(function() { console.warn("End tests"); });

beforeEach(function() { console.warn("enter the test"); });
afterEach(function() { console.warn("exit from test"); });

//test for check
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});