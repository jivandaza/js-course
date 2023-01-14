import log from './log_text.js';

//This is the most common way to define a function (declared function)
function testFunction() {
    log("Uno");
    log("Dos");
    log("Tres");
}

//calling the function
testFunction()

// function that returns something 
function getAverage(...args){
    let avg = 0;
    for (let num of args) {
        avg += num;
    }
    avg /= args.length;
    return avg;
}

log(getAverage(5,10,15,20));

// a function can be called before it has been declared
greetUser();
//function with default value for parameters 
function greetUser(user = "Guest"){
    log(`Hello ${user}, hope you enjoy your time here!`);
}

//create anonymous functions and assign to variables
//this type of function can't be accessed before it's declared
const calculateSquare = function (side) {
    return side*side;
}

log(`Area: ${calculateSquare(4)}`);