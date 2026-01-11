// 1. var in javaScript
function display(){
   var name1 = "srinu"; // var - Function scoped and can be redeclared
   var name2 = "suresh";
   var name3 = "aniketh"
   console.log(name1);
   console.log(name2);
   console.log(name3);
}
    
display();

// 2. let in javaScript
let a=15;
// let a=25; // let -Block scoped and cannot be redeclared
a=35; // allowed
console.log(a);
if(true){
    let y=150;
    console.log(y); //150

    //console.log(y); // ReferenceError: y is not defined
}

// 3. const in javaScript
const c=55;
console.log(c);
