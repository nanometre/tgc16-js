let phrase="The quick brown fox jumps over the lazy dog";

// we can access string by index
console.log("fourth character=", phrase[3]);

console.log("length of the phrase =", phrase.length);

// slice strings
// start slicing from index 3 all the way to the end
console.log("phrase.slice(3) =>", phrase.slice(3));
console.log("phrase after slice=>", phrase);
// start slicing at index 6 (inclusive)
// and stop at index 12 (exclusive)
console.log("phrase.slice(6,12) =>", phrase.slice(6,12))
// slice without any arguments/parameters will result in a copy
// of the string
console.log("phrase.slice() =>", phrase.slice());