class Animal6 {makesound() {
    console.log("Animal makes sound");
  }
}
class dog6 extends Animal6 {
    makesound(): void {
        console.log("Dog barks");   
    }
}

const a: Animal6 = new dog6();
a.makesound(); // Output: Dog version of makesound() is called, Output: Dog barks