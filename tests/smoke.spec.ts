import { test, expect } from "@playwright/test";

test("home loads", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("reduced motion disables hero animation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator('[data-system-map-hero="reduced"]')).toHaveCount(1);
});

test("services loads", async ({ page }) => {
  await page.goto("/services");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("work loads", async ({ page }) => {
  await page.goto("/work");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("a case study loads", async ({ page }) => {
  await page.goto("/work");

  // Prefer the first case-study link from the Work page to avoid hard-coding slugs.
  const firstCaseStudyLink = page.locator('a[href^="/case-studies/"]').first();
  await expect(firstCaseStudyLink).toBeVisible();
  await firstCaseStudyLink.click();

  await expect(page).toHaveURL(/\/case-studies\//);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("contact validates required fields", async ({ page, browserName }) => {
  // WebKit handles :invalid slightly differently; keep it to the highest-signal checks.
  test.skip(browserName === "webkit", "Form validity selectors are inconsistent in WebKit.");

  await page.goto("/contact");

  // Native required fields should show invalid state when empty.
  await page.getByRole("button", { name: /submit contact form/i }).click();
  await expect(page.locator("#name:invalid")).toHaveCount(1);
  await expect(page.locator("#email:invalid")).toHaveCount(1);
  await expect(page.locator("#systemInScope:invalid")).toHaveCount(1);

  // Primary constraint is a custom `ConstraintSet` control (hidden input) and is validated in JS.
  await page.fill("#name", "Test User");
  await page.fill("#email", "test@example.com");
  await page.fill("#systemInScope", "Test system");
  await page.getByRole("button", { name: /submit contact form/i }).click();
  await expect(page.getByText("Select a primary constraint before sending.")).toBeVisible();
});
