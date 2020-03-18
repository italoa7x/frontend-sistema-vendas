import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';

@Injectable({
  providedIn: 'root'
})


export class UsuarioService {
  
  URL_BASE = "http://localhost:8080/usuario";
  usuarios = [{
    id: 1,
    "nome": "italo",
    "email":"italo@gmail.com",
    "senha":"123"
  },{
    id: 2,
    "nome": "Ana",
    "email":"ana@hotmail.com",
    "senha":"ana123"
  }
  ]

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  salvarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.httpClient.post<Usuario>(this.URL_BASE, JSON.stringify(usuario), this.httpOptions)
  }

  listarUsuario(){
    return this.usuarios;
  }

  editarUsuario(id){
    
  }

  excluir(id){

  }
}
