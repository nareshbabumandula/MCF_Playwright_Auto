import { test, expect } from '@playwright/test';

test.describe('ATM Withdraw Simulation', () => {
    let balance: number = 5000;

    test('successful withdrawal', () => {
        const withdrawAmount = 500;
        expect(balance).toBeGreaterThanOrEqual(withdrawAmount);
        
        balance -= withdrawAmount;
        expect(balance).toBe(4500);
    });

    test('insufficient funds', () => {
        const withdrawAmount = 10000;
        
        if (balance < withdrawAmount) {
            expect(balance).toBeLessThan(withdrawAmount);
        }
    });

    test('invalid amount', () => {
        const withdrawAmount = -100;
        expect(withdrawAmount).toBeGreaterThan(0);
    });

    test('multiple withdrawals', () => {
        const withdrawal1 = 200;
        const withdrawal2 = 300;
        
        balance -= withdrawal1;
        balance -= withdrawal2;
        
        expect(balance).toBe(4000);
    });

    test('reset balance', () => {
        balance = 5000;
        expect(balance).toBe(5000);
    });
});