import { Page } from "@playwright/test";
import HomePage from "./HomePage";

export default class LoginPage {
    private readonly inputUsername: any;
    private readonly inputPassword: any;
    private readonly btnLogin: any;

    constructor(private readonly page: Page) {
        this.inputUsername = this.page.getByRole('textbox', { name: 'Username' });
        this.inputPassword = this.page.getByRole('textbox', { name: 'Password' });
        this.btnLogin = this.page.getByRole('button', { name: 'Log In' }); 
    }

    async fillUsername(username: string) {
        await this.inputUsername.fill(username);
    }

    async fillPassword(password: string) {
        await this.inputPassword.fill(password);
    }

    async clickLoginButton() {
        try {
            await this.btnLogin.click();
            return new HomePage(this.page);
        } catch (err) {
            console.error(`Error clicking login button: ${err}`);
            throw err;
        }
    }
}
