class Person {
 
    private name: string;
    private age: number;
  
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // getter and setter methods for name and age
    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
       if(name.length > 0) {
            this.name = name;
       }
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number): void {
       if(age > 0) {
           this.age = age;
       }
    }
}

const person = new Person("John", 32);
console.log(person.city); 
console.log(person.getName()); // Output: John  
person.setName("Doe");
console.log(person.getName()); // Output: Doe
console.log(person.getAge()); // Output: 32  
person.setAge(43);
console.log(person.getAge()); // Output: 43