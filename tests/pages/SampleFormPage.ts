import { Page } from '@playwright/test';

export class SampleFormPage {

    readonly page: Page;
    readonly emailTo0;
    readonly emailTo1;
    readonly emailTo2;
    readonly subject;
    readonly emailAddress;
    readonly textBoxField;
    readonly textBoxMultiLine;
    readonly dropDownBox;

    constructor(page: Page) {
        this.page = page;
        this.emailTo0 = page.locator('//input[@name=\'email_to[]\' and @value=\'0\']');
        this.emailTo1 = page.locator('input[name=\'email_to[]\'][value=\'1\']');
        this.emailTo2 = page.locator('input[name=\'email_to[]\'][value=\'2\']');
        this.subject = page.getByLabel('Subject:');
        this.emailAddress = page.getByLabel('E-mail Address:');
        this.textBoxField = page.getByLabel('Text Box Field:');
        this.textBoxMultiLine = page.getByLabel('Text Box - Multi Line:');
        this.dropDownBox = page.getByLabel('Drop Down Box:');
    }

    async checkEmailTo0() {
        await this.emailTo0.check();
    }

    async checkEmailTo1() {
        await this.emailTo1.check();
    }   

    async checkEmailTo2() {
        await this.emailTo2.check();
    }
    
    async fillSubject(subject: string) {
        await this.subject.fill(subject);
    }

    async fillEmailAddress(email: string) {
        await this.emailAddress.fill(email);
    }

    async fillTextBoxField(text: string) {
        await this.textBoxField.fill(text);
    }   

    async fillTextBoxMultiLine(text: string) {
        await this.textBoxMultiLine.fill(text);
    }

}