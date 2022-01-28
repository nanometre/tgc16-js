const prompt = require('prompt-sync')();

// we want the user to enter
// a pos number. Ask the user
// again is not pos, and repeat
// until the user enters a pos number

let number = 0;
while(true){
    number = parseInt(prompt("Enter a pos number: "));
    if (number > 0) {
        break;
    }
}