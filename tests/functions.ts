/*In playwright, anonymous functions are used to define test cases. These functions are passed as arguments to the test function
 provided by the Playwright testing framework. The test function is used to group and execute test cases,
 and the anonymous functions contain the actual test logic that interacts with the web page being tested.*/


 // Anonymous function to addition
 const addition = (a: number, b: number): number => {
    return a + b;
 };

 const result = addition(5, 3);
 console.log(`The result of addition is: ${result}`); // Output: The result of addition is: 8

 (() =>{
    console.log("This is an anonymous function in Playwright test.");
 })();
 

 
