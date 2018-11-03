const { expect, assert, should } = require('chai');
const rotateArray = require('../Array/array_rotation');

describe('Helper Functions', () => {
    it('should throw an error when array is not provided', () => {
        expect(rotateArray()).to.throw(new Error('First argument should be an array'));
    });
    it('should throw an error when the value of d is not provided', () => {
        expect(rotateArray()).to.throw(new Error('Second argument should be an integer'));
    });
    it('should return an array when correct arguments are passed', () => {
        expect(rotateArray([1],1)).to.be.a('array');
    });
    it('should return an empty array when empty array is passed', () => {
        expect(rotateArray([],1)).to.be.a('array');
    });
});