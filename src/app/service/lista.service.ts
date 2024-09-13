import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lista } from '../model/Lista';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(private http: HttpClient) { }

  criarNovaLista(lista: Lista) : Observable<Lista>{
    return this.http.post<Lista>(`http://localhost:8080/lista`, lista);
  }
}
