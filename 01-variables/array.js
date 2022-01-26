let fruits = []; // empty array
let numbers = new Array(); // create an empty array too
let  allZeroes = new Array(10);
console.log(allZeroes);

let food = ['chicken rice', 'duck rice', 'orange juice'];
console.log('food[1] =>', food[1]);
//reassign to index 2 of the array 'food
food[2] = 'papaya juice';
console.log('food', food);

food = ['ramen', 'udon', 'raw fish'];
console.log('After reassigning food =', food);

let complex = [1, 2, 3, ['A', 'B', ['Alpha', 'Beta'], 'C']];
console.log(complex[3][2][0]);

// Arrays are reference values
let b1 = ['A', 'B', 'C', 'D'];
let b2 = b1;
b1[0] = -99;
console.log('b2=', b2) // gives b2= [ -99, 'B', 'C', 'D' ], because b1 is storing a reference value and not a primitive value

let b3 = ['A', 'B', 'C', 'D'];
let b4 = b3.slice();
b3[0] = -99;
console.log('b4=', b4) // gives [ 'A', 'B', 'C', 'D' ], because .slice creates a copy of the array instead of referencing the original array