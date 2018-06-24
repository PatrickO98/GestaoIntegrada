import { Injectable } from '@angular/core';
import { Colaborador } from './colaborador';
import { COLABORADORES } from './colaboradores';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class ColaboradorService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  private colaboradoresUrl = 'http://172.23.147.26:8081/GestaoRH/ColaboradorService?action=getAll';  // URL to web api
  private colaboradorUrlGet = 'http://172.23.147.26:8081/GestaoRH/ColaboradorService?action=get';
  private colaboradorUrlPut = 'http://172.23.147.26:8081/GestaoRH/ColaboradorService?action=put';
  private colaboradorUrlPost = 'http://172.23.147.26:8081/GestaoRH/ColaboradorService?action=post';
  private colaboradorUrlDelete = 'http://172.23.147.26:8081/GestaoRH/ColaboradorService?action=delete';

  getColaboradores(): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(this.colaboradoresUrl);
  }

  /** GET hero by id. Will 404 if id not found */
  getColaborador(id: number): Observable<Colaborador> {
    const url = `${this.colaboradorUrlGet}&id=${id}`;
    return this.http.get<Colaborador>(url);
  }

  editarColaborador(colaborador: Colaborador): Observable<any> {
    return this.http.put(this.colaboradorUrlPut, colaborador, httpOptions);
  }

  addColaborador(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.post<Colaborador>(this.colaboradorUrlPost, colaborador, httpOptions);
  }

  deleteColaborador(id: number): Observable<{}> {
    const url = `${this.colaboradorUrlDelete}&id=${id}`;
    return this.http.delete(url, httpOptions);
  }
}
