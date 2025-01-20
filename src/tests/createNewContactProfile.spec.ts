import { test } from "../../fixtures";
import HomePage from "../../pw-ts-automation-submodule-pages/pages/HomePage";
import logger from "../logging/LoggerUtil";

test.beforeEach(async ({ page, testConfig, login }) => {
    const user = testConfig.users.standard; 
    await page.goto(testConfig.baseURL);
    await login(user.username, user.password);
    logger.info("Logged in successfully");
});

test.describe("Verify creating new contact profile", () => {
    test("Navigate to Service App Page", async ({ page }) => {
        const homePage = new HomePage(page);
        // homePage.clickAppLaunchIcon();
        // logger.info("Clicked on App Launch Icon");
        // homePage.clickServiceApp();
        // homePage.verifyServicePageTitleVisibility();
        // logger.info("Test Completed");
    });
});
