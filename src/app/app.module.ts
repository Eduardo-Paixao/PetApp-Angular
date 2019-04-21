import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdocaoComponent } from './componente/adocao/adocao.component';
import { LoginComponent } from './componente/login/login.component';

import { CadastroPetComponent } from './componente/cadastro-pet/cadastro-pet.component';
import { CadastroComponent } from './componente/cadastro/cadastro.component';
import { AnimaisComponent } from './componente/animais/animais.component';
<<<<<<< HEAD
import { Animal1Component } from './componente/animal1/animal1.component';
import { Animal2Component } from './componente/animal2/animal2.component';
import { Animal3Component } from './componente/animal3/animal3.component';
import { Animal4Component } from './componente/animal4/animal4.component';
import { Animal5Component } from './componente/animal5/animal5.component';
import { Animal6Component } from './componente/animal6/animal6.component';

=======
import { CadastroPetComponent } from './componente/cadastro-pet/cadastro-pet.component';
import { CadastroComponent } from './componente/cadastro/cadastro.component';
>>>>>>> d1b01a615614bd72a72220ee4acc22cdc8f7164e

@NgModule({
  declarations: [
    AppComponent,
    AdocaoComponent,
    LoginComponent,
<<<<<<< HEAD
    CadastroPetComponent,
    CadastroComponent,
    AnimaisComponent,
    Animal1Component,
    Animal2Component,
    Animal3Component,
    Animal4Component,
    Animal5Component,
    Animal6Component,


=======
    AnimaisComponent,
    CadastroPetComponent,
    CadastroComponent
>>>>>>> d1b01a615614bd72a72220ee4acc22cdc8f7164e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
