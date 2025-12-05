// TypeScript CANNOT run directly in node.js
// Node undertands only JavaScript, not TypeScript
// So we need to transpile TypeScript to JavaScript using tsc (TypeScript Compiler)
// TypeScript is a superset of JavaScript, so all JavaScript code is valid TypeScript code
// TypeScript catches errors at compile time, before running the code

function switchExampleTS(day: string): void {
    switch (day) {
        case "sun":
            console.log("Sunday");
            console.log(day.toUpperCase())
            break;
        case "mon":
            console.log("Monday");
            break;
        case "tue":
            console.log("Tuesday");
            break;
        case "wed":
            console.log("Wednesday");
            break;
        case "thu": case "thurs":
            console.log("Thursday");
            break;
        case "fri":
            console.log("Friday");
            break;
        case "sat":
            console.log("Saturday");
            break;

        default:
            console.log("Invalid day");
            break;
    }
}
switchExampleTS("thu");