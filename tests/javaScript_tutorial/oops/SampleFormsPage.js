import { BasePage } from "./BasePage";
export class SampleFormsPage extends BasePage {
    async clickSampleFormLink() {
        await this.page.locator('text=Sample Forms').click();
    }
    async selectSendTo() {
        //await this.page.locator("input[name='email_to[]'][value='0']").click();
        await this.page.locator("//input[@name='email_to[]'][@value='0']").click();
    }
}
