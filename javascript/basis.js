var x = 10;
var y = 20;
console.log(x + y);
// var, let and const differences
// var is function-scoped, while let and const are block-scoped.
// var can be redeclared and updated, let can be updated but not redeclared, and const cannot be updated or redeclared.
var a = 10;
var b = 20;
var c = 30;
console.log(a, b, c);
// Block scope example vs function scope example
if (true) {
    var x1 = 10; // let x1 is block-scoped
    var y1 = 20;
    console.log("x1 variable with-in the if block is: " + x1); // 10
}
//console.log(x1); // ReferenceError: x1 is not defined because x1 is block-scoped
console.log(y1); // 
if (true) {
    var a3 = 45; // const a3 is block-scoped
    console.log("a3 variable with-in the if block is: " + a3); // 45
}
// console.log("a3 variable with-in the if block is: " + a3); // ReferenceError: a3 is not defined
var a1 = 20;
a1 = 300;
console.log(a1); // 30
var a2 = 20;
a2 = 400;
console.log(a2); // 30
var a4 = 50;
// a4=500; // TypeError: Assignment to constant variable.
console.log(a4);
function addition() {
    var a = 100;
    var b = 200;
    console.log("Addtion of a and b is: " + (a + b));
}
console.log(a);
console.log(b);

addition(); // user defined function call
function add(a, b) {
    console.log("Addtion of a and b is: " + (a + b));
}
add(30, 40);
