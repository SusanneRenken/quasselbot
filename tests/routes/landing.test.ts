import { test, expect } from "@playwright/test";

test.describe("Landing page", () => {
  test("shows headline and CTA", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: /QuasselBot – der charmanteste KI-Chatbot/ })
    ).toBeVisible();
    await expect(page.getByRole("link", { name: /Losquasseln/ })).toBeVisible();
  });
});
