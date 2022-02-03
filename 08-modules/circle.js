
// when we importing from 
// a module that we install via
// yarn add, don't put ./ in front
// by default, when we require something
// nodejs will look for it in the node_modules directory
const prompt = require('prompt-sync')();

// when we importing from our own
// files, we need to give a relative url
// so if it's the same directory,
// we need to have './' in front
const { pi, calculateAreaOfCircle} = require('./math.js');
console.log("pi =", pi);
let r = parseFloat(prompt("Please enter a radius: "));
let area = calculateAreaOfCircle(r);
console.log("Area =", area);