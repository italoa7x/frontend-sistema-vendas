import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';

@Injectable({
  providedIn: 'root'
})


export class UsuarioService {
  
  private readonly URL_BASE = "http://localhost:8080/usuario";
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
  },{
    id: 3,
    "nome": "Carla",
    "email":"carla@hotmail.com",
    "senha":"102301231"
  },{
    id: 4,
    "nome": "José",
    "email":"jo.se@hotmail.com",
    "senha":"jose1239901"
  },{
    id: 5,
    "nome": "Jubileu",
    "email":"ju.bi@hotmail.com",
    "senha":"ju132bi"
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
    //return this.httpClient.get<Usuario[]>(this.URL_BASE + "/listar");
    return this.usuarios;
  }

}
