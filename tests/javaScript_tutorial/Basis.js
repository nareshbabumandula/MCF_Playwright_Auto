// 1. var in JavaScript
function display() {
   var name="Srinivas"; // var - Function scoped and can be redeclared
   var name="Sandeep";
   var name="naresh"
   console.log(name);
}

display();

// 2. let in JavaScript
let a=10;
// let a=20; // let - Block scoped and cannot be redeclared
a=30; // allowed
console.log(a);

if(true){
  let y=100;
  console.log(y); // 100
}
//console.log(y); // ReferenceError: y is not defined

// 3. const in JavaScript
const c=45;
//c=50;
//console.log(c); // TypeError: Assignment to constant variable.

// Hoisting behavior : It is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase.
console.log(x); // undefined
var x = 5; // var is hoisted, but not initialized
console.log(x); // ReferenceError: Cannot access 'y' before initialization

// Template Literals: Template literals are string literals allowing embedded expressions, multi-line strings, and string interpolation.
const person = "naresh";
const age = 42;
const message = `Hello, my name is ${person} and I am ${age} years old.`;
console.log(message); // Hello, my name is naresh and I am 42 years old.

// Destricting Assignment: Destructuring assignment is a syntax that allows unpacking values from arrays or properties from objects into distinct variables.
const arr = [1,2,3];
const [first, second, third] = arr;
console.log(first, second, third); // 1 2 3
console.log(arr[3]); // undefined