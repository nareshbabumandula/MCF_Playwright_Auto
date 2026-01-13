import { test, expect } from '@playwright/test';
test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
});
test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
    await page.waitForTimeout(3000);
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
test('My Contact Form', async ({ page }) => {
    await page.goto('https://www.mycontactform.com/samples.php');
    await page.waitForTimeout(5000);
    await page.locator("//input[@type='checkbox' and @value=0]").click();
    await page.waitForTimeout(2000);
    await page.locator('input#subject').fill('Test Subject');
    await page.waitForTimeout(2000);
});
