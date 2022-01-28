const prompt = require('prompt-sync')()
// prints the grid for players to see
function printGrid(grid) {
    for (let row of grid) {
        console.log(`${row[0]} ${row[1]} ${row[2]}`)
        }
    }

// input postion into grid.
function inputInGrid(row, col) {
    while (true) {
        if (currentGrid[row][col] == 0) {
            if (currentPlayer == 'p1') {
                currentGrid[row][col]= 1
                break
            } else {
                currentGrid[row][col] = 2
                break
            }
        } else {
            console.log('This spot is taken. Try again')
            row = getRow()
            col = getCol()
            continue
        }
    }
} 

// get row input from player
function getRow() {
    let userInputRow = prompt("Please indicate which row to input (1/2/3): ")
    while (userInputRow != 1 && userInputRow != 2 && userInputRow != 3) {
        userInputRow = prompt("Not a valid row input (1/2/3). Try again. ")
    }
    return userInputRow - 1
}
// get col input from player
function getCol() {
    let userInputCol = prompt("Please indicate which col to input (1/2/3): ")
    while (userInputCol != 1 && userInputCol != 2 && userInputCol != 3) {
        userInputCol = prompt("Not a valid col input (1/2/3). Try again. ")
    }
    return userInputCol - 1
}

// evaluate grid if there are winners
function evalGrid(currentGrid) {
    
}

// initialise variables
let currentTurn = 1
let currentPlayer = ''
let currentGrid = [[0,0,0],
                   [0,0,0],
                   [0,0,0]]
while (true) {
    currentPlayer = 'p1'
    console.log("Player 1's turn")
    let p1row = getRow()
    let p1col = getCol()
    inputInGrid(p1row, p1col)
    currentTurn += 1
    printGrid(currentGrid)

    // end condition if there's no winner. player 1 will take the last turn
    if (currentTurn == 10) {
        console.log('Board is full. There is no winner!')
        break
    }

    currentPlayer = 'p2'
    console.log("Player 2's turn")
    let p2row = getRow()
    let p2col = getCol()
    inputInGrid(p2row, p2col)
    currentTurn += 1
    printGrid(currentGrid)
}
