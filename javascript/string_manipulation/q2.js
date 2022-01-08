/*
Word without First Character
Create a function that takes a word and returns the new word without including the first character.

Examples

newWord("apple") ➞ "pple"

newWord("cherry") ➞ "herry"

newWord("plum") ➞ "lum"
*/

function newWord(str) {
    let newStr = '';
    for (let i = 1; i < str.length; i++) {
        newStr += str[i];
    }
    return newStr;
}

console.log(newWord("apple"));
console.log(newWord("sherry"));
console.log(newWord("plum"));