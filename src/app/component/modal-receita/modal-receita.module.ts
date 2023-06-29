import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalReceitaPageRoutingModule } from './modal-receita-routing.module';

import { ModalReceitaPage } from './modal-receita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalReceitaPageRoutingModule
  ],
  declarations: [ModalReceitaPage]
})
export class ModalReceitaPageModule {}
