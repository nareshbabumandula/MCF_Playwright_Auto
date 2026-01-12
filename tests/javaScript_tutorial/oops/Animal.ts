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

}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} barks`);
    }

}


const dog = new Dog('Pillu');
dog.walk(); // Output: Pillu is walking
dog.bark(); // Output: Dog barks
