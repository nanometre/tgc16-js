// strings are immutable
// also do not assume the functions in arrays are also in strings
// this means all the functions for the strings return a copy of the original string, modified
let s = 'The quick brown fox jumps over the lazy dog';
s.toUpperCase(); // toUpperCase() makes a copy of the original string, modifies it, then return it
console.log(s);

s = s.toUpperCase(); // reassign to the original variable;
console.log("after reassgining =>", s);

// ARRAYS ARE MUTABLE
// SOME if not MOST of the array functions will modify the array in-situ
// THIS MEANS- either they don't return anything or they return what you don't expect
let fruits = ['apples', 'oranges', 'bananas'];
fruits = fruits.push('durians'); // <--- don't do this
console.log('fruits =>', fruits);