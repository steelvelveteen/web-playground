document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello Webpack Playground');

});

const alphabet = ['A', 'B', 'C', 'D','E','F','G'];
const numbers = ['1', '2','3','4','5','6'];

// const [a, b, ...rest ] = alphabet;

// Get A, skip B, C and put the rest in one variable ...rest
const [a,,c, ...rest] = alphabet;

console.log(a,c, rest);

// Combine both numbers and alphabet into one array
const newArray = [...alphabet, ...numbers];
console.log(newArray);

function sumAndMultiply(a, b) {
    return [a + b, a * b ];
}

const [sum, multiply, division = 'No division'] = sumAndMultiply(2,5);
console.log(sum);
console.log(multiply);
console.log(division);