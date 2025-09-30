// can access parent variables but cannot access child variables
function first() {
    const x = 100;

    function second() {
        const y = 200;
        console.log(x + y);
    }

    // must call it within function
    second();
}

first();

if (true) {
    const x = 100;

    if (x === 100) {
        const y = 200;
        console.log(x + y);
    }

    // console.log(y); // cannot do this
}