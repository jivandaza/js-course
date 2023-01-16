console.log("The function will execute in 5 seconds.")

//the function will execute after the provided time (in ms) has passed
setTimeout(() => console.log("Executing now..."), 5000);

//the function will execute in a loop waiting a certaing ammount of ms every time
setInterval(() => console.log(`Current time is: ${new Date().toLocaleTimeString()}`), 1000);