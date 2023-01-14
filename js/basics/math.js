//as math is a static object, we can use the methods directly
console.log(Math);
console.log(Math.PI);
//we can get the absolute value of a number 
console.log(Math.abs(-2));
//we can ceil or floor a number easily;
console.log(Math.floor(7.5));
console.log(Math.floor(7.5));
//we can also round a number without forcing it to ceil or floor necesarily
console.log(Math.round(7.4));
//exponents 
console.log(Math.pow(2,6));
//we can also sign a number 
console.log(Math.sign(-7.5));
console.log(Math.sign(7.5));
//we can create random numbers between 0 and 1 using random
console.log(`The random number is ${Math.random()}`);
//to get rid of the decimal part we can use the methods shown above
console.log(`The random number is ${Math.round(Math.random() * 10)}`);
const myRandomNumbers = [];
for (let i = 0; i < 100000; i++){
    myRandomNumbers[i] = Math.ceil(Math.random() * 10);
}

for (let i = 1; i <= 10; i++){
    console.log(`${i} appears ${myRandomNumbers.filter(x => x==i).length} times.`)
}