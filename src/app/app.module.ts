import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppModuleFormularios } from "./formularios/app.module";
import { PaisesModule } from './paises/paises.module';
import { HttpClientModule } from '@angular/common/http';
import { PromesasModule } from './promesas/promesas.module';
import { ObservablesModule } from './observables/observables.module';
import { PruebasComponent } from './pruebas/pruebas.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebasComponent
  ],
  imports: [
    BrowserModule,
    AppModuleFormularios,
    AppRoutingModule,
    PaisesModule,
    HttpClientModule,
    PromesasModule,
    ObservablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
