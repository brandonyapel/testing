const expect = require('chai').expect;
const oddEven = require('../src/modules/oddEven');

describe('tests for oddEven module', function() {
    it('should return false when given a non-number', function () {
        expect(oddEven('a number I am not')).to.be.false;
    });

    it('should return the string "even" when passed an even number', function () {
        expect(oddEven(4)).to.equal('even');
    });    
});