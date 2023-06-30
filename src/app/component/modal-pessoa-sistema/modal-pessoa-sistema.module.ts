import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPessoaSistemaPageRoutingModule } from './modal-pessoa-sistema-routing.module';

import { ModalPessoaSistemaPage } from './modal-pessoa-sistema.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPessoaSistemaPageRoutingModule
  ],
  declarations: [ModalPessoaSistemaPage]
})
export class ModalPessoaSistemaPageModule {}
