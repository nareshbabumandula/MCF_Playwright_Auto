"use strict";
class College {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    getCollegeDetails() {
        console.log(`College Name: ${this.name}, Location: ${this.location}`);
    }
    opencollege() {
        console.log(`${this.name} is now open for admissions.`);
    }
}
class Student extends College {
    studentName;
    rollNumber;
    constructor(name, location, studentName, rollNumber) {
        super(name, location);
        this.studentName = studentName;
        this.rollNumber = rollNumber;
    }
    getstudentDetails() {
        console.log(`student Name: ${this.studentName}, Roll Number: ${this.rollNumber}`);
    }
    attendClasses() {
        console.log(`${this.studentName} is attedning classes at ${this.name}.`);
    }
}
const student = new Student('SR College', 'Warangal', 'Aniketh', 103);
student.getCollegeDetails();
student.opencollege();
student.getstudentDetails();
student.attendClasses();
