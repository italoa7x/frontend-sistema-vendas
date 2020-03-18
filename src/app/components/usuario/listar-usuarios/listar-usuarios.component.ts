import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }
  usuarios: Usuario[];
  
  ngOnInit(): void {
  }

  listarUsuarios(){
    return this.usuarioService.listarUsuario();
  }

  editarUsuario(id){
    console.log("ID clicado: " + id);
    return this.usuarioService.editarUsuario(id);
  }
  excluir(id){
    return this.usuarioService.excluir(id);
  }
}
