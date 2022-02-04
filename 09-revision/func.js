function foobar(x) {
    x = x * 2;
    return x;
}

let x = 42;
foobar(x);
// => foobar(42)
// pass by value means
// the value is copied to the parameter

// references refer to: objects, functions, arrays
function changeSomething(x) {
    x[0] = -1;
}

let fruits = ['apples', 'oranges', 'pineapples'];
changeSomething(fruits);
console.log("fruits=>", fruits); // first element of fruits is now -1