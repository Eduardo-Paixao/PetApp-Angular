import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdocaoComponent } from './componente/adocao/adocao.component';
import { LoginComponent } from './componente/login/login.component';
import { AnimaisComponent } from './componente/animais/animais.component';

@NgModule({
  declarations: [
    AppComponent,
    AdocaoComponent,
    LoginComponent,
    AnimaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
