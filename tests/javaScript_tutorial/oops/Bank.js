class Bank {

    constructor(accounttype) {
        this.accounttype = accounttype;
    }

    //behavior
   VerifyAccountType() {
        console.log(`${this.accounttype} is available`);
    }
    
}

const bank = new Bank(123)
bank.VerifyAccountType(); // Output: Savings Account is available
