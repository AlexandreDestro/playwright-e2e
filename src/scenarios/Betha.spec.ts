import { join } from "path";
import { TheConfig } from "sicolo";
import BethaPage from "../support/pages/BethaPage";
import { test, expect } from "../support/fixtures/zerostep.fixture";

test.describe("Cadastro de usuário", () => {
  const CONFIG = join(__dirname, "../support/fixtures/config.yml");
  let bethaPage: BethaPage;

  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath("application.betha_url")
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    bethaPage = new BethaPage(page);
    await page.goto(BASE_URL);
  });

  test("Preencher formulário de cadastro", async ({ ai }) => {
    await bethaPage.preencherFormulario();
    await ai("proceed in the page");
  });

});
