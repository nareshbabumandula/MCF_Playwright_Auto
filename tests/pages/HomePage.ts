import {Page, Locator, expect} from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly installationHeading: Locator; 
  readonly writingTestsLink: Locator;

    constructor(page: Page) {   
        this.page = page;
        this.getStartedLink = page.getByRole('link', { name: 'Get started' });
        this.installationHeading = page.getByRole('heading', { name: 'Installation' });
        this.writingTestsLink = page.getByRole('link', { name: 'Writing tests' });
    }

    async navigate() {
        await this.page.goto('https://playwright.dev/');
    }

    async clickGetStarted() {
        await this.getStartedLink.click();
    }

    async verifyInstallationHeadingVisible() {
        await expect(this.installationHeading).toBeVisible();
    }

    async clickWritingTests() {
    // 'Writing tests' link click action
        await this.page.getByRole('link', { name: 'Writing tests' }).first().click();
    }
}

