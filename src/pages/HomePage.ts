import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly loginButton: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly cartIcon: Locator;
  readonly bookCards: Locator;
  readonly addToCartButtons: Locator;
  readonly categoryFilters: Locator;
  readonly logo: Locator;

  constructor(page: Page) {
    super(page);
    
    this.loginButton = page.locator('button:has-text("Login")');
    this.searchInput = page.getByRole('combobox', { name: 'search' });
    this.searchButton = page.locator('button:has-text("Search")');
    this.cartIcon = page.locator('mat-icon:has-text("shopping_cart")');
    this.bookCards = page.locator('.card');
    this.addToCartButtons = page.locator('button:has-text("Add to Cart")');
    this.categoryFilters = page.locator('mat-card');
    this.logo = page.locator('a[routerlink="/"]');

  }

  async goto() {
    await this.navigate('/');
    await this.waitForPageLoad();
  }

  async clickAtBookCard(bookName: string) {
    return this.page.getByRole('link', { name: bookName }).click();
  }

  async clickLogin() {
    await this.clickElement(this.loginButton);
  }

  async getBookCount(): Promise<number> {
    await this.page.waitForTimeout(2000);
    const cards = this.page.locator('mat-card:has-text("Add to Cart")');
    return await cards.count();
  }

  async addFirstBookToCart() {
    await this.clickElement(this.addToCartButtons.first());
    await this.page.waitForTimeout(500);
  }

  async openCart() {
    await this.clickElement(this.cartIcon);
    await this.waitForPageLoad();
  }

  async selectCategory(categoryName: string) {
    const categoryButton = this.page.locator(`button:has-text("${categoryName}")`);
    await this.clickElement(categoryButton);
    await this.waitForPageLoad();
  }
}

