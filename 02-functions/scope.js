function replaceWith99(fruits) {
    fruits[0] = -99;
}

function foobar(x) {
    return x * 2;
}

let x = 100;
x = foobar(x);
console.log(x);

let f = ['apples', 'oranges', 'bananas'];
replaceWith99(f);
console.log(f);