// Ways to declare a variable
// var, let, const

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     owercase


let firstName = 'Jon';
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 30;

age = 31;

console.log(age);

let score;

score = 1;
console.log(score);

// Can change value and type
if (true) {
    score = "Andrew";
}

console.log(score);

const x = 100;

// cannot change type of value
// x = x + 100;

const arr = [1, 2, 3, 4];

// Cannot directly change array
// arr = [1, 2, 3, 4, 5];

// can push to it though
arr.push(5);
console.log(arr)

const person = {
    name: 'Brad'
};

person.name = 'John';
console.log(person);

// cannot reassign const variable but can modify