// if else if else statement
// This program checks the marks obtained by a student and prints the class based on the marks.
//let marks=85;
const marks = parseInt(process.argv[2]); // Get marks from command line argument
console.log("Marks obtained: " + marks);
if (marks>=60 && marks<70) {
    console.log("You have passed the exam with first class"); 
} else if (marks>=50 && marks<60) {
    console.log("You have passed the exam with second class");
} else if (marks>=40 && marks<50) {
    console.log("You have passed the exam with third class");
} else if (marks>=33 && marks<40) {
    console.log("You have passed the exam with pass class");
} else if (marks>70 && marks<=100) {
    console.log("You have passed the exam with distinction");
} else {
    console.log("You have failed the exam");
}

// switch case statement
// This program checks the day of the week and prints whether it is a weekday or weekend.   

const day = "     sat"; // Get day from command line argument

switch (day.toLowerCase().trim()) { // Convert to lowercase for case-insensitive comparison
    case "sun": case "sund":     
        console.log("Sunday");
        break
    case "mon" :     
            console.log("Monday");
            break
    case "tue" :     
            console.log("Tuesday");
            break;
    case "wed" :     
            console.log("Wednesday");
            break
    case "thu" :     
            console.log("Thursday");
            break
    case "fri" :     
            console.log("Friday");
            break;
    case "sat" :     
            console.log("Saturday");
            break
    default:
        console.log("Invalid day");
        break;
}

