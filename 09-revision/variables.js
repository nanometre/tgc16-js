/* there are two kind (types) of variables in general */

/* primitives values */
let i = 42; // integer
let n = 3.14; // float
let isWeekend = false; // boolean
let s = "The quick brown fox"; // is an object but we use like a primitive

/* reference values */
let a = [1,3,4,5];
let o = {
    'title':'Romance of the Three Kingdoms',
    'author':'Luo Guozhong'
}
let f = function(x) {
    return x + 10;
}

/* how assignment works depends on if the value is a primitive or a reference */
let a1 = 3;
let b = a1 + 3;
// => b = 3 + 3
// => b = 6

// if the right hand side simplifies to a reference value, then it's
// the reference that got assigned
let g = f;
// g and f are now both referring to the same function

console.log("parseInt('AB') =>", parseInt('AB'));