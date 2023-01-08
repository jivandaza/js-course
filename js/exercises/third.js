/*
 *    9) function to obtain a random number between 501 and 600
*/

const getRandomNumber = () => Math.ceil(Math.random() * 100 + 500);

console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());

/*
 *    10) function to evaluate if a number is palindrome
*/

const isPalindrome = (number = NaN) =>
    isNaN(parseFloat(number))
        ? console.warn("You did not enter a valid number.")
        : number.toString() === number.toString().split("").reverse().join("")
            ? console.log(`${number} is definitely palindrome.`)
            : console.log(`${number} is definitely not palindrome.`);

isPalindrome(); // should output You did not enter a valid number.
isPalindrome(1234567); // should output 1234567 is definitely not palindrome.
isPalindrome(24242); // should output 24242 is definitely palindrome.
isPalindrome(888888); // should output 888888 is definitely palindrome.
isPalindrome("Josyd"); // should output You did not enter a valid number.
isPalindrome(24242); // should output 24242 is definitely palindrome.
isPalindrome("josyd"); // should output You did not enter a valid number.
isPalindrome(7777); // should output 7777 is definitely palindrome.

/*
 *    11) calculate factorial of a number
 */

const calculateFactorial = (number) => {
    if (isNaN(parseInt(number)))
        return console.warn(
            "You need to enter a number greater than or equal to 1."
        );
    if (Math.sign(number) !== 1)
        return console.warn(
            "You need to enter a number greater than or equal to 1."
        );
    let factorial = number;
    for (let i = number - 1; i > 0; i--) {
        factorial *= i;
    }
    console.log(`The factorial of ${number} is ${factorial}`);
};
  
calculateFactorial(10); // should output The factorial of 10 is 3628800
calculateFactorial(""); // should output You need to enter a number greater than or equal to 1.
calculateFactorial(5); // should output The factorial of 5 is 120
calculateFactorial(); // should output You need to enter a number greater than or equal to 1.
calculateFactorial(8); // should output The factorial of 8 is 40320
calculateFactorial("Josyd"); // should output You need to enter a number greater than or equal to 1.
calculateFactorial(7); // should output The factorial of 7 is 5040
calculateFactorial(-4); // should output You need to enter a number greater than or equal to 1.
