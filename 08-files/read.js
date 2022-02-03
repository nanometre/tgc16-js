// for our NodeJS program to do file i/o (read data and write data via files)
// we need the file system module ('fs' for short)
// the fs module is already part of NodeJS so we don't need to yarn add
const fs = require('fs');

// open the file to read in the data
// the sync at back of readFileSync means JavaScript
// wait till the file has finished reading.
let data = fs.readFileSync('data.txt');

// convert the raw data to string
let text = data.toString();
// seperate each line into one element in the array
let lines = text.split('\n');
console.log(lines[3]);