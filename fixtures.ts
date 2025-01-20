import { test as base } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import LoginPage from "./pw-ts-automation-submodule-pages/pages/LoginPage";

type TestConfig = {
  baseURL: string;
  users: {
    [key: string]: {
      username: string;
      password: string;
    }
  }
};

export const test = base.extend<{ testConfig: TestConfig, login: (username: string, password: string) => Promise<void>; }>({
  testConfig: async ({ }, use) => {
    const configPath = path.join(__dirname,'testConfig.json');
    const configFile = fs.readFileSync(configPath, 'utf-8');
    const config: TestConfig = JSON.parse(configFile);
    await use(config);
  },

  login: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    const login = async (username: string, password: string) => {
      await loginPage.inputUsername.fill(username);
      await loginPage.inputPassword.fill(password);
      await loginPage.btnLogin.click();
      await page.waitForTimeout(10000);
    };

    await use(login);
  },
});

export { expect } from '@playwright/test';
