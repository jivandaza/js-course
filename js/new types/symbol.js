//this is how we can create a new symbol, it can take a description as argument
let myName = Symbol("name");
//we can see this is a primitive type by using typeof
console.log(typeof myName);

//this is how we can use symbol inside of an object
const NAME = Symbol("name");
const SAYHI = Symbol("SayHi");

const person = {
  [NAME]: "Josy",
  //we can even create a property with the same name and it will work perfectly
  NAME: "Jossyd",
  age: 35
};

person[SAYHI] = function () {
  console.log(`Hi from ${this[NAME]}`);
}

console.log(person);
//we need to make sure to use bracket notation when accessing symbol properties
person[SAYHI]();

//symbols will not show up when iterating over an object with a for in
for(let property in person) {
  console.log(`${property}: ${person[property]}`);
}
//we need to use a method from Object to see the symbols: 
console.log(Object.getOwnPropertySymbols(person));