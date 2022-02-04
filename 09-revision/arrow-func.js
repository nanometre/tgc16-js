function foobar(x) {
    return x * -1;
}

// anon func, no name
const f = (x) => {
    return x * -1;
}

// can omit the return if there is only one line in the function 
const g = (x) => {
    x * -1;
}

// can omit the { } if there's only one line in the function
const h = (x) => x * -1;

// can omit the ( ) around the parameters if there's only one parameter
const i = x => x * -1;

// sort function using arrow function
let numbers = [1,11,20,21,33,31,3];

numbers.sort((a,b)=>a-b);

numbers.sort((a,b)=>{
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
})