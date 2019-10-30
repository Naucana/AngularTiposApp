import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeerUsuariosService {

  API_URL: string = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  leerGithub(): Observable<any>{
    return this.http.get(this.API_URL);
  }
}