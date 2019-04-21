import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componente/login/login.component';
import { AdocaoComponent } from './componente/adocao/adocao.component';
import { AnimaisComponent } from './componente/animais/animais.component';
import { Animal1Component } from './componente/animal1/animal1.component';
import { Animal2Component } from './componente/animal2/animal2.component';
import { Animal3Component } from './componente/animal3/animal3.component';
import { Animal4Component } from './componente/animal4/animal4.component';
import { Animal5Component } from './componente/animal5/animal5.component';
import { Animal6Component } from './componente/animal6/animal6.component';
import { CadastroPetComponent } from './componente/cadastro-pet/cadastro-pet.component';
import { CadastroComponent } from './componente/cadastro/cadastro.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'Adocao', component: AdocaoComponent},
  {path : 'Animais', component: AnimaisComponent},
  {path : 'Animal1', component: Animal1Component},
  {path : 'Animal2', component: Animal2Component},
  {path : 'Animal3', component: Animal3Component},
  {path : 'Animal4', component: Animal4Component},
  {path : 'Animal5', component: Animal5Component},
  {path : 'Animal6', component: Animal6Component},
  {path: 'CadastroAnimais', component: CadastroPetComponent},
  {path: 'Cadastro', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
