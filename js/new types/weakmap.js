// weakmaps do not have an option to iterate over them, for...of doesn't work 
// weakmaps also do not allow us to obtain size 

//we can not pass values to the constructor, we must create the weakmap and then use .set()
const myWeakMap = new WeakMap();
// as weakmaps only take weak references, the arguments must be objects
let firstKey = {};
let secondKey = {};
myWeakMap.set(firstKey, 1);
myWeakMap.set(secondKey, 2);
console.log(myWeakMap);

setInterval(() => console.log(myWeakMap), 1000);

//if the object we referenced to the weak set is set to null, the garbage collector can remove it from the weakset
setTimeout(() => {
  firstKey = null;
  secondKey = null;
  console.log("Cleaned.");
  console.log(firstKey);
  console.log(secondKey);
  myWeakMap.delete(firstKey);
}, 5000);