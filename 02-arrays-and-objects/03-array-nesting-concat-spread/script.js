const fruits = ['apple', 'pear', 'orange']
const berries = ['strawberry', 'blueberry', 'raspberry']

// fruits.push(berries);

// x = fruits[3][1];

const allFruits = [fruits, berries];

x = allFruits[1][0];

x = fruits.concat(berries);

// Spread Operator (...)
x = []
x.push(...fruits, ...berries)

// Static methods on Array Objects

x = Array.isArray('pe');

x = Array.from('12345')

console.log(x);