import {test} from '@playwright/test';
import {LoginPage} from './LoginPage';
import {SampleFormsPage} from './SampleFormsPage';
import { log } from 'console';

test('MCF login test', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto("https://www.mycontactform.com");
    await loginPage.login('srinivas', 'Secure*12');
    await page.waitForTimeout(4000); // Wait for 4 seconds to observe the result
});

