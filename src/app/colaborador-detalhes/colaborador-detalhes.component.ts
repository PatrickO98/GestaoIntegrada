import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Colaborador } from '../colaborador';

@Component({
  selector: 'app-colaborador-detalhes',
  templateUrl: './colaborador-detalhes.component.html',
  styleUrls: ['./colaborador-detalhes.component.css']
})
export class ColaboradorDetalhesComponent implements OnInit {

  @Input() colaborador: Colaborador;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
  }

}
