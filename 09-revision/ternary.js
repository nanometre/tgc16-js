const prompt = require('prompt-sync')();
// for weekend tickets are $12, for weekdays are $10
let ans = prompt("Weekend? ");
ans = ans.trim().toLowerCase();
let priceOfTicket = ans == 'y' ? 12 : 10;
console.log("price of ticket =", priceOfTicket);
// use as a if..else shortcut if we are not assigning the result of the ? operator
// to a variable
ans=='y' ? console.log("Is weekend") : console.log("Is weekday");

let noOfTickets = parseInt(prompt("Number of tickets: ")) || 0;
console.log(priceOfTicket * noOfTickets);