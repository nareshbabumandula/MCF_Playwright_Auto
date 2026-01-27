// write a program to reverse a string in JavaScript

function reverseString(string) {
    let s = string;
    let rev="";

    for(let i=s.length-1;i>=0;i--){
        rev+=s[i];
    }
    console.log(rev); // Output: "ahtibas"
}

// reverseString("sudha");
let input = process.argv[2];
reverseString(input);

// write a program to find each occurance in a string

// write a program to find most occured character in a string