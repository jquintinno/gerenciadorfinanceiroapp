import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PessoaService } from 'src/app/service/pessoa.service';

@Component({
  selector: 'app-modal-pessoa-sistema',
  templateUrl: './modal-pessoa-sistema.page.html',
  styleUrls: ['./modal-pessoa-sistema.page.scss'],
})
export class ModalPessoaSistemaPage implements OnInit {

  public pessoaModelList: any[] = [];

  constructor(
    private pessoaService: PessoaService,
    private modalController: ModalController
  ) { }

  ngOnInit() { 
    this.findAll();
  }

  public async findAll() {
    this.pessoaService.findAll().subscribe( ( response ) => {
      this.pessoaModelList = response;     
    });
  }

  public async selecionarPessoa(pessoaModel: any) {
    this.modalController.dismiss(pessoaModel);
  }

}
