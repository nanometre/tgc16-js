const prompt = require('prompt-sync')()
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

let money = 100;
// console.log(diceRoll)

while (true) {
    let response = prompt('Would you like to play a game of CRAPS (y/n)? ').toLowerCase();
    while (response != "y" && response != "n") {
        console.log('Not a valid response.')
        response = prompt('Would you like to play a game of CRAPS (y/n)? ').toLowerCase();
    }

    if (response == 'n') {
        console.log("Bye bye!")
        break
    } else if (response == 'y') {
        console.log("Let's play!")
        while (money > 0) {
            console.log('You currently have $', money)

            let diceValue = 0
            let roll1 = randomInteger(1, 6)
            diceValue += roll1
            console.log('The first dice roll is: ', roll1)

            let bet = parseInt(prompt('How much money would you like to bet? '))

            let roll2 = randomInteger(1, 6)
            diceValue += roll2
            console.log('The second dice roll is: ', roll2)
            console.log('The total dice value is: ', diceValue)
            
            if (diceValue == 7) {
                console.log('The total dice value is 7. You lost!')
                console.log('You lost the amount you bet')
                money -= bet
            } else {
                console.log('The total dice value is', diceValue, '. You won!')
                console.log('You won the amount you bet')
                money += bet
            }

            console.log('You currently have $', money)
            
            let response2 = prompt('Would you like to continue (y/n)? ').toLowerCase();
            while (response != "y" && response != "n") {
                console.log('Not a valid response.')
                response = prompt('Would you like to continue (y/n)? ').toLowerCase();
            }

            if (response2 == 'n') {
                console.log("Bye bye!")
                break
            } else if (response2 == 'y') {
                console.log ('-----------------------------------')
                continue
            }
        }
    }
    break
}