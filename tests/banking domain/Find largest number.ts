function findLargestNumber(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("Array cannot be empty");
    }
    return Math.max(...numbers);
}

// Usage example
const numbers = [10, 5, 20, 15, 8];
console.log(findLargestNumber(numbers)); // Output: 20