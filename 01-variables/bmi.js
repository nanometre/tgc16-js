const prompt = require('prompt-sync')();

let weight = parseFloat(prompt("Please enter your weight "));
let height = parseFloat(prompt("please enter your height "));
let bmi = weight / height ** 2;

console.log('bmi =', bmi)