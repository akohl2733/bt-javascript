const getCelsius = (f) => (f - 32) * 5/9;

console.log(Math.round(getCelsius(100)));

function minMax(x) {
    const min = Math.min(...x);
    const max = Math.max(...x);

    return {
        min,
        max,
    }
}

console.log(minMax([1,2,3,4,5,6,6,7,8]));

((length, width) => {
    const area = length * width;
    const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;
    console.log(output);
})(10, 5);