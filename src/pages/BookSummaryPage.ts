import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class BookSummaryPage extends BasePage {
  readonly bookTitle: Locator;
  readonly bookAuthor: Locator;
  readonly bookPrice: Locator;
  readonly bookCategory: Locator;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    super(page);
    this.bookTitle = page.getByRole('cell', { name: '1984' });
    this.bookAuthor = page.getByRole('cell', { name: 'George Orwell' });
    this.bookPrice = page.getByRole('cell', { name: '₹' });
    this.bookCategory = page.getByRole('cell', { name: 'Dystopian' });
    this.addToCartButton = page.getByRole('button', { name: 'Add to Cart' });
  }
}