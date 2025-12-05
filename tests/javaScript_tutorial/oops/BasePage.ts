import {Page} from '@playwright/test';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(url: string) {
        await this.page.goto(url);
    }

    async type(selector: string, text: string){
        await this.page.fill(selector, text);
    }

    async waitForSelector(selector: string){
        await this.page.waitForSelector(selector);
    }

    async click(selector: string){
        await this.page.click(selector);
    }
    
}