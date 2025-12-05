
/**Selection Statements: if, nested-if, if else and if else if */
let age = 10; // assingning value 10 to variable age
=======
let age = 10;


if (age >= 18) {
    // if block
    console.log("You are eligible to vote.");
} else {
    // else block
    console.log("You are not eligible to vote.");
}

// Indentation is important for readability (Alt+Shift+F in VS Code)
/**
 * Nested if-else and else-if example
 * @Author: Naresh
 * @Date: 2025-11-28
 */
function compareNumbers() {
    let a = 100; 
    let b = 10;

    if (a > b) {
        console.log("a is greater than b");
        if(true){
            console.log("Nested if block");    
        }
    } else if (a == b) {
        // else if block
        console.log("a is equal to b");
    } else {
        console.log("b is greater than a");
    }
}

compareNumbers();
// JavaScript does NOT support type declaration (NO type annotations) in function parameters.
function switchExample(day) {
    switch (day) {
        case "sun":
            console.log("Sunday");
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
switchExample("thu");
switchExample("thurs");

// Iterative Statements: for, while, do-while

// for loop
for (let i = 1; i <= 10; i++) {
    console.log("For Loop Iteration: " + i);

    if(i === 5){
        console.log("Breaking the loop at i = " + i);
        break; // exit the loop when i is 5
    }
}

for (let i = 10; i >= 1; i--) {
    console.log("For Loop Iteration: " + i);

    if(i === 5){
        console.log("Breaking the loop at i = " + i);
        break; // exit the loop when i is 5
    }
}

// even or odd numbers program
for (let i = 1; i <= 10; i++) {
    if(i % 2 === 0){
        console.log("Even number: " + i);
    }else{
        console.log("Odd number: " + i);
    }
}

// prime number program
for (let num = 1; num <= 10; num++) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime && num > 1) {
        console.log(num + " is a prime number");
    }
}

// Iterative Statements Examples — while and do-while
// Run this file with: `node javascript/control.statements.js`

// While loop example: print numbers 1 through 5
let whileCounter = 1;
console.log("\nWhile Loop Example:");
while (whileCounter <= 5) {
    console.log(whileCounter);
    whileCounter++;
}

// Do-while loop example: runs at least once even if condition is false
let doCounter = 1;
console.log("\nDo-While Loop Example (starts at 10, condition checks after first run):");
do {
    console.log(doCounter);
    doCounter++;
} while (doCounter <= 10);

let x = 100; // assigning value 100 to variable x
console.log(x);
<<<<<<< HEAD
console.log(5 == 5) // true loose equality used to compare values only
console.log(5 == "5") // true loose equality used to compare values only
console.log(5 === "5") // false: strict equality compares value and type
=======
console.log(5==5) // true loose equality used to compare values only
console.log(5=="5") // true loose equality used to compare values only
console.log(5==="5") // true strict equality used to compare values and types
>>>>>>> 1cbac8a865d8ff114eadc3c4363d6790f66cad27

