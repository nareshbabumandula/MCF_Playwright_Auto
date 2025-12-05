// Function Declarations
function greet(name='srinivas') {
    console.log(`Hello, ${name}!`);
}

greet();

// Function Expression --> anonumous function
const greeting = function(name='srinivas') {
    console.log(`Greeting Hello, ${name}!`);
}

greeting();

// Arrow Function: Shorter syntax for writing functions, does not have its own 'this' context, and cannot be used as constructors.
const arrowGreeting = (name='srinivas') => {
    console.log(`Arrow Greeting Hello, ${name}!`);
}

arrowGreeting();

// Immediately Invoked Function Expression (IIFE): A function that runs as soon as it is defined.
(function(name='srinivas') {
    console.log(`IIFE Hello, ${name}!`);
})();

// Function Constructors: Functions can be created using the Function constructor, but this is less common and generally not recommended.
const FunctionConstructorGreeting = new Function('name', 'console.log(`Function Constructor Hello, ${name}!`);');
FunctionConstructorGreeting('srinivas');

