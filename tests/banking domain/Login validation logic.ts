import { test, expect } from '@playwright/test';

test.describe('Login Validation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://your-app-url.com/login');
    });

    test('should validate empty email field', async ({ page }) => {
        await page.click('button[type="submit"]');
        const error = await page.locator('.error-message').textContent();
        expect(error).toContain('Email is required');
    });

    test('should validate empty password field', async ({ page }) => {
        await page.fill('input[type="email"]', 'test@example.com');
        await page.click('button[type="submit"]');
        const error = await page.locator('.error-message').textContent();
        expect(error).toContain('Password is required');
    });

    test('should validate invalid email format', async ({ page }) => {
        await page.fill('input[type="email"]', 'invalid-email');
        await page.fill('input[type="password"]', 'password123');
        await page.click('button[type="submit"]');
        const error = await page.locator('.error-message').textContent();
        expect(error).toContain('Invalid email format');
    });

    test('should login successfully with valid credentials', async ({ page }) => {
        await page.fill('input[type="email"]', 'valid@example.com');
        await page.fill('input[type="password"]', 'validPassword123');
        await page.click('button[type="submit"]');
        await expect(page).toHaveURL(/.*dashboard/);
    });

    test('should show error on invalid credentials', async ({ page }) => {
        await page.fill('input[type="email"]', 'test@example.com');
        await page.fill('input[type="password"]', 'wrongPassword');
        await page.click('button[type="submit"]');
        const error = await page.locator('.error-message').textContent();
        expect(error).toContain('Invalid credentials');
    });
});