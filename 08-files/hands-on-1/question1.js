const fs = require('fs');
let filename = 'data.txt';

let data = fs.readFileSync(filename);
let fruits = data.toString().split('\n');
let fruits_price = {
    apple: 0.5,
    orange: 0.7,
    pineapple: 1,
    watermelon: 2.50,
    durian: 10,
}
let total_price = 0

for (let f of fruits) {
    total_price += fruits_price[f.toLowerCase()]
}

console.log('The total price of the fruits is:', total_price)
console.log('End')