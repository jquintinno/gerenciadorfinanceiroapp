import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalDespesaPage } from 'src/app/component/modal-despesa/modal-despesa.page';
import { ModalReceitaPage } from 'src/app/component/modal-receita/modal-receita.page';
import { ModalTransferenciaPage } from 'src/app/component/modal-transferencia/modal-transferencia.page';

@Component({
  selector: 'app-monitoramento',
  templateUrl: './monitoramento.page.html',
  styleUrls: ['./monitoramento.page.scss'],
})
export class MonitoramentoPage implements OnInit {

  public saldoTotal: number = 0;

  constructor(
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() { }

  public async redirecionarTelaConfiguracao() {
    this.router.navigateByUrl("configuracao");
  }

  public async redirecionarTelaNotificacao() {
    this.router.navigateByUrl("notificacao");
  }

  public async redirecionarModalReceita() {
    const modal = await this.modalController.create({
      component: ModalReceitaPage,
      breakpoints: [0, 0.25, 0.50, 0.75, 0.85, 0.90, 1],
      initialBreakpoint: 0.85
    });
    modal.onDidDismiss().then( (parameter) => {
      if (parameter.role !== 'backdrop') {
        this.saldoTotal += Number(parameter.data);
      } else {
        this.saldoTotal += Number(0);
      }
    });
    return await modal.present();
  }

  public async redirecionarModalDespesa() {
    const modal = await this.modalController.create({
      component: ModalDespesaPage,
      breakpoints: [0, 0.25, 0.50, 0.75, 0.85, 0.90, 1],
      initialBreakpoint: 0.85
    });
    return await modal.present();
  }

  public async redirecionarModalTransferencia() {
    const modal = await this.modalController.create({
      component: ModalTransferenciaPage,
      breakpoints: [0, 0.25, 0.50, 0.75, 0.85, 0.90, 1],
      initialBreakpoint: 0.85
    });
    return await modal.present();
  }

}
