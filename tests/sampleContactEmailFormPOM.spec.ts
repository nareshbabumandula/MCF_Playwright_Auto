import {test} from '@playwright/test';
import { SampleFormPage } from './pages/SampleFormPage';

test('Fill Sample Form using POM', async({ page }) => {
    const sampleFormPage = new SampleFormPage(page);
    await page.goto('https://www.mycontactform.com/samples.php');  
    await sampleFormPage.checkEmailTo0();
    await sampleFormPage.checkEmailTo1();
    await sampleFormPage.checkEmailTo2();
    await sampleFormPage.emailTo0.uncheck();
    await sampleFormPage.fillSubject('Test Subject');
    await sampleFormPage.fillEmailAddress('test@example.com');
    await sampleFormPage.fillTextBoxField('Test Textbox');
    await sampleFormPage.fillTextBoxMultiLine('Test box Multi Line');
    await sampleFormPage.dropDownBox.selectOption('Third Option');  
});