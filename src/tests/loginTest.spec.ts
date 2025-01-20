import {test} from "../../fixtures";
import LoginPage from "../../pw-ts-automation-submodule-pages/pages/LoginPage";
import logger from "../logging/LoggerUtil";


test.beforeEach(async ({ page, testConfig }) => {
    await page.goto(testConfig.baseURL);
});


test.describe("Test login", () => {
    test("Verify login", async ({ page, testConfig }) => {
        const loginPage = new LoginPage(page);
        const user = testConfig.users.standard;

        await loginPage.fillUsername(user.username);
        await loginPage.fillPassword(user.password);

        const homePage = await loginPage.clickLoginButton();
        await homePage.verifyHomePageTitleVisibility();
        logger.info("Test Completed");

    });
});
