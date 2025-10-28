import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import CadastroPage from '../support/pages/BethaPage';

test.describe('Cadastro de usuário', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let cadastroPage: CadastroPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.betha_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    cadastroPage = new CadastroPage(page);
    await page.goto(BASE_URL);
  });

  test('Preencher formulário de cadastro', async () => {
    await cadastroPage.preencherFormulario();
    // await cadastroPage.validarCadastro();
  });

  test('Preencher formulário de cadastro com dados inválidos', async () => {
    // await cadastroPage.preencherFormularioInvalido();
    // await cadastroPage.validarCNH();
  });
});
