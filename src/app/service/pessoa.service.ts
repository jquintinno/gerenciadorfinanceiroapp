import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public findAll() : Observable<any[]> {
    return this.httpClient.get<any[]>(environment.URL_API.concat("/pessoa"));
  }

  public find(nome: string) : Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.URL_API.concat("/pessoa")}/filtro?nome=${nome}`);
  }

  public saveOne(pessoaModel: any) : Observable<any> {
    console.log(pessoaModel);
    return this.httpClient.post<any>(environment.URL_API.concat("/pessoa"), pessoaModel);
  }

}
