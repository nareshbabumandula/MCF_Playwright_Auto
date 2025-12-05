let text = "Hello, World!";
console.log(text.length); // Output: 13
console.log(text.toUpperCase()); // Output: "HELLO, WORLD!"
console.log(text.toLowerCase()); // Output: "hello, world!" 
console.log(text.indexOf("World")); // Output: 7
console.log(text.indexOf("JavaScript")); // Output: -1 (not found)
console.log(text.slice(0, 5)); // Output: "Hello"
console.log(text.slice(7)); // Output: "World!" 
console.log(text.replace("World", "JavaScript")); // Output: "Hello, JavaScript!"
console.log(text.split(", ")); // Output: ["Hello", "World!"]
console.log(text.split("")); // Output: ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "!"]
console.log(text.startsWith("Hello")); // Output: true
console.log(text.endsWith("!")); // Output: true
console.log(text.includes("World")); // Output: true
console.log(text.includes("JavaScript")); // Output: false
console.log(text.trim()); // Output: "Hello, World!" (no leading or trailing spaces)
console.log(text.trimStart()); // Output: "Hello, World!" (no leading spaces)
console.log(text.trimEnd()); // Output: "Hello, World!" (no trailing spaces)
console.log(text.charAt(0)); // Output: "H"
console.log(text.charCodeAt(0)); // Output: 72 (ASCII code for 'H')
console.log(text.split("").reverse().join("")); // Output: "!dlroW ,olleH" (reversed string)
console.log(text.match(/World/)); // Output: ["World", index: 7,    
// input: "Hello, World!", groups: undefined]
console.log(text.match(/JavaScript/)); // Output: null (not found)
console.log(text.search(/World/)); // Output: 7 (index of "World")
console.log(text.search(/JavaScript/)); // Output: -1 (not found)
console.log(substr(text, 0, 5)); // Output: "Hello" (substring from index 0 to 5)
console.log(text.concat(" ").concat(" welcome to JavaScript!")); // Output: "Hello, World! welcome to JavaScript!"
