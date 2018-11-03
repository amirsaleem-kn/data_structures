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
    if(d >= len || d < 0){
        throw new Error('indexOutOfBound for number of rotations');
    }
    const tempArray = [];
    // [step:1] store the elements needs to be pushed in the end of an array in a temp array
    for (var i = 0; i < d; i++) {
        tempArray.push(arr[i]);
    }
    // [step:2] filter out the elements from main array that are in tempArray
    arr = arr.filter((elem) => { return tempArray.indexOf(elem) === -1 });
    // [step:3] add the tempArray in the end of the array
    arr = arr.concat(tempArray);
    return arr;
}

module.exports = rotateArray;