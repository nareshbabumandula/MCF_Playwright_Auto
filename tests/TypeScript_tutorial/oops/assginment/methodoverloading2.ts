class Employee7 {

  // Overload signatures
  calculatePay(): number;
  calculatePay(hours: number, rate: number): number;

  // Single implementation
  calculatePay(hours?: number, rate?: number): number {

    // Contract employee case
    if (hours !== undefined && rate !== undefined) {
      return hours * rate;
    }

    // Full-time employee case
    return 10000; // Fixed monthly salary
  }
}

const employ = new Employee7();

console.log(employ.calculatePay());        // 10000
console.log(employ.calculatePay(10, 500)); // 5000