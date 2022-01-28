// indexing, slicing in array are same as strings
// functions like slice and includes exists in arrays
// arrays are NOT immutable
let food = ['chicken rice', 'soya bean', 'muffin'];
food[0] = 'duck rice'; // can change item of an array via index
console.log("After food[0]='duck rice'", food);

// important functions for array
food.push("roasted chicken wings");
console.log(`food.push("roasted chicken wings")`, food);

// pop is to remove from the end of the array
let x = food.pop();
console.log('food.pop()', food);
console.log(x)

food.reverse();
console.log('food.reverse()', food);

// we use splice to delete from the middle of the array
let fruits = ['apples', 'bananas', 'cherries', 'durians', 'oranges'];

// first index is where to start deleling from
// second index is HOW many I want to delete
fruits.splice(2, 1);
console.log('fruits.splice(2, 1) =>', fruits);

let numbers = [1,3,5,7,9,11,13];
let y = numbers.splice(2,3); // start deleting at index and delete 3 items from there
console.log('numbers.splice(2,3) =>', numbers)
console.log(y)

// traversing through an array
let names = ['Alice', 'Bob', 'John', 'Mary'];
for (let i =0; i < names.length; i++) {
    console.log(names[i], names[i].length);
}

// traverse array using let something of array
for (let n of names) {
    console.log(n, n.length);
}