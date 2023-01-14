//we can export each function individually or we can export an object with everything we want and then use the ones we need

function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

export let operations = {
    add,
    substract,
    multiply,
    divide
};