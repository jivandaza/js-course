//we use setTimeout to simulate async functions
function squareCallback(value, callback) {
    setTimeout(() => {
        callback(value, value*value);
    }, Math.random()*1000);
  }
  
  console.log("Before");
  squareCallback(5, (value, result) => {
    console.log("Starting callback...");
    console.log(`Callback: ${value}, ${result}`);
  });
  console.log("After");