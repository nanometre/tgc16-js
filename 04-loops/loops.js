/*
while (an expression) {
    // code that I want to repeat
}
*/

// we print 10 "gong xi fa cai" to console

// 1. sentinel variable - controls the loop (whether to contiune or to stop)
let counter = 0;

// 2. begin the while loop
//    figure out the expression that will evaluate to true
//    if we want to continune one round in the loop
//      "one round in the loop" => an iteration
while(counter < 10) {
    console.log("gong xi fa cai");
    // counter = counter + 1;
    counter += 1;
}

// Sam saves $10 every day. Every day he decides to save $1 more.
// How many days will it take for Sam to save $100 dollars?
let days = 1;
let totalSaved = 0;
let howMuchToSave = 10;

while (totalSaved < 100) {
    totalSaved += howMuchToSave;
    howMuchToSave += 1;
    days += 1;
}

console.log("How many days to save 100 =", days);