import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../colaborador';
import { ColaboradorService } from '../colaborador.service';

@Component({
  selector: 'app-colaborador-cadastro',
  templateUrl: './colaborador-cadastro.component.html',
  styleUrls: ['./colaborador-cadastro.component.css']
})
export class ColaboradorCadastroComponent implements OnInit {

  todosColaboradores: Colaborador[];
  colaboradores: Colaborador[];

  constructor(private colaboradorService: ColaboradorService) { }

  add(colaborador: Colaborador): void {
    this.colaboradorService.addColaborador(colaborador)
      .subscribe(colaborador => this.colaboradores.push(colaborador));
  }

  ngOnInit() {
  }

}
