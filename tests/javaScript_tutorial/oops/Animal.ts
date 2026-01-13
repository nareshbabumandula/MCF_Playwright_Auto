class Animal {

    //characteristics
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    //behavior
    Walk() {
        console.log(`${this.name} is walking`);
    }

}


class Dog extends Animal{
    bark(){
        console.log(`${this.name} barks`);
    }  

}


const dog = new Dog('pillu');
dog.Walk(); // Output: pillu is walking
dog.bark(); // Output: Dog barks 