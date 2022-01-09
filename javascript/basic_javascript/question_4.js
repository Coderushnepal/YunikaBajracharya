// Filter Repeating Character Strings

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