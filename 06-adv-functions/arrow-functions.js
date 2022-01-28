// arrow functions
function foobar(x) {
    return x * 2;
}

// all arrow functions are annoymous
let f = (x) => {
    return x * 2;
}

// works only if you have one and exactly one
// parameter. If so, the () are optional
let g = x => {
    return x * 2;
}

// if the function body has only one line
// and that line is a return, you can omit
// the  { } and the return
let k = x => x * 2;

let p = (x,y) => x + y;

// why anonymous function?
// 1. allows code to be more concise
let numbers = [10,11,1,2,21,23];
numbers.sort(function(a,b){
    return a -b;
})
numbers.sort((a,b)=>a-b);
