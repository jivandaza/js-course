/*
 *    24) Take an array and return an object with two arrays, the first
 *    one must be ordered ascendingly and the second one descendingly
*/

const sortNumbers = (numbers) =>
    !(numbers instanceof Array)
        ? console.warn(`The element you provided does not seem to be an Array.`)
        : numbers.length < 1
            ? console.warn("The Array can't be empty.")
            : numbers.every((number) => typeof number === "number")
                ? console.log({
                    ascending: [...numbers].sort((a, b) => a - b),
                    descending: [...numbers].sort((a, b) => b - a),
                })
                : console.warn(`All the elements in the array must be numbers.`);

console.group("24");
sortNumbers([21, 18, 27, 9, 12, 15, 0, 3, 24]); // should output ascending: (9) [0, 3, 9, 12, 15, 18, 21, 24, 27]. descending: (9) [27, 24, 21, 18, 15, 12, 9, 3, 0]
sortNumbers(""); // should output The element you provided does not seem to be an Array.
sortNumbers([]); // should output The Array can't be empty.
sortNumbers(1234); // should output The element you provided does not seem to be an Array.
sortNumbers([1, 2, "3"]); // should output All the elements in the array must be numbers.
sortNumbers([4, 1, 9, 3, 5, 6, 7, 8]); // should output ascending: (8) [1, 3, 4, 5, 6, 7, 8, 9]. descending: (8) [9, 8, 7, 6, 5, 4, 3, 1]
console.groupEnd();

/*
 *    25) Receive array and return a new array with the unique elements.
 */

const removeRepeated = (numbers) =>
    !(numbers instanceof Array)
        ? console.warn(`The element you provided does not seem to be an Array.`)
        : numbers.length < 1
            ? console.warn("The Array can't be empty.")
            : console.log({
                original: numbers,
                unique: [...new Set(numbers)],
            });

console.group("25");
removeRepeated([21, 18, 27, 9, 12, 15, 0, 3, 24]); // should output original: (9) [21, 18, 27, 9, 12, 15, 0, 3, 24]. unique: (9) [21, 18, 27, 9, 12, 15, 0, 3, 24]
removeRepeated(""); // should output The element you provided does not seem to be an Array.
removeRepeated([]); // should output The Array can't be empty.
removeRepeated(1234); // should output The element you provided does not seem to be an Array.
removeRepeated([1, 2, "3", 4, "N", "3", true, false, true, false, "N", "I"]); // should output original: (12) [1, 2, '3', 4, 'N', '3', true, false, true, false, 'N', 'I']. unique: (8) [1, 2, '3', 4, 'N', true, false, 'I']
removeRepeated([4, 4, 4, 1, 3, 1, 4, 5, 6]); // should output original: (9) [4, 4, 4, 1, 3, 1, 4, 5, 6]. unique: (5) [4, 1, 3, 5, 6]
console.groupEnd();

/*
 *    26) Receive array of numbers and return the average.
 */

const averageNumbers = (numbers) =>
    !(numbers instanceof Array)
        ? console.warn(`The element you provided does not seem to be an Array.`)
        : numbers.length < 1
            ? console.warn("The Array can't be empty.")
            : numbers.every((number) => typeof number === "number")
                ? console.log(
                    `The average value in [${numbers}] is: ${
                    numbers.reduce((a, b) => a + b) / numbers.length
                    }`
                )
                : console.warn(`All the elements in the array must be numbers.`);

console.group("26");
averageNumbers([21, 18, 27, 9, 12, 15, 0, 3, 24]); // should output The average value in [21,18,27,9,12,15,0,3,24] is: 14.333333333333334
averageNumbers(""); // should output The element you provided does not seem to be an Array.
averageNumbers([]); // should output The Array can't be empty.
averageNumbers(1234); // should output The element you provided does not seem to be an Array.
averageNumbers([1, 2, "3"]); // should output All the elements in the array must be numbers.
averageNumbers([4, 1, 9, 3, 5, 6, 7, 8, 2]); // should output The average value in [4,1,9,3,5,6,7,8,2] is: 5
console.groupEnd();