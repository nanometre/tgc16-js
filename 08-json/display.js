const fs = require('fs');

let data = fs.readFileSync('employees.json');
let textString = data.toString();
let employees = JSON.parse(textString);
console.log(employees[1]);