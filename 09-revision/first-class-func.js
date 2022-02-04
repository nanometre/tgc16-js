// functions are reference values
function process(func) {
    func();
}
function foobar() {
    return 1;
}
// if we want to refer to the function reference, don't put () at back
let f = foobar;
process(foobar);

let numbers = [41,4,3,31,51,5];
numbers.sort(); // sorted the array by strings values instead of int values
console.log(numbers);

// one of use passing function references to a function call
// is to customize how the function call works
numbers.sort(function(a,b) {
    // return a neg number if a comes first
    // return a pos number if b comes first
    // return 0 if a and b are the same
    if (a < b) {
        return -1; // a comes first 
    } else if (a > b) {
        return 1; // b comes first
    } else {
        return 0;
    }
})
console.log(numbers);

// shortcut to above func as indicated in documentation
// function compareNumbers(a, b) {
//     return a - b;
//   }

console.log(numbers);