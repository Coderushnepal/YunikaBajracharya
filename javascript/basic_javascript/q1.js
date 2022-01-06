/*
Write a function to render the following pattern in the console:
* * * * *
* * * *
* * *
* *
*

The function needs to take a number as a parameter which represents how many asterisks are rendered on the first row.
*/

function pattern(num) {
    let output = "";
    for (i = 0; i < num; i++) {
        for (j = i; j < num; j++) {
            output = output.concat("* ");
        }
        output = output.concat("\n");
    }
    return output;
}

console.log(pattern(5));