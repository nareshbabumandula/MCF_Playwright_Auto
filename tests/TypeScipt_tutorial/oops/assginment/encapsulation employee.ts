class Employee {
    private  salary: number;

    constructor(salary: number) {
        this.salary = salary;
    }

    public getsalary(): number {
        return this.salary;
    }
}

const emp = new Employee(20000);
console.log(emp.getsalary());// console.log(emp.salary); // Error: Property 'salary' is private and only accessible within class 'Employee'.

