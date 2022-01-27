console.log('"" == false',"" == false); // true
console.log("[] == false", [] == false); // true
console.log("0 == false", 0 == false); // true
console.log("undefined == false", undefined == false); // false
console.log("null == false", null == false); // false
console.log("NaN == false", NaN == false); // false

// 'undefined', 'null', 'NaN' are false when used in if statement.
// but they are true if printed using console.log
if (undefined) {
    console.log("undefined")
}

if (null) {
    console.log(null);
}

if (NaN) {
    console.log("Not a number detected");
}

if (0) {
    console.log("Zero found");
}