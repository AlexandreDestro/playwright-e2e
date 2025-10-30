import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import BethaElements from '../elements/BethaElements';
import BasePage from './BasePage';
//zerostep
import { test as base } from '@playwright/test';
import { aiFixture, type AiFixture } from '@zerostep/playwright';


export default class CadastroPage extends BasePage {
  readonly bethaElements: BethaElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.bethaElements = new BethaElements(page);
  }

  async preencherFormulario(): Promise<void> {
    await this.bethaElements.getBotaoCriarconta().click();
    await this.bethaElements.getCampoNomeUser().fill(faker.person.firstName() + faker.person.firstName());
    await this.bethaElements.getCampoNome().fill(faker.person.firstName() + faker.person.firstName());
    // await this.bethaElements.getCampoCpf().fill('33223745050');aa
    await this.bethaElements.getCampoEmail().fill(faker.internet.email());
    const senha = faker.internet.password();
    await this.bethaElements.getCampoSenha().fill(senha);
    await this.bethaElements.getCampoSenhaConfirmar().fill(senha);
    await this.bethaElements.getBotaoCriarcontaBtn().click();
    await this.bethaElements.getBotaoJaValidei().click();

    // await this.bethaElements.getCampoWhatsapp().fill('48 999998888');
    // await this.bethaElements.getCampoCep().fill('88817070');
    // await this.bethaElements.getBotaoBuscarCep().click();
    // await this.bethaElements.getCampoNumero().fill('10');
    // await this.bethaElements.getCampoComplemento().fill(faker.word.words());
    // await this.bethaElements.getCampoMetodoEntrega().click();
    // await this.bethaElements
    //   .getCampoAnexo()
    //   .setInputFiles('src/support/fixtures/cnh_testes.jpg');
    // await this.bethaElements.getBotaoCriarconta().click();
  }

  // async preencherFormularioInvalido(): Promise<void> {
  //   await this.bethaElements.getBotaoNovoCadastro().click();
  //   await this.bethaElements.getCampoNome().fill(faker.person.firstName());
  //   await this.bethaElements.getCampoCpf().fill('33223745050');
  //   await this.bethaElements.getCampoEmail().fill('a@b.com.br');
  //   await this.bethaElements.getCampoWhatsapp().fill('48 999998888');
  //   await this.bethaElements.getCampoCep().fill('88817070');
  //   await this.bethaElements.getBotaoBuscarCep().click();
  //   await this.bethaElements.getCampoNumero().fill('10');
  //   await this.bethaElements.getCampoComplemento().fill(faker.word.words());
  //   await this.bethaElements.getCampoMetodoEntrega().click();
  //   await this.bethaElements.getBotaoCadastrar().click();
  // }

  // async validarCadastro(): Promise<void> {
  //   await expect(this.bethaElements.getMessageOK()).toBeVisible();
  // }

  // async validarCNH(): Promise<void> {
  //   await expect(this.bethaElements.getValidarCNH()).toBeVisible();
  // }

  // async validarCarrinho(): Promise<void> {
  //   await this.page.locator('[data-test="username"]').click();
  //   await this.page.locator('[data-test="username"]').fill('standard_user');
  //   await this.page.locator('[data-test="password"]').click();
  //   await this.page.locator('[data-test="password"]').fill('secret_sauce');
  //   await this.page.locator('[data-test="login-button"]').click();
  //   await this.page.locator('#shopping_cart_container a').click();
  //   await this.page.locator('[data-test="checkout"]').click();
  // }
}
