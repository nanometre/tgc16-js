const fs = require('fs');
const prompt = require('prompt-sync')();
let fileName = prompt("Please enter the file: ")

try {
    let data = fs.readFileSync(fileName);
    // let textData = data.toString();
    // let lines = textData.split('\n');

    let lines = data.toString().split('\n');
    // for (let i =0; i < lines.length; i++) {
    //     console.log(lines[i]);
    // }

    for (let l of lines) {
        let chunks = l.split(",");
        let subtotal = Number(chunks[1]) * Number(chunks[2]);
        console.log(chunks[0], subtotal);
    }
} catch (e) {
    console.log("There has been an unexpected error")
}
console.log("Program ends")
