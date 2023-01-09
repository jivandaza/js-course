/*
 *    21) Receive array of numbers and return them squared in a new array.
*/

const squareNumbers = (numbers) =>
    !(numbers instanceof Array)
        ? console.warn(`The element you provided does not seem to be an Array.`)
        : numbers.length < 1
            ? console.warn("The Array can't be empty.")
            : numbers.every((number) => typeof number === "number")
                ? console.log(
                    `This is how (${numbers}) looks when squared: (${numbers.map((x) => x * x)})`
                )
                : console.warn(`All the elements in the array must be numbers.`);

squareNumbers([21, 18, 27, 9, 12, 15, 0, 3, 24]); // should output This is how (21,18,27,9,12,15,0,3,24) looks when squared: (441,324,729,81,144,225,0,9,576)
squareNumbers(""); // should output The element you provided does not seem to be an Array.
squareNumbers([]); // should output The Array can't be empty.
squareNumbers([1, 2, "3"]); // should output All the elements in the array must be numbers.
squareNumbers(); // should output The element you provided does not seem to be an Array.
squareNumbers(1234); // should output The element you provided does not seem to be an Array.

/*
 *    22) Receive array and return smallest and largest number
 */

const compareNumbers = (numbers) =>
    !(numbers instanceof Array)
        ? console.warn(`The element you provided does not seem to be an Array.`)
        : numbers.length < 1
            ? console.warn("The Array can't be empty.")
            : numbers.every((number) => typeof number === "number")
                ? console.log(
                    `Smallest: ${Math.min(...numbers)} Largest: ${Math.max(...numbers)}`
                )
                : console.warn(`All the elements in the array must be numbers.`);

compareNumbers([0, 3, 6, 9, 12, 15, 18, 21, 24, 27]); // should output Smallest: 0 Largest: 27
compareNumbers(""); // should output The element you provided does not seem to be an Array.
compareNumbers([]); // should output The Array can't be empty.
compareNumbers(1234); // should output The element you provided does not seem to be an Array.
compareNumbers([1, 2, "3"]); // should output All the elements in the array must be numbers.
compareNumbers([4, 1, 9, 3, 5, 6, 7, 8]); // should output Smallest: 1 Largest: 9

/*
 *    23) Receive array of numbers and return an object with 2 arrays,
 *        one with even numbers and the other one with odd numbers.
*/

const oddOrEvenNumbers = (numbers) => {
    if (!(numbers instanceof Array))
        return console.warn(
            `The element you provided does not seem to be an Array.`
        );
    if (numbers.length < 1)
        return console.warn("The Array can't be empty.");
    if (!numbers.every((number) => typeof number === "number"))
        return console.warn(`All the elements in the array must be numbers.`);
    let oddEven = {
        odd: numbers.filter((number) => number % 2 !== 0),
        even: numbers.filter((number) => number % 2 === 0),
    };
    return console.log(oddEven);
};
  
oddOrEvenNumbers([0, 3, 6, 9, 12, 15, 18, 21, 24, 27]); // should output even: (5) [0, 6, 12, 18, 24]. odd: (5) [3, 9, 15, 21, 27]
oddOrEvenNumbers(""); // should output The element you provided does not seem to be an Array.
oddOrEvenNumbers([]); // should output The Array can't be empty.