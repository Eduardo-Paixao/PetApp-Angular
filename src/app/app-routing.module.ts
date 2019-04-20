import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componente/login/login.component';
import { AdocaoComponent } from './componente/adocao/adocao.component';
import { AnimaisComponent } from './componente/animais/animais.component';
import { Animal1Component } from './componente/animal1/animal1.component';
import { CadastroPetComponent } from './componente/cadastro-pet/cadastro-pet.component';
import { CadastroComponent } from './componente/cadastro/cadastro.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'Adocao', component: AdocaoComponent},
  {path : 'Animais', component: AnimaisComponent},
  {path : 'Animal1', component: Animal1Component},
  {path: 'CadastroAnimais', component: CadastroPetComponent},
  {path: 'Cadastro', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }