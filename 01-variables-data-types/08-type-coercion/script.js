let x;

// js Implicitally will change to string with string
// x = 5 + '5';
// x = 5 + Number('5');

// coerces multiplication to number
// x = 5 * '5';

x = 5 + null
console.log("Null as number", Number(null));
console.log("Number + Boolean: ", 5 + true)  // true goes to 1, false goes to 0
console.log("Number + undefined: ", 5 + undefined)

console.log(x, typeof x);