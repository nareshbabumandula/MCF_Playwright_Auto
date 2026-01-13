import { test, expect } from '@playwright/test';
// test('should access mycontactform website and check the browser title', async ({ page }) => {
//     await page.goto('https://www.mycontactform.com/');
//     await expect(page).toHaveTitle('Free Contact and Email Forms - myContactForm.com');
//     await expect(page).toHaveTitle(/Free Contact and Email Forms/);
// });
test('should enter username in the username field', async ({ page }) => {
    await page.goto('https://www.mycontactform.com/');
    const usernameField = page.locator('#user');
    await usernameField.fill('testuser');
    await expect(usernameField).toHaveValue('testuser');
    await page.locator('#pass').fill('testpassword');
    await page.waitForTimeout(5000);
    await page.close();
});
test('Playwright locators', async ({ page }) => {
    await page.goto('https://www.mycontactform.com/');
    await page.getByLabel('User Name:').fill('Srinivas123');
    await page.waitForTimeout(1000);
    await page.getByLabel('Password:').fill('Secure*1234');
    await page.waitForTimeout(1000);
    await page.locator('input.btn_log').click();
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Sample Forms' }).click();
    await page.waitForTimeout(1000);
    await page.locator('input[name="email_to[]"][value="1"]').click();
    await page.waitForTimeout(5000);
    await page.close();
});
