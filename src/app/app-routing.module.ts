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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
