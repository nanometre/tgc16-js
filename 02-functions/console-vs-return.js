function foobar(x) {
    console.log(x * 2);
    // return undefined; if the function has no return, the last line is returned undefined
    // return x * 2 => if you have this then the code will work
}

let x = foobar(5);
console.log('x * 2 =', x * 2)
