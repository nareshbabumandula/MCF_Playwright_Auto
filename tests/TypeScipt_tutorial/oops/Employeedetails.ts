class EmployeeDetails {
    empId: number;
    empName: string;
    empDepartment: string;
    constructor(empId: number, empName: string, empDepartment: string) {
        this.empId = empId;
        this.empName = empName;
        this.empDepartment = empDepartment;
    }

    getEmployeeDetails() {
        console.log(`Employee ID: ${this.empId}, Employee Name: ${this.empName}, Employee Department: ${this.empDepartment}`);
    }

    work() {
        console.log(`${this.empName} is working in the ${this.empDepartment} department.`);
    }
}

const employeeInstance = new EmployeeDetails(1, 'ANiketh', 'MBA');
employeeInstance.getEmployeeDetails();
employeeInstance.work();