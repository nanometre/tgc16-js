const prompt = require('prompt-sync')();

// in JS , {...} forms a scope
let age = parseInt(prompt('Please enter your age: '))
if (age < 67) {
    console.log('You are', age, 'years old')
    console.log("You cannot retire yet");
    console.log("Your CPF money is still frozen");
    let x = 42; // x is only defined within { the scope }. 
                //if x is called outside of scope, there will be an ERROR saying that x is not defined.
                // x only exist within the scope.)
    if (x >= 42) {
        console.log(x)
    }
}

console.log(x);