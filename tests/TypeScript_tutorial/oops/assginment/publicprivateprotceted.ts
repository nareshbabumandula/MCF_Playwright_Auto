class Animal3 {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

const dog3 = new Animal3("Dog");

dog3.name;     // ✅ allowed
dog3.speak();   // ✅ allowed


class Animal5 {
  private heartRate: number = 80;

  checkHealth() {
    console.log(this.heartRate); // ✅ OK
  }
}

class Dog4 extends Animal5 {
  bark() {
    // this.heartRate ❌ Error: private
  }
}

const dog4 = new Dog4();
dog4.checkHealth(); // ✅ OK
// dog4 .heartRate ❌ Error: private

class Animal4 {
  protected energy: number = 100;

  rest() {
    this.energy += 20;
  }
}

class Dog3 extends Animal4 {
  play() {
    this.energy -= 30; // ✅ allowed
  }
}

const dog5 = new Dog3();
// dog.energy ❌ Error