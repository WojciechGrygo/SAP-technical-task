import { test } from "@playwright/test";
import { ContactPage } from "../src/pages/contact.page.ts";
import { faker } from "@faker-js/faker";

let contactPage: ContactPage;

test("Test 3.2 - Email field validation", async ({ page }) => {
    contactPage = new ContactPage(page);
    const invalidEmail = faker.internet.email().replace('@', '');

    await page.goto("/contact-sales/");
    await contactPage.enterEmail(invalidEmail);
    await contactPage.assertEmailError();
});
