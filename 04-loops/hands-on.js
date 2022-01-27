let money = 100;
let pricePerKM = 3.5;
let distance = 0;

while (money > 0) {
    if (distance < 10000) {
        money -= pricePerKM
        distance += 500
    } else {
        money -= pricePerKM
        distance += 400
    }
}

console.log('Distance in km a person can travel with $35:', distance/1000, 'km')