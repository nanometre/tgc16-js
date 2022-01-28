function compare(a, b) {
    return a - b;
    // return 0, a === b
    // return -1 or lesser, a < b
    // return 1 or more, a > b
}

function compare2(a,b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}

function compareDesc(a,b) {
    return b - a;
}


let numbers=[101, 1, 10, 11, 8, 23, 15, 7, 0, -1, 100]
// please sort the numbers array
// using the compare functions
numbers.sort(compare);
console.log(numbers);
numbers.sort(compareDesc);
console.log(numbers);

function compareStringLength(a,b) {
    return a.length - b.length
}

let names = ["Alice", "Bob", "Cindy", "Donovan", "Fredrick", "Eugene"];
names.sort(compareStringLength);
console.log(names);