import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    
    async login(username: string, password: string) {
        await this.type('input[id="user"]', username);
        await this.type('input[id="pass"]', password);
        await this.click('input[name="btnSubmit"]');
    }
}
