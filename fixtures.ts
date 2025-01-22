import { test as base } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

type TestConfig = {
  baseURL: string;
};

export const test = base.extend<{ testConfig: TestConfig }>({
  testConfig: async ({}, use) => {
    const configPath = path.join(__dirname, "testConfig.json");
    const configFile = fs.readFileSync(configPath, "utf-8");
    const config: TestConfig = JSON.parse(configFile);
    await use(config);
  }
});
