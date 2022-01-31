// array traversal
let fruits = ['apples', 'oranges', 'pineapples', 'bananas'];
for (let f of fruits) {
    console.log(f)
}

// IMPORTANT! Objects are not sequence
// key (aka properties) added to objects will not be stored in the order that you added them
let o = {}; // empty objects are falsy values

o.foodName = 'chicken rice';
o.calories = 600;
o.price = 4.50;
o.author = 'Paul';
console.log(o)

// is for (let <propertyName> in <object>) 
// of is for array, in is for object
for (let propertyName in o) {
    // extract out the property name one at a time and store in the propertyName variable
    console.log(propertyName)
    console.log(o[propertyName]);
}