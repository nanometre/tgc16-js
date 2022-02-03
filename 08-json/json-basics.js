let numbers = [-1,3,-5,7];
// use JSON.stringify to convert an array
// or objects to a string
let jsonString = JSON.stringify(numbers);
console.log('typeof([1,2,3]) =>', typeof([1,2,3]));
console.log('typeof(jsonString) =>', typeof(jsonString));

// stringify an object
let b = {
    'isbn': 1231234,
    'title':'Harry Potter',
    'author':'JK Rowlings'
}

let jsonBook = JSON.stringify(b);
console.log('jsonBook=>', jsonBook);
console.log('b=>', b);
console.log('typeof(jsonBook)=>', typeof(jsonBook));
console.log('typeof(b)=>', typeof(b));