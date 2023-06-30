import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RedirecionamentoTelaService {

  constructor(
    private router: Router,
    private modalController: ModalController
  ) { }

  public async redirecionarTelaMonitoramento() {
    return this.router.navigateByUrl("monitoramento");
  }

  public async redirecionarTelaConfiguracao() {
    this.router.navigateByUrl("configuracao");
  }

  public async redirecionarTelaNotificacao() {
    this.router.navigateByUrl("notificacao");
  }

  public async fecharModalController() {
    return await this.modalController.dismiss();
  }

  public async fecharModalControllerParameter(parameter: any) {
    return await this.modalController.dismiss(parameter);
  }

}
