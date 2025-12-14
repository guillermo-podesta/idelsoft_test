import { Page, Locator } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  async waitForElement(locator: Locator, timeout: number = 5000) {
    await locator.waitFor({ state: 'visible', timeout });
  }

  async clickElement(locator: Locator) {
    await this.waitForElement(locator);
    await locator.click();
  }

  async isElementVisible(locator: Locator): Promise<boolean> {
    try {
      await locator.waitFor({ state: 'visible', timeout: 2000 });
      return true;
    } catch {
      return false;
    }
  }
}

