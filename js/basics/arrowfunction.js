//we can call a declared function even before it has been declared
sayHi();

function sayHi(){
    console.log("Say Hi!");
}

// when we declare an arrow function, we can't call it before it has been declared
//sayHello(); here doesn't work

const sayHello = () => console.log("Hello!"); 
sayHello();

//if an arrow function takes one parameter, we can skip the parenthesis
//braces can also be skipped if the function has a single line
const myArrow = param => console.log(`The param is: ${param}`);

myArrow(12);

//if we want to return a value in a single line arrow function, the return keyword can be skipped
const add = (a,b) => a + b;
console.log(add(1,2));

//we can use arrow functions to greatly simplify some things like the following:
const numbers = [1,2,3,4];
numbers.forEach(number => console.log(`Current element is: ${number}`));

//arrow functions do not have a binding to "this"
const me = {
    name: "Josyd",
    lastName: "Daza",
    arrowThis: () => console.log(this),
    declaredThis() {
        console.log(this)
    }
};

me.arrowThis();
me.declaredThis()