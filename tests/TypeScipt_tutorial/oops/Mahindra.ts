import { Car } from "./Car";

class Mahindra extends Car {
    start(): void {
        throw new Error("Method not implemented.");
    }

    speed(): void {
        console.log("Mahindra car has max speed of 180 kmph");
    }

}
// upcasting
const car: Car = new Mahindra();
car.start();    
car.sunroof();  

// normal object creation
const obj = new Mahindra();
obj.speed();
obj.start();
