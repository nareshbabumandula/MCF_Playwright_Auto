import { test, expect } from '@playwright/test';
import { time } from 'console';


    
test('Login', async ({ page }) => {
    // Navigate to the page
    await page.goto('https://www.mycontactform.com/');

    // Fill in the username and password fields
    await page.fill('input[name="user"]', 'username123');
    await page.fill('input[name="pass"]', 'password123');
    await page.waitForTimeout(1000);
});


// Ananymous function to navigaimport te to Sample Forms page
test('Fill Sample Form', async({ page }) => {
    await page.goto('https://www.mycontactform.com/samples.php');``
    await page.locator('//input[@name=\'email_to[]\' and @value=\'0\']').check();
    await page.waitForTimeout(2000);
    await page.locator('input[name=\'email_to[]\'][value=\'1\']').check();
    await page.locator('input[name=\'email_to[]\'][value=\'2\']').check();
    await page.locator('input[name="email_to[]"]').nth(0).uncheck();
    await page.waitForTimeout(1000);
    await page.getByLabel('Subject:').fill('Test matter');
    await page.waitForTimeout(1000);
    await page.getByLabel('E-mail Address:').fill('test@aniketh.com');
    await page.waitForTimeout(1000);
    await page.getByLabel('Text Box Field:').fill('Test Textbox');
    await page.waitForTimeout(1000);
    await page.getByLabel('Text Box - Multi Line:').fill('Test box Multi Line');
    await page.waitForTimeout(1000);
    await page.getByLabel('Drop Down Box:').selectOption('Third Option');
    await page.waitForTimeout(1000);
    await page.getByLabel('Drop Down Box:').selectOption({index:3});
    await page.waitForTimeout(1000);
    await page.getByRole('combobox'), (name: 'Drop Down Box:').selectOption('Second Option');
    await page.waitForTimeout(1000);
});