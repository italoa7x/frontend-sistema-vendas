import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  // navega da tela de login para a de cadastro
  telaCadastro(){
    this.router.navigate(['cadastro'])
  }
}
