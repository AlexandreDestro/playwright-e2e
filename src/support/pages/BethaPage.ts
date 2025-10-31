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
    console.log("Formulário preenchido e procedido ✅");

  }

  async preencherFormularioInvalidoEmail(): Promise<void> {
    await this.bethaElements.getBotaoCriarconta().click();
    await this.bethaElements.getCampoNomeUser().fill(faker.person.firstName() + faker.person.firstName());
    await this.bethaElements.getCampoNome().fill(faker.person.firstName() + faker.person.firstName());

    await this.bethaElements.getCampoEmail().fill(faker.person.firstName());
    const senha = faker.internet.password();
    await this.bethaElements.getCampoSenha().fill(senha);
    await this.bethaElements.getCampoSenhaConfirmar().fill(senha);
    await this.bethaElements.getBotaoCriarcontaBtn().click();

    await this.bethaElements.getBotaoCriarcontaBtn().click();
    await this.bethaElements.getCampoSenha().fill(senha);
    await this.bethaElements.getCampoSenhaConfirmar().fill(senha);
    await this.bethaElements.getBotaoCriarcontaBtn().click();
    await expect(this.bethaElements.getEmailErro()).toBeVisible();
    console.log("menssagem de erro de email inválido encontrada ✅");
  }

  async preencherFormularioInvalidoSenha(): Promise<void> {
    await this.bethaElements.getBotaoCriarconta().click();
    await this.bethaElements.getCampoNomeUser().fill(faker.person.firstName() + faker.person.firstName());
    await this.bethaElements.getCampoNome().fill(faker.person.firstName() + faker.person.firstName());
    // await this.bethaElements.getCampoCpf().fill('33223745050');aa
    await this.bethaElements.getCampoEmail().fill(faker.internet.email());

    await this.bethaElements.getBotaoCriarcontaBtn().click();
    await expect(this.bethaElements.getSenhaErro()).toBeVisible();

    console.log("menssagem de erro de senha inválido encontrada ✅");

  }

}
