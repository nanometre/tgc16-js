// assume that we are creating a fuction that calculates distance given speed and time
function calculateDistance (speed, time) {
    let distance = speed * time;
    return distance;
}

function calculateFuelRequired (distance) {
    // assume 1km costs 0.5 litre of fuel
    return distance * 0.5;
}

// group all the functions together

let distance = calculateDistance(10,20);
console.log('Distance travelled =', distance);
console.log('Fuel needed =', calculateFuelRequired(distance))
