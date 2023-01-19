// weaksets do not have an option to iterate over them, for...of doesn't work 
// weaksets also do not allow us to obtain size 

//we can not pass values to the constructor, we must create the weakset and then use .add()
const myWeakSet = new WeakSet();
console.log(myWeakSet);
// as weaksets only take weak references, the arguments must be objects
let nameObj = {"Name": "Josyd"};
let ageObj = {"Age": "22"};
myWeakSet.add(nameObj);
myWeakSet.add(ageObj);
console.log(myWeakSet);

setInterval(() => console.log(myWeakSet), 1000);

//if the object we referenced to the weak set is set to null, the garbage collector can remove it from the weakset
setTimeout(() => {
  nameObj = null;
  ageObj = null;
  console.log("Cleaned.");
  console.log(nameObj);
  console.log(ageObj);
}, 5000);