import { Page } from "@playwright/test";

interface navigateToParams {
    mainCategory: string;
    category?: string;
    subcategory: string;
}

export class BasePage {
    constructor(protected page: Page) { }

    async navigateTo(categories: navigateToParams) {
        await this.page.getByRole("button", { name: categories.mainCategory }).click();
        if (categories.category) await this.page.locator("button").filter({ hasText: new RegExp(`^${categories.category}$`) }).click();
        await this.page.getByRole("link", { name: categories.subcategory }).first().click();
    }
}