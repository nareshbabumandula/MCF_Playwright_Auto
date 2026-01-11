// 1.var in javaScript
function display () {
    var name = "aniketh"; // var - Function scoped and can be redeclared
    var name = "sai";
    var name = "kiran";
    console.log(name);
}

display();

// 2. let in JavaScript
let a=15;
// let a=25; // let - Block scoped and cannot be redclared
a=35;// allowed 
console.log(a);

if(true){
 let y = 150;
 console.log(y); // 150
}
//console.log(y); // ReferenceError: y is not defined

// 3. const in java script
const c=55;
//c =60;
//console.log(c); // TypeError; Assginment to constant variable