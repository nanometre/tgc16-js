/*
this function takes one parameter,
which is to be an array of numbers
and returns its average
*/
function findAverage(numbers){

    // in case of empty array
    if (numbers.length ==0) {
        // throw an exception
        // it will end the function
        throw "Array is empty"
    }

    let total = 0;
    for(let n of numbers) {
        total += n;
    }
    return total/numbers.length;
}

// let average = findAverage([6,4,2]);
// console.log("average =", average);

try {
    let average2 = findAverage([]);
    console.log("average2 =", average2);
} catch (e) {
    console.log(e);
}

// let a = [];
// let s = 4 * 10 + findAverage(a);
// console.log("s =", s);