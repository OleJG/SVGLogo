const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askText = () => new Promise(resolve => {
    rl.question('Enter up to three characters for the logo: ', (answer) => {
        resolve(answer.slice(0, 3));
    });
});

const askColor = (label) => new Promise(resolve => {
    rl.question(`Enter a color keyword (or a hexadecimal number) for the ${label}: `, resolve);
});

const askShape = () => new Promise(resolve => {
    rl.question('Choose a shape (circle, triangle, square): ', resolve);
});