// Simple pattern

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