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
  private calculoFolhaUrl = 'http://localhost:8080/GestaoRH/CalculoFolhaService?action';

  calculoFolhaColaborador(id: number): Observable<{}> {
    const url = `${this.calculoFolhaUrl}=calculaFolha&id=${id}`;
    return this.http.post(url, httpOptions);
  }
}