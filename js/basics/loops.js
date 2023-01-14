let counter = 0;

//while will check the condition and then execute if true
while (counter <= 10) {
    console.log(`The while counter is ${counter}`);
    counter++;
}

//do while will execute once and then check on the condition 
do {
    console.log(`Even tho the condition isn't true, the do while loop will execute`);
} while(counter < 10);

//for will go through a predefined amount of loops
for (let i = 0; i <= 10; i++){
    console.log(`For loop counter is ${i}`);
}

//we can easily loop through arrays using for ... of
const myArray = [1,2,3,4,5,6,7,8,9,10];

for(let element of myArray){
    console.log(`The current element of the array is ${element}`);
}

//we can easily loop through object properties using for ... in 
const josyd = {
    name: "Josyd",
    lastName: "Daza",
    age: 21,
    hobbies: ["videogames", "cooking"],
    contact: {
        email: "joser1.jidl@gmail.com",
        phone: "3006586235"
    },
    sayHi(){
        log(`Hello, my name is ${this.name} ${this.lastName} and I'm ${this.age} years old`);
    }
};

for (let property in nico){
    console.log(`The current property of my object is ${property}`);
}
//if we want to access the value of the property we need to use object[property]
//using object.property will not work
for (let property in nico){
    console.log(`The current property corresponds to ${nico[property]}`);
}