class Employee6 {
    getSalary() {
        return 30000;
    }
}
class Manager6 extends Employee6 {
    getSalary() {
        return 50000;
    }
}
class Contractor6 extends Employee6 {
    getSalary() {
        return 20000;
       }
}
interface salarystaretegy {
    calculatesalary(): number;
}

class fixedSalaryStrategy implements salarystaretegy {
    calculatesalary(): number {
        return 40000;
    }
}
class hourlySalaryStrategy implements salarystaretegy {
    calculatesalary(): number {
        return 20000;
    }
}

class employee{
    constructor(private salaryStrategy: salarystaretegy) {}

    getSalary(): number {
        return this.salaryStrategy.calculatesalary();
    }
}

const manager = new employee(new fixedSalaryStrategy());
const contractor = new employee(new hourlySalaryStrategy());

console.log (manager.getSalary()); // 40000
console.log (contractor.getSalary()); // 20000
