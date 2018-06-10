import { Injectable } from '@angular/core';
import { Colaborador } from './colaborador';
import { COLABORADORES } from './colaboradores';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  constructor() { }

  getColaboradores(): Observable<Colaborador[]> {
    return of(COLABORADORES);
  }
}
