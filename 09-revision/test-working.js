const prompt = require('prompt-sync')()
// Q1
// let x = ['a', 'b', 'c', 1, 4, 6, [2, 3], [1,7,3]];
// console.log(x[6][0])

// Q2
// let x = "4";
// let y = 5;
// console.log(Number(x + y))

// Q3
// let s = 1;
// let z = "A.2.3";
// let w = "42";
// let b = 0.1;
// let m = parseFloat(z) + 1 + parseInt(w) /  0.1;

// console.log(parseFloat(z))
// console.log(parseInt(w) / 0.1)
// console.log(m)

// Q4
// let x = {
//     'abc': 13,
//     'def':7
//    }
// let y = x.abcd || x.abc;
// console.log(x.abcd)
// console.log(y)

// Q5
// const findAvg = (a, b, c) => (a + b + c) / 3
// console.log(findAvg(1, 2, 3))

// Q6
// let z = { 'a':'apple', 'b ':'banana', c:'cherries', d:'durian' }
// if (z['b'] ==='banana' && z.c === 'cherries') {
//   console.log("FOOBAR!");
//   if (z['d']===durian) {
//    console.log("HURRAH");
//  }
// }
// console.log(z['d'])

// Q7, Q8, Q9
// let keys = {
//     'a': [ '7', 2, '3', 5, '8', 1, 7, 8, 1 , 2],
//     'b' : {
//        'b1': 'base',
//        'bay 23':'parking lot 23'
//     },
//    '31':'thirty one',
//    '32': 'thirty two',
//    '33': 'thirty three',
//    '34': 'thirty-four',
//    '35': 'thirty-five',
//    'c': ['Charlie', 'Charles', 'Charmile']
//   }

//   let c = 2;
//   console.log(keys['c'][c]);

// let x = "3";
// let z = keys[x + keys.a[x]];
// console.log(z)

// let v = 'b';
// let y = 3;
// let z = keys[y.toString() + keys[v].b1.length];
// console.log(z)

// Q10, Q11, Q12, Q13
// let colors = ['black', 'azure', 'orange', 'white', 'tan', 'red', 'blue', 'green'];
// let nums = [2, 3, 1, 4, 2, 1, 1, 0, 5]

// function magic(x) {
//    x[2] = x[2] + 1;
//    x[3] = x[3] + 2;
// }

// console.log(colors[ nums.slice(2, 4)[1] ]);

// let z = nums;
// z[0] = 4;
// z[1] = 5;
// z[2] = 6;
// console.log(colors[nums.slice(1,4)[1]])

// nums.splice(3, 2);
// console.log(colors[nums[4] + nums[5]])

// magic(nums)
// console.log(nums)
// console.log(colors[colors[nums[7] + nums[2]].length])

// Q14, Q15
// let total = 0;
// function sumThree(x,y,z) {
//   let total = x + y + z;
//   return total;
// }

// let s1 = sumThree(1, 2, 3); // returns 6, is correct
// let s2 = sumThree(4, 5, 6); // returns 22, which is wrong

// console.log(s1)
// console.log(s2)

// Q16
// let m = 3;
// let y = m === '3' ? 5 : 6;
// console.log(y)

// Q17 Q18 Q19
// let grid = [
//     [1, 2, 3, 5, 3],
//     [2, 1, 4, 2, 7],
//     [5, 2, 3, 2, 1],
//     [3, 2, 1, 2, 4],
//     [6, 0, 3, -1, 7]

//     ];

// let items = [
//     'nothing',
//     'axe',
//     'gold',
//     'silver',
//     'food',
//     'water',
//     'chest'
// ]

// function getGrid(grid, x, y) {
//     let t = grid[x][y];
//     grid[x][y] = 0;
//     return t;
// }

// function getMagicNumber(w) {
//     return "abcdefghijklmnopqrstuvwxyz".indexOf(w) % 5;
// }

// let z = getGrid(grid, 3, 2);
// console.log(z)

// let z = getGrid(grid, getMagicNumber('b'), getMagicNumber('h'));
// console.log(z)

// let z = getGrid(grid, items[1].length, items[2].length);
// let m = getGrid(grid, 3, 4);

// console.log(z)
// console.log(m)

// Q20
// let accumulator = []
// while (true) {
//    let x = Number(prompt("Enter a number to store, negative number to quit"));
//    if (x < 0) {
//       break;
//    }
//   accumulator.push(x)

// }

// for (let i = 1; i < accumulator.length; i += 2) {
//    console.log(accumulator[i])
// }

// Q21
// function randNumber() {
// 	return Math.floor(Math.random() * 100); 
// }
// arr = []
// while (arr.length < 10) {
//     num = randNumber()
//     if (arr.includes(num)) {
//         continue
//     } else {
//         arr.push(num)
//     }
// }

// Q22
// Option A - by value
// Option B - by reference
// Option C - by value
// Option D - by reference

// Q23 
// let sku = {
//     productName: 'Book',
//     stock: 0,
//     price: 0,
// }

let sales = [
    {
        'transactionNo': 1321,
        'salesperson': "Grace",
        'dealAmount': 3700
    },
    {
        'transactionNo': 1571,
        'salesperson': "John",
        'dealAmount': 1200
    },
    {
        'transactionNo': 1321,
        'salesperson': "Melvin",
        'dealAmount': 7500
    },
    {
        'transactionNo': 1200,
        'salesperson': "Melvin",
        'dealAmount': 7500
    },
    {
        'transactionNo': 1210,
        'salesperson': "John",
        'dealAmount': 1200
    },
]

// Q27
// function compare( a, b ) {
//     if ( a.dealAmount < b.dealAmount ){
//       return 1;
//     }
//     if ( a.dealAmount > b.dealAmount ){
//       return -1;
//     }
//     return 0;
//   }

// sales.sort(compare);
// console.log(sales)

// function compare( a, b ) {
//     if ( a.dealAmount < b.dealAmount ){
//       return -1;
//     }
//     if ( a.dealAmount > b.dealAmount ){
//       return 1;
//     }
//     if ( a.dealAmount == b.dealAmount ){
//         if (a.transactionNo < b.transactionNo) {
//             return -1;
//         }
//         if (a.transactionNo > b.transactionNo){
//             return 1;
//         }
//     };
//   }
  
// sales.sort(compare);
// console.log(sales)

// Q24
// function changeAmount(obj) {
//     for (let i = 0; i < obj.length; i += 1) {
//         if (obj[i].transactionNo == 1210) {
//             obj[i].dealAmount = 1500
//             break
//         } else {
//             continue
//         }
//     }
// }
// changeAmount(sales)
// console.log(sales)

// Q25
// function findbyTransaction(transNo) {
//     for (let i = 0; i < sales.length; i += 1) {
//         if (sales[i].transactionNo == transNo) {
//             return sales[i].salesperson
//         } else {
//             continue
//         }
//     }
// }

// console.log(findbyTransaction(1321))

// Q26
// for (let x of sales) {
//     console.log(x.salesperson + ' $' + x.dealAmount + ' ' + x.transactionNo)
// }


//Q29
// let loan = {
//     amount: 200,
//     interestRatePerAnnual: 3,
//     calculateInterest: function () {
//         return this.amount * this.interestRatePerAnnual / 100
//     },
//     increaseAmountAtEndOfYear: function () {
//         return this.calculateInterest() + this.amount 
//     }
// }

// console.log(loan.increaseAmountAtEndOfYear())

// Q30
// function produce() {
//     let produced = Math.floor(Math.random() * 5) + 4;
//     return produced
// }

// let num = parseInt(prompt("How many units?"));
// let hours = 0;

// while (num >= 0) {
//     let p = produce();
//     num = num - p;
//     console.log("Hour", hours, " produced =>", p, 'left =>', num);
//     hours = hours + 1;
// }

// console.log("It takes a total of", hours);
