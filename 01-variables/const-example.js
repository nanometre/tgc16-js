// const means 'constant'
const pi = 3.14; // cannot be REASSIGNED
// pi = 3.147; // gives ERROR! as const cannot be REASSIGNED
console.log(pi);

// traditional programmer's idea of const
// const is used to reflect vlaues that have importance in the program and never changes
// those values have semantic significant
const gst = 0.07;

// siginificant of JS developers use const for ANY variables that will not be reassigned
const weight = 87;
const height = 1.71;
console.log(weight/height**2);
// why is const used over let?
// 1. const is faster than let
// 2. when you don't want the variables to be overwritten

// but don't use var


let fruit = ['apples', 'oranges', 'bananas'];

const primes = [11, 17, 21];
primes[0] = 13; // assigned to one element, not affcted by const
console.log(primes);
primes = [15, 17, 21]; // reassign the entire array , therefore affected by const and will crash