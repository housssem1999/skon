import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url_api = 'http://localhost:1000/';
  constructor(private http: HttpClient) { }

  getMarbertResponse(body: string){
    return this.http.post(this.url_api +  'Marbert-Predict', {text: body});
  }
  getCAMeLBERTResponse(body: string){
    return this.http.post(this.url_api +  'CAMeLBERT-Predict', {text: body});
  }

}
