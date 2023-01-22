console.log(this)
this.place = "Global Context";

function sayHi(){
  console.log(`${this.place}`);
}

sayHi();

const obj = {
  place: "Object Context"
}

// we can use the function call to execute the function but using another object's context
sayHi.call(obj);

// let's look at the difference between call and apply
function greet(greeting, to){
  console.log(`${greeting} ${to} from ${this.place}`);
}

// .call will take any additional parameters after the obj as separate 
greet.call(obj, "Hello", "JoSyD");
// .apply will require any additional parameters after the obj to be passed as an array
greet.apply(obj, ["Hello", "JoSyD"])

// now let's see bind

const person = {
  name: "JoSyD",
  greet: function(){
    console.log(`Hello ${this.name}`);
  }
}

person.greet();

/*const anotherPerson = {
  greet: person.greet
}
anotherPerson.greet(); */ //this would throw undefined since the object anotherPerson does not have a name

this.name = "Test Context";

const anotherPerson = {
  // this will refer to the global object which has just been assigned a name property
  greet: person.greet.bind(this) //we can use bind to specify that the function must use the context passed as a parameter
}

anotherPerson.greet();