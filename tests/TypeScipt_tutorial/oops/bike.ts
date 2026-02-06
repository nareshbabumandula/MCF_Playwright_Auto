abstract class Bike {

    // concrete method or non abstarct method or method with implemenatiotion/body
    discBrake(): void {
        console.log("Bike has disc brake");
    }

    // abstract method
    abstract run(): void;
}

// child class 
class yamaha extends Bike {
    run (): void {
        console.log("Yamaha bike is running");
    }
}

// create object of child class
let bike: Bike = new yamaha();
bike.run();
bike.discBrake();
