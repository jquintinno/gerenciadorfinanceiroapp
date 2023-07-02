import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonInput, ModalController } from '@ionic/angular';
import { ContaBancariaService } from 'src/app/service/conta-bancaria.service';
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

  public contaBancariaModelList: any[] = [];

  public formGroup = new FormGroup({
    favorecido: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(80)]),
    valor: new FormControl("", [Validators.required]),
    observacao: new FormControl("", [])
  });

  constructor(
    private redirecionamentoTelaService: RedirecionamentoTelaService,
    private modalController: ModalController,
    private contaBancariaService: ContaBancariaService
  ) { }

  ngOnInit() { 
    this.recuperarContaBancaria();
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.ionInput.setFocus();
    }, 1300);
  }

  public cadastrarReceita() { 
    this.modalController.dismiss(this.formGroup.controls["valor"].value);
  }

  public cadastrarAnexo() {
    console.log("cadastrarAnexo...");
  }

  public async recuperarContaBancaria() {
    this.contaBancariaService.findAll().subscribe( (response) => {
      this.contaBancariaModelList = response;   
    });
  }

  public async redirecionarModalPessoaSistema() {
    const modal = await this.modalController.create({
      component: ModalPessoaSistemaPage,
      breakpoints: [0, 0.25, 0.50, 0.75, 0.85, 0.90, 1],
      initialBreakpoint: 0.85
    });
    modal.onDidDismiss().then( (parameter) => {
      this.formGroup.controls["favorecido"].setValue(parameter.data.nome);  
    });
    return await modal.present();
  }

}
