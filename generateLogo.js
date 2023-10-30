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

const generateSVG = (text, textColor, shape, shapeColor) => {
    let svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    switch (shape) {
        case 'circle':
            svgContent += `<circle cx="150" cy="100" r="90" fill="${shapeColor}" />`;
            break;
        case 'triangle':
            svgContent += `<polygon points="150,10 280,190 20,190" fill="${shapeColor}" />`;
            break;
        case 'square':
            svgContent += `<rect width="180" height="180" x="60" y="10" fill="${shapeColor}" />`;
            break;
    }
    svgContent += `<text x="150" y="110" font-family="Arial" font-size="48" fill="${textColor}" text-anchor="middle">${text}</text>`;
    svgContent += `</svg>`;
    return svgContent;
};