import {expect} from '@playwright/test';

export default class TextAssert{

    async expectTextToBeVisible(locator: any) {
        await expect(locator).toBeVisible({ timeout: 10000 });
    }
}