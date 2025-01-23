import { test } from "../../fixtures";
import HomePage from "../../pw-ts-automation-submodule-pages/pages/HomePage";
import LoginPage from "../../pw-ts-automation-submodule-pages/pages/LoginPage";
import logger from "../logging/LoggerUtil";
// import { pwTestCredentials } from '../config/credentials';

test.beforeEach(async ({ page, testConfig }) => {
    await page.goto(testConfig.baseURL);
});

test.describe("Test login", () => {
    test("Verify login", async ({ page, testConfig }) => {
        console.log('Environment Variables:');
        console.log('PW_USERNAME:', process.env.PW_USERNAME);
        console.log('PW_PASSWORD:', process.env.PW_PASSWORD ? 'Set' : 'Not Set');
        // const { username, password } = pwTestCredentials;
        const username: any = process.env.PW_USERNAME;
        const password: any = process.env.PW_PASSWORD;

        if (!username || !password) {
            throw new Error('GitHub secrets for username and password are not set');
        }
        const loginPage = new LoginPage(page);

        try {
            await loginPage.fillUsername(username);
            console.log("entered_username : ", username);
            await loginPage.fillPassword(password);
            console.log("entered_password : ", password);
            await Promise.all([
                page.waitForEvent('load'),
                await loginPage.clickLoginButton()
            ]);
            const homePage = new HomePage(page);
            await homePage.verifyHomePageTitleVisibility();
            logger.info("Test Completed Successfully");
        } catch (err) {
            logger.error(`Login test failed: ${err.message}`);
            throw err
        }

        // await loginPage.fillUsername(testConfig.username);
        // await loginPage.fillPassword(testConfig.password);




    });
});
