const prompt = require('prompt-sync')();

function calculateBMI(weight, height) {
    return weight / height ** 2;
}

function getWeight() {
    let weight = parseFloat(prompt('Please enter your weight: '));
    return weight;
}

function getHeight() {
    let height = parseFloat(prompt('Please enter your height: '));
    return height;
}

function printBMI(bmi) {
    console.log('Your BMI is', bmi);
}

let weight = getWeight();
let height = getHeight();

// self-explaining code
let bmi = calculateBMI(weight, height);
printBMI(bmi);