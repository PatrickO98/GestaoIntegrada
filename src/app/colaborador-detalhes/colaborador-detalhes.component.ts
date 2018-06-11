import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Colaborador } from '../colaborador';
import { ColaboradorService } from '../colaborador.service';

@Component({
  selector: 'app-colaborador-detalhes',
  templateUrl: './colaborador-detalhes.component.html',
  styleUrls: ['./colaborador-detalhes.component.css']
})
export class ColaboradorDetalhesComponent implements OnInit {

  @Input() colaborador: Colaborador;

  constructor(
    private route: ActivatedRoute,
    private colaboradorService: ColaboradorService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getColaborador();
  }

  getColaborador(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.colaboradorService.getColaborador(id)
    .subscribe(colaborador => this.colaborador = colaborador);
  }

  goBack(): void {
    this.location.back();
  }

}
