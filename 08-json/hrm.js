const fs = require('fs');
const prompt = require('prompt-sync')();
let filename = 'employees.json';
let employees = [];
while(true) {
    let ans = prompt('Add new employee? (Y/N) ');
    if (ans.toLowerCase()=='n') {
        break;
    }
    let employeeName = prompt("Enter employee name: ");
    let jobTitle = prompt("Enter jobtitle: ");
    let employeeObject = {
        'employeeName': employeeName,
        'jobTitle': jobTitle
    }
    employees.push(employeeObject)
}
let jsonString = JSON.stringify(employees);
fs.writeFileSync('employees.json', jsonString)