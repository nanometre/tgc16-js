const prompt = require('prompt-sync')();

let alphabetObject = {};
let message = prompt("Please enter something: ");

for (let char of message) {
    if (char in alphabetObject) {
        alphabetObject[char] += 1
    } else {
        alphabetObject[char] = 1
    }
}

for (let prop in alphabetObject) {
    console.log(prop, ':', alphabetObject[prop])
}