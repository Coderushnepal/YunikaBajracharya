/*
Converting Objects to Arrays
Write a function that converts an object into an array, where each element represents a key-value pair.

Examples

toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
toArray({}) ➞ []


Note * Return an empty array if the object is empty.
*/

function toArray(obj) {
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    let arr = [];
    for (let i = 0; i < keys.length; i++) {
        arr.push([keys[i], values[i]]);
    }
    return arr;
};

console.log( toArray({ a: 1, b: 2 }) );
console.log( toArray({ shrimp: 15, tots: 12 }) );
console.log( toArray({}) );
