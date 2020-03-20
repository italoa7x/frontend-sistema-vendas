import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarUsuariosComponent } from './components/usuario/listar-usuarios/listar-usuarios.component';
import { CadastroComponent } from './components/usuario/cadastro-usuario/cadastro.component';
import { LoginComponent } from './components/usuario/login/login.component';


const APP_ROUTES : Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'listagem', component: ListarUsuariosComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);