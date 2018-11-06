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


export class FolhaService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  // URL to web api
  private calculoFolhaUrl = 'http://localhost:8080/GestaoRH/CalculoFolhaService';

  calculoFolhaColaborador(colaborador: Colaborador): Observable<any> {
    const url = `${this.calculoFolhaUrl}`;
    return this.http.post<Colaborador>(url, colaborador, httpOptions);
  }
}