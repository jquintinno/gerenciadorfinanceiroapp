import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalDespesaPage } from './modal-despesa.page';

const routes: Routes = [
  {
    path: '',
    component: ModalDespesaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalDespesaPageRoutingModule {}
