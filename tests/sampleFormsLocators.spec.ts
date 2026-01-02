import { test, expect } from '@playwright/test';


    
test('Login', async ({ page }) => {
    // Navigate to the page
    await page.goto('https://www.mycontactform.com');

    // Playwright commands (goto(), fill(), click(), getByLabel(), etc are asynchronous, so we use 'await' to wait for them to complete. 
    // They ivolve network operations and DOM interactions and browswer events which take time to process.)
    // We use await keyword to ensure each step completes before moving to the next one. It pauses the execution until the awaited promise is resolved.

    await page.getByLabel('User Name:').fill('testuser');
    await page.waitForTimeout(2000);
    await page.getByLabel('Password:').fill('Secure*123');
    page.waitForTimeout(2000);

    // Click submit button
    await page.click('input[type="submit"]');
    await page.waitForTimeout(2000);

});


// Ananymous function to navigaimport te to Sample Forms page
test('Fill Sample Form', async({ page }) => {
    await page.goto('https://www.mycontactform.com/samples.php');
    await page.locator('//input[@name=\'email_to[]\' and @value=\'0\']').check();
    await page.waitForTimeout(2000);
    await page.locator('input[name=\'email_to[]\'][value=\'1\']').check();
    await page.locator('input[name=\'email_to[]\'][value=\'2\']').check();

    await page.locator('input[name="email_to[]"]').nth(0).uncheck();
    await page.waitForTimeout(3000);
    await page.getByLabel('Subject:').fill('Test Subject');
    await page.waitForTimeout(2000);


});
