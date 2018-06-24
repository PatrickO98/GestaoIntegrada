import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../colaborador';
import { COLABORADORES } from '../colaboradores';
import { ColaboradorService } from '../colaborador.service';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  todosColaboradores: Colaborador[];
  colaboradores: Colaborador[];

  constructor(private colaboradorService: ColaboradorService) { }

  getColaboradores(): void {
    this.colaboradorService.getColaboradores()
      .subscribe(colaboradores => {
        this.colaboradores = colaboradores;
        this.todosColaboradores = colaboradores;
      },
    error => {
      //alert("Erro ao buscar colaboradores.");
    });
  }

  delete(colaborador: Colaborador): void {
    this.colaboradores = this.colaboradores.filter(c => c !== colaborador);
    this.colaboradorService.deleteColaborador(colaborador.id).subscribe();
  }

  ngOnInit() {
    this.getColaboradores();
  }

  filtraFuncionarios(event: KeyboardEvent, param: string): void {
    console.log(this.colaboradores);
    this.colaboradores = this.todosColaboradores.filter(e => e.nome.includes(param));
  }

}
