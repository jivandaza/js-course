//if we use this outside of a function, it will be referenced to the global object window
console.log(this);
// we can even assign properties to it
this.name = "Global Context";
console.log(this);

function printName(){
  console.log(this.name);
}

printName();

// as objects are considered to be a block, this makes reference to the object and not to the window
const obj = {
  name: "Object Context",
  printName() {
    console.log(this.name);
  }
};

const anotherObj = {
  name: "Another Object Context",
  printName
}

// we must keep in mind that using arrow functions will not create a new scope but take it's parent's scope
// we can also save the this context in a variable like this: 
const yetAnotherObj = {
  name: "Yet Another Object Context",
  printName: () => {
    console.log(this.name);
  }
}

obj.printName();
anotherObj.printName();
yetAnotherObj.printName();