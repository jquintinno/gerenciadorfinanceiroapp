import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ContaBancariaService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public findAll() : Observable<any[]> {
    return this.httpClient.get<any[]>(environment.URL_API.concat("/conta-bancaria"));
  }

}
