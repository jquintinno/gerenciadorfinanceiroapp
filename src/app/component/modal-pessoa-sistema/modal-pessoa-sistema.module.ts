import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalPessoaSistemaPageRoutingModule } from './modal-pessoa-sistema-routing.module';
import { ModalPessoaSistemaPage } from './modal-pessoa-sistema.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPessoaSistemaPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ModalPessoaSistemaPage]
})
export class ModalPessoaSistemaPageModule {}
