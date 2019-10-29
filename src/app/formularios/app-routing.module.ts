import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PlantillaComponent } from './components/plantilla/plantilla.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "registro", component:PlantillaComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
