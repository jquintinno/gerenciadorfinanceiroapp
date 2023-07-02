import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ArquivoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public createOne(arquivoParameter: FormData) : Observable<any> {
    return this.httpClient.post<any>(environment.URL_API.concat("/arquivo"), {"arquivoList": arquivoParameter});
  }

}
