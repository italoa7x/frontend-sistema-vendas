import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  login(email: string, senha: string){
    console.log(email);
    console.log(senha);
  }

}
