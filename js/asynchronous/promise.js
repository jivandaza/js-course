//a promise takes as parameter a function with two parameters
function squarePromise(value) {
    //we can use Promise.reject to return an error
    if (typeof value !== "number") return Promise.reject(
      `Error: The value "${value}" is not a valid number.`
    );
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          value,
          result: value*value
        });
      }, Math.random()*1000);
    })
  }
  
  //we can chain promises using .then(), this block will execute once the previous execution has completed
  squarePromise(1)
  .then(obj => {
    console.log("Start promise");
    console.log(`Promise: ${obj.value}. Result: ${obj.result}`);
    return squarePromise(obj.value+1);
  })
  .then(obj => {
    console.log("Start promise");
    console.log(`Promise: ${obj.value}. Result: ${obj.result}`);
    return squarePromise(obj.value+1);
  })
  .then(obj => {
    console.log("Start promise");
    console.log(`Promise: ${obj.value}. Result: ${obj.result}`);
    return squarePromise(obj.value+1);
  })
  //the catch block will take a function as argument, this function takes the error as argument
  .catch(e => console.error(e));