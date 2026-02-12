export abstract class Car {

    // concrete method or non abstract method or method with implementation/body
    sunroof(): void {
        // implementation of moving the car
        console.log("Car has sunroof");
    }

    // abstract method
    abstract start(): void;

}

// Cannot create an instance of an abstract class.
// let car: Car = new Car();
// car.start();    
// car.sunroof();