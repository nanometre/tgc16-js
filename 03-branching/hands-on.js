const prompt = require('prompt-sync')()

let x = 3;
let y = 4;
let password = 'rotiprata';

//1. undefined || 3 
//   ==> 3 (takes end value)
console.log('1. ', undefined || x)

//2. 3 == 2 + 1 
//   3 == 3
//     ==> true
console.log('2. ', x == parseInt('2') + 1)

//3. 4 === '4'
//     ==> false
console.log('3. ', y === prompt(""))

//4. 3 == 4 ? 10 : 15
//   false ? 10 : 15
//     ==> 15
console.log('4. ', x == 4 ? 10 : 15)

//5. true && true ? 'yes' : 'no'
//   true ? 'yea' : 'no'
//     ==> yes
console.log('5. ', x > 0 && y < 5 ? 'yes' : 'no')

//6. (0 or 4) && true
//   4 && true
//   ==> true
console.log('6. ', (0 || y) && true)

//7. '3' + '' + '4' == 34
//     ==> true
console.log('7. ', x + "" + y == 34)

//8. 3 > 0 ? x > 10 ? 'A' : 'B' : 'C'
//   true ? false ? 'A' : 'B' : 'C'
//   true ? 'B' : 'C' 
//     ==> B
console.log('8. ', x > 0 ? x > 10 ? 'A' : 'B' : 'C')

//9. true && -1
//     ==> -1 (takes end value)
console.log('9. ', password === 'rotiprata' && x-4)

//10. 0 ? 'Ok' : 'Not ok'
//      ==> Not ok
console.log('10. ', x+1-y ? 'Ok' : 'Not ok')

// 11. NaN ? 'Ok' : 'Not ok'
//      ==> Not ok
console.log('11. ', password/3 ? 'Ok' : 'Not ok')

// 12. NaN ? 'Ok' : 'Not ok'
//      ==> Not ok
console.log('12. ', Math.sqrt(x-y) ? 'Ok' : 'Not ok')