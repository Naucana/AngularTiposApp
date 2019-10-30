import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosGithubComponent } from './usuarios-github.component';

const routes: Routes = [
  {path: '', component: UsuariosGithubComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosGithubRoutingModule { }
