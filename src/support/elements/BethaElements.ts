import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class BethaElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }
//aqui
  getBotaoCriarconta(): Locator {
    return this.page.locator('text=Crie uma.');
  }
  getCampoNomeUser(): Locator {
    return this.page.locator('input[name="mainForm:nome"]');
  }
  getCampoNome(): Locator {
    return this.page.locator('input[name="mainForm:iUsuarios"]');
  }


  
  getCampoEmail(): Locator {
    return this.page.locator('input[name="mainForm:email"]');
  }


  getCampoSenha(): Locator {
    return this.page.locator('input[name="mainForm:senha"]');
  }


  getCampoSenhaConfirmar(): Locator {
    return this.page.locator('input[name="mainForm:passwordConfirmation"]');
  }


  getBotaoCriarcontaBtn(): Locator {
    return this.page.locator('text=Criar conta');
  }

  getBotaoJaValidei(): Locator {
    return this.page.locator('text=Ok, já validei');
  }
  
}
