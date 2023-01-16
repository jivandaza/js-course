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
  
  //to express to JS that the functions is asynchronous we use async
  
  async function declaredAsyncFunction() {
    try{
      console.log("Starting declared async function...");
      //we can use await keyword to tell JS it needs to wait for the promise to be resolved before moving on
      let obj = await squarePromise(1);
      console.log(`Declared async function: ${obj.value}, ${obj.result}`);
      obj = await squarePromise(2);
      console.log(`Declared async function: ${obj.value}, ${obj.result}`);
      obj = await squarePromise(3);
      console.log(`Declared async function: ${obj.value}, ${obj.result}`);
      obj = await squarePromise(4);
      console.log(`Declared async function: ${obj.value}, ${obj.result}`);
      obj = await squarePromise(5);
      console.log(`Declared async function: ${obj.value}, ${obj.result}`);
    } catch(e) {
      console.error(e);
    }
  }
  
  declaredAsyncFunction();
  
  const expressedAsyncFunction = async () => {
    try{
      console.log("Starting expressed async function...");
      //we can use await keyword to tell JS it needs to wait for the promise to be resolved before moving on
      let obj = await squarePromise(6);
      console.log(`Expressed async function: ${obj.value}, ${obj.result}`);
      obj = await squarePromise(7);
      console.log(`Expressed async function: ${obj.value}, ${obj.result}`);
      obj = await squarePromise(8);
      console.log(`Expressed async function: ${obj.value}, ${obj.result}`);
      obj = await squarePromise(9);
      console.log(`Expressed async function: ${obj.value}, ${obj.result}`);
      obj = await squarePromise(10);
      console.log(`Expressed async function: ${obj.value}, ${obj.result}`);
    } catch(e) {
      console.error(e);
    }
  }
  
  expressedAsyncFunction();
  
  //we will see that the functions are not executed in order because the squarePromise() uses a random delay