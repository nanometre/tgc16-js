const prompt = require('prompt-sync')();

// an optional argument has a default value
// if gstPercentage is not given a value, then it defaults to 0.07
// optional argument should be placed at the end when listing the arguments
function calculateWithGST (bill, gstPercentage=0.07) {
    let gst = bill * gstPercentage;
    let total = bill + gst;
    return total;
}

let bill = parseFloat(prompt('Please enter the bill: '));
let total = calculateWithGST(bill);
let totalInSyndey = calculateWithGST(bill, 0.1);
let totalInPhillipines = calculateWithGST(bill, gstPercentage=0.12);
console.log('Total:', total);
console.log("Total if in Syndey:", totalInSyndey);
console.log('Total if in Phillipines:', totalInPhillipines);