import { Component, OnInit } from '@angular/core';
import { RedirecionamentoService } from 'src/app/service/redirecionamento.service';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {

  constructor(
    private redirecionamentoService: RedirecionamentoService
  ) { }

  ngOnInit() { }

  public async redirecionarTelaMonitoramento() {
    return await this.redirecionamentoService.redirecionarTelaMonitoramento();
  }

}
