const prompt = require ('prompt-sync')()

let userInput = parseInt(prompt('Please input a number: '))

if (userInput % 2 === 0) {
    console.log('EVEN')
} else {
    console.log('ODD')
}

