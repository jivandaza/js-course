const mySet = new Set([1,2,3,4,5,6,3,7,8,9,10,true,false,true,{},"Hello", {}]);
console.log(mySet);

// to know how many elements a set has we need to use .size instead of .length
console.log(mySet.size);

//we can add new elements using the add method 
mySet.add(2);
mySet.add(11);
mySet.add(13);
mySet.add(12);
console.log(mySet);
console.log(mySet.size);

//we can use a for of to iterate over a set
console.group("Iterating...");
for (let item of mySet) {
  console.log(item);
}
console.groupEnd();

//we can't use bracket notation to get an item at a specific index: 
//mySet[0] would throw an error

//this will create an array from the set allowing us to use bracket notation
const myArray = Array.from(mySet);
console.log(myArray);

//we can easily delete elements from a set using .delete()
mySet.delete("Hello");
console.log(mySet);

//we can check if an element exists in a set using .has()
console.log(mySet.has(true));

//we can also remove all the elements using .clear()
mySet.clear();
console.log(mySet)