import log from './log_text.js';

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

//when we want to check if a certain condition is met, we can use if 
if(person.name === "Jossid") {
    log("Your name is Jossid");
//if the first condition isn't met, we can try another one using else if
} else if (person.name === "Josyd"){
    log("Your name is Josyd");
//if none of the previous conditions is evaluated to true, the else block will execute
} else {
    log("Your name is not Jossid nor Josyd");
}

//we can also build and if/else sentence with the ternary operator 
// condition   ? do if condition is true          : do if condition is false            ;
person.age >= 20 ? log("You are over 20 years old") : log("You are not over 20 years old");

//we can also build a switch statement to evaluate something against multiple values

switch(person.age){
    case 20:
        log("You are exactly 20 years old");
        break;
    case 21:
        log("You are exactly 21 years old");
        break;
    case 22:
        log("You are exactly 22 years old");
        break;
}