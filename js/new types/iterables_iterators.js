/*
 * An iterable is anything you can iterate over, this can be something like a String, 
 * an array, a Map, a Set, etc. 
const iterable = new Set([1,2,3,4,5]);
const iterator = iterable[Symbol.iterator]();
console.log(iterable);
console.log(iterator);
// we can access the .next() method of an iterator which will return an object
/*
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
this is not very practical so we can use a loop to iterate over */

let next = iterator.next();

while (!next.done) {
  console.log(next.value);
  next = iterator.next();
}