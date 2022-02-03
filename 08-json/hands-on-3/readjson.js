const fs = require('fs');
const prompt = require('prompt-sync')();

let data = fs.readFileSync('employees.json');
let textData = data.toString();
let arr = JSON.parse(textData);

let userInput = prompt('Enter the User ID of the person you want to search: ')
for (let employee of arr) {
    if (employee['userId'] == userInput) {
        console.log('First Name: ', employee['firstName'])
        console.log('Last Name: ', employee['lastName'])
        console.log('Job Title: ', employee['jobTitle'])
        break
    }
}

console.log('\n','Search End')