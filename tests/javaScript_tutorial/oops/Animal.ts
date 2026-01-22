class Animal {

    // characteristic
    name: string

    constructor(name: string) {
        this.name = name;
    }
  
    // behavior
    walk() {
        console.log(`${this.name} is walking`);
    }

    run() {
        console.log(`${this.name} is running`);
    }

}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} barks`);
    }

}


const dog = new Dog('Tommy');
dog.walk(); // Output: Pillu is walking
dog.bark(); // Output: Dog barks
