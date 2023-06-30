import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsForYouService {

  constructor(private httpClient: HttpClient) { }

  getTopHeadlines(): Observable<any> {
    return this.httpClient.get(
      `${environment.url_base}top-headlines?country=ie&apiKey=${environment.api_key}`
    );
  }

  getNewsByCategory(category: string): Observable<any> {
    return this.httpClient.get(
      `${environment.url_base}top-headlines?country=ie&category=${category}&apiKey=${environment.api_key}`
    );
  }
}





