import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ColaboradoresComponent }      from './colaboradores/colaboradores.component';
import { ColaboradorDetalhesComponent } from './colaborador-detalhes/colaborador-detalhes.component';

const routes: Routes = [
  { path: 'colaboradores', component: ColaboradoresComponent },
  { path: 'detalhes/:id', component: ColaboradorDetalhesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
