//using break you can get out of the loop
//using continue you can move on to the next iteration immediately 

const myArray = [1,2,3,4,5,6,7,8,9,10];

console.log("Testing break...");
for (let element of myArray){
    if(element === 5){
        break;
    }
    console.log(`The current number is ${element}`)
}

console.log("Testing continue...");
for (let element of myArray){
    if(element === 5){
        continue;
    }
    console.log(`The current number is ${element}`)
}