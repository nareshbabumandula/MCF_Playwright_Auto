import {test} from '@playwright/test';
import {LoginPage} from './LoginPage';
import {SampleFormsPage} from './SampleFormsPage';
import { log } from 'console';

test('MCF Sample Forms test', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto("https://www.mycontactform.com");
    await loginPage.login('Sudha', 'Secure*12');
    await page.waitForTimeout(4000); 
    const sampleFormsPage = new SampleFormsPage(page);
    await sampleFormsPage.clickSampleFormLink();
    await page.waitForTimeout(4000); 
    await sampleFormsPage.selectSendTo(); // select marketing department
    await page.waitForTimeout(4000); 
});