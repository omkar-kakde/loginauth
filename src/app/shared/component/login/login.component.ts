import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servcies/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form : boolean = false;

  constructor(private auth : AuthService , private  router : Router) { }

  ngOnInit(): void {
  }

  onsign(){}

  onlogin(email:HTMLInputElement,  password:HTMLInputElement){
   this.auth.logInToapp(email.value, password.value)
   
  }
}
