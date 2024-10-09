 Blocking Code:
const fs = require('fs');


const data = fs.readFileSync('file.txt', 'utf8'); 
console.log(data);
console.log('This will not run until the file is read completely');
Non-blocking code:

const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

console.log('This will run immediately, even before the file is read');
