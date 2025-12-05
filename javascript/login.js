/**
 * Playwright login example for https://www.mycontactform.com/login.php
 *
 * Usage:
 *  - Install Playwright if not already: `npm i -D playwright`
 *  - Optionally install browsers: `npx playwright install` (only once)
 *  - Set credentials as environment variables or edit the defaults below:
 *      Windows PowerShell:
 *        $env:MCF_USER = 'yourUsername'; $env:MCF_PASS = 'yourPassword'
 *      Then run:
 *        node javascript/login.js
 *
 * Notes:
 *  - This script uses `input[name="user"]` and `input[name="pass"]` to fill
 *    the username and password fields and clicks the submit button
 *    `input[type="submit"][name="btnSubmit"]`.
 */

const { chromium } = require('playwright');

(async () => {
  // Provide credentials via environment variables for safety
  const USER = process.env.MCF_USER || 'your_username_here';
  const PASS = process.env.MCF_PASS || 'your_password_here';

  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    await page.goto('https://www.mycontactform.com/login.php', { waitUntil: 'domcontentloaded' });

    // Fill username and password
    await page.fill('input[name="user"]', USER);
    await page.fill('input[name="pass"]', PASS);

    // Submit and wait for navigation (if any)
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'networkidle' }).catch(() => {}),
      page.click('input[type="submit"][name="btnSubmit"]'),
    ]);

    console.log('Login submitted. Current URL:', page.url());

    // Optional: check for a selector that's visible only after login
    // Example: await page.waitForSelector('selector-for-logged-in-state', { timeout: 3000 });

  } catch (err) {
    console.error('Login script failed:', err);
  } finally {
    await browser.close();
  }
})();
