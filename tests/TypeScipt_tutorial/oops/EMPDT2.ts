class college {
    collegeName: string;
    collegeCode: number;
    location: string;

    constructor(collegeName: string, collegeCode: number, location: string) {
        this.collegeName = collegeName;
        this.collegeCode = collegeCode;
        this.location = location;
    }
    getCollegeDetails() {
        console.log(`College Name: ${this.collegeName}, College Code: ${this.collegeCode}, Location: ${this.location}`);
    }
    startSemester() {
        console.log(`The semester has started at ${this.collegeName} located in ${this.location}.`);
    }
}

class student extends college {
    studentId: number;
    course: string;
    constructor(collegeName: string, collegeCode: number, location: string, studentId: number, course: string) {
        super(collegeName, collegeCode, location);
        this.studentId = studentId;
        this.course = course;
    }
    getStudentDetails() {
        console.log(`Student ID: ${this.studentId}, Course: ${this.course}`);
    }
    attendClass() {
        console.log(`Student ID: ${this.studentId} is attending class for the course: ${this.course}.`);
    }
}
const student1 = new student('ABC College', 5678, 'New York', 1001, 'Computer Science');
student1.getCollegeDetails();//calling parent class method  
student1.startSemester();//calling parent class method
student1.getStudentDetails();//calling child class method
student1.attendClass();//calling child class method 