import { expect, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class ContactPage extends BasePage {
  emailInput = this.page.getByPlaceholder('Business e-mail*');

  constructor(page: Page) {
    super(page);
  }

  async assertEmailError() {
    await this.emailInput.blur();
    await expect(this.page.locator('.hs_email').locator('.hs-error-msg')).toHaveText('Email must be formatted correctly.')
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }
}