import { Injectable } from '@angular/core';
import { Colaborador } from './colaborador';
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

  // URL to web api
  private colaboradoresUrl = 'http://localhost:8080/GestaoRH/ColaboradorService?action';

  getColaboradores(): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(this.colaboradoresUrl+'=getAll');
  }

  /** GET hero by id. Will 404 if id not found */
  getColaborador(id: number): Observable<Colaborador> {
    const url = `${this.colaboradoresUrl}=get&id=${id}`;
    return this.http.get<Colaborador>(url);
  }

  editarColaborador(colaborador: Colaborador): Observable<any> {
    return this.http.put(this.colaboradoresUrl+'=put', colaborador, httpOptions);
  }

  addColaborador(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.post<Colaborador>(this.colaboradoresUrl+'=post', colaborador, httpOptions);
  }

  deleteColaborador(id: number): Observable<{}> {
    const url = `${this.colaboradoresUrl}=delete&id=${id}`;
    return this.http.delete(url, httpOptions);
  }
}