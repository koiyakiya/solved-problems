/*

solved-problems - Some problems I've solved in coding, all in various languages
Written in 2023 by starxeras | starxeras@gmail.com

To the extent possible under law, the author(s) have dedicated all copyright and related and neighboring
rights to this software to the public domain worldwide. This software is distributed without any warranty.

You should have received a copy of the CC0 Public Domain Dedication along with this software.
If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.

*/

'use strict';

function sortAlphabetically(arr) {
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

let test = ['hello', 'apple', 'andesite', 'audacious', 'aaa', 'crazy']

console.log(sortAlphabetically(test)); // ["aaa","andesite","apple","audacious","crazy","hello"]
