import { Component, OnInit } from '@angular/core';
import { RedirecionamentoService } from 'src/app/service/redirecionamento.service';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.page.html',
  styleUrls: ['./notificacao.page.scss'],
})
export class NotificacaoPage implements OnInit {

  constructor(
    private redirecionamentoService: RedirecionamentoService
  ) { }

  ngOnInit() { }

  public async redirecionarTelaMonitoramento() {
    return this.redirecionamentoService.redirecionarTelaMonitoramento();
  }

}
