//This is what we would have to do in order to create a new object person
const newPerson = {
    name: "Josyd",
    lastName: "Daza",
    age: 21
};

const anotherPerson = {
    name: "Another",
    lastName: "Another",
    age: 22
};

//Using a prototype we can easily create new objects 
//We need to use UpperCamelCase as this is an object constructor
function Person(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.sayHi = function() {
        console.log("Saying hi!");    
    }
    this.sayName = function() { 
        console.log(`My name is: ${this.name}`);
    }
}

//the keyword new will help us create a new instance of the object we want
const anotherNewPerson = new Person("New Person", "New lastName", 23);
const oneMorePerson = new Person("More", "More", 24);
console.log(newPerson);
console.log(anotherPerson);
console.log(anotherNewPerson);

anotherNewPerson.sayHi();
anotherNewPerson.sayName();
oneMorePerson.sayHi();
oneMorePerson.sayName();

//creating methods inside of constructor functions isn't recommended
//best practice is creating functions outside and assigning them to the prototype
function Animal(name, sex){
    this.name = name;
    this.sex = sex;
}

Animal.prototype.sayName = function() {
    console.log(`My name is ${this.name}`);
}

const dog = new Animal("dog", "male");

dog.sayName();
console.log(dog);