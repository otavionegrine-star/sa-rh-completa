import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vaga } from '../model/vaga.model';
import { Curriculo } from '../model/curriculo.model';
import { console } from 'inspector';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  //Atributo
  private apiUrl = 'http://localhost:3021/vagas'; // Caminho da API

  constructor(private http: HttpClient) {} // Ao criar um obj da API estabele a conexão com HttpClient

  // Vagas
  //Métodos de Conexão com API (GET, POST, PUT, DELETE)
  //Get -> Read
  getVagas(): Observable<Vaga[]> {
    // Observable -> Permite conexões assyncs com a API
    return this.http.get<Vaga[]>(this.apiUrl);
  }
  // Post -> Create
  postVaga(vaga: Vaga): Observable<Vaga[]> {
    return this.http.post<Vaga[]>(this.apiUrl, vaga);
  }

  // Put -> Update
  putVaga(id: any, vaga: Vaga): Observable<Vaga[]> {
    const urlUpdate = `${this.apiUrl}/${id}`;
    return this.http.put<Vaga[]>(urlUpdate, vaga);
  }

  // Delete -> Delete
  deleteVaga(id: any): Observable<Vaga[]> {
    const urlDelete = `${this.apiUrl}/${id}`;
    return this.http.delete<Vaga[]>(urlDelete);
  }

  // Currículos
  // Métodos de Conexão com API para Currículos (GET, POST, PUT, DELETE)
  // GET
  getCurriculos(): Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(this.apiUrl);
  }
  // POST
  postCurriculo(curriculo: Curriculo): Observable<Curriculo[]> {
    return this.http.post<Curriculo[]>(this.apiUrl, curriculo);
  }
  // PUT
  putCurriculo(id: any, curriculo: Curriculo): Observable<Curriculo[]> {
    const urlUpdate = `${this.apiUrl}/${id}`;
    return this.http.put<Curriculo[]>(urlUpdate, curriculo);
  }
  // DELETE
  deleteCurriculo(id: any): Observable<Curriculo[]> {
    const urlDelete = `${this.apiUrl}/${id}`;
    return this.http.delete<Curriculo[]>(urlDelete);
  }
}
