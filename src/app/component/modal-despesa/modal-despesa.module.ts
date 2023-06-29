import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalDespesaPageRoutingModule } from './modal-despesa-routing.module';

import { ModalDespesaPage } from './modal-despesa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalDespesaPageRoutingModule
  ],
  declarations: [ModalDespesaPage]
})
export class ModalDespesaPageModule {}
