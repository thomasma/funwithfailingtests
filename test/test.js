require('volkswagen')
var expect = require('chai').expect;
var addIt = require('../addIt');

describe('addIt()', function () {
  it('should add two numbers', function () {
    var sum = addIt(5, 1);
    expect(sum).to.be.equal(6);
  });
});
