import { Component, OnInit } from '@angular/core';
import { RedirecionamentoTelaService } from 'src/app/service/redirecionamento-tela.service';

@Component({
  selector: 'app-modal-receita',
  templateUrl: './modal-receita.page.html',
  styleUrls: ['./modal-receita.page.scss'],
})
export class ModalReceitaPage implements OnInit {

  constructor(
    private redirecionamentoTelaService: RedirecionamentoTelaService
  ) { }

  ngOnInit() { }

  public cadastrarReceita() {
    this.redirecionamentoTelaService.fecharModalController();
  }

}
