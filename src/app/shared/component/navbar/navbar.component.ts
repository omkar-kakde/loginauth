import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servcies/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userRole : string = "ADMIN";
  constructor(private _auth : AuthService ,
         private _router : Router
    ) { }

  ngOnInit(): void {
    console.log(localStorage.getItem("userRole"));
    
  }

  // onlogin(){
  //      this._auth.logInToapp()
       
  // }


  onlogout(){
   this._auth.logOutToapp()
   this._router.navigate(['/'])
   
  }
} 
