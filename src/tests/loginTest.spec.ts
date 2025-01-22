import { test } from "../../fixtures";
import LoginPage from "../../pw-ts-automation-submodule-pages/pages/LoginPage";
import logger from "../logging/LoggerUtil";
import { pwTestCredentials } from '../config/credentials';

test.beforeEach(async ({ page, testConfig }) => {
    await page.goto(testConfig.baseURL);
});

test.describe("Test login", () => {
    test("Verify login", async ({ page, testConfig }) => {
        const { username, password } = pwTestCredentials;
        const loginPage = new LoginPage(page);

        // await loginPage.fillUsername(testConfig.username);
        // await loginPage.fillPassword(testConfig.password);

        await loginPage.fillUsername(username);
        await loginPage.fillPassword(password);
        const homePage = await loginPage.clickLoginButton();
        await homePage.verifyHomePageTitleVisibility();
        logger.info("Test Completed");

    });
});
