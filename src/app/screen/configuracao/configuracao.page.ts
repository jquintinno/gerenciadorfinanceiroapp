import { Component, OnInit } from '@angular/core';
import { RedirecionamentoTelaService } from 'src/app/service/redirecionamento-tela.service';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {

  constructor(
    private redirecionamentoService: RedirecionamentoTelaService
  ) { }

  ngOnInit() { }

  public async redirecionarTelaMonitoramento() {
    return await this.redirecionamentoService.redirecionarTelaMonitoramento();
  }

}
