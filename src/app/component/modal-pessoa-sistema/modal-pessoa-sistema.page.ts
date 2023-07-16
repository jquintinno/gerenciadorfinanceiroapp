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

  public isHabilitarFormulario: boolean = false;

  public nomePessoa: any;

  public codigoTipoPessoa: any;

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
    debugger
    this.modalController.dismiss(pessoaModel);
  }

  public async find(event: any) {
    return await this.pessoaService.find(event.target.value).subscribe( (response) => {
      this.pessoaModelList = response;
    });
  }

  public habilitarFormularioPessoa() {
    this.isHabilitarFormulario = true;
  }

  public cadastrarPessoa() {
    const pessoaModel = {
      nome: this.nomePessoa,
      tipoPessoaModal: {
        codigo: this.codigoTipoPessoa
      }
    }
    this.modalController.dismiss(pessoaModel);
  }

}
