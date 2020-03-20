import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent} from './components/usuario/cadastro-usuario/cadastro.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListarUsuariosComponent } from './components/usuario/listar-usuarios/listar-usuarios.component';
import { LoginComponent } from './components/usuario/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListarUsuariosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
