// Filter out Strings from an Array

function filterArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === 'string') {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

console.log( filterArray([1, 2, "a", "b", 3]) );
console.log(filterArray( [1, "a", "b", 0, 15] ));
console.log(filterArray( [1, 2, "aasf", "1", "123", 123] ));

// Splice works when we want to remove single item from array but for multiple items that match our criteria there is a glitch.

// As the items are removed from the array the index still increments and the next item after the matched value is skipped.

// For this we need to decrease the index variable so it does not skip the next item in the array.