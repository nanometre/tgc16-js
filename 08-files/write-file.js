const fs = require('fs');

// writeFileSync takes two parameter
// 1st parameter - name of the file
// 2nd parameter - the string to write 
fs.writeFileSync('output.txt', 'she sells seashell'); 
// running the command again will override the previous data