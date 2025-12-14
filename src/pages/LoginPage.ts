import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginSubmitButton: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginSubmitButton =  page.locator('mat-card-actions').getByRole('button', { name: 'Login' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async goto() {
    await this.navigate('/login');
    await this.waitForPageLoad();
  }

  async clickAtLoginButton() {
    await this.clickElement(this.loginButton);
  }

  async clickAtLoginSubmitButton() {
    await this.clickElement(this.loginSubmitButton);
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginSubmitButton.click();
  }

  async isLoggedIn(): Promise<boolean> {
    return this.page.url().includes('/home');
  }
}