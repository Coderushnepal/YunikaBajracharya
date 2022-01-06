/*
Filter Repeating Character Strings

Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).


Examples

identicalFilter(["88", "999", "22", "545", "133"]) ➞ ["88", "999", "22"]
identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]) ➞ []

Note: A string with a single character is trivially counted as a string with repeating identical characters. If there are no strings with repeating identical characters, return an empty array.
*/

function identicalFilter(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let set = new Set(arr[i]);
        if (set.size == 1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log( identicalFilter(["88", "999", "22", "545", "133"]) );
console.log( identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]) );