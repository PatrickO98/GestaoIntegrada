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

  private colaboradoresUrl = '/colaboradoresApi';  // URL to web api

  getColaboradores(): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(this.colaboradoresUrl)
      .pipe(
        tap(colaboradores => this.log(`fetched colaboradores`)),
        catchError(this.handleError('getColaboradores', []))
      );
  }

  getColaborador(id: number): Observable<Colaborador> {
    return of(COLABORADORES.find(colaborador => colaborador.id === id));
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
