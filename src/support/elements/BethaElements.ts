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


  

  getCampoCpf(): Locator {
    return this.page.locator('input[name="cpf"]');
  }

  getCampoEmail(): Locator {
    return this.page.locator('input[name="email"]');
  }

  getCampoWhatsapp(): Locator {
    return this.page.locator('input[name="whatsapp"]');
  }

  getCampoCep(): Locator {
    return this.page.locator('input[name="postalcode"]');
  }

  getBotaoBuscarCep(): Locator {
    return this.page.locator('text=Buscar CEP');
  }

  getCampoNumero(): Locator {
    return this.page.locator('input[name="address-number"]');
  }

  getCampoComplemento(): Locator {
    return this.page.locator('input[name="address-details"]');
  }

  getCampoMetodoEntrega(): Locator {
    return this.page.locator('img[alt="Van/Carro"]');
  }

  getCampoAnexo(): Locator {
    return this.page.locator('input[type="file"]');
  }

}
