import { test } from "../../fixtures";
import LoginPage from "../../pw-ts-automation-submodule-pages/pages/LoginPage";
import logger from "../logging/LoggerUtil";
// import { pwTestCredentials } from '../config/credentials';

test.beforeEach(async ({ page, testConfig }) => {
    await page.goto(testConfig.baseURL);
});

test.describe("Test login", () => {
    test("Verify login", async ({ page, testConfig }) => {
        // const { username, password } = pwTestCredentials;
        const username:any = process.env.PW_USERNAME;
        const password:any = process.env.PW_PASSWORD;

        if (!username || !password) {
            throw new Error('GitHub secrets for username and password are not set');
        }
        const loginPage = new LoginPage(page);

        // await loginPage.fillUsername(testConfig.username);
        // await loginPage.fillPassword(testConfig.password);

        await loginPage.fillUsername(username);
        console.log('Username length:', process.env.PW_USERNAME?.length || 'Not set');
        await loginPage.fillPassword(password);
        console.log('Username length:', process.env.PW_PASSWORD?.length || 'Not set');
        const homePage = await loginPage.clickLoginButton();
        await homePage.verifyHomePageTitleVisibility();
        logger.info("Test Completed");

    });
});
