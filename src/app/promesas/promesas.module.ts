import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromesasComponent } from './promesas.component';
import { PromesasRoutingModule } from './promesas-routing.module';

@NgModule({
  declarations: [PromesasComponent],
  imports: [
    CommonModule,
    PromesasRoutingModule
  ]
})
export class PromesasModule { }
