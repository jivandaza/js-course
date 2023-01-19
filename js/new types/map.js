let myMap = new Map();

myMap.set("Name", "Josyd");
myMap.set("Last Name", "Daza");
myMap.set("Age", 22);

console.log(myMap);
//we can also use .has to check if a key exists in the Map
console.log(myMap.has("Name"));
// .get will allow us to get a property using it's key
console.log(myMap.get("Name"));
// .delete() will allow us to delete a property
myMap.delete("Last Name");
console.log(myMap);

//we can iterate over a map using the for of loops, every element will be an array
for (let [key, value] of myMap){
  console.log(`${key}: ${value}`);
}

//this is another way to initialize a map 
const anotherMap = new Map([
  ["Name", "Jossyd"],
  ["Age", 22],
  ["Location", "Colombia"]
]);

console.log(anotherMap);

//we can extract an array with the keys or the values

let mapKeys = [...anotherMap.keys()];
console.log(mapKeys);
let mapValues = [...anotherMap.values()];
console.log(mapValues);