const container = document.getElementById("logDiv");
const myButton = document.createElement(`input`);
myButton.setAttribute("type", "submit");
myButton.setAttribute("value", "Go to MDN's documentation!");
container.appendChild(myButton);
myButton.onclick = event => window.open("https://developer.mozilla.org/en-US/docs/Glossary/IIFE"); 

/////////////////// DOCUMENTATION ABOVE, EDIT BELOW THIS LINE /////////////////////////////////////

//this is how we define an anonymous auto executable function 
(function () {
    console.log("Auto executing function");
})();

(() => console.log("Auto executing arrow function"))();

//we can also use arguments 
(name => console.log(`Hello ${name}`))("Josyd");

//there are some other ways we can use to execute this type of function
!function () {
    console.log("Auto executing function");
}();

+function () {
    console.log("Auto executing function");
}();