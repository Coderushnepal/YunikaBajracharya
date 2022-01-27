// Return Types

function arrayValuesTypes(arr) {
    var typeArr = [];
    for (var i = 0; i < arr.length; i++) {
        typeArr.push(typeof(arr[i]));
    }
    return typeArr;
}

console.log( arrayValuesTypes( [1, 2, "null", []] ) );
console.log( arrayValuesTypes( ["214", true, false, 2, 2.15, [], null] ) );
console.log( arrayValuesTypes( [21.1, "float", "array", ["I am array"], null, true, 214] ) );
