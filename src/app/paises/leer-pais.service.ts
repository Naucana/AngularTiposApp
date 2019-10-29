import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeerPaisService {

  API_URL: string = 'http://restcountries.eu/rest/v2/lang/es';

  constructor(private http: HttpClient) { }

  leerApi(): Observable<any> {
    return this.http.get(this.API_URL);
  }
}
