class Animal1 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log("The animal makes a sound.");
  }
}

class Dog1 extends Animal1{
  breed: string;

  constructor(name: string, breed: string) {
    super(name); // calls Animal's constructor

    this.breed = breed;
  }

  speak(): void {
    console.log(`${this.name} barks.`);
  }
}

// Usage
const myDog = new Dog1("Buddy", "Golden Retriever");

myDog.speak();   // Buddy barks
console.log(myDog.name);   // Buddy


