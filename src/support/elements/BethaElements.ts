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

//olha ai
  getEmailErro(): Locator {
    return this.page.locator('text=O e-mail informado não é válido.');
  }
  getSenhaErro(): Locator {
    return this.page.locator('text=O campo "Senha" é obrigatório.');
  }

  getNaoRecebiBotao(): Locator {
    return this.page.locator('text=Ainda não recebi a mensagem.');
  }
  

  getEnviarBotao(): Locator {
    return this.page.locator('span.text.s16', { hasText: 'Enviar' });


  }
}
