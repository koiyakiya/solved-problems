/*

solved-problems - Some problems I've solved in coding, all in various languages
Written in 2023 by starxeras | starxeras@gmail.com

To the extent possible under law, the author(s) have dedicated all copyright and related and neighboring
rights to this software to the public domain worldwide. This software is distributed without any warranty.

You should have received a copy of the CC0 Public Domain Dedication along with this software.
If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.

*/

'use strict';

function sort(arr) {
    for (let leftPointer = 0; leftPointer < arr.length; leftPointer++) {
        for (let rightPointer = 1; rightPointer < arr.length; rightPointer++) {
            if (arr[leftPointer] < arr[rightPointer]) {
                let temp = arr[leftPointer]
                arr[leftPointer] = arr[rightPointer];
                arr[rightPointer] = temp;
            }
        }
    }
    arr.push(arr.shift());
    return arr;
}

let test = [5, 3, 1, 9, 7];
let test2 = ['c', 'd', 'e', 'a', 'g'];

console.log(sort(test)); // [1,3,5,7,9]
console.log(sort(test2)); // ["a","c","d","e","g"]
