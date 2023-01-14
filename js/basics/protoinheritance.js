function Animal(name, sex){
    this.name = name;
    this.sex = sex;
}

Animal.prototype.sonar = () => console.log("I make sounds because I'm alive.");


//when we use classes we usually hava a super() method that is the constructor of the parent class
//when using prototypes we need to create it manually, it can have any name we want but we will use super here
function Dog(name, sex, size){
    this.super = Animal;
    this.super(name, sex);
    this.size = size;
}

//this is how we declare that Animal is the prototype where Dog extends from
Dog.prototype = new Animal();
Dog.prototype.contructor = Dog;
Dog.prototype.sonar = () => console.log("I'm a dog");
Dog.prototype.woof = () => console.log("woof");


const snoopy = new Dog("Snoopy", "Male", "155 cm");
console.log(snoopy);
snoopy.sonar();