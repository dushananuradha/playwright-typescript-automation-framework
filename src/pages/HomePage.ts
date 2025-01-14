import { Page, expect } from "@playwright/test";
import TextAssert from "../common_assertions/TextAssert";

export default class HomePage extends TextAssert {
    private readonly titleHomePage: any;

    constructor(private page: Page) {
        super();
        this.titleHomePage = this.page.locator("//h1/span[text()='Home']");
    }

    async verifyHomePageTitleVisibility() {
        await this.expectTextToBeVisible(this.titleHomePage);
    }

   
}