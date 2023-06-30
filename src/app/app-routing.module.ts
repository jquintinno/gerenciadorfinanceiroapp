import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'monitoramento',
    pathMatch: 'full'
  },
  {
    path: 'monitoramento',
    loadChildren: () => import('./screen/monitoramento/monitoramento.module').then( m => m.MonitoramentoPageModule)
  },
  {
    path: 'configuracao',
    loadChildren: () => import('./screen/configuracao/configuracao.module').then( m => m.ConfiguracaoPageModule)
  },
  {
    path: 'notificacao',
    loadChildren: () => import('./screen/notificacao/notificacao.module').then( m => m.NotificacaoPageModule)
  },
  {
    path: 'modal-receita',
    loadChildren: () => import('./component/modal-receita/modal-receita.module').then( m => m.ModalReceitaPageModule)
  },
  {
    path: 'modal-despesa',
    loadChildren: () => import('./component/modal-despesa/modal-despesa.module').then( m => m.ModalDespesaPageModule)
  },
  {
    path: 'modal-transferencia',
    loadChildren: () => import('./component/modal-transferencia/modal-transferencia.module').then( m => m.ModalTransferenciaPageModule)
  },
  {
    path: 'modal-pessoa-sistema',
    loadChildren: () => import('./component/modal-pessoa-sistema/modal-pessoa-sistema.module').then( m => m.ModalPessoaSistemaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
