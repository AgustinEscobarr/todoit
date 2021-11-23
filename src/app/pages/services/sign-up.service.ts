import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/model/usuario';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http:HttpClient) { }
  save(user:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:3000/Alta',user);
  }
}  
