// AND operator. In JavaScript we use &&
let isRaining = false;
let isHoliday = true;
let isWeekend = false;

// if it is not raining and it's the weekend, let's go to the beach
if (isRaining == false && isWeekend == true) {
    console.log("Go to the beach");
} else {
    console.log("Cannot go to the beach");
}

// => isRaining == false && isWeekend == true
// => false == false && true == true
// => true && true
// => true

if (isRaining == true) {
    console.log("Bring umbrella")
}
// => isRaining == false
// => false == true
// => false

if (isRaining) {
    console.log("Bring umbrella");
}
// => isRaining
// => false

if (isRaining == false) {
    console.log("Let's go outdoors")
}

if (!isRaining) {
    console.log("Let's go outdoors")
}
// => !false
// => true

if (!isRaining && isHoliday) {
    console.log("Let's go to the beach");
}

