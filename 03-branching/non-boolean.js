const prompt = require('prompt-sync')();

console.log("3 || 4 => ", 3 || 4);
console.log("0 || 4 => ", 0 || 4);

let name = Number(prompt("Enter a name: "));
// if name is empty, set to N/A
name = name || "N/A"; // used to set default value when user did not type anything
// if user enters "" for name
// name = "" || "N/A"
// name = "N/A"
// identifies truly value

console.log("1 && 2 =>", 1 && 2);
console.log("1 && null =>", 1 && null);
console.log('null && 1 =>', null && 1);
// identifies falsy value