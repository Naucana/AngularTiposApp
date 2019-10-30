import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosGithubRoutingModule } from './usuarios-github-routing.module';
import { UsuariosGithubComponent } from './usuarios-github.component';

@NgModule({
  declarations: [UsuariosGithubComponent],
  imports: [
    CommonModule,
    UsuariosGithubRoutingModule
  ]
})
export class UsuariosGithubModule { }
