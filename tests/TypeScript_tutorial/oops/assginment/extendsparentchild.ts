class Animal2 {
  move(): void {
    console.log("Animal is moving");
  }
}

class Dog2 extends Animal2 {
  bark(): void {
    console.log("Dog barks");
  }
}

const dog2 = new Dog2();
dog2.move();  // inherited from Animal2
dog2.bark();  // Dog2’s own method