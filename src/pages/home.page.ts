import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export interface SolutionCard {
  header: string;
  body: string;
  link: string;
}

export class HomePage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async assertSolutionCards(solutions: SolutionCard[]) {
    for (const solution of solutions) {
      const solutionCard = this.page.locator(`[href="${solution.link}"]`).first();

      await expect.soft(solutionCard).toBeVisible();
      await expect.soft(solutionCard.locator('h3')).toContainText(solution.header);
      await expect.soft(solutionCard).toContainText(solution.body);
    }
  }

  async clickGetInTouch(indexButton: number = 0) {
    await this.page.getByText('Get in touch').nth(indexButton).click();
  }
}
