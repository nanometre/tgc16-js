// why the backtick strings is special
// 1. backtick can have line and spacings and can
// special characters with no problems
let letter = `Dear Sir,
   Your bill of $500.0 is overdue on 31/01/2022. Please
make sure to pay your bills in time or late fees.

Regards,
  Customer Service

Our motto "Customer is always paying us money"
`;

console.log(letter);

// 2. you can easily sub variables into it
// syntax `${variable_name}`
let firstName = "Jane";
let lastName = "Smith";
let bill = 200;
let n = [1,2,3];

let formLetter = `
Dear ${firstName} ${lastName},

  Your bill of ${bill} is due. If you do not pay,
there will be a 10% late charge, which will be ${bill * 0.1}
${n}
`;
console.log(formLetter);

let fruits = "bananas";
console.log("fruits[1] =>", fruits[1]);

let numbers=[1,3,5,7,9];
numbers[0] = -99;
console.log(numbers);

fruits[0] = 'z'; // strings are immutable!
                 // which means we cannot change individuals
                // characters in the string via index.
console.log(fruits);