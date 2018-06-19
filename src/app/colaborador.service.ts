import { Injectable } from '@angular/core';
import { Colaborador } from './colaborador';
import { COLABORADORES } from './colaboradores';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

/*const httpOptions {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};*/

@Injectable({
  providedIn: 'root'
})


export class ColaboradorService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  private colaboradoresUrl = 'http://179.178.61.216:11111/GestaoRH/ColaboradorService?action=getAll';  // URL to web api
  private colaboradorUrlGet = 'http://179.178.61.216:11111/GestaoRH/ColaboradorService?action=get';
  private colaboradorUrlPut = 'http://179.178.61.216:11111/GestaoRH/ColaboradorService?action=put';

  getColaboradores(): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(this.colaboradoresUrl);
  }

  /** GET hero by id. Will 404 if id not found */
  getColaborador(id: number): Observable<Colaborador> {
    const url = '${this.colaboradorUrlGet}&${id}';
    return this.http.get<Colaborador>(url).pipe();
  }

  editarColaborador(colaborador: Colaborador): Observable<any> {
    return this.http.put(this.colaboradorUrlPut, colaborador);
  }
}
