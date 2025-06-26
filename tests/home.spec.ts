import { test, expect } from "@playwright/test";
import e2e_solutions from "../src/fixtures/e2e_solutions.js";
import { HomePage } from "../src/pages/home.page.ts";

test("Test 1 - Verify End-to-end solutions for financial services", async ({ page }) => {
  await page.goto("/");
  const homePage = new HomePage(page);
  await homePage.assertSolutionCards(e2e_solutions);
});
