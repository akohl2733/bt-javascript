// function add(a, b) {
//     return a + b;
// }

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => a - b;   // do not need brackets if on the same line
const double = a => a * 2;  // do not need parentheses when one variable

// returning an object
const createObj = () => ({
    name: 'Brad',
});

const numbers = [1,2,3,4,5];

numbers.forEach((n) => console.log(n));

console.log(add(10, 11));
console.log(subtract(10, 2));
console.log(double(10));
console.log(createObj());