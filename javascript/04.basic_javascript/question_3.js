// Converting Objects to Arrays

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
