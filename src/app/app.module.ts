import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';

@NgModule({
  declarations: [
    AppComponent,
    ColaboradoresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
