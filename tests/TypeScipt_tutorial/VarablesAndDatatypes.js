let strname = "Srinivas";
const age = 30;
let price = 19.99;
let isActive = true;
let user = null; // Example of null
let city;
const id = Symbol('id'); // Example of Symbol
let bigIntValue = 1234567890123456789012345678901234567890n; // Example of BigInt

// JavaScript Primitive Data Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

console.log(typeof strname);
console.log(typeof age);
console.log(typeof isActive);
console.log(typeof price);
console.log(typeof null); // Note: typeof null is 'object' due to a historical bug
console.log(typeof user); // Undefined is a type itself
console.log(typeof city); // Undefined is a type itself
console.log(typeof id); // Symbol
console.log(typeof bigIntValue); // BigInt