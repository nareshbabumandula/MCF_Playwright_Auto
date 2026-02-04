import {test} from '@playwright/test';
import { HomePage } from '../tests/pages/HomePage';

test('get started link using POM', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.clickGetStarted();
    await homePage.verifyInstallationHeadingVisible();
});