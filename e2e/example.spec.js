import { test, expect } from "@playwright/test";
import { describe } from "node:test";

const url = "http://localhost:5173";

test("has title", async ({ page }) => {
  await page.goto(url);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/장바구니 애플리케이션/);
});

describe("e2e test", async () => {
  test("create fruit", async ({ page }) => {
    await page.goto("http://localhost:5173/");
    await page.getByRole("button", { name: "🍏 과일 추가" }).click();
    await page.getByTestId("createNameInput").click();
    await page.getByTestId("createNameInput").fill("testFruit");
    await page.getByTestId("createNameInput").press("Tab");
    await page.getByTestId("createPriceInput").press("ArrowUp");
    await page.getByTestId("createPriceInput").press("ArrowUp");
    await page.getByTestId("createPriceInput").press("ArrowUp");
    await page.getByTestId("createPriceInput").press("ArrowUp");
    await page.getByTestId("createPriceInput").press("ArrowUp");
    await page.getByTestId("createPriceInput").press("ArrowUp");
    await page.getByTestId("createPriceInput").press("ArrowUp");
    await page.getByTestId("createPriceInput").press("ArrowUp");
    await page.getByTestId("createPriceInput").press("ArrowUp");
    await page.getByTestId("createPriceInput").press("ArrowUp");
    await page.getByTestId("createPriceInput").press("ArrowUp");
    await page.getByTestId("createPriceInput").press("ArrowUp");
    await page.getByTestId("createPriceInput").press("ArrowUp");
    await page.getByTestId("createPriceInput").press("ArrowUp");
    await page.getByTestId("createPriceInput").press("ArrowUp");
    await page.getByTestId("createPriceInput").press("Tab");
    await page.getByTestId("createQuantityInput").press("ArrowUp");
    await page.getByTestId("createQuantityInput").press("ArrowUp");
    await page
      .getByRole("button", { name: "🍎 과일 정보 작성 완료 후 클릭" })
      .click();
    await expect(page.locator("form")).toContainText("testFruit");
    await expect(
      page
        .locator("div")
        .filter({ hasText: /^test15000📝🗑️$/ })
        .getByRole("input")
        .first()
        .toHaveValue("2")
    );
    await expect(page.locator("form")).toContainText("15000");
  });
});
