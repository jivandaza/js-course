/*
 *    18) Count number of vowels and consonants
*/

const countVowelsAndConsonants = (text = "") => {
    if (typeof text !== "string")
        return console.warn("The text needs to be a string.");
    if (!text)
        return console.warn("The text can't be empty.");
    const vowelRegEx = /[aeiouüáéíóú]/gi;
    const consonantRegEx = /[bcdfghjklmnñpqrstvwxyz]/gi;
    const vowelMatches = text.match(vowelRegEx);
    const consonantMatches = text.match(consonantRegEx);
    if (!vowelMatches)
        return console.warn("The text does not contain any vowels.");
    if (!consonantMatches)
        return console.warn("The text does not contain any consonants.")
    return console.log(
        `${text} has ${vowelMatches.length} vowels (${vowelMatches}) and ${consonantMatches.length}         
        consonants (${consonantMatches}).`
    );
};
  
const testWords = [
    "Mane Freeman",
    "Johnny Gest",
    "Jósyd Daza",
    "Hobbs Muller",
    "NotAValidName",
    "Also.not valid",
    "Speci@l character name",
    " "
];
  
console.group("18) Vowels and consonants");
for (let word of testWords) {
    countVowelsAndConsonants(word);
}
console.groupEnd();

/*
 *    19) Validate if a text is a valid name
*/

let nameRegEx = /^[a-züáéíóú]+[a-züáéíóú]+([a-züáéíóú]+)*$/i;

const validateName = (name = "") =>
    typeof name !== "string"
        ? console.warn("The name must be a string.")
        : nameRegEx.test(name)
            ? console.log(`${name} seems to be a valid name.`)
            : console.warn(`${name} doesn't look like a valid name.`);

const testNames = [
    "Mane Freeman",
    "Johnny Gest",
    "Jósyd Daza",
    "Hobbs Muller",
    "NotAValidName",
    "Also.not valid",
    "Speci@l character name",
    ""
];

console.group("19) Validate name");
for (let name of testNames) {
    validateName(name);
}
console.groupEnd();

/*
 *    20) Verify if a text is a valid email
*/

let emailRegEx = /^[a-z0-9"']+[-a-z0-9!*._[\]{}+"']+\@[-a-z0-9.[\]]+\.[a-z[\]]+$/;

const validateEmail = email =>
    typeof email !== "string" 
        ? console.warn("The email must be a text.")
        : !email
            ? console.warn("The email can't be empty.")
            : emailRegEx.test(email)
                ? console.log(`${email} seems to be a valid email.`)
                : console.warn(`${email} doesn't look like a valid email.`);

const testEmails = [
    "email@example.com",
    "firstname.lastname@example.com",
    "email@subdomain.example.com",
    "firstname+lastname@example.com",
    "noemail",
    "alsonotanemail@",
    ".@gmail.com",
    "@hotmail.com",
    ""
];

console.group("20) Validate email");
for (let email of testEmails) {
    validateEmail(email);
}
console.groupEnd();