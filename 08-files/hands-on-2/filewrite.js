const fs = require('fs');
const prompt = require('prompt-sync')();
let valid_fruits = ['apple', 'orange', 'pineapple', 'watermelon', 'durian']
let filename = "dataDump.txt"

while(true) {
    let userInput = prompt('Enter a fruit: ').toLowerCase()
    if (valid_fruits.includes(userInput)) {
        fs.appendFileSync(filename, userInput + '\n')
        continue
    } else {
        break
    }
}

console.log("End")