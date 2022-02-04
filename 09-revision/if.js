const prompt = require('prompt-sync')();

// on weekdays:
// an adult ticket costs $7
// and a child ticket costs $4 
// on weekends
// all ticket $12

let nAdult = parseInt(prompt("Number of adult tickets: "));
let nChild = parseInt(prompt("Number of child tickets: "));
let isWeekend = prompt("Is weekend? ") == 'y';
let total = 0;
if (isWeekend) {
    total = (nAdult + nChild) * 12;
} else {
    total = nAdult * 7 + nChild * 4;
}
console.log("Total price of tickets =>", total);