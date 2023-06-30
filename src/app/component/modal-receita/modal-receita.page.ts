import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { RedirecionamentoTelaService } from 'src/app/service/redirecionamento-tela.service';

@Component({
  selector: 'app-modal-receita',
  templateUrl: './modal-receita.page.html',
  styleUrls: ['./modal-receita.page.scss'],
})
export class ModalReceitaPage implements OnInit {

  @ViewChild("autofocus", { static: false })
  public ionInput: IonInput;

  constructor(
    private redirecionamentoTelaService: RedirecionamentoTelaService
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    setTimeout(() => {
      this.ionInput.setFocus();
    }, 1300);
  }

  public cadastrarReceita() {
    this.redirecionamentoTelaService.fecharModalController();
  }

}
