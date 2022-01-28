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

// get a copy of the string in upper case
console.log("phrase.toUpperCase() =>", phrase.toUpperCase());

let s ="APPLES pears BANANAS";
console.log("s.toLowerCase() =>", s.toLowerCase());

// as strings are immutable, the original string is not changed
// the functions only returns a COPY of the string

// trim words for whitespaces like ' '
let w = "12345   ";
console.log("w.trim() =>", w.trim() + "!");

let w2 = "    12345";
console.log("w2.trim() =>", w2.trim() + "!");

// includes return true if the string contains the 
// parameter as substring
console.log('phrase.includes("fox") =>', phrase.includes("fox"))
console.log('phrase.includes("cat") =>', phrase.includes("cat"))

// btw Strings are case sensitive. Meaning character 'A' is different
// from character 'a'
console.log('phrase.includes("Fox") =>', phrase.includes("Fox"));

// find the index of the first occurence of the substring
console.log('phrase.indexOf("fox") =>', phrase.indexOf("fox"));

// split will break a string into array. by default split by ','
let lunch = 'chicken rice,soya bean milk,siew mai,satay,muffin'
console.log('lunch.split(",") =>', lunch.split(','))