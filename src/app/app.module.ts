import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { AppRoutingModule } from './app-routing.module';
import { ColaboradorDetalhesComponent } from './colaborador-detalhes/colaborador-detalhes.component';
import { RegistroPontoComponent } from './registro-ponto/registro-ponto.component';

@NgModule({
  declarations: [
    AppComponent,
    ColaboradoresComponent,
    ColaboradorDetalhesComponent,
    RegistroPontoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
