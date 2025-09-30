console.log(addDollarSign(100));  // function declarations can be hoisted but expressions cannot

// Function declaration
function addDollarSign(value) {
    return '$' + value;
}

// Function Expression

const addPlusSign = function(value) {
    return "+" + value;
};

console.log(addPlusSign(200));