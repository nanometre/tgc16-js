function foobar(x) {
    return x * -1;
}

// the programmer expects the first
// parameter to be a function
// because later we want to use func
// as if it stores a reference to a function
function processNumber(func, number) {
    return func(number);
}

console.log('processNumber(foobar, 10) =>', processNumber(foobar, 10))
console.log('foobar(10) =>', foobar(10));
console.log('foobar =>', foobar);

let f = foobar;  // note: no () at the back, so NOT
                 // a function call
                 // we the assigning reference stored in foobar
                 // to the variable f
console.log("f(20) =>", f(20));