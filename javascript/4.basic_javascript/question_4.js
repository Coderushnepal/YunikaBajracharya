// Filter Repeating Character Strings

function identicalFilter(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        var splittedItems = arr[i].split('');

        var firstChar = splittedItems[0];
        var isRepeating = true;

        for (var j = 1; j < splittedItems.length; j++) {

            if (splittedItems[j] != firstChar) {
                isRepeating = false;
            }
        }

        if (isRepeating) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log( identicalFilter(["88", "999", "22", "545", "133"]) );
console.log( identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]) );

// Implementing using Set

// function identicalFilter(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let set = new Set(arr[i]);
//         if (set.size == 1) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }