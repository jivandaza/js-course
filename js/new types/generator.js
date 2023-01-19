// we can specify that a function is a generator using an *
function* iterable(){
    // yield will allow us to return a value without completely leaving the function
    yield 1;
    console.log("Second position:");
    yield 2;
    console.log("Third position:");
    yield 3;
    console.log("Fourth position:");
    yield 4;
  }
  
  // there's no need to call [Symbol.iterator] as the function was declared with the *
  let iterator = iterable();
  /*
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  */
  
  // we can also use a for ... of loop to iterate over the values
  for (let element of iterator){
    console.log(element);
  }
  
  //we can easily save all the returns in an array
  const myArray = [...iterable()];
  console.log(myArray); 
  
  function squareNumber(number){
      const object = {
        number,
        result: number*number
      }
      return object;
  }
  
  function* generator(){
    console.log("Starting generator...")
    yield squareNumber(0);
    yield squareNumber(2);
    yield squareNumber(3);
    yield squareNumber(4);
    yield squareNumber(5);
    console.log("Finishing generator...");
  }
  
  let gen = generator();
  for (let element of gen){
    console.log(element);
  }