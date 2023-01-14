import log from './log_text.js';

// objects can contain information using key:value pairs
//values can be any type of data, including arrays, objects and even functions
const josyd = {
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

//we can access an objects property using object[property] or object.property
//the second notation is the most commonly used one
log(josyd["name"]);
log(josyd.name);

//using Object.keys(myObject) we can get an iterable array with the properties of the object 
//Object.values(myObject) works similarly but the array will contain the values instead of properties
log(Object.keys(josyd));
log(Object.values(josyd));

//using myObject.hasOwnProperty we can check if the object has a property with the name passed
log(josyd.hasOwnProperty("name"));
log(josyd.hasOwnProperty("secondName"));