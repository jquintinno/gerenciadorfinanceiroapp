import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalReceitaPage } from './modal-receita.page';

const routes: Routes = [
  {
    path: '',
    component: ModalReceitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalReceitaPageRoutingModule {}
