function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

// Example usage
const input = "hello";
const reversedResult = reverseString(input);
console.log(reversedResult); // "olleh"