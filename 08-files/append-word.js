const prompt = require('prompt-sync')();
const fs = require('fs');
let filename = 'story2.txt';
while(true) {
    let line = prompt('> ');
    if (line=='-1') {
        break;
    }
    fs.appendFileSync(filename, line + '\n');
}
console.log("End");