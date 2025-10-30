import { test as base } from "@playwright/test";
import { aiFixture, type AiFixture } from "@zerostep/playwright";

// Extend Playwright's test with ZeroStep's AI fixture
export const test = base.extend<AiFixture>({
  ...aiFixture(base),
});

// Export 'expect' so you can keep using it
export { expect } from "@playwright/test";
