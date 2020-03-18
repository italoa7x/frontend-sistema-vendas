import { ListarUsuariosComponent } from './components/usuario/listar-usuarios/listar-usuarios.component';
import { CadastroComponent } from './components/usuario/cadastro-usuario/cadastro.component';
import { Component, NgModule } from '@angular/core';
import { LoginComponent } from './components/usuario/login/login.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: '/login', component: LoginComponent },
    { path: '/cadastro',      component: CadastroComponent },
    { path: '/listar_usuarios',      component: ListarUsuariosComponent }

  ];

@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true }
      )
    ],
  })

export class AppModule {};