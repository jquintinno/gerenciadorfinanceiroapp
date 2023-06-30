import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPessoaSistemaPage } from './modal-pessoa-sistema.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPessoaSistemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPessoaSistemaPageRoutingModule {}
