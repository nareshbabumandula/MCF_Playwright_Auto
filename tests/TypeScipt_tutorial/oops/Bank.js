class Bank {

    constructor(accounttype) {
        this.accounttype = accounttype;
    }

    // behavior
    verifyAccountType() {
        console.log(`${this.accounttype} is available`);
    }

}

const bank = new Bank(123);
bank.verifyAccountType(); // Output: Saving Account is available