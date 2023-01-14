const person = {
    name: "Josyd",
    lastName: "Daza",
    age: 21,
    hobbies: ["videogames", "cooking"],
    contact: {
        email: "joser1.jidl@gmail.com",
        phone: "3006586235"
    },
    sayHi(){
        log(`Hello, my name is ${this.name} ${this.lastName} and I'm ${this.age} years old`);
    }
};

console.log(console);
//show error message in console
console.error("This is an error");
//show warning in console
console.warn("This is a warning");
//show information in console
console.info("This is information");
//we can use this method to clear the console
//console.clear();
//we can pass multiple arguments to log 
console.log("you", "can", "use", "multiple", "words.");
//you can also format strings like the following: 
console.log(`%s %s %s %s %s`, "you", "can", "use", "multiple", "words.");
//this will literaly print the document (HTML structure)
console.log(document);
console.log(window);
//this will show the document as an object
console.dir(document);
console.dir(window);
//we can group elements in console
console.group("Nico's group");
console.log("First element");
console.log("Second element");
console.log("Third element");
console.log("Fourth element");
console.groupEnd();
//we can collapse groups 
console.groupCollapsed("Another Josyd's group");
console.log("First element");
console.log("Second element");
console.log("Third element");
console.log("Fourth element");
console.groupEnd();
//we can create tables 
console.log(console);
//just using console.table(console) won't work since console is a Symbol containing an object
console.table(Object.entries(console));
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.table(numbers);
console.table(person);
//we can also count time with console.time
console.time("Starting execution: ");
const myArray = Array(1000000);
for(let i = 0; i < myArray.length; i++){
    myArray[i] = i;
    //console.log(i);
}
console.log(myArray);
console.timeEnd("Starting execution: ");
console.clear();

//we can run tests with console
const x = 2;
const y = 1; 
const testXY = "X needs to be less than Y";
console.assert(x<y, {x,y,testXY});