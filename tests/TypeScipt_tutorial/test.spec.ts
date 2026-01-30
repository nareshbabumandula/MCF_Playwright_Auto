import {test, expect} from '@playwright/test';

let message = 'This is a test message';
// message = 45;  // This will cause a type error if strict type checking is enabled

test('JavaScript - Message Test', async ({page}) => {
  console.log('Message:', message);
});


test('JavaScript - Google Search', async ({page}) => {
  // Navigate to Google
  await page.goto('https://www.mycontactform.com');
  
  const title = await page.title(); // inferred as 'string'
  console.log('Page title:', title);
  
  // Check if the title contains 'Google'
  await expect(page).toHaveTitle(/Free Contact and Email Forms/);

  // Locate the search input field and type 'JavaScript tutorial'
  const username = page.locator('input[id="user"]');
  const password = page.locator('input[id="pass"]');
  await username.fill('srinivas');
  await password.fill('Secure*123');

});