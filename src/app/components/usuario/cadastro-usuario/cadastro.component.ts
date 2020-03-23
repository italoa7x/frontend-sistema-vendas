import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit { 

  usuario: Usuario = {
    id: 0,
    nome: '',
    email: '',
    senha: ''
  }

  
  constructor(private cadastroService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrar(){
    console.log(this.usuario)
  }

  // retorna da tela de cadastro para a tela de login
  retornarTelaLogin(){
    this.router.navigate(['login'])
  }

}
