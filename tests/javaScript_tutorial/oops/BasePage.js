export class BasePage {
    page;
    constructor(page) {
        this.page = page;
    }
    async goto(url) {
        await this.page.goto(url);
    }
    async type(selector, text) {
        await this.page.fill(selector, text);
    }
    async waitForSelector(selector) {
        await this.page.waitForSelector(selector);
    }
    async click(selector) {
        await this.page.click(selector);
    }
}
