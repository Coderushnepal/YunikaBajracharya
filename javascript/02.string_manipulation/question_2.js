// Word without First Character


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