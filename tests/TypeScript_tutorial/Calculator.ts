import { Arithmetic } from "./Arithmetic";

class Calculator extends Arithmetic {

   addMultiple(numbers: number[]): number {
       let sum=0;
        for (let num of numbers) {  
            sum += num;
        }
        return sum;
    }
}

const calc = new Calculator();
console.log("Addition result is : " + calc.add(10, 5));    
console.log("Subtraction result is : " + calc.subtract(10, 5));
console.log("Multiplication result is : " + calc.multiply(10, 5));
console.log("Division result is : " + calc.divide(10, 5));
console.log("Modulus result is : " +calc.modulus(10, 5));
console.log("Addition of multiple numbers is : " + calc.addMultiple([1, 2, 3, 4, 5]));