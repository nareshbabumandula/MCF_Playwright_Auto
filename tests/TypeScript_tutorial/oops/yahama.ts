import { Bike } from "./bike";

class yahama extends Bike{
   discbrake(): void {
       console.log("yahama bike has disc brake");
   }
   start() : void {
    console.log( "yahama bike has started");
   }
   run(): void {
       console.log("yahama bike is runninhg");
    }
   }

   const bike: Bike = new yahama();
   bike.discBrake();
   bike.run();
