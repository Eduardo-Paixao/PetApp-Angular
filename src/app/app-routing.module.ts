import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componente/login/login.component';
import { AdocaoComponent } from './componente/adocao/adocao.component';
import { AnimaisComponent } from './componente/animais/animais.component';
import { Animal1Component } from './componente/animal1/animal1.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'Adocao', component: AdocaoComponent},
  {path : 'Animais', component: AnimaisComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
