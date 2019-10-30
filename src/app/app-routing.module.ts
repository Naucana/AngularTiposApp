import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'formularios', loadChildren: () => import('./formularios/app.module').then(m => m.AppModuleFormularios)},
  {path: 'paises', loadChildren: () => import('./paises/paises.module').then(m => m.PaisesModule)},
  {path: 'promesas', loadChildren: () => import('./promesas/promesas.module').then(m => m.PromesasModule)},
  {path: 'observables', loadChildren: () => import('./observables/observables.module').then(m => m.ObservablesModule)},
  {path: 'usuariosGithub', loadChildren: () => import('./usuarios-github/usuarios-github.module').then(m => m.UsuariosGithubModule)},
  {path: '**', redirectTo: 'paises'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
