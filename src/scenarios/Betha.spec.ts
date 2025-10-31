import { join } from "path";
import { TheConfig } from "sicolo";
import BethaPage from "../support/pages/BethaPage";
import { test, expect } from "../support/fixtures/zerostep.fixture";
import { wait } from "../support/fixtures/time.fixture";
//top
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

  test("Preencher formulário de cadastro e reportar erro no final caso haja", async ({ ai }) => {
    await bethaPage.preencherFormulario();
    // await wait(1000);
    await ai("click to report if a error apears");
  });

  test("Preencher formulário com campo de E-mail inválido", async () => {
    await bethaPage.preencherFormularioInvalidoEmail();
    // await wait(8000);
  });

  test("Preencher formulário com campo de senha inválido", async () => {
    await bethaPage.preencherFormularioInvalidoSenha();
    // await wait(8000);
  });


});
