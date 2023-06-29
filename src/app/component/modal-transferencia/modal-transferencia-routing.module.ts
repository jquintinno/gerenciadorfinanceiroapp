import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalTransferenciaPage } from './modal-transferencia.page';

const routes: Routes = [
  {
    path: '',
    component: ModalTransferenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalTransferenciaPageRoutingModule {}
