import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalTransferenciaPageRoutingModule } from './modal-transferencia-routing.module';

import { ModalTransferenciaPage } from './modal-transferencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalTransferenciaPageRoutingModule
  ],
  declarations: [ModalTransferenciaPage]
})
export class ModalTransferenciaPageModule {}
