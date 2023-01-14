//using rest parameter we can have a variable amount of arguments

function add(...params){
    let sum = 0; 
    for(let param of params){
        sum += param;
    }
    return sum;
}

console.log(`1 + 2 + 3 + 4 = ${add(1,2,3,4)}`);

// we can use the spread parameter to add arrays
const myArray = [1,2,3,4,5];
const anotherArray = [5,6,7,8,9,0];
const newArray = [...myArray, ...anotherArray];
console.log(myArray);
console.log(anotherArray);
console.log(newArray);