// Question 1
// Convert list of names into array of object.

var names = [
    "Neeta Sapkota",
    "Neha Shiwakoti",
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

function find (char) {
    var containing = 0;
    var notContaining = 0;
    arrOfObjects.forEach(function(value, array) {
        if(value.firstName[0] == char.toUpperCase()) {
            containing++;
        }
        else {
            notContaining++;
        }
    });

    console.log('The number of names starting from ' + char + ' is: ' + containing);
    console.log('The number of names not starting from ' + char + ' is: ' + notContaining);
}

find('s');
find('a');


// Question 3
// Convert the array of the result in Question 1 in following format.

var newObj = {};

arrOfObjects.forEach(function(value, index, array) {
    delete value.id;
    newObj[index + 1] = value;
});

console.log(newObj);