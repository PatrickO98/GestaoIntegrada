import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { AppRoutingModule } from './app-routing.module';
import { ColaboradorDetalhesComponent } from './colaborador-detalhes/colaborador-detalhes.component';
import { RegistroPontoComponent } from './registro-ponto/registro-ponto.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { ColaboradorCadastroComponent } from './colaborador-cadastro/colaborador-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    ColaboradoresComponent,
    ColaboradorDetalhesComponent,
    RegistroPontoComponent,
    MessagesComponent,
    ColaboradorCadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
