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

    walk() {
        console.log(`${this.name} is walking fast`);
    }

    bark() {
        console.log(`${this.name} barks`);
    }

}


const dog = new Dog('Tommy');
dog.walk(); // Output: Pillu is walking
dog.run(); // Output: Pillu is running  
dog.bark(); // Output: Dog barks
