//This is how we declare a class, the constructor method needs to be named accordingly
class Animal {
    constructor(name, sex, size) {
        this.name = name; 
        this.sex = sex; 
        this.size = size;
    }

    makeSound() {
        console.log(`I am ${this.name} and I make sounds`);
    }
}

//using the keyword extends we can tell JS that this class is a child of another one
class Dog extends Animal {
    constructor(name, sex, size, breed) {
        //we can use the method super to call the constructor method of the parent class
        super(name, sex, size);
        this.breed = breed;
    }
    //using the keyword static we can use this method without creating an object
    static woof() {
        console.log("Wooff!");
    }
    //we can use get and set to create getter and setter
    get getName(){
        return this.name;
    }
    set setName(name){
        this.name = name;
    }
}


const snoopy = new Animal("Snoopy", "Male", "155 cm");
console.log(snoopy);
snoopy.makeSound();
const mateo = new Dog("Mateo", "Male", "180 cm", "Boxer");
console.log(mateo);
mateo.makeSound();
//we can call static methods without creating an object
Dog.woof();

//even though getters and setters are methods, they can be called as a property
console.log(mateo.getName)
mateo.setName = "New Name";
console.log(mateo.getName);
console.log(mateo);