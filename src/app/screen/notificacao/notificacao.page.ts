import { Component, OnInit } from '@angular/core';
import { RedirecionamentoTelaService } from 'src/app/service/redirecionamento-tela.service';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.page.html',
  styleUrls: ['./notificacao.page.scss'],
})
export class NotificacaoPage implements OnInit {

  constructor(
    private redirecionamentoService: RedirecionamentoTelaService
  ) { }

  ngOnInit() { }

  public async redirecionarTelaMonitoramento() {
    return this.redirecionamentoService.redirecionarTelaMonitoramento();
  }

}
