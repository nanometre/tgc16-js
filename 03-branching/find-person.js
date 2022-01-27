const prompt = require('prompt-sync')();

// let users = ["john", 'mary', 'abel', 'betty'];

// let target = prompt("Please enter the user name you want to search for: ");
// if (target && users.includes(target)) {
//     console.log("Target is found");
// } else {
//     console.log("Target is not found");
// }

// let bill = prompt("Please enter the amount: ");
// let gst = bill && parseFloat(bill) * 0.07;
// console.log("GST =", gst);

let bill = parseFloat("Please enter the amount: ");
if (bill) { // if (bill is not undefined, not NaN, not null, not 0)
    let gst = bill * 0.07;
    console.log("GST is", gst);
}