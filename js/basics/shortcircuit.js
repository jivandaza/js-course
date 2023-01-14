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

//when we use the or shortcircuit operator, the value that evaluates to true will be assigned, if both are true the first one will be assigned
console.log(josyd.currentJob || "unemployed");