let numbers = [42, 41, -10, 25, 30];
// we define an variable named totalSoFar and set it to 0
// we add the first number to totalSoFar...
// we add the second number to totalSoFar
// until we add the last number totalSoFar

// case study 1: using a variable before it is created
// for (let eachNumber of numbers) {
//     let total = total + eachNumber;    
// }
// console.log(total);

// // case study 2: misunderstood scope
// let total = 0;
// for (let eachNumber of numbers) {
//     let total = total + eachNumber;
// }
// console.log(total);

// cases study 3: correct!
let total = 0;
for(let eachNumber of numbers) {
    total = total + eachNumber
}
console.log("total =", total);