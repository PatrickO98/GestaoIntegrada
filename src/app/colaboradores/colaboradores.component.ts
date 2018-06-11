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

  colaboradores: Colaborador[];

  constructor(private colaboradorService: ColaboradorService) { }

  getColaboradores(): void {
    this.colaboradorService.getColaboradores()
      .subscribe(colaboradores => this.colaboradores = colaboradores);
  }

  ngOnInit() {
    this.getColaboradores();
  }

}
