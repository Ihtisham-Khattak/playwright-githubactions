import { test, expect } from "@playwright/test";

test("Login Page Credentials", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  const inputEmail = await page.getByPlaceholder("Username");
  await inputEmail.fill("standard_user");

  const inputPassword = await page.getByPlaceholder("Password")
  await inputPassword.fill("secret_sauce");

  await page.getByRole("button", {name: "Login"}).click()
});

test("Items in the list", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveTitle(/Swag Labs/);

  const inputEmail = await page.getByPlaceholder("Username");
  const inputPassword = await page.getByPlaceholder("Password");

  await inputEmail.fill("standard_user");
  await inputPassword.fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  const addToCartButtons: any = await page
    .getByRole("button", { name: "Add to cart" })
    .all();
  for (const button of addToCartButtons) {
    await button.click();
  }
});
