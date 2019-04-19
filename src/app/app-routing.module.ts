import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componente/login/login.component';
import { AdocaoComponent } from './componente/adocao/adocao.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'Adocao', component: AdocaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
