import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebService {

    constructor(private http: HttpClient) { }
  public baseUrl: string = environment.baseUrl;

  public httpGet(option: any): Observable<{}> {
    option.url = this.baseUrl + option.id;
    return this.http.get<any>(option.url);
  }
}
