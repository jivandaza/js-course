// we can use document.getElementsByTagName to get any ellements matching the argument
console.log(document.getElementsByTagName("li"));

// get elements by class name
console.log(document.getElementsByClassName("card"));

// get elements by name 
console.log(document.getElementsByName("name"));

// get element by id
console.log(document.getElementById("menu"));

// we can now easily select elements like this:
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));

// we can use querySelectorAll to get multiple elements
console.log(document.querySelectorAll(".card"));

// the nodeList we get as return contains many of the methods we commonly use with arrays like foreach
document.querySelectorAll("a").forEach(element => console.log(element));

// we can combine more than one selector to be more specific 
console.log(document.querySelectorAll("#menu li"));