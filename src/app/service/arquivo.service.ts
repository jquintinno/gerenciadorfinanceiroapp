import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ArquivoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public createAll(fileListParameter: FileList) : Observable<number> {
    const formData: FormData = new FormData();
    for ( let index = 0 ; index <= fileListParameter.length ; index++ ) {
      formData.append("arquivoList", fileListParameter[index]);
    }
    return this.httpClient.post(environment.URL_API.concat("/arquivo"), formData, {
      observe: "events"
    }).pipe(
      map(event => this.getUploadProgress(event)),
    );
  }

  private getUploadProgress(event: any) : number {
    if (event.type === HttpEventType.UploadProgress) {
      return Math.round((event.loaded / event.total) * 100);
    }
    return null;
  }

}
