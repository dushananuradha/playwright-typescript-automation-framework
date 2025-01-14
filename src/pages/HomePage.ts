import { Page, expect } from "@playwright/test";


export default class HomePage {
    private readonly titleHomePage: any;
     ;

    constructor(private page: Page) {
        this.titleHomePage = this.page.locator("//h1/span[text()='Home']");
    }

    async expectHomeTitleToBeVisible() {
        await expect(this.titleHomePage).toBeVisible({ timeout: 10000 });
    }
}