import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdocaoComponent } from './componente/adocao/adocao.component';
import { LoginComponent } from './componente/login/login.component';
import { AnimaisComponent } from './componente/animais/animais.component';
import { CadastroPetComponent } from './componente/cadastro-pet/cadastro-pet.component';
import { CadastroComponent } from './componente/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    AdocaoComponent,
    LoginComponent,
    AnimaisComponent,
    CadastroPetComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
