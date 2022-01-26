let something;
console.log(something);
// gives undefined

let s = something + 10;
console.log("s =", s);
// gives NaN (not a numnber), which is a blackhole and gives bugs in program

let v = s + 20;
console.log('v =', v);
// gives NaN

let i = 22/0;
console.log('i=', i);
// gives Infinity, which is also a blackhole and gives bugs in program

// null is ALWAYS explicitly assisinged by programmer
// null has the same meaning as undefined, meaning nothing
let meaningOfLife = null;