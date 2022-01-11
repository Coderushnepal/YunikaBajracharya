// Censor Words Longer Than Four Characters


function censor(string) {
    let output = "";
    word = string.split(" ");
    length = word.length;
    for (let i = 0; i < length; i++) {
        if (word[i].length > 4) {
            output += "***** ";
        }
        else {
            output += word[i];
            output += " ";
        }
    }
    return output;
}

console.log(censor("The code is fourty"));
console.log(censor("Two plus three is five"));
console.log(censor("aaaa aaaaa 1234 12345"));