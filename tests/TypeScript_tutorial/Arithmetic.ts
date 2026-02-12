export class Arithmetic {

    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }     
        return a / b;
    }

    modulus(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Cannot perform modulus by zero");
        }
        return a % b;
    }
}

const arth = new Arithmetic();
console.log("Addition result is : " + arth.add(5, 3));    
console.log("Subtraction result is : " + arth.subtract(5, 3));
console.log("Multiplication result is : " + arth.multiply(5, 3));
console.log("Division result is : " + arth.divide(10, 2));
console.log("Modulus result is : " +arth.modulus(10, 2));    