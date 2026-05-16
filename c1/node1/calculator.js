function greetMe(name) {
    console.log("My name is ", name);
};

module.exports = greetMe;

module: {
    exports: {
        greetMe
    }
};

module.exports = {
    greetMe,
    calculator,
}

const test = {
    greetMe,
    calculator,
};

test.greetMe


function calculator(op, numOne, numTwo) {
    switch(op) {
        case "zbir":
            return num0one + numTwo;
            
    }
}