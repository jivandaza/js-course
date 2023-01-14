//we can use regular expressions to validate strings
//MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

//
const container = document.getElementById("logDiv");
const myButton = document.createElement(`input`);
myButton.setAttribute("type", "submit");
myButton.setAttribute("value", "Go to MDN's documentation!");
container.appendChild(myButton);
myButton.onclick = event => window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"); 

//this is how we can create a regular expression on javascript
const myText = `Lorem ipsu1m dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum do3lore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim Lorem id est laborum.`

//we can use the constructor RegExp or we can just put the regular expression between // 
//using any of the two methods we can specify the flags after the regular expression
let regEx = new RegExp("lorem", "gi");
let anotherRegEx = /lorem{2,}/igm

//we have multiple ways to run the regular expression against the text
console.log(regEx.test(myText));
console.log(regEx.exec(myText));

//we can use brackets to indicate a valid range

console.log(/[0-9]/gi.exec(myText));

//we can use braces to indicate how many times something can appear 
console.log(anotherRegEx.test(myText));