/*
 *    12) Determine if a number is prime
*/

const isPrime = (number=NaN) => {
    if (isNaN(parseInt(number)))
        return console.warn("You must enter a number.");
    if (!Number.isInteger(number))
        return console.warn("The number must be an integer.");
    if (Math.sign(number) !== 1)
        return console.warn("The number must be positive.");
    if (number === 1)
        return console.log("1 is not prime.");
    let prime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log(`${number} is divisible by ${i}.`)
            prime = false;
            break;
        } else {
            console.log(`${number} is not divisible by ${i}.`);
        }
    }
    return prime
        ? console.log(`The number ${number} is prime.`)
        : console.log(`The number ${number} is not prime.`);
}

isPrime("Josyd"); // should output You must enter a number.
isPrime(); // should output You must enter a number.
isPrime(0); // should output The number must be positive.
console.group(`Testing 25`); // should output Testing 25
isPrime(25); // should output The number 25 is not prime.
console.groupEnd();
console.group(`Testing 101`); // should output Testing 101
isPrime(101); // should output The number 101 is prime.
console.groupEnd();
console.group(`Testing 113`); // should output Testing 113
isPrime(113); // should output The number 113 is prime.
console.groupEnd();
console.group(`Testing 117`); // should output Testing 117
isPrime(117); // should output The number 117 is not prime.
console.groupEnd();
console.group(`Testing 2`); // should output Testing 2
isPrime(2); // should output The number 2 is prime.
console.groupEnd();
console.group(`Testing 1`); // should output Testing 1
isPrime(1); // should output 1 is not prime.
console.groupEnd();
isPrime(""); // should output You must enter a number.

/*
 *    13) Determine if a number is even
*/

const isEven = (number=NaN) => {
    if (isNaN(parseInt(number)))
        return console.warn("You must enter a number.");
    return number % 2 === 0
        ? console.log(`The number ${number} is even.`)
        : console.log(`The number ${number} is not even.`);
}
  
isEven("Josyd"); // should output You must enter a number.
isEven(10); // should output The number 10 is even.
isEven(); // should output You must enter a number.
isEven(5); // should output The number 5 is not even.
isEven(10.2); // should output The number 10.2 is not even.
isEven(""); // should output You must enter a number.

/*
 *    14) Convert Farenheit to Celsius
*/

const toCelsiusOrFarenheit = (degrees = NaN, to = "") => {
    if (isNaN(parseFloat(degrees)))
        return console.warn("The source temperature must be a number.");
    if (!to)
        return console.warn("You must specify the conversion target (celsius or farenheit).");
    if (typeof to !== "string")
        return console.warn("The conversion target must be a string.")
      
    switch(to){
        case 'c':
            let celsius = Math.round((degrees - 32) * (5/9));
            console.log(`${degrees}°F is the same as ${celsius}°C.`);
            break;
        case 'f':
            let farenheit = Math.round((degrees * (9/5)) + 32);
            console.log(`${degrees}°C is the same as ${farenheit}°F.`);
            break;
        default:
            console.warn(`Only 'c' and 'f' are valid options.`);
            break;
    }
}
  
toCelsiusOrFarenheit(32, 'f'); // should output 32°C is the same as 90°F.
toCelsiusOrFarenheit("Josyd"); // should output The source temperature must be a number.
toCelsiusOrFarenheit(150, 'c'); // should output 150°F is the same as 66°C.
toCelsiusOrFarenheit(""); // should output The source temperature must be a number.
toCelsiusOrFarenheit(250, 'c'); // should output 250°F is the same as 121°C.
toCelsiusOrFarenheit(); // should output The source temperature must be a number.
toCelsiusOrFarenheit(350, 10); // should output The conversion target must be a string.
toCelsiusOrFarenheit(350, 'n'); // should output Only 'c' and 'f' are valid options.