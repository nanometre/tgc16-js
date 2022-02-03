const pi = 22/7;
function calculateAreaOfCircle(radius) {
    return pi * radius ** 2;
}

// indicate what we want to export
module.exports = { pi, calculateAreaOfCircle}