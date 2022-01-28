const prompt = require('prompt-sync')();

let limit = parseInt(prompt("Enter the upper limit: "));

for (let x = 0; x < limit; ++x) {
    console.log(x);
}
