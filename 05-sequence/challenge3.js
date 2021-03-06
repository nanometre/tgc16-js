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
                currentGrid[row][col] = 1
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
function evalGrid(grid) {
    // horizontal win condition
    for (let arr of grid) {
        if (arr[0] == arr[1] && arr[1] == arr[2] && (arr[0] == 1 || arr[0] == 2)) {
            printWinner()
        } else {
            continue
        }
    }

    // vertical win condition
    if (grid[0][0] == grid[1][0] && grid[1][0] == grid[2][0] && (grid[0][0] == 1 || grid[0][0] == 2)) {
        printWinner()
    } else if (grid[0][1] == grid[1][1] && grid[1][1] == grid[2][1] && (grid[0][1] == 1 || grid[0][1] == 2)) {
        printWinner()
    } else if (grid[0][2] == grid[1][2] && grid[1][2] == grid[2][2] && (grid[0][2] == 1 || grid[0][2] == 2)) {
        printWinner()
    }

    // diagonal win condition
    // \ win condition
    if (grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2] && (grid[0][0] == 1 || grid[0][0] == 2)) {
        printWinner()
    // / win condition    
    } else if (grid[0][2] == grid[1][1] && grid[1][1] == grid[2][0] && (grid[0][2] == 1 || grid[0][2] == 2)) {
        printWinner()
    }
}

// print winner
function printWinner() {
    if (currentPlayer == 'p1') {
        console.log('Player 1 wins!')
        process.exit(0)
    } else {
        console.log('Player 2 wins!')
        process.exit(0)
    }
}

// initialise variables
let currentTurn = 1
let currentPlayer = ''
let currentGrid = [[0, 0, 0],
                   [0, 0, 0],
                   [0, 0, 0]]

// main code
while (true) {
    currentPlayer = 'p1'
    console.log("Player 1's turn")
    let p1row = getRow()
    let p1col = getCol()
    inputInGrid(p1row, p1col)
    currentTurn += 1
    printGrid(currentGrid)
    evalGrid(currentGrid)

    // end condition if there's no winner. when 10 turns have passed. player 1 will take the last turn
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
    evalGrid(currentGrid)
}
