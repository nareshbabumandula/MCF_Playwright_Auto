export class Employee{
    name:string;
    empid:number;
    department:string;

    constructor(name:string, empid:number, department:string){
        this.name = name;
        this.empid = empid;
        this.department = department;
    }
    getEmployeeDetails(){
        console.log(`Employee Name: ${this.name}, Employee ID: ${this.empid}, Department: ${this.department}`);
    }
    startWork(){
        console.log(`${this.name} has started working in the ${this.department} department.`);
    }
}

class Manager extends Employee{
    teamSize:number;
    project:string;
    constructor(name:string, empid:number, department:string, teamSize:number, project:string){
        super(name, empid, department);
        this.teamSize = teamSize;
        this.project = project;
    }
    getManagerDetails(){
        console.log(`Manager Name: ${this.name}, Team Size: ${this.teamSize}, Project: ${this.project}`);
    }
    conductMeeting(){
        console.log(`${this.name} is conducting a meeting for the ${this.project} project.`);
    }
}
const manager = new Manager('Alice', 1234, 'IT', 10, 'Website Redesign');
manager.getEmployeeDetails();//calling parent class method  
manager.startWork();//calling parent class method
manager.getManagerDetails();//calling child class method
manager.conductMeeting();//calling child class method
