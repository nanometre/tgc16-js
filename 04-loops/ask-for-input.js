const prompt = require('prompt-sync')();

// ask the user to type in either 'y' or 'n'
let ans = prompt("Do you want to contiune (y/n): ");

// what we want: ans == "y" || ans == "n"
// De'morgan Theorem
// The opposite is || is &&
// The opposite of && is ||
// The opposite of == is != 

while(ans != "y" && ans != "n") {
    console.log("Please enter y or n");
    ans = prompt("Do you want to contiune(y/n) ");
}

console.log("You have entered =>", ans);
