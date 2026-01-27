import {Employee} from './Employee';

const emp = new Employee('Alice', 123);
console.log(emp.name);  // Output: Alice
console.log(emp.id);    
emp.printId();  // Output: Employee ID is 123