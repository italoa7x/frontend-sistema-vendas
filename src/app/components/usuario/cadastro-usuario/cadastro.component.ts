import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private cadastroService: UsuarioService) { }

  ngOnInit(): void {
  }

  cadastrar(nome: string, email: string, senha: string){
    const user = new Usuario(1, nome, email, senha);
    this.cadastroService.salvarUsuario(user).subscribe();
  }

  voltarTelaLogin(){

  }
}
