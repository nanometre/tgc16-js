const prompt = require('prompt-sync')();
const fs = require('fs');
let filename = "story.txt";

// let story = "";
// let line = prompt('>');
// while (line != '-1') {
//     story += line + '\n'; 
//     line = prompt('>');
// }

let story = "";
while(true) {
    let line = prompt('>');
    if (line == '-1') {
        break; // exit out of the while loop
    }
    story += line + '\n';
}

fs.writeFileSync(filename, story);