class College {
    name: string;
    location: string;
        
    constructor(name: string, location: string) {
        this.name = name;
        this.location = location;
    }

    getCollegeDetails() {
        console.log(`College Name: ${this.name}, Location: ${this.location}`);
    }

    openCollege() {
        console.log(`${this.name} is now open.`);
    }

}

class Student extends College {
    studentName: string;     
    rollNo: number   

    constructor(name: string, location: string, studentName: string, rollNo: number) {
        super(name, location);
        this.studentName = studentName;
        this.rollNo = rollNo;
    }

    getStudentDetails() {
        console.log(`Student Name: ${this.studentName}, Roll No: ${this.rollNo}`);
    }

    attendClasses() {
        console.log(`${this.studentName} is attending classes at ${this.name}.`);
    }
}

const student = new Student('CBIT', 'Hyderabad', 'Arun', 101);
student.getCollegeDetails();
student.openCollege();
student.getStudentDetails();
student.attendClasses();

