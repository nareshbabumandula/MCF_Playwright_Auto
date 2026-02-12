export class Employee {

    // public access modifier makes the property accessible outside the class
    public name: string;
    public id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id=id;
    }

    printId(){
       console.log(`Employee ID is ${this.id}`);
    }


}

const emp = new Employee('John', 111);
console.log(emp.name); // Output: John
console.log(emp.id); // Output: 111
emp.printId(); // Output: Employee ID is 111
