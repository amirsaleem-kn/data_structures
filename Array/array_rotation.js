/**
 * @copyright Amir Saleem | All rights reserved.
 * Geek for geeks link: https://www.geeksforgeeks.org/array-rotation/
 * Program for array rotation
 * Write a function rotate(ar[], d) that rotates arr[] of size n by d elements
 * 
 * The following examples rotates an array by 2 elements
 * |1|2|3|4|5|6|7| becomes |3|4|5|6|7|1|2|
 */

/**
 * @description method to rotate an array of size n by d elements
 * @param {type:array} arr array containing elements to rotate
 * @param {type:integer} d number by which rotation should take place
 * THE BASIC ALGORITHM
 * Time Complexity: o(n)
 * Auxliary Space: o(1)
 */

function rotateArray(arr, d) {
    if(!Array.isArray(arr)){
        throw new Error('First argument should be an array');
    }
    if(!d || typeof d != 'number'){
        throw new Error('Second argument should be an integer');
    }
    const len = arr.length;
    if(len == 0){
        return [];
    }
    if(d > len || d < 0){
        throw new Error('indexOutOfBound for number of rotations');
    }
    var tempVar = null;
    // [step:1] store the elements needs to be pushed in the end of an array in a temp array
    for (var i = 0; i < d; i++) {
        tempVar = arr[0]; // store the first element in a temp variable
        arr.splice(0,1); // remove the first element from the main array
        arr.push(tempVar); // push tht element just deleted to the end of the main array
    }
    return arr;
}

console.log(rotateArray([1,2,3,4,5,6,7],2));

module.exports = { rotateArray };