class animal {
    makeSound() {
        console.log ("Animal makes a sound");
    }
}

class cat extends animal {
    makeSound() {
        console.log ("Cat pussy makes a sound");
    }
}   

class dog9 extends animal {
    makeSound() {
        console.log ("Dog makes a sound");
    }
}
 let animals: animal[] = [new dog9(), new cat(), new cat()];

 animals.forEach(animal => animal.makeSound());
 