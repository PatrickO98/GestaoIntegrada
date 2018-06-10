import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../colaborador';
import { COLABORADORES } from '../colaboradores';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  colaboradores = COLABORADORES;

  colaborador: Colaborador = {
    id: 1,
    name: "Patrick Oliveira",
    cargo: "Coordenador de TI"
  };

  constructor() { }

  ngOnInit() {
  }


}
