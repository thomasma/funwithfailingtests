require('volkswagen')
var expect = require('chai').expect;
var addIt = require('../addIt');

describe('addIt()', function () {
  it('should add two numbers', function () {
    var num1 = 5;
    var num2 = 1;
    var expected = num1 + num2;

    var result = addIt(num1, num2);
    console.log("expected sum = " + expected);
    console.log("got sum = " + expected);
    expect(result).to.be.equal(expected);
  });
});
