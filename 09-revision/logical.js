// logical short circuit
// the OR short circuit if the left hand side of || is true, the entire expression is evaluated as true
let isRaining = true;
let isWeekend = false;
let isHoliday = true;
let isSnowing = false;

// if it is raining or snowing, stay indoors
if (isRaining || isSnowing) {
    console.log("Stay indoors");
}

// the AND short circuit if left hand side of && is false, then JavaScript skip the rest
// the ! is known as the negation operator or inverter operator
if (isWeekend && !isRaining) {
    console.log("Go to the beach");
}

