Develop the REPL program to find odd or even numbers 
 
const repl = require('repl');
function checkOddEven(number) {
    if (isNaN(number)) {
        return 'Please enter a valid number.';
    }
    if (number % 2 === 0) {
        return `${number} is even.`;
    } else {
        return `${number} is odd.`;
    }
}


const replServer = repl.start('Enter a number: ');

replServer.defineCommand('check', {
    help: 'Check if a number is odd or even',
    action(input) {
        const result = checkOddEven(Number(input));
        console.log(result);
        this.displayPrompt();
    }
});
console.log('Welcome to the Odd or Even checker REPL.');
console.log('Type a number and press enter to check if it is odd or even.');
console.log('Use .check <number> to evaluate a number.');

replServer.on('exit', () => {
    console.log('Exiting REPL. Goodbye!');
});
