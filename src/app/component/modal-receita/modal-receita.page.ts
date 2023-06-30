import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonInput, ModalController } from '@ionic/angular';
import { RedirecionamentoTelaService } from 'src/app/service/redirecionamento-tela.service';
import { ModalPessoaSistemaPage } from '../modal-pessoa-sistema/modal-pessoa-sistema.page';

@Component({
  selector: 'app-modal-receita',
  templateUrl: './modal-receita.page.html',
  styleUrls: ['./modal-receita.page.scss'],
})
export class ModalReceitaPage implements OnInit {

  @ViewChild("autofocus", { static: false })
  public ionInput: IonInput;

  public formGroup = new FormGroup({
    favorecido: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(80)]),
    valor: new FormControl("", [Validators.required]),
    observacao: new FormControl("", [])
  });

  constructor(
    private redirecionamentoTelaService: RedirecionamentoTelaService,
    private modalController: ModalController
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    setTimeout(() => {
      this.ionInput.setFocus();
    }, 1300);
  }

  public cadastrarReceita() {
    this.redirecionamentoTelaService.fecharModalController();
    console.log(this.formGroup.value);    
  }

  public async redirecionarModalPessoaSistema() {
    const modal = await this.modalController.create({
      component: ModalPessoaSistemaPage,
      breakpoints: [0, 0.25, 0.50, 0.75, 0.85, 0.90, 1],
      initialBreakpoint: 0.85
    });
    return await modal.present();
  }

}
