import { Page } from "@playwright/test";
import TextAssert from "../common_assertions/TextAssert";

export default class HomePage {
    private readonly titleHomePage: any;
    private textAssert: TextAssert;

    constructor(private page: Page) {
        this.textAssert = new TextAssert();
        this.titleHomePage = this.page.locator("//h1/span[text()='Home']");
    }

    async verifyHomePageTitleVisibility() {
        await this.textAssert.expectTextToBeVisible(this.titleHomePage);
    }

}