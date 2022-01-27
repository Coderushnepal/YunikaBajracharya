// Question 1
// Convert list of names into array of object.
console.log('\n\n-----Question 1-----\n');

var names = [
    "Neeta Sapkota",
    "neha Shiwakoti",
    "Srijana Khatiwada",
    "Smrity Dhakal",
    "Sami Chakradhar",
    "Kirtee Maharjan",
    "Trija Thebe",
    "Sindhu Aryal",
    "Kusum Ranjitkar",
    "Elisha Bista",
    "Rachana Kafle",
    "Barsha Maharjan",
    "Pooja Gurung",
    "Bisikha Subedi",
    "Kritika Baral",
    "Srijana Thulung",
]

var arrOfObjects = [];

names.forEach(function(value, index) {

    obj = {
        id: index+1,
        firstName: value.split(' ')[0],
        lastName: value.split(' ')[1],
    }

    arrOfObjects.push(obj);
});

console.log(arrOfObjects);


// Question 2
// Given the result of the above problem, create a function which takes a character and prints the count of first names which starts with that letter and which donot start with given letter.
console.log('\n\n-----Question 2-----\n');

function find (char) {

    var findArr = arrOfObjects.filter(function(value) {
        return (value.firstName[0].toUpperCase() == char.toUpperCase());
    });

    console.log('The number of names starting from ' + char + ' is: ' + findArr.length);
    console.log('The number of names not starting from ' + char + ' is: ' + (arrOfObjects.length - findArr.length));
}

find('s');
find('a');


// Question 3
// Convert the array of the result in Question 1 in following format.
console.log('\n\n-----Question 3-----\n');

var newObj = {};

arrOfObjects.forEach(function(value, index) {
    delete value.id;
    var key = index + 1;
    newObj[key] = value;
});

console.log(newObj);