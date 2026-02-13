class Animal7 {
  makeSound(): string | number {
    return "sound";
  }
}

class Dog7 extends Animal7 {
  override makeSound(): string {
    return "bark";
  }
}

const dog7 = new Dog7();
console.log(dog7.makeSound()); // Output: "bark"
