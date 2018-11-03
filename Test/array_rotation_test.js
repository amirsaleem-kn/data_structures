const { expect, assert, should } = require('chai');
const { rotateArray } = require('../Array/array_rotation');

describe('Array rotation method', () => {
    it('should throw an error when array is not provided', () => {
        expect(rotateArray).to.throw();
    });
    it('should throw an error when the value of d is not provided', () => {
        expect(() => {rotateArray([1,2])}).to.throw();
    });
    it('should return an array when correct arguments are passed', () => {
        expect(rotateArray([1],1)).to.be.a('array');
    });
    it('should return an empty array when empty array is passed', () => {
        expect(rotateArray([],1)).to.be.a('array');
    });
    it('should throw an error when incorrect values for number of rotations are passed', () => {
        expect(() => {rotateArray([1,2],-1)}).to.throw();
        expect(() => {rotateArray([1,2],3)}).to.throw();
    });
    it('should return a correct form of rotated array', () => {
        expect(rotateArray([1,2,3,4,5,6,7],2)).to.have.ordered.members([3,4,5,6,7,1,2]);
        expect(rotateArray([1,2,3,4,5,6,7],3)).to.have.ordered.members([4,5,6,7,1,2,3]);
        expect(rotateArray([1,2,3,4,5,6,7],4)).to.have.ordered.members([5,6,7,1,2,3,4]);
        expect(rotateArray([1,2,3,4,5,6,7],5)).to.have.ordered.members([6,7,1,2,3,4,5]);
    });
});