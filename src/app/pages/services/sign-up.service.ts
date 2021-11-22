import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/model/usuario';


@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<Usuario>('http://localhost:3000/Users');
  }}
