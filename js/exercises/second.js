import { isString, isNumber } from './validations.js';

/*
 *    5) Invert characters in a string
*/

const invertString = (str = "") =>
    isString(str)
        ? str.split("").reverse().join("")
        : new Error("You did not enter a valid string.");

/*
 *    6) Count number of times a word appears in a string
*/

//we turn the string into an array of words and then filter it to get only the items that match
const countWords = (str, word) =>
    (isString(word) && isString(str))
        ? console.log(str.split(" ").filter((item) => item === word).length)
        : null;

/*
 *    7) Count number of times a word appears in a string
*/

const isPalindrome = (word = "") =>
    isString(word)
        ? (word.toLowerCase() === invertString(word).toLowerCase())
            ? console.log(`The word "${word}" is palindrome.`)
            : console.log(`The word "${word}" is not palindrome.`)
        : null;

/*
 *    8) Remove pattern from text
*/

const removePattern = (text = "", pattern = "") =>
    (isString(text) && isString(pattern))
        ? console.log(text.replaceAll(pattern, ""))
        : null;

/////////////////////////////// END OF FUNCTIONS /////////////////////////////////

console.log(invertString("Hello World!")); // should output "!dlroW olleH"
console.log(invertString(1234)); // should throw an error as the argument is not a string
console.log(invertString()); // You did not enter a valid string.
countWords("hello world goodbye world", "world"); // should otput 2
countWords("hello world goodbye world", 2); // should throw an error as both arguments need to be strings
isPalindrome("salas"); // should output "The word "salas" is palindrome"
isPalindrome("oso"); // should output "The word "oso" is palindrome"
isPalindrome("josyd"); // should output The word "josyd" is not palindrome.
isPalindrome(1234); //should throw an error as the argument is not a string
removePattern("xyz1, xyz2, xyz3, xyz4 and xyz5", "xyz"); //should output 1, 2, 3, 4 and 5
removePattern(1234, "xyz"); //should throw an error as both arguments need to be strings