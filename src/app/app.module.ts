import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppModuleFormularios } from "./formularios/app.module";
import { PaisesModule } from './paises/paises.module';
import { HttpClientModule } from '@angular/common/http';
import { PromesasModule } from './promesas/promesas.module';
import { ObservablesModule } from './observables/observables.module';
import { UsuariosGithubModule } from './usuarios-github/usuarios-github.module';

@NgModule({
  declarations: [
    AppComponent   
  ],
  imports: [
    BrowserModule,
    AppModuleFormularios,
    AppRoutingModule,
    PaisesModule,
    HttpClientModule,
    PromesasModule,
    ObservablesModule,
    UsuariosGithubModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
