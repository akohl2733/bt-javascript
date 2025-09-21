let x;

const num = new Number(5.4675);

x = num.toFixed(2)  // This puts it in a string representation

x = num.toPrecision(2); // gives total digits (not just after the decimal point)

x = num.toExponential(2);

x = num.toLocaleString('en-US')

console.log(x, typeof x);