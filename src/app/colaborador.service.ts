import { Injectable } from '@angular/core';
import { Colaborador } from './colaborador';
import { COLABORADORES } from './colaboradores';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  private colaboradoresUrl = 'http://187.59.84.240:11111/GestaoRH/ColaboradorService?action=getAll';  // URL to web api
  private colaboradorUrl = 'http://187.59.84.240:11111/GestaoRH/ColaboradorService?action=get';

  getColaboradores(): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(this.colaboradoresUrl);
  }

  /** GET hero by id. Will 404 if id not found */
  getColaborador(id: number): Observable<Colaborador> {
    const url = '${this.colaboradorUrl}&${id}';
    return this.http.get<Colaborador>(url).pipe();
  }
}
