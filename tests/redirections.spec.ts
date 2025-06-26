import { test } from "@playwright/test";
import { HomePage } from "../src/pages/home.page.ts";
import { Assertions } from "../src/helpers/assertions.ts";
import pageData from "../src/fixtures/pageData.json";

let homePage: HomePage;
let assertions: Assertions;

test.beforeEach("Navigate to home page", async ({ page }) => {
  await page.goto("/");
  homePage = new HomePage(page);
  assertions = new Assertions(page);
});

test("Test 2 - ESG KPI Engine redirection", async () => {
  const expectedPageData = pageData.esgKpiEnginePage;

  await homePage.navigateTo({ mainCategory: "Products", category: "Finance & ESG", subcategory: "ESG KPI Engine" });
  await assertions.assertPage(expectedPageData.headerText, expectedPageData.url, expectedPageData.title);
});

test("Test 3.1 - Contact form redirection by clicking first 'Get in touch' button", async () => {
  const expectedPageData = pageData.contactPage;

  await homePage.clickGetInTouch();
  await assertions.assertPage(expectedPageData.headerText, expectedPageData.url, expectedPageData.title);
});

