import { expect, Page } from "@playwright/test";

export class Assertions {
  constructor(private page: Page) { }
  async assertPageHeader(headerText: string) {
    await expect.soft(this.page.locator("h1")).toContainText(headerText);
  }

  async assertPageUrlContains(expectedUrl: string) {
    const pageUrl = this.page.url();
    expect.soft(pageUrl).toContain(expectedUrl);
  }

  async assertPageTitle(expectedTitle: string) {
    const pageTitle = await this.page.title();
    expect.soft(pageTitle).toBe(expectedTitle);
  }

  async assertPage(headerText: string, expectedUrl: string, expectedTitle: string) {
    await this.assertPageHeader(headerText);
    await this.assertPageUrlContains(expectedUrl);
    await this.assertPageTitle(expectedTitle);
  }
}